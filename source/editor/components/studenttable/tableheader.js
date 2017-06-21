var React = require('react');
var ReactDOM = require('react-dom');

const HeaderCell = ({header}) => {
  return <th>{header}</th>
}

const TableHeader = ({marksTableViewModel}) => {

  return (
    <thead>
      <tr>
        <th>Pupil</th>
        {marksTableViewModel.get('headers').map(header =>
          <HeaderCell
            key={header.get('testId')}
            header={header.get('testName')}
          />
        )}
        <th>Average</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
