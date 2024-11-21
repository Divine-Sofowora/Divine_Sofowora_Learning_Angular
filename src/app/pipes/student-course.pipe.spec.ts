import { StudentCoursePipe } from './student-course.pipe';

describe('StudentCoursePipe', () => {
  it('create an instance', () => {
    const pipe = new StudentCoursePipe();
    expect(pipe).toBeTruthy();
  });
});
