import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState(null);
  const [showData, setShowData] = useState(false);
  const [initalInvest, setInitalInvest] = useState(0);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results
    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    setInitalInvest(currentSavings);
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    // do something with yearlyData ...
    setData(yearlyData);
    if (yearlyData.length > 0) {
      setShowData(true);
    }
  };
  return (
    <div>
      <Header />
      <Form onSubmit={calculateHandler} />
      {showData && <Table data={data} currentSavings={initalInvest} />}
      {!showData && <p className="result">No Data Shown</p>}
    </div>
  );
}

export default App;
