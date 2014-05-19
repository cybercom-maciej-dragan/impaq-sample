'use strict';

exports.contacts = function(req, res) {
    res.json(
    {
      fname : req.body.sname,
      sname : req.body.fname
    });
};