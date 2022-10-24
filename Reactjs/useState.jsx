//state is used to store data from a component, which might change over time
//hooks were introduced to allow functional components to use/hook into react features such as state without writing a class
//useState

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  //the only variable to the usestate hook is the initial state that's used only in the first render
  //initial state can be a number, string, array, object
  //usestate returns a pair of values;the current state('count' in this case) and a function that updates it (setCount)
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p> //access count directly by enclosing in {}
      <button onClick={() => setCount(count + 1)}>  //update the value of count and re-render
        Click me
      </button>
    </div>
  );
}

export default Example;