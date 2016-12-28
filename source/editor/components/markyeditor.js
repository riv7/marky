var React = require('react');
var ReactDOM = require('react-dom');

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

import GradeNav from './gradenav';
import CourseNav from './coursenav';
import StudentTable from './studenttable';

const MarkyEditor = () => {

  const pageHeader = (
    <PageHeader>
      marky <small>search class or student</small>
    </PageHeader>
  );

  const basicGrid = (
    <Grid>
      <Row className="show-grid">
        <Col md={12}><code>&lt;{'Col md={12}'} /&gt;</code></Col>
      </Row>
      <Row className="show-grid">
        <Col md={12}>
          {pageHeader}
        </Col>
      </Row>
      <Row className="show-grid">
        <Col md={2}>
          <GradeNav />
        </Col>
        <Col md={2}>
          <CourseNav />
        </Col>
        <Col md={8}>
          <StudentTable />
        </Col>
      </Row>
    </Grid>
  );

  return basicGrid;
}

export default MarkyEditor;
