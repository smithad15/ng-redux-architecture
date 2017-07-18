export class MockNgRedux {
  dispatch = jasmine.createSpy('dispatch');
  select = jasmine.createSpy('select');
}
