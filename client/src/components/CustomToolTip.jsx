import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/CustomToolTip.css';

class CustomToolTip extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  formatTime(payload) {
    const time = payload[0].payload.time;
    return priceMoment.toString() + ' ET';
  }

  render() {
    const { active } = this.props;
    const { payload } = this.props;
    if (active) {
      const time = payload[0].payload.time;
      return (
        <div className="CustomToolTip">
          <p className={styles.time}>{time}</p>
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
// id = { styles.time }