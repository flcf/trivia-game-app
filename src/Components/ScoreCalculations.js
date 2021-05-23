import React, {useState, useEffect} from 'react';

import ScoreCard from "./ScoreCard";

//can't be a local value, need global value
//like React Context so currentScore isn't always reset when this is called.

const ScoreCalculation = ({cardScore, addToScore}) => {


    const[scoreType, setScoreType] = useState(2);

    const [currentScore, setCurrentScore] = useState(0);


    useEffect(() => {   
        
        
          switch(addToScore) {
            case 0:
                subtractFromScore();
             
           case 1:
                addScore();
              
            case 2:
                return null;
              
            
              
    
         }
     



      },[addToScore]);


  

    const addScore =()=>{

        setCurrentScore(currentScore + cardScore);

        


    }

    const subtractFromScore =()=>{

        setCurrentScore(currentScore-cardScore);


    }


  

        return(

           
                <div>
                    
                    
                    <ScoreCard currentScore= {currentScore}/>


                    </div>

       
          
        )
    
    } 
    
    export default ScoreCalculation;