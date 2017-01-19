var React = require('react');
var ReactDOM = require('react-dom');

import { Table } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Label } from 'react-bootstrap';

const StudentTable = ({marksTableViewModel}) => {

  function handleSelect(selectedKey) {
    {/*alert('selected ' + selectedKey);*/}
  }

  const addButton = (
    <Button>add data</Button>
  );

  const createHeaders = () => {
    return (
      <thead>
        <tr>
          <th key='pupil'>Pupil</th>
          {marksTableViewModel.get('headers').map(header => <th key={header.toString()}>{header}</th>)}
          <th key='avg'>Average</th>
        </tr>
      </thead>
    );
  }

  const createCategoriesRow = () => {
    return (
      <tr>
        <td></td>
          {marksTableViewModel.get('cats').map((cat, index) =>
            <td key={cat.get('name')+'_'+index}>
              <Button bsSize="xs"><Glyphicon glyph="edit" /></Button>
              <Button bsSize="xs" ><Glyphicon glyph="remove" /></Button>
              <h5><Label bsStyle={cat.get('color')}>{cat.get('name')}</Label></h5>
            </td>
          )}
        <td></td>
      </tr>
    );
  }

  const createStudentRow = () => {
    return (
      marksTableViewModel.get('studentsTableData').map(data => {
        return (
          <tr key={data.get('studentName')+'_tr'}>
            <td key={data.get('studentName')+'_td'}>{data.get('studentName')}</td>
            {
              data.get('marks').map((markObject,index) =>
                <td key={data.get('studentName')+'_'+index}>{markObject.get('mark')}</td>
              )
            }
            {createStudentAvgCell(data.get('avg'))}            
          </tr>
        );
      })
    );
  }

  const createStudentAvgCell = (avg) => {
    if (avg >= 5) {
      return <td><Label bsStyle="danger">{avg}</Label></td>;
    } else if (avg >= 4) {
      return <td><Label bsStyle="warning">{avg}</Label></td>;
    } else {
      return <td><Label bsStyle="success">{avg}</Label></td>;
    }
  }

  const tableInstance = (
    <Table striped condensed hover>
      {createHeaders()}
      <tbody>
        {createCategoriesRow()}
        {createStudentRow()}

        {/*}<tr></tr>
          <tr>
            <td><Glyphicon glyph="asterisk" /></td>
            <td><Label bsStyle="danger">4.0</Label></td>
            <td><Label bsStyle="default">4.0</Label></td>
            <td><Label bsStyle="default">4.0</Label></td>
            <td><Label bsStyle="default">4.0</Label></td>
            <td><Label bsStyle="success">4.0</Label></td>
            <td><Label bsStyle="success">4.0</Label></td>
            <td><Label bsStyle="default">4.0</Label></td>
            <td></td>
          </tr>*/}
      </tbody>
    </Table>
  );


  return (
    <div>
      {tableInstance}
      {addButton}
    </div>
  );
}

export default StudentTable;
