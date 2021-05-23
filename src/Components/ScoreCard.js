import AnimatedNumber from "animated-number-react";
import React, {useState} from 'react';



//takes input from detailed card view 

const ScoreCard = ({ currentScore}) => {


    
        


    

    

        return(

           

                    <div className='center b f2 lh-copy bg-purple w-60 ma2 dib br3 shadow'>

                    <p>Current Score</p>
                    <p>{currentScore}</p>


                    </div>

       
          
        )
    
    } 
    
    export default ScoreCard;