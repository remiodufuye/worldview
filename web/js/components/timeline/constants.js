export const timeScaleToNumberKey = {
  'custom': 0,
  'year': 1,
  'month': 2,
  'day': 3,
  'hour': 4,
  'minute': 5
};
export const timeScaleFromNumberKey = {
  '0': 'custom',
  '1': 'year',
  '2': 'month',
  '3': 'day',
  '4': 'hour',
  '5': 'minute'
};
export const timeScaleOptions = {
  'minute': {
    timeAxis: {
      scale: 'minute',
      format: 'HH:mm',
      gridWidth: 12,
      scaleMs: 60000
    }
  },
  'hour': {
    timeAxis: {
      scale: 'hour',
      format: 'MMM D',
      gridWidth: 20,
      scaleMs: 3600000
    }
  },
  'day': {
    timeAxis: {
      scale: 'day',
      format: 'MMM YYYY',
      gridWidth: 12,
      scaleMs: 86400000
    }
  },
  'month': {
    timeAxis: {
      scale: 'month',
      format: 'YYYY',
      gridWidth: 12,
      scaleMs: null
      // scaleMs: 2678400000 - REFERENCE ONLY - 31 days
    }
  },
  'year': {
    timeAxis: {
      scale: 'year',
      format: 'YYYY',
      gridWidth: 12,
      scaleMs: null
      // scaleMs: 31536000000 - REFERENCE ONLY - 365 days
    }
  }
};
