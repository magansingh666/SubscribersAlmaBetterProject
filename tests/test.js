let app = require('../index');
const request = require('supertest')(app);
const {allSubscribers, allSubscribersName, subscriberObj} = require('./expected');





//testing /subscribers end point

describe('testing all subscribers end point --', () => {
  it('it should get list of all subscribers', (done) => {
      request
      .get('/subscribers')    
      .expect(200, allSubscribers, done);
      
});
});

//testing subscribers name end point

describe('testing subscribers name end point --', () => {
  it('it should get names of all subscribers', (done) => {
      request
      .get('/subscribers/names')    
      .expect(200, allSubscribersName, done);
      
});
});

//testing subscriber detial end point
describe('testing subscriber detial end point  --', () => {
  it('we shoud get a subscriber object with id 638ddc1fd171af85c0fce3a9', (done) => {
      request
      .get('/subscribers/638ddc1fd171af85c0fce3a9')    
      .expect(200, subscriberObj, done);
      
});
});


