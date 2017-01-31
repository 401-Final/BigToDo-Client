describe ('userService test', () => {

  const { expect } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api' })
  );

  let $httpBackend = null, userService = null;

  beforeEach(
    angular.mock.inject((_userService_, _$httpBackend_) => {
      userService = _userService_;
      $httpBackend = _$httpBackend_;
    })
  );

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  const testuser = {
    username: 'tester',
    password: 'testpass'
  };

  it ('signs in a user', (done) => {
    $httpBackend
      .expectPOST('/api/auth/signin', testuser)
      .respond(200, { token: '111' });

    userService.signin(testuser)
      .then(() => {
        expect(userService.isAuthenticated()).to.be.ok;
        userService.logout();
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  const newuser = {
    username: 'newuser',
    email: 'newuser@testing.com',
    password: 'newpass'
  };

  const newuser_bad = { username: newuser.username, password: newuser.password };

  it ('fails to sign in a new user', (done) => {
    $httpBackend
      .expectPOST('/api/auth/signin', newuser_bad)
      .respond(400, { msg: 'Unable to authenticate' });

    userService.signin(newuser_bad)
      .then(() => {
        expect(userService.isAuthenticated()).to.not.be.ok;
      })
      .catch(err => {
        expect(userService.isAuthenticated()).to.not.be.ok;
        done();
      });

    $httpBackend.flush();
  });

  it ('signs up a new user', (done) => {
    $httpBackend
      .expectPOST('/api/auth/signup', newuser)
      .respond(200, { token: '222' });

    userService.signup(newuser)
      .then(() => {
        expect(userService.isAuthenticated()).to.be.ok;
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('fails to sign up a user that already exists', (done) => {
    $httpBackend
      .expectPOST('/api/auth/signup', newuser)
      .respond(500, { msg: 'Unable to sign up' });

    userService.signup(newuser)
      .then(() => {
        expect(userService.isAuthenticated()).to.not.be.ok;
        done();
      })
      .catch(err => {
        expect(userService.isAuthenticated()).to.not.be.ok;
        done();
      });

    $httpBackend.flush();
  });

  it ('logs out a user', (done) => {
    $httpBackend
      .expectPOST('/api/auth/signin', testuser)
      .respond(200, { token: '111' });
    
    userService.signin(testuser)
      .then(() => {
        expect(userService.isAuthenticated()).to.be.ok;
      })
      .catch(done);

    $httpBackend.flush();

    userService.logout();
    expect(userService.isAuthenticated()).to.not.be.ok;
    done();
  });

});