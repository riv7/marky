var React = require('react');
var ReactDOM = require('react-dom');

import AverageCell from './averagecell';

const AverageRow = ({marksTableViewModel}) => {

  return (
    <tbody>
      <tr>
        <td><b>Average</b></td>
          {marksTableViewModel.get('avgOfTests').map(avg =>
            <AverageCell
              key={avg.get('testId')+'_'+'avg'}
              avg={avg.get('testAvg')}
            />
          )}
        <td></td>
      </tr>
    </tbody>
  );
}

export default AverageRow;
