var React = require('react');
var ReactDOM = require('react-dom');

const Jumbotron = () => {

  /*return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Fluid jumbotron</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
  );*/

  return (
    <div className="netoJumbotron">
      <div className="centerFullWidth">
        <h1>NeTo Demo</h1>
        <p className="smallTitle">This is a demo with React, Redux and oData.</p>
      </div>
    </div>
  );

  /*return (
    <div className="netoJumbotron">
      <h1 className="bigHeader">NeTo Demo</h1>
      <p className="mediumHeader">This is a demo with React, Redux and oData.</p>
      <hr className="horizontalLine"></hr>
      <p>It shows some Aufgaben</p>
    </div>
  );*/
}

export default Jumbotron;
