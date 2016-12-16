var React = require('react');
var ReactDOM = require('react-dom');

import { Grid } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

import StudentsTable from './studentstable'
import StatefullYearSelectionBar from '../containers/year'
import StatefullSearchBar from '../containers/search'


const FilterableStudentsTable = ({year, filterText, gradesStudentsAndYears}) => {

  const years = gradesStudentsAndYears.map(yearData => {
    const year = {
      id: yearData.id,
      name: yearData.year
    };
    return year;
  });

  const gradesAndStudentsOfYear = gradesStudentsAndYears
    .find(yearData => yearData.year === year)
    .gradesAndStudents;

  return (
    <Grid>
      <StatefullYearSelectionBar years={years}/>
      <PageHeader>marky <small>search class or student</small></PageHeader>
      <StatefullSearchBar />
      <StudentsTable
        studentsOfYear={gradesAndStudentsOfYear}
        filterText={filterText}
      />
    </Grid>
  );
}

export default FilterableStudentsTable;
