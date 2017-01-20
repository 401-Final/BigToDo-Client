describe('BigToDo App', () => {

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
      expect(element.)
    });

    it ('lands on the welcome page', () => {
      browser.get('/');
      expect(element.all(by.css('welcome h2')).first().getText()).toEqual('Welcome to the BigToDo App!');
    });

  });  

});