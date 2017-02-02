    describe ('projectsService', () => {

      beforeEach(
        angular.mock.module('services', { apiUrl: '/api' })
      );

      let projectsService = null, $httpBackend = null;

      beforeEach(
        angular.mock.inject((_projectsService_, _$httpBackend_) => {
          projectsService = _projectsService_;
          $httpBackend = _$httpBackend_;
        })
      );

      afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

      it ('gets all projects for this user', (done) => {
        $httpBackend
          .expectGET('/api/projects')
          .respond(200, [ 'proj1', 'proj2', 'proj3' ]);

        projectsService.getAllProjects()
          .then(res => {
            expect(res).to.deep.equal(['proj1', 'proj2', 'proj3']);
            done();
          })
          .catch(done);

        $httpBackend.flush();
      });

      it ('gets projects with specified parent project', (done) => {
        $httpBackend
          .expectGET('/api/projects?parent=1')
          .respond(200, [ 'proj4', 'proj5' ]);

        projectsService.getProjectsByParent(1)
          .then(res => {
            expect(res).to.deep.equal([ 'proj4', 'proj5' ]);
            done();
          })
          .catch(done);
        
        $httpBackend.flush();
      });

      it ('gets project by specific id', (done) => {
        $httpBackend
          .expectGET('/api/projects/1')
          .respond(200, 'proj1');

        projectsService.getProjectById(1)
          .then(res => {
            expect(res).to.equal('proj1');
            done();
          })
          .catch(done);

        $httpBackend.flush();
      });

      it ('adds a project', (done) => {
        const addedProject = { name: 'proj1' };

        $httpBackend
          .expectPOST('/api/projects', addedProject)
          .respond(200, addedProject);

        projectsService.addProject(addedProject)
          .then(res => {
            expect(res).to.deep.equal(addedProject);
            done();
          })
          .catch(done);

        $httpBackend.flush();
      });

      it ('edits a project', (done) => {
        const editedProject = { name: 'proj1' };

        $httpBackend
          .expectPUT('/api/projects/1', { name: 'proj1' })
          .respond(200, editedProject);

        projectsService.editProject(1, { name: 'proj1' })
          .then(res => {
            expect(res).to.deep.equal(editedProject);
            done();
          })
          .catch(done);

        $httpBackend.flush();
      });

      it ('deletes a project', (done) => {
        const deletedProject = { name: 'proj1' };

        $httpBackend
          .expectDELETE('/api/projects/1')
          .respond(200, deletedProject);

        projectsService.deleteProject(1)
          .then(res => {
            expect(res).to.deep.equal(deletedProject);
            done();
          })
          .catch(done);

        $httpBackend.flush();
      });

    });