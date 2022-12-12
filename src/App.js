import React,{ useState } from "react";
import Button from "./component/Button";
import Statistics from "./component/Statistics";
import '../src/App.css'
import Anecdote from "./component/Anecdote";
import { anecdotes, notes, courses} from "./data";
import Vote from "./component/Vote";
import List from "./component/List";
// import Course from "./component/Course";




const App = () => {
  //feedback state
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

//feedback handler
  const goodHandler = () => { setGood(good + 1)}
  const badHandler = () => { setBad(bad + 1)}
  const neutralHandler = () => { setNeutral(neutral + 1)}

  //anecdote creating room for vote dynamically, initial state as cache
  const cache = {}
  anecdotes.map((_, ind) => {
    if(ind in cache ){
      cache[ind] += 1
    }
    cache[ind] = 0
    cache[ind] += 0 
  })
//anecdote state
  let [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(cache)

  //anecdote
  const voteHandler = () => {setVote((prevState)=> {
    const newVote = {...prevState}
    newVote[selected] += 1
    return {...newVote}
  })}
  const selectHandler = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length) )
  }
 

return (
    <div>
      <h1>give Feed back</h1>
     <div className="wrap">
      <Button onClick={goodHandler} text='good'/>
      <Button onClick={badHandler} text='bad'/>
      <Button onClick={neutralHandler} text='neutral'/>
     
     </div>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      <Anecdote onClick={selectHandler} vote = {vote} selected={selected}/>
      <Vote onClick={voteHandler} />
      <List notes={notes}/>
      {/* <Course courses={courses}/> */}
    </div>
  );
};
export default App;
