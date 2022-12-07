
import './App.css';
import API from './api/API';
import React from 'react';
import { useState } from 'react';


function App() {
  const [responseData, setResponseData] = useState(null)
  
  async function getAllBreeds(){
    try{
      await API.getAllBreeds().then(res =>{
        let arr = []
        for (const key in res.message) {
          //console.log(`${key} ${res.message[key]}`)
          arr.push(key)
        }
        setResponseData(arr)
      })      
    } catch(errors){
      console.error(errors)
    }
    
  }

  return (
    <div className="margin-me">
      <h1> API calls</h1>
      <div>
        <button onClick={getAllBreeds}>Get all breeds</button>
      </div>
      {responseData.length ?
      <p>
      {responseData.map(dog => (<p key={dog}>{dog} <br></br></p>))}
      </p>
      :null}
    </div>
  );
}

export default App;
