describe('BigToDo App', () => {

  it ('has a title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('The BigToDo');
  });

});