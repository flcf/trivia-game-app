import React, {useEffect, useState} from "react";
import "./TriviaCard.css";
import DetailedCardView from ".//DetailedCardView";

const TriviaCard = ({ question, category, cardScore, answersList }) => {

const [whichColor, setColor]= useState('');

    const [showDetailedView, setShowDetailedView] = useState(false);

    //for when after user clicks close in the detailed view, will pass back info and set this to true, ensuring they cannot click into the same card again.
    const [disableCard, setDisableCard] = useState(false);

  const handleClick = () => {

    setShowDetailedView(!showDetailedView);
    // console.log("value of toggle: " + showDetailedView);

  };


//use callback function from detailedcardview to cardview. if already answered, don't render it again! 


// useEffect(()=>{



    

    
//  }, [showDetailedView])


const changeColor=(cardCategory)=>{

        switch(cardCategory) {
            case 'Music':
                return "pink";
             
           case 'Sports':
                return "Orange";
              
            case 'Nature':
                return "Green";
              
            case 'Science':
                return ("Blue");
              
    
         }
    
      }

  

  return (
    <div>
        
         {showDetailedView ? <DetailedCardView toggle={handleClick} cardScore={cardScore} question= {question} answersList= {answersList} setDisableCard={setDisableCard}/> : null}
        
      <button disabled={disableCard}
        onClick={() =>handleClick()}
            className="center b lh-copy mb5 mw7 ph3 pv4 grow br3 shadow " style={{backgroundColor: changeColor(category), width: "90%", height: "85%", tableLayout:"fixed", zIndex:2, border:"none", color: "white"} }>
        <h2>{question}</h2>
        <p>{cardScore}</p>
        <p>{category}</p>
      </button>
       

    
    </div>
  );
};

export default TriviaCard;


//TODO: Onclick, create fancy box pop up with full question + answers -- use pop up modal reference!! 

//FINISH SCORECARD section
//USE SAME CONCEPT FOR FINAL POP UP

//USE CONTEXT and CALL BACKS WHEN NECESSARY
