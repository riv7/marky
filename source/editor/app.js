var React = require('react');
var ReactDOM = require('react-dom');

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

require('../../styles/app.css');

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
      <Col md={2}><code>&lt;{'Col md={2}'} /&gt;</code></Col>
      <Col md={2}><code>&lt;{'Col md={2}'} /&gt;</code></Col>
      <Col md={8}><code>&lt;{'Col md={8}'} /&gt;</code></Col>
    </Row>
  </Grid>
);

ReactDOM.render(
  basicGrid,
  document.getElementById('react-application')
);
