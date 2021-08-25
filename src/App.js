import React, { useState } from 'react';
import './style.css';
import { PollHeader, PollComponent } from './PollWidget';

export default function App() {
  const [readOnly, setReadOnly] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);


  const choices = [
    { id: 1, choice: 'Nike', votes: 12 },
    { id: 2, choice: 'Adidas', votes: 1 },
    { id: 3, choice: 'Puma', votes: 3 },
    { id: 4, choice: 'Reebok', votes: 5 },
    { id: 5, choice: 'Under Armour', votes: 9 }
  ];

  const votingOptions = {};

  choices.forEach((choice) => {
    votingOptions[choice.id] = { choice: choice ,voted = false }
  });

  const [pollAnswers, setPollAnswers] = useState(votingOptions);
  

  const renderViewItem = ({ choice, votes }) => {
    return (
      <dt>
        <span>
          {choice} {votes}
        </span>
      </dt>
    );
  };

  const handleRevote =() => {
    setHasVoted(false);
    setReadOnly(false);
  }

  const handleVote = (e,option) => {

    if(hasVoted){
      handleRevote();
      return
    }


    if(e.target.checked){
      option.votes++;
      console.log(option);
      setPollAnswers(choices);
      setReadOnly(true);
      setHasVoted(true);
    }
  }

  const renderEditItem = (itemId) => {
    // console.log({itemId})
    // const {option,voted} = pollAnswers[itemId];
    // console.log(option);
    // const {id, choice} = option;
    // return (
    //   <dt>
    //     <input type="checkbox" id={id} onChange={(e) => handleVote(e,option)} checked={voted}/>
    //     {choice}
    //   </dt>
    // );
  };


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <PollHeader>
        <h3>Which is your fav color?</h3>
      </PollHeader>
      <PollComponent
        totalVotes={}
        choices={votingOptions}
        type="multi"
        labelKey="text"
        idKey="id"
        isReadOnly={readOnly}
        renderViewItem={renderViewItem}
        renderEditItem={renderEditItem}
        onVote={handleVote}
        hasVoted={hasVoted}
      />
    </div>
  );
}
