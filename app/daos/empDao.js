const model = require ('../models');
module.exports.createEmp = function (empData, callback, errorCallback){
    let data = empData
    console.log('data',data)
    model.Emp.create(data).then(response => {
        console.log('llllllllllll', response)
        callback(response)
    }).catch(error => {
        console.log('data',error)
        errorCallback(error)

    })
}