import React, { useState, useEffect } from 'react';

function InterestRateApp() {
  // State variables to store the current interest rate and rating
  const [interestRate, setInterestRate] = useState(0);
  const [rating, setRating] = useState(0);

  // Fetch the current interest rate from the API when the component mounts
  useEffect(() => {
    async function fetchData() {
      const url = 'https://api.api-ninjas.com/v1/interestrate?name=FED';
    //create a variable that holds the api key
      const key = 'EgblJ/SG7llo3LZLCjflNA==cuJk0yMor51txbH3';
      const response =  await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': key
        }
    }
    
    );
      const data = await response.json();
      setInterestRate(data['central_bank_rates'][0]['rate_pct']);

      // Calculate the rating based on the current interest rate
      if (data['central_bank_rates'][0]['rate_pct'] < 3) {
        setRating(1);
      } else if (data['central_bank_rates'][0]['rate_pct'] < 5) {
        setRating(3);
      } else if (data['central_bank_rates'][0]['rate_pct'] < 7) {
        setRating(5);
      } else if (data['central_bank_rates'][0]['rate_pct'] < 9) {
        setRating(7);
      } else {
        setRating(10);
      }
      console.log(data['central_bank_rates'][0]['rate_pct'])
    }


    //print out the result of the fetch call
    console.log(fetchData());
  }, []);

  return (
    <div>
      {/* Display the current interest rate and rating */}
      <p>Current interest rate: {interestRate}</p>
      <p>Rating: {rating}/10</p>
    </div>
  );
}

export default InterestRateApp;