var React = require('react');
var ReactDOM = require('react-dom');

export function GradeRow(props) {
  const {grade} = props;
  return <li><span>{grade}</span></li>;
}

export function StudentRow(props) {
  const {student} = props;
  return <li><span>{student.name}</span></li>;
}

export function StudentsTable(props) {
  const {studentsOfYear} = props;

  function createStudentsTable(students) {
    var rows = [];
    students.forEach(gradeData => {
      if (!gradeData.students.isEmpty) {
        rows.push(<GradeRow grade={gradeData.grade} key={gradeData.grade} />);

        gradeData.students.forEach(student => {
          rows.push(<StudentRow student={student} key={student.name} />);
        });
      };
    })
    return rows;
  }

  return (
    <div>
      <ul>
        {createStudentsTable(studentsOfYear)}
      </ul>
    </div>
  );
}

export function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Serach..." />
    </form>
  );
}

export function YearSelectionBar() {
  return (
    <form>
      <select>
        <option value="2014/2015">2014/2015</option>
        <option value="2015/2016">2015/2016</option>
        <option value="2016/2017">2016/2017</option>
      </select>
    </form>
  );
}

export function FilterableStudentsTable(props) {
  const {studentsOfYear} = props;
  return (
    <div>
      <YearSelectionBar />
      <SearchBar />
      <StudentsTable studentsOfYear={studentsOfYear} />
    </div>
  );
}
