import lodashEach from 'lodash/each';
import util from '../util/util';
export function getCheckerboard() {
  var size = 2;
  var canvas = document.createElement('canvas');

  canvas.width = size * 2;
  canvas.height = size * 2;

  var g = canvas.getContext('2d');

  // g.fillStyle = "rgb(102, 102, 102)";
  g.fillStyle = 'rgb(200, 200, 200)';
  g.fillRect(0, 0, size, size);
  g.fillRect(size, size, size, size);

  // g.fillStyle = "rgb(153, 153, 153)";
  g.fillStyle = 'rgb(240, 240, 240)';
  g.fillRect(0, size, size, size);
  g.fillRect(size, 0, size, size);

  return g.createPattern(canvas, 'repeat');
}
export function palettesTranslate(source, target) {
  var translation = [];
  lodashEach(source, function(color, index) {
    var sourcePercent = index / source.length;
    var targetIndex = Math.floor(sourcePercent * target.length);
    translation.push(target[targetIndex]);
  });
  return translation;
}
/**
 * Redraw canvas with selected colormap
 * @param {*} ctxStr | String of wanted cavnas
 * @param {*} checkerBoardPattern | Background for canvas threshold
 * @param {*} colors | array of color values
 */
export function drawPaletteOnCanvas(
  ctx,
  checkerBoardPattern,
  colors,
  width,
  height
) {
  ctx.fillStyle = checkerBoardPattern;
  ctx.fillRect(0, 0, width, height);

  if (colors) {
    const bins = colors.length;
    const binWidth = width / bins;
    const drawWidth = Math.ceil(binWidth);
    colors.forEach((color, i) => {
      const start = Math.floor(binWidth * i);
      ctx.fillStyle = util.hexToRGBA(color);
      ctx.fillRect(start, 0, drawWidth, height);
    });
  }
}
export function drawTicksOnCanvas(ctx, legend, width, height) {
  const ticks = legend.ticks;
  const colors = legend.colors;
  const bins = colors.length;
  const binWidth = width / bins;
  const yValue = height * 0.5;
  const drawWidth = Math.ceil(binWidth);

  if (legend.type === 'continuous' && ticks && ticks.length > 0) {
    ticks.forEach(tick => {
      const start = Math.floor(binWidth * tick);
      const midpoint = start + drawWidth / 2;
      ctx.fillStyle = util.hexToRGBA('000000ff');
      ctx.fillRect(midpoint - 0.25, yValue, 0.5, height);
    });
  }
}
