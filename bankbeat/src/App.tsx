import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  InterestCall  from './InterestCall';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [name, setName] = useState('FED');
  const [url, setUrl] = useState('https://api.api-ninjas.com/v1/interestrate?name=');
  const [key, setKey] = useState('EgblJ/SG7llo3LZLCjflNA==cuJk0yMor51txbH3');
  const [state, setState] = useState({
    data: [],
    isLoading: true,
    errors: null
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url + name, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': key
        }
      });
      const data = await response.json();
      setData(data);
      setIsLoading(false);
      setState({
        data: data,
        isLoading: false,
        errors: null
      });
    };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
