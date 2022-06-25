const request = require('supertest');

const app = require('../src/app');

// describe('GET /api/v1', () => {
//   it('responds with a json message', (done) => {
//     request(app)
//       .get('/api/v1')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, {
//         message: 'API - 👋🌎🌍🌏'
//       }, done);
//   });
// });

// describe('GET /api/v1/emojis', () => {
//   it('responds with a json message', (done) => {
//     request(app)
//       .get('/api/v1/emojis')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, ['😀', '😳', '🙄'], done);
//   });
// });

describe('GET /api/v1/auth/register', () => {
  it('responds with a accessToken, refreshToken', (done) => {
    request(app)
      .post('/api/v1/auth/register')
      .send({ email: 'parinya', password: '123456' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
