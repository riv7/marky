var React = require('react');
var ReactDOM = require('react-dom');

import { Grid } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

import StatefullStudentsTable from '../containers/studentstable'
import StatefullYearSelectionBar from '../containers/year'
import StatefullSearchBar from '../containers/search'


const FilterableStudentsTable = ({gradesStudentsAndYears}) => {

  const years = gradesStudentsAndYears.map(yearData => {
    const year = {
      id: yearData.id,
      name: yearData.year
    };
    return year;
  });

  return (
    <Grid>
      <StatefullYearSelectionBar years={years}/>
      <PageHeader>marky <small>search class or student</small></PageHeader>
      <StatefullSearchBar />
      <StatefullStudentsTable gradesStudentsAndYears={gradesStudentsAndYears} />
    </Grid>
  );
}

export default FilterableStudentsTable;
