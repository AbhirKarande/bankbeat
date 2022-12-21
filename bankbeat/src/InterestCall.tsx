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
    
    //create a variable that holds the fetch request\
    const request = new Request(url, {
        method: 'GET',
        headers: new Headers({
            'X-Api-Key': key
        })
    });

    //create a variable that holds the response
    const response = await fetch(request);
    //create a variable that holds the json
    const json = response.json();
    //create a variable that holds the data
    //create a variable that holds the interest rate
    const interestRate = data.central_bank_rates[0].rate_pct;

    //return the interest rate
    return interestRate;
}

//export the function

