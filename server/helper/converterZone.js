const moment = require('moment-timezone');

const convertToAsiaTimezone = (date, timezone = 'Asia/Jakarta') => {
  return moment(date).tz(timezone).format('DD/MM/YYYY HH:mm');
};

module.exports = {
  convertToAsiaTimezone,
};
