import React from "react";
import './TriviaCardList.css'
import TriviaCard from "./TriviaCard";
import {questionsList} from '../Assets/questionsList'

//setUseState where it'll only pass a prop down if it's hasn't been answered!

const TriviaCardList = ({cardScore }) => {



  const cardRenderer = questionsList.map((cardInfo, i) => {
    return (

  
      <TriviaCard
        id={questionsList[i].id}
        category={questionsList[i].category}
        question={questionsList[i].question}
        cardScore={cardScore}
        answersList = {questionsList[i].answersList}
      />
    );
  });

  return (
    
     
    
          <div class="grid-container">
              {cardRenderer}
              {console.log("ANswerListVal in Trivia CardList "+ questionsList[0].answersList)}
              
         </div>
    
      

  );
};

export default TriviaCardList;
