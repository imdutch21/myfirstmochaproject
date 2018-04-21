let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();
chai.use(chaiHttp);
describe('API Test', function () {
    it('Test GET /api/v2/recipes', function (done) {
        chai.request(server)
            .get('/api/v2/recipes')
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
    it('Test GET /api/v2/recipes?category=Pizza', function (done) {
        chai.request(server)
            .get('/api/v2/recipes?category=Pizza')
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
    it('Test GET /api/v2/recipes/2', function (done) {
        chai.request(server)
            .get('/api/v2/recipes/2')
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('API Test', function () {
});