import React,{ useState } from "react";
import Button from "./component/Button";
import Statistics from "./component/Statistics";
import '../src/App.css'


const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  
  const goodHandler = () => { setGood(good + 1)}
  const badHandler = () => { setBad(bad + 1)}
  const neutralHandler = () => { setNeutral(neutral + 1)}
 

return (
    <div>
      <h1>give Feed back</h1>
     <div className="wrap">
      <Button onClick={goodHandler} text='good'/>
      <Button onClick={badHandler} text='bad'/>
      <Button onClick={neutralHandler} text='neutral'/>
     
     </div>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      {/* <h3>statistic</h3>
      <p>good: {good}</p>
      <p>bad: {bad}</p>
      <p>neutral: {neutral}</p>
      <p>average: {averageFeedback(good, bad, neutral)}</p>
      <p>positive feedback: 0 </p> */}
    </div>
  );
};
export default App;
