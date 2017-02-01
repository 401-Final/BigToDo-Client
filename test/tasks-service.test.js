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

  it ('gets task by project id', (done) => {
    $httpBackend
      .expectGET('/api/tasks?projectId=1')
      .respond(200, 'task1');

    tasksService.getTasksByProject(1)
      .then((res) => {
        expect(res).to.equal('task1');
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('gets task by context id', (done) => {
    $httpBackend
      .expectGET('/api/tasks?contextId=1')
      .respond(200, 'task1');

    tasksService.getTasksByContext(1)
      .then((res) => {
        expect(res).to.equal('task1');
        done();
      })
      .catch(done);

    $httpBackend.flush(); 
  });

  const addedTask = {
    task: 'task1',
    contextId: 1,
    projectId: 1
  };

  it ('adds a task', (done) => {
    $httpBackend
      .expectPOST('/api/tasks', addedTask)
      .respond(200, Object.assign(addedTask, { _id: 1 }));

    tasksService.addTask(addedTask)
      .then((res) => {
        addedTask._id = res._id;
        expect(res).to.deep.equal(addedTask);
        done();
      })
      .catch(done);

    $httpBackend.flush(); 
  });

  const editedTask = Object.assign(addedTask, { contextId: 2 });

  it ('edits a task', (done) => {
    $httpBackend
      .expectPUT('/api/tasks/1', { contextId: 2 })
      .respond(200, editedTask);

    tasksService.editTask(1, { contextId: 2 })
      .then((res) => {
        expect(res).to.deep.equal(editedTask);
        done();
      })
      .catch(done);

    $httpBackend.flush(); 
  });

  it ('deletes a task', (done) => {
    $httpBackend
      .expectDELETE('/api/tasks/1')
      .respond(200, editedTask);

    tasksService.deleteTask(1)
      .then((res) => {
        expect(res).to.deep.equal(editedTask);
        done();
      })
      .catch(done);

    $httpBackend.flush(); 
  });
  
});