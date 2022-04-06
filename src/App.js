import { useEffect, useState } from 'react';



function App() {

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState([]);
  console.log("loading")

  useEffect(() => {

    fetch('https://jobs.github.com/positions.json')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        console.log(data);
      }, []);

  });


  const add = () => {
    if (job.length > 0) {
      setJob('')
      setJobs(pre => [...pre, job]);
    } else {
      setJobs(pre => {
        return [...pre, 'Not value'];
      })

    }
  }

  const jopRemove = (x) => {
    setJobs(pre => pre.filter((a, b) => b !== x))
  }

  return (
    <div>
      <input value={job} onChange={e => setJob(e.target.value)}></input>
      <button onClick={add}>add</button>
      <h1>{job}</h1>
      <ul>
        {jobs.map((x, i) => {
          return (<div key={i}>
            <li > {x}  <button onClick={() => jopRemove(i)}>delete</button> </li>
          </div>)
        })}
      </ul>
    </div>
  );
}


export default App;


