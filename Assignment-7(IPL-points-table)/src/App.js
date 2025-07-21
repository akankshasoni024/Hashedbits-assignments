import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [ipldata, setIpldata] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR); // sort by NRR ascending
        setIpldata(sortedData);
      })
      .catch((error) => {
        console.log('Fetch error:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>IPL Points Table</h1>
        <table className="table-data">
          <thead>
            <tr>
              <th>No</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>No Result</th>
              <th>Points</th>
              <th>NRR</th>
            </tr>
          </thead>
          <tbody>
            {ipldata.map((team, index) => (
              <tr key={index}>
                <td>{team.No}</td>
                <td>{team.Team}</td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                <td>{team.NoResult}</td>
                <td>{team.Points}</td>
                <td>{team.NRR}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
