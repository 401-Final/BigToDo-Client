const request = require('request');
const token = require('../src/services/token-service');

describe('BigToDo App', () => {

  // TODO: Set up to use the 'test' database

  // TODO: Drop the db / collections before running tests

  // TODO: Provide test user info
  beforeAll (() => {
    const options = {
      baseUrl: 'http://localhost:3000',
      url: '/api/auth/signin',
      method: 'POST'
    };

    let myToken = token.get();
    console.log('myToken ', myToken);
  });

  it ('has a title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('The BigToDo');
  });

  describe('initial visit to page', () => {

    it ('asks for signin/signup', () => {
      browser.get('/');
      expect(element.all(by.css('user-auth signin h2')).first().getText()).toEqual('Sign in to access your account');
    });

    it ('defaults to signin', () => {
      expect(element.all(by.css('input[ng-model="$ctrl.action"]:checked')).first().getAttribute('value')).toEqual('signin');
    });

    it ('signs up test user and goes to welcome page', () => {
      element.all(by.css('input[ng-model="$ctrl.action"]')).get(1).click();
      expect(element.all(by.css('input[ng-model="$ctrl.action"]:checked')).first().getAttribute('value')).toEqual('signup');
      element(by.id('email')).sendKeys('tester@testing.com');
      element(by.id('username')).sendKeys('tester');
      element(by.id('password')).sendKeys('testerpass');
      element(by.id('signup')).click();
      expect(element.all(by.css('welcome h2')).first().getText()).toEqual('Welcome to the BigToDo App!');
    });

    // After authentication the user lands on the welcome page

    xit ('lands on the welcome page', () => {
      browser.get('/');
      expect(element.all(by.css('welcome h2')).first().getText()).toEqual('Welcome to the BigToDo App!');
    });

    // TODO: Test that user can't sign in unless she's previously signed up

    // TODO: Test that user can't sign up with existing username ("username already exists")

    // TODO: User deletes herself from the database before finishing

    afterAll ((done) => {
      request
        .delete('http://localhost:3000/api/users/me')
        .then((deleted) => {
          expect(deleted.username).to.equal('tester');
          done();
        })
        .catch(err => {
          done(err);
        });
    });

  });  

});