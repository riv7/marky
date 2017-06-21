var React = require('react');
var ReactDOM = require('react-dom');

import { Link } from 'react-router';

import { Table } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Label } from 'react-bootstrap';

import TableHeader from './tableheader';
import CategoriesRow from './categoriesrow';

const AverageCell = ({avg}) => {
  if (avg >= 5) {
    return <td><Label bsStyle="danger">{avg}</Label></td>;
  } else if (avg >= 4) {
    return <td><Label bsStyle="warning">{avg}</Label></td>;
  } else {
    return <td><Label bsStyle="success">{avg}</Label></td>;
  }
}

const StudentNameCell = ({data}) => {
  return <td>{data.get('student').get('name')}</td>
}

const StudentMarkCell = ({markObject}) => {
  return <td>{markObject.get('mark')}</td>
}

const StudentTable = ({marksTableViewModel, addTestFormInitialized, history}) => {

  const addButton = () => {
    const handleClick = (eventKey) => {

      const students = marksTableViewModel.get('studentsTableData').map(data =>
        data.get('student')
      );

      addTestFormInitialized(students)
      history.push('/addtest');
    };

    return (
      <Button onClick={handleClick}>add test</Button>
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
          <tr key={data.get('student').get('id')+'_tr'}>
            <StudentNameCell
               key={data.get('student').get('id')+'_td'}
               data={data}
            />
            {data.get('marks').map((markObject,index) =>
              <StudentMarkCell
                key={data.get('student').get('id')+'_'+index}
                markObject={markObject}
              />
            )}
            <AverageCell key={data.get('student').get('id')+'_avg'} avg={data.get('avg')} />
          </tr>
        );
      })
    );
  }

  const tableInstance = (
    <Table striped condensed hover>
      <TableHeader
        marksTableViewModel={marksTableViewModel}
      />
      <tbody>
        <CategoriesRow
          marksTableViewModel={marksTableViewModel}
        />
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
