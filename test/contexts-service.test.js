describe ('contextsService', () => {

  const { expect } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api' })
  );

  let $httpBackend = null, contextsService = null;

  beforeEach(
    angular.mock.inject((_contextsService_, _$httpBackend_) => {
      contextsService = _contextsService_;
      $httpBackend = _$httpBackend_;
    })
  );

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it ('gets all contexts for the current user', (done) => {
    $httpBackend
      .expectGET('/api/contexts')
      .respond(200, [ 'home', 'work', 'errands' ]);

    contextsService.getAllContexts()
      .then((res) => {
        expect(res).to.deep.equal([ 'home', 'work', 'errands' ]);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('gets a context by specific id', (done) => {
    $httpBackend
      .expectGET('/api/contexts/1')
      .respond(200, 'home');

    contextsService.getContextById(1)
      .then((res) => {
        expect(res).to.equal('home');
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  const addedContext = { name: 'phone', userId: '1' };

  it ('adds a context', (done) => {
    $httpBackend
      .expectPOST('/api/contexts', addedContext)
      .respond(200, Object.assign(addedContext, { _id: '1'}));

    contextsService.addContext(addedContext)
      .then((res) => {
        addedContext._id = res._id;
        expect(res).to.deep.equal(addedContext);
        done();
      })
      .catch(done);
    
    $httpBackend.flush();
  });

  it ('edits a context', (done) => {
    $httpBackend
      .expectPUT('/api/contexts/1')
      .respond(200, Object.assign(addedContext, { name: 'home' }));

    const editedContext = Object.assign(addedContext, { name: 'home' });

    contextsService.editContext(1, { name: 'home' })
      .then((res) => {
        expect(res).to.deep.equal(editedContext);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('deletes a context', (done) => {
    $httpBackend
      .expectDELETE('/api/contexts/1')
      .respond(200, addedContext);

    contextsService.deleteContext(1)
      .then((res) => {
        expect(res).to.deep.equal(addedContext);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});