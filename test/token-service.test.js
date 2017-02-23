describe ('tokenService', () => {

  beforeEach(
    angular.mock.module('services')
  );

  let tokenService = null;

  beforeEach(
    angular.mock.inject((_tokenService_) => {
      tokenService = _tokenService_;
    })
  );

  it ('stores and retrieves a token', () => {
    tokenService.set('abc');
    let myToken = tokenService.get();
    expect(myToken).to.equal('abc');
  });

});