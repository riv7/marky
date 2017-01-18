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
      marksTableViewModel.get('cats').map((cat, index) =>
        <td key={cat.get('name')+'_'+index}>
          <Button bsSize="xs"><Glyphicon glyph="edit" /></Button>
          <Button bsSize="xs" ><Glyphicon glyph="remove" /></Button>
          <h5><Label bsStyle={cat.get('color')}>{cat.get('name')}</Label></h5>
        </td>
      )
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
            <td key={data.get('studentName')+'_avg'}><Label bsStyle="danger">{data.get('avg')}</Label></td>
          </tr>
        );
      })
    );
  }

  const tableInstance = (
    <Table striped condensed hover>
      {createHeaders()}
      <tbody>
        <tr>
          <td></td>
          {createCategoriesRow()}
          <td><Button bsSize="xs"><Glyphicon glyph="edit" /></Button></td>
        </tr>
        {createStudentRow()}
        {/*}<tr>
          <td></td>
          <td>
            <Button bsSize="xs"><Glyphicon glyph="edit" /></Button>
            <Button bsSize="xs" ><Glyphicon glyph="remove" /></Button>
            <h5><Label bsStyle="danger">Schritflich 1/6</Label></h5>
          </td>
          <td>
            <Button bsSize="xs"><Glyphicon glyph="edit" /></Button>
            <Button bsSize="xs" ><Glyphicon glyph="remove" /></Button>
            <h5><Label bsStyle="danger">Schritflich 1/6</Label></h5>
          </td>
          <td>
            <Button bsSize="xs"><Glyphicon glyph="edit" /></Button>
            <Button bsSize="xs" ><Glyphicon glyph="remove" /></Button>
            <h5><Label bsStyle="danger">Schritflich 1/6</Label></h5>
          </td>
          <td>
            <Button bsSize="xs"><Glyphicon glyph="edit" /></Button>
            <Button bsSize="xs" ><Glyphicon glyph="remove" /></Button>
            <h5><Label bsStyle="info">Schritflich 1/6</Label></h5>
          </td>
          <td>
            <Button bsSize="xs"><Glyphicon glyph="edit" /></Button>
            <Button bsSize="xs" ><Glyphicon glyph="remove" /></Button>
            <h5><Label bsStyle="info">Schritflich 1/6</Label></h5>
          </td>
          <td>
            <Button bsSize="xs"><Glyphicon glyph="edit" /></Button>
            <Button bsSize="xs" ><Glyphicon glyph="remove" /></Button>
            <h5><Label bsStyle="success">Schritflich 1/6</Label></h5>
          </td>
          <td>
            <Button bsSize="xs"><Glyphicon glyph="edit" /></Button>
            <Button bsSize="xs" ><Glyphicon glyph="remove" /></Button>
            <h5><Label bsStyle="success">Schritflich 1/6</Label></h5>
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>Nico Rosberg</td>
          <td>1.5</td>
          <td>2.5</td>
          <td>3.5</td>
          <td>1.0</td>
          <td>4.5</td>
          <td>1.0</td>
          <td>2.0</td>
          <td><Label bsStyle="danger">4.0</Label></td>
        </tr>
        <tr>
          <td>Lewis Hamilton</td>
          <td>1.5</td>
          <td>2.5</td>
          <td>3.5</td>
          <td>1.0</td>
          <td>4.5</td>
          <td>1.0</td>
          <td>2.0</td>
          <td><Label bsStyle="default">4.0</Label></td>
        </tr>
        <tr>
          <td>Sebastian Vettel</td>
          <td>1.5</td>
          <td>2.5</td>
          <td>3.5</td>
          <td>1.0</td>
          <td>4.5</td>
          <td>1.0</td>
          <td>2.0</td>
          <td><Label bsStyle="default">4.0</Label></td>
        </tr>
        <tr>
          <td>Kimi Räikkönen</td>
          <td>1.5</td>
          <td>2.5</td>
          <td>3.5</td>
          <td>1.0</td>
          <td>4.5</td>
          <td>1.0</td>
          <td>2.0</td>
          <td><Label bsStyle="success">4.0</Label></td>
        </tr>
        <tr>
          <td>Dani Ricciardo</td>
          <td>1.5</td>
          <td>2.5</td>
          <td>3.5</td>
          <td>1.0</td>
          <td>4.5</td>
          <td>1.0</td>
          <td>2.0</td>
          <td><Label bsStyle="danger">4.0</Label></td>
        </tr>
        <tr>
          <td>Max Verstappen</td>
          <td>1.5</td>
          <td>2.5</td>
          <td>3.5</td>
          <td>1.0</td>
          <td>4.5</td>
          <td>1.0</td>
          <td>2.0</td>
          <td><Label bsStyle="default">4.0</Label></td>
        </tr>
        <tr>
          <td>Niko Hülkenberg</td>
          <td>1.5</td>
          <td>2.5</td>
          <td>3.5</td>
          <td>1.0</td>
          <td>4.5</td>
          <td>1.0</td>
          <td>2.0</td>
          <td><Label bsStyle="default">4.0</Label></td>
        </tr>
        <tr>
          <td>Sergio Perez</td>
          <td>1.5</td>
          <td>2.5</td>
          <td>3.5</td>
          <td>1.0</td>
          <td>4.5</td>
          <td>1.0</td>
          <td>2.0</td>
          <td><Label bsStyle="default">4.0</Label></td>
        </tr>
        <tr>
          <td>Fernando Alonso</td>
          <td>1.5</td>
          <td>2.5</td>
          <td>3.5</td>
          <td>1.0</td>
          <td>4.5</td>
          <td>1.0</td>
          <td>2.0</td>
          <td><Label bsStyle="default">4.0</Label></td>
        </tr>
        <tr>
          <td>Stoffel van Doorn</td>
          <td>1.5</td>
          <td>2.5</td>
          <td>3.5</td>
          <td>1.0</td>
          <td>4.5</td>
          <td>1.0</td>
          <td>2.0</td>
          <td><Label bsStyle="success">4.0</Label></td>
        </tr>
        <tr></tr>
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
