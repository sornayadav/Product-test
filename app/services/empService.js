const empDAO = require('../daos/empDao')




module.exports.createEmp = function (data, callback, errorCallback) {

    empDAO.createEmp(data, (empResponse) => {
        callback(empResponse)
    },(empError) => {
        errorCallback(empError)
    })
    
}