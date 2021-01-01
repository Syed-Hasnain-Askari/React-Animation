import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';
function App() {
  const wrapper = useWebAnimations({
    keyframes: [
      {backgroundPosition:'0% 0%'},
      {backgroundPosition:'100% 0%'},
      
  ],
  timing: {
    duration: 2000,
    iterations: Infinity,
    direction:"normal",
    easing: "linear",
  }
  });
  const clouds = useWebAnimations({
    keyframes: [
      {backgroundPosition:'250% 0%'},
      {backgroundPosition:'-150% 0%'},
     
    ],
    timing: {
      duration: 3000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const hourse = useWebAnimations({
    keyframes: [
      {backgroundPosition:'0% 0%'},
      {backgroundPosition:'0% 0%'},
     
    ],
    timing: {
      duration: 30000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  function Speed(){
    hourse.animate({
      keyframes: [
        {backgroundPosition:'0% 0%'},
        {backgroundPosition:'20% 0%'},
        {backgroundPosition:'40% 0%'},
        {backgroundPosition:'60% 0%'},
        {backgroundPosition:'80% 0%'},
        
      ],
      timing: { duration: 30500, fill: "forwards" },
   
  }); 
    clouds.getAnimation().updatePlaybackRate(clouds.getAnimation().playbackRate*1.25);
    wrapper.getAnimation().updatePlaybackRate(wrapper.getAnimation().playbackRate*1.25);
  }
  const reset = () => {
    clouds.getAnimation().playbackRate = 1;
    wrapper.getAnimation().playbackRate = 1;
  };
  return (
    <div className="wrapper" ref={wrapper.ref}>
       <div className="clouds" ref={clouds.ref}></div>
      <div className="hourse" ref={hourse.ref} >
      <img src="https://www.animatedimages.org/data/media/217/animated-horse-image-0262.gif" border="0" alt="animated-horse-image-0262" />
      </div>
      <button className="btn" onClick={Speed}>Click to speed up</button>
      <button className="btn" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
