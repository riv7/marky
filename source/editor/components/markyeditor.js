var React = require('react');
var ReactDOM = require('react-dom');

import { Col } from 'react-bootstrap';

import SubjectNavContainer from '../containers/subject';
import StudentTableContainer from '../containers/student';
import MarkyHeader from './markyheader';

const MarkyEditor = ({history}) => {

  {/*const pageHeader = (
    <PageHeader>
      <div className="white">
        marky <small className="orange">enter marks</small>
      </div>
    </PageHeader>
  );*/}

  const markyEditorForm = (
    <div>
      <Col className="border-right" md={1}>
        <SubjectNavContainer />
      </Col>
      <Col md={11}>
        <StudentTableContainer history={history}/>
      </Col>
    </div>
  );

  return (
    <MarkyHeader detailText={"marks for teachers"} dataArea= {markyEditorForm} />
  );
}

export default MarkyEditor;
