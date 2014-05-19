'use strict';

var should = require('should'),
    app = require('../../../server'),
    request = require('supertest');

describe('POST /api/contacts', function() {
  
  it('should respond with swaped names in JSON', function(done) {
    request(app)
      .post('/api/contacts')
      .send({fname:'Adam', sname:'Kowalski'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err){ 
          return done(err);
        }
        res.body.should.eql({fname:'Kowalski', sname:'Adam'});
        done();
      });
  });
});