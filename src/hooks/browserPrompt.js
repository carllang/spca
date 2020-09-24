import { useEffect } from 'react';

export default function useBrowserPrompt() {
  useEffect(() => {
    window.addEventListener('beforeunload', (e) => {
      console.log('here');
      // Cancel the event
      e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
      // Chrome requires returnValue to be set
      e.returnValue = '';
    });
    return function cleanup() {
      window.addEventListener('beforeunload', (e) => {
        // the absence of a returnValue property on the event will guarantee the browser unload happens
        delete e.returnValue;
      });
    };
  });
}
