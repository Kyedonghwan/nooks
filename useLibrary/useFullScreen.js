import {useRef } from 'react';

const useFullscreen = (callback) => {
    const element = useRef();
    const runCallBack = (isFull) => {
      if (callback && typeof callback === "function") {
        callback(isFull);
      }
    };
    const triggerFullScreen = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullScreen) {
          element.current.webkitRequestFullScreen();
        } else {
          element.current.msRequestFullScreen();
        }
        runCallBack(true);
      }
    };
  
    const triggerNotFullScreen = () => {
      document.exitFullscreen();
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen();
      } else if (document.webkitExitFullScreen) {
        document.webkitExitFullScreen();
      } else {
        document.msExitFullScreen();
      }
      runCallBack(false);
    };
  
    return { element, triggerFullScreen, triggerNotFullScreen };
  };


  export default useFullscreen;