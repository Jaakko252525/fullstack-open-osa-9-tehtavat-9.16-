











// impoting react hooks
import { useState, useEffect } from 'react';

// importing type
import { Diary } from './types/types';

// importing components
import NewDiary from './components/NewDiary';

// importing api
import { getReq } from './services/api';

// react
import React from 'react';


function App() {

  // using useState and making hardcoded initial Diary
  const [diaries, setDiaries] = useState<Diary[]>([
    {id: 0,date: 'date', weather: 'sunny', visibility: 'good' }
  ]);

  
  // useEffect that makes GET request
  useEffect(() => {
    getReq().then(d => setDiaries(d))

  }, [setDiaries])



  return (
    <div className="App">
      Hello World
    
      <div>
        <ul>
          {diaries.map(d => 
            <li key={d.id}>
              Date: {d.date} 
              Visibility: {d.visibility}  
              Weather: {d.weather} 
            </li>)}
        </ul>
      </div>
      <div>
        <NewDiary  />
      </div>
    </div>
  );
}

export default App;












