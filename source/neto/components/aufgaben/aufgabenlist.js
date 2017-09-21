var React = require('react');
var ReactDOM = require('react-dom');

const AufgabenList = ({aufgaben}) => {

  return (
    <div>
      <br />
      <br />
      <ul className="netoList">
        {aufgaben.map((aufgabe) => (
          <li className="netoListItem" key={aufgabe.ID}>
            {aufgabe.Name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AufgabenList;
