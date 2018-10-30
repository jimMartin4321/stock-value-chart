import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class CustomToolTip extends React.Component {
  constructor(props) {
    super(props);
  }

  formatTime(payload) {
    const time = payload[0].payload.time;
    console.log(time);
    let priceMoment = moment().hour(9).minute(0).add(time, 'minutes').format('h:mm A');
    return priceMoment.toString() + ' ET';
  }

  render() {
    const { active } = this.props;
    if (active) {
      const { payload } = this.props;
      return (
        <div className="CustomToolTip">
          <p className="time">{this.formatTime(payload)}</p>
        </div>
      );
    }
    return null;
  }

}

CustomToolTip.proptypes = {
  time: PropTypes.number,
};

export default CustomToolTip;