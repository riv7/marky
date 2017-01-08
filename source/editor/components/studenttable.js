var React = require('react');
var ReactDOM = require('react-dom');

import { Table } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Label } from 'react-bootstrap';

const StudentTable = () => {

  function handleSelect(selectedKey) {
    {/*alert('selected ' + selectedKey);*/}
  }

  const addButton = (
    <Button>add data</Button>
  )

  const tableInstance = (
    <Table striped condensed hover>
      <thead>
        <tr>
          <th>Pupil</th>
          <th>
            KA1
          </th>
          <th>KA2</th>
          <th>KA3</th>
          <th>Test1</th>
          <th>Test2</th>
          <th>Test3</th>
          <th>Mündlich</th>
          <th><Glyphicon glyph="asterisk" /></th>
        </tr>
      </thead>
      <tbody>
        <tr>
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
          </tr>
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
