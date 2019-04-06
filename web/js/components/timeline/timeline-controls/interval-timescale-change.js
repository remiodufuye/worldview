import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeScaleIntervalChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolTipHovered: false,
      customSelected: false
    }
  }

  // Toggle zoom select tooltip
  toggleTooltipHover = (isHovered) => {
    this.setState({
      toolTipHovered: isHovered
    })
  }

  handleClickZoom = (zoomSelected) => {
    // close tooltip
    // send props function to change timescale zoom level throughout app
    let customSelected = zoomSelected === 'custom';
    this.setState({
      customSelected: customSelected,
      toolTipHovered: false,
      // intervalText: text
    }, this.props.setTimeScaleIntervalChangeUnit(zoomSelected));


    // if (zoomSelected === 'custom') {
    //   // let text = this.props.customIntervalText ? this.props.customIntervalText : 'Custom';
    //   this.setState({
    //     customSelected: true,
    //     toolTipHovered: false,
    //     // intervalText: text
    //   }, this.props.setTimeScaleIntervalChangeUnit(zoomSelected));
    // } else {
    //   this.setState({
    //     customSelected: false,
    //     toolTipHovered: false,
    //     // intervalText: zoomSelected
    //   }, this.props.setTimeScaleIntervalChangeUnit(zoomSelected));
    // }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.intervalText !== this.props.intervalText) {
  //     this.setState({
  //       intervalText: this.props.intervalText
  //     })
  //   }

  // }

  render() {
    return (
      <React.Fragment>
        <div id="zoom-btn-container"
        onMouseEnter={() => this.toggleTooltipHover(true)}
        onMouseLeave={() => this.toggleTooltipHover(false)}
        >
          {/* timeScale display */}
          <span
            id="current-zoom"
            className={`zoom-btn zoom-btn-active${this.state.customSelected ? ' custom-interval-text' : ''}`}
          >
            {this.state.customSelected ? this.props.customIntervalText ? this.props.customIntervalText : 'custom' : '1 ' + this.props.intervalText}
          </span>

          {/* hover timeScale unit dialog / entry point to Custom selector */}
          <div className="wv-tooltip"
          style={{ display: this.state.toolTipHovered ? 'block' : 'none' }}
          >
            <div id="timeline-zoom" className="timeline-zoom">
              <span
                id="zoom-years"
                className="zoom-btn zoom-btn-inactive zoom-years"
                onClick={() => this.handleClickZoom('year')}
              >
                Year
              </span>
              <span
                id="zoom-months"
                className="zoom-btn zoom-btn-inactive zoom-months"
                onClick={() => this.handleClickZoom('month')}
              >
                Month
              </span>
              <span
                id="zoom-days"
                className="zoom-btn zoom-btn-inactive zoom-days"
                onClick={() => this.handleClickZoom('day')}
              >
                Day
              </span>
              <span
                id="zoom-hours"
                className="zoom-btn zoom-btn-inactive zoom-hours"
                onClick={() => this.handleClickZoom('hour')}
              >
                Hour
              </span>
              <span
                id="zoom-minutes"
                className="zoom-btn zoom-btn-inactive zoom-minutes"
                onClick={() => this.handleClickZoom('minute')}
              >
                Minute
              </span>
              <span
                id="zoom-custom"
                className="zoom-btn zoom-btn-inactive zoom-custom custom-interval-text"
                onClick={() => this.handleClickZoom('custom')}
              >
                {this.props.customIntervalText ? this.props.customIntervalText : 'Custom'}
              </span>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

TimeScaleIntervalChange.propTypes = {
  intervalText: PropTypes.string,
  customIntervalText: PropTypes.string,
  setTimeScaleIntervalChangeUnit: PropTypes.func
};

export default TimeScaleIntervalChange;