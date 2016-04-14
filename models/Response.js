var Const = require('./Const');

var Response = function(status, message, data) {
    if (typeof data === 'undefined') {
        data = {};
    }
    if (status === 1452) {
        status = Const.STATUS_DATA_NOT_FOUND,
        message = "No data with current id found."
    }
    return {status: status, message: message, data: data};
}

module.exports = Response;