var React = require('react');
var ReactDOM = require('react-dom');

export function GradeRow(props) {
  const {grade} = props;
  return <span>{grade}</span>;
}

export function StudentRow(props) {
  const {student} = props;
  return <span>{student.name}</span>;
}

export function StudentsTable(props) {
  const {studentsOfYear} = props;

  function createStudents(dat) {return dat.students.map(student => (
    <li key={student.name}>
      <StudentRow student={student} />
    </li>
  ))};

  return (
    <div>
      <ul>
        {studentsOfYear.map(data => (
          <li key={data.grade}>
            <GradeRow grade={data.grade} />
            {createStudents(data)}
          </li>
        ))}
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
