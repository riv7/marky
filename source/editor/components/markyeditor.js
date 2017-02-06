var React = require('react');
var ReactDOM = require('react-dom');

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

import SubjectNavContainer from '../containers/subject';
import StudentTableContainer from '../containers/student';
import HeadNav from './headnav';

const MarkyEditor = () => {

  {/*const pageHeader = (
    <PageHeader>
      <div className="white">
        marky <small className="orange">enter marks</small>
      </div>
    </PageHeader>
  );*/}

  const pageHeader = (
    <PageHeader>
      marky <small>enter marks</small>
    </PageHeader>
  );

  const basicGrid = (
    <Grid fluid={true}>
      <Row>
        <Col>
          <HeadNav />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          {pageHeader}
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col className="border-right" md={1}>
          <SubjectNavContainer />
        </Col>
        <Col md={10}>
          <StudentTableContainer/>
        </Col>
      </Row>
    </Grid>
  );

  return basicGrid;
}

export default MarkyEditor;
