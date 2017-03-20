var React = require('react');
var ReactDOM = require('react-dom');

import { Link } from 'react-router';

import { Table } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Label } from 'react-bootstrap';

const AverageCell = ({avg}) => {
  if (avg >= 5) {
    return <td><Label bsStyle="danger">{avg}</Label></td>;
  } else if (avg >= 4) {
    return <td><Label bsStyle="warning">{avg}</Label></td>;
  } else {
    return <td><Label bsStyle="success">{avg}</Label></td>;
  }
}

const HeaderCell = ({header}) => {
  return <th>{header}</th>
}

const CategoryCell = ({category}) => {
  return (
    <td>
      <Button bsSize="xs"><Glyphicon glyph="edit" /></Button>
      <Button bsSize="xs"><Glyphicon glyph="remove" /></Button>
      <h5><Label bsStyle={category.get('color')}>{category.get('name')}</Label></h5>
    </td>
  );
}

const StudentNameCell = ({data}) => {
  return <td>{data.get('studentName')}</td>
}

const StudentMarkCell = ({markObject}) => {
  return <td>{markObject.get('mark')}</td>
}

const StudentTable = ({marksTableViewModel, history}) => {

  const addButton = () => {
    const handleClick = (eventKey) => {
      history.push('/addtest');
    };

    return (
      <Button onClick={handleClick}>add test</Button>
    );
  }

  const createHeaders = () => {
    return (
      <thead>
        <tr>
          <th>Pupil</th>
          {marksTableViewModel.get('headers').map(header =>
            <HeaderCell
              key={header.get('testId')}
              header={header.get('testName')}
            />
          )}
          <th>Average</th>
        </tr>
      </thead>
    );
  }

  const createCategoriesRow = () => {
    return (
      <tr>
        <td></td>
          {marksTableViewModel.get('cats').map(cat =>
            <CategoryCell
              key={cat.get('testId')+'_'+cat.get('category').get('id')}
              category={cat.get('category')}
            />
          )}
        <td></td>
      </tr>
    );
  }

  const createAvgTestsRow = () => {
    return (
      <tr>
        <td><b>Average</b></td>
          {marksTableViewModel.get('avgOfTests').map(avg =>
            <AverageCell
              key={avg.get('testId')+'_'+'avg'}
              avg={avg.get('testAvg')}
            />
          )}
        <td></td>
      </tr>
    );
  }

  const createStudentRow = () => {
    return (
      marksTableViewModel.get('studentsTableData').map(data => {
        return (
          <tr key={data.get('studentId')+'_tr'}>
            <StudentNameCell
               key={data.get('studentId')+'_td'}
               data={data}
            />
            {data.get('marks').map((markObject,index) =>
              <StudentMarkCell
                key={data.get('studentId')+'_'+index}
                markObject={markObject}
              />
            )}
            <AverageCell key={data.get('studentId')+'_avg'} avg={data.get('avg')} />
          </tr>
        );
      })
    );
  }

  const tableInstance = (
    <Table striped condensed hover>
      {createHeaders()}
      <tbody>
        {createCategoriesRow()}
        {createStudentRow()}
        {createAvgTestsRow()}
      </tbody>
    </Table>
  );

  return (
    <div>
      {tableInstance}
      {addButton()}
    </div>
  );
}

export default StudentTable;
