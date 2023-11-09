const moment = require('moment-timezone');

const convertToAsiaTimezone = (date, timezone = 'Asia/Jakarta') => {
  return moment(date).tz(timezone);
};

module.exports = {
  convertToAsiaTimezone,
};
