var React = require('react');
var ReactDOM = require('react-dom');

import { Table } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const StudentTable = () => {

  function handleSelect(selectedKey) {
    {/*alert('selected ' + selectedKey);*/}
  }

  const tableInstance = (
    <Table striped condensed hover>
      <thead>
        <tr>
          <th>Pupil</th>
          <th>KA1</th>
          <th>KA2</th>
          <th>KA3</th>
          <th>Test1</th>
          <th>Test2</th>
          <th>Test3</th>
          <th>Mündlich</th>
          <th>Durchschnitt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nico Rosberg</td>
          <td>1.5</td>
          <td>2.5</td>
          <td>3.5</td>
          <td>1.0</td>
          <td>4.5</td>
          <td>1.0</td>
          <td>2.0</td>
          <td>2.0</td>
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
          <td>2.0</td>
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
          <td>2.0</td>
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
          <td>2.0</td>
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
          <td>2.0</td>
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
          <td>2.0</td>
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
          <td>2.0</td>
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
          <td>2.0</td>
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
          <td>2.0</td>
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
          <td>2.0</td>
        </tr>
      </tbody>
    </Table>
  );


  return tableInstance;
}

export default StudentTable;
