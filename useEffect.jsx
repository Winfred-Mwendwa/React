//A "side effect" is anything that affects something outside the scope of the function being executed. 
//These can be, say, a network request, which has your code communicating with a third party,
//Data fetching, setting up a subscription, and manually changing the DOM in React components
//a pure function is one with no side effects
//The useEffect Hook lets you perform side effects in function components
//There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do
//Cleaning up side effects in React is a way of stopping side effects that do not need to be executed anymore e.g. when a component unmounts

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

//function passed to useEffect is the 'effect'
//using this Hook, you tell React that your component needs to do something after render.

//by default, anything returned from useEffect is regarded as a cleanup function
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

//In some cases, cleaning up or applying the effect after every render might create a performance problem
//You can tell React to skip applying an effect if certain values haven’t changed between re-renders. 
//To do so, pass an array as an optional second argument to useEffect:

useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

//If you use this optimization, make sure the array includes all values from the component scope 
//(such as props and state) that change over time and that are used by the effect.

//If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument.
// This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.
//If you pass an empty array ([]), the props and state inside the effect will always have their initial values.
 
