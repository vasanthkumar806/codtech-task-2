const request = require('supertest');
const app = require('../src/app');

describe('GET /', function() {
  it('respond with html', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
