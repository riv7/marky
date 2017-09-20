var React = require('react');
var ReactDOM = require('react-dom');

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';


import SubjectNavContainer from '../containers/subject';
import StudentTableContainer from '../containers/student';
import HeadNav from './headnav';

const MarkyHeader = ({detailText, dataArea}) => {

  const pageHeader = (
    <PageHeader>
      marky <small>{detailText}</small>
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
        <Col md={12} className="text-center">
          {pageHeader}
        </Col>
      </Row>
      <Row></Row>
      {dataArea}
    </Grid>
  );

  return basicGrid;
}

export default MarkyHeader;
