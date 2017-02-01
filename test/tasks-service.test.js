describe ('tasksService', () => {

  const { expect } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api' })
  );

  let $httpBackend = null, tasksService = null;

  beforeEach(
    angular.mock.inject((_tasksService_, _$httpBackend_) => {
      tasksService = _tasksService_;
      $httpBackend = _$httpBackend_;
    })
  );

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it ('gets all tasks for this user', (done) => {
    $httpBackend
      .expectGET('/api/tasks')
      .respond(200, [ 'task1', 'task2', 'task3' ]);

    tasksService.getAllTasks()
      .then((res) => {
        expect(res).to.deep.equal([ 'task1', 'task2', 'task3' ]);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('gets task by task id', (done) => {
    $httpBackend
      .expectGET('/api/tasks/1')
      .respond(200, 'task1');

    tasksService.getTaskById(1)
      .then((res) => {
        expect(res).to.equal('task1');
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});