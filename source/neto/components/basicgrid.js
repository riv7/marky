var React = require('react');
var ReactDOM = require('react-dom');

const BasicGrid = ({dataArea}) => {

  const grid = (
    <div className="netoCenterPage">
      <div className="netoGridRow">
        <div className="leftSpace" />
        <div className="dataSpace">
          {dataArea}
        </div>
        <div className="rightSpace" />
      </div>
    </div>
  );

  return grid;
}

export default BasicGrid;
