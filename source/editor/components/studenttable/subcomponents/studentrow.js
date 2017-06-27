var React = require('react');
var ReactDOM = require('react-dom');

import AverageCell from './averagecell';

const StudentNameCell = ({data}) => {
  return <td>{data.get('student').get('name')}</td>
}

const StudentMarkCell = ({markObject}) => {
  return <td>{markObject.get('mark')}</td>
}

const StudentRows = ({marksTableViewModel}) => {
  return (
    <tbody>
      {marksTableViewModel.get('studentsTableData').map(data => {
        return (
          <tr key={data.get('student').get('id')+'_tr'}>
            <StudentNameCell
               key={data.get('student').get('id')+'_td'}
               data={data}
            />
            {data.get('marks').map((markObject,index) =>
              <StudentMarkCell
                key={data.get('student').get('id')+'_'+index}
                markObject={markObject}
              />
            )}
            <AverageCell key={data.get('student').get('id')+'_avg'} avg={data.get('avg')} />
          </tr>
        );
      })}
    </tbody>    
  );
}

export default StudentRows;
