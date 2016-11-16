var React = require('react');
var ReactDOM = require('react-dom');

//Just a test
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';

const buttonsInstance = (
  <ButtonToolbar>
    {/* Standard button */}
    <Button>Default</Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button>

    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Success</Button>

    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info">Info</Button>

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning">Warning</Button>

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger">Danger</Button>

    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>
);


export function GradeRow(props) {
  const {grade} = props;
  return <li>
    <span>
      {grade}
    </span>
  </li>;
}

export function StudentRow(props) {
  const {student} = props;
  return <li>
    <span>
      {student.name}
    </span>
  </li>;
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
      {buttonsInstance}
  </div>
  );
}
