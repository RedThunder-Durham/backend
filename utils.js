const moment = require('moment');


function momentToCalendarDate(m) {
    return (m || moment()).utc().toISOString();
}


function clientDateToMoment(s) {
    const m = moment.utc(s, "YYYY-MM-DDTHH:mm:ss");
    if (!m.isValid()) {
        throw new Error("invalid date!");
    }
    // round to nearest half-hour
    return roundToHalfHour(m);
}


function roundToHalfHour(m) {
    const remainder = 30 - (m.minute() % 30);
    m.add(remainder, "minutes");
    return m;
}


module.exports = {
    momentToCalendarDate,
    clientDateToMoment,
};
