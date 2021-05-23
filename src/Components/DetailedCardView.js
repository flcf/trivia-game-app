import React, {useEffect, useState} from "react";
import TimedResponse from "./TimedResponse";
import "./DetailedCardList.css"
import ScoreCalculation from "./ScoreCalculations";



const DetailedCardView = ({question, category, cardScore, answersList, toggle, setDisableCard }) => {



    //TODO: if get right answer, button changes color to green. If not, get red.  for buttons! If timer runs out, show right answer 

   
    //WHEN THIS IS OPEN, trigger Timer to start immediately 

    //RENDER close button only after you are done answering or timer runs out!!

    //passes data to start timer, stop timer.


    const [toggleTimer, setToggleTimer] = useState(false);

    const [alreadyOpened, setAlreadyOpened] = useState(false);

    const [disableButton, setDisableButton] = useState(false);

    //set selected answerValue

    const [answerColor, setAnswerColor] = useState("#5E2CA5");
    const [addToScore, setAddToScore] = useState(2);

    const handleClick =(checkAnswer)=>{

        // console.log("GOT INTO HANDLECLICK");
        // console.log("checkAnswerValue: "+ checkAnswer);


        if(checkAnswer===true){
            setAnswerColor("Green");
            setAddToScore(1);


        } else {
            setAnswerColor("Red");
            setAddToScore(0);
        }

        setDisableButton(true);
        setToggleTimer(false);
        
    
        



      

    };

    const handleClose =()=>{

        setDisableCard(true);

        toggle(false);



    }


    
        


   
  const answerRender = answersList.map((buttonInfo, i) => {
    return ( <button key={answersList[i].answerId} disabled={disableButton} onClick={() =>handleClick(answersList[i].answerCheck)} style={{margin: '10px', backgroundColor: answerColor}} className='grow white b pv2-l ph4 bn-ns br3 pa2 hover-bg-dark-blue bn-l br5'>{answersList[i].answer}</button>

  
      
    );
  });

 

const checkTimer = ()=>{

    return alreadyOpened? null: ()=>{

        setToggleTimer(true)
        setAlreadyOpened(true)
    }

}


    return(
        <div className='center b lh-copy pa3 ma3 dib br3 shadow modal' >
            
            
                
                

        <div className="modal_content">
            {checkTimer}
            <TimedResponse startTime={toggleTimer}/>
            <h2>{question}</h2>
            {console.log("answerColor: "+ answerColor)}
            {console.log("scoreValue: "+ addToScore)}
            {answerRender}
            {disableButton ? <button onClick={()=>{handleClose()}} className="grow white bg-black b pv2-l ph4 bn-ns br3 pa2 bn-l br5">Close</button> : null}
            <ScoreCalculation  cardScore= {cardScore} addToScore= {addToScore}/>
            




        </div>
        </div>

       
    )

} 

export default DetailedCardView;