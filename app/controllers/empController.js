'use strict';
const moment = require('moment')

const empService = require('../services/empService');

module.exports.createEmp = function (req, res) {
    let data = req.body;
    console.log('data',data);
    let responseBody = { data: "", status: 0, error: null }
    //store utc date time format
    data.createdAt = moment().utc();
    
    empService.createEmp(
        data, (response) => {
            responseBody.status = 200
            responseBody.data = response
            res.json(responseBody)
        }, error => {
            responseBody.status = 400
            responseBody.error = error
            res.send(responseBody)
        });
}