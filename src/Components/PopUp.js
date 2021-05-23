import React from "react";


//receive prop from scorecard --> if scorecard hits certain threshold, will send off a prop to trigger this value! 
const PopUp = (props) => {

    const maxScore = 160;

    const finalScore = props;

    const finalVerdict =()=>{

        finalScore < 160? <p>So close try again!</p> : <p>Perfect Score! Great job!</p>

    }

    return(
        <div className='center b lh-copy bg-purple pa3 ma3 dib grow br3 shadow '>

            {finalVerdict}


        </div>

       
    )

} 

export default PopUp;