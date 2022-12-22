import React from 'react';
import ReactDOM from "react-dom";
import {useState, useEffect} from 'react';

//generate a page that calls upon this api: https://api.api-ninjas.com/v1/interestrate?name=FED

//create a function that calls the api
async function InterestCall() {
    //create a variable that holds the api url

    
    const url = 'https://api.api-ninjas.com/v1/interestrate?name=FED';
    //create a variable that holds the api key
    const key = 'EgblJ/SG7llo3LZLCjflNA==cuJk0yMor51txbH3';

    //use fetch to call the api
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': key
        }
    });
    //use json to convert the response to json
    const data = await response.json();
    //return the data  

    console.log(data)
    //return the json data in a div
    return (
        <div>
            <h1>Interest Rate</h1>
            <p>{data}</p>
        </div>
    );
}

//export the function

