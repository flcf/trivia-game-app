import React, {useState}  from "react";
import Timer from "react-compound-timer";



//TODO: add callback when out of time or clicks stopped! should display new button "OK". ALso if time runs out, get pop up and card closes. 


const TimedResponse = ({toggleTimer}) => {
  const startingTime= 60000;


  return (
    <div className='center b f2 lh-copy bg-purple pa3 ma3 dib br3 shadow mb5' >
      <Timer initialTime={startingTime} direction="backward" startImmediately={false}>
        {(start, resume, stop, reset) => (

          <React.Fragment>
            <Timer.Minutes  formatValue={value => `0${value} `} /> :
            <Timer.Seconds formatValue={value => `${(value < 10 ? `0${value}` : value)}`}/> 
            {toggleTimer? start: stop }
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
};

export default TimedResponse;
