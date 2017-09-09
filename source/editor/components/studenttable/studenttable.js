var React = require('react');
var ReactDOM = require('react-dom');

import { Link } from 'react-router';

import { Table } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Label } from 'react-bootstrap';

import TableHeader from './subcomponents/tableheader';
import CategoriesRow from './subcomponents/categoriesrow';
import AverageRow from './subcomponents/averagerow';
import StudentRows from './subcomponents/studentrow';
import AddButton from './subcomponents/addbutton';

const StudentTable = ({marksTableViewModel, addTestFormInitialized, history}) => {

  const tableInstance = (
    <Table striped condensed hover>
      <TableHeader marksTableViewModel={marksTableViewModel} />
      <CategoriesRow marksTableViewModel={marksTableViewModel} />
      <StudentRows marksTableViewModel={marksTableViewModel} />
      <AverageRow marksTableViewModel={marksTableViewModel} />
    </Table>
  );

  return (
    <div>
      <Table striped condensed hover>
        <TableHeader marksTableViewModel={marksTableViewModel} />
        <CategoriesRow marksTableViewModel={marksTableViewModel} />
        <StudentRows marksTableViewModel={marksTableViewModel} />
        <AverageRow marksTableViewModel={marksTableViewModel} />
      </Table>
      <AddButton history={history} />
    </div>
  );
}

export default StudentTable;