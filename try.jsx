{/*nested elements must be wrapped with a div tag in order to transpile; () not necessary*/}

const JSX=(
    <div>
      <h1>I am learning React</h1>
      <p>So far I am quite enjoying it, I was a little scared to start to be honest. Why I am learning:</p>
      <ul>
         <li>Confidence in applying for frontend jobs:used im several company stacks</li>
         <li>In line with my motto of cntinuous learning</li>
         <li>Be able to create awesome React apps</li>
      </ul>
    </div>);
    
    {/*use ReactDOM.render(componentToRender,targetNode) to render JSX components directly to the html DOM*/}
    const JSX1 = (
        <div>
          <h1>Hello World</h1>
          <p>Lets render this to the DOM</p>
        </div>
      );
      
      ReactDOM.render(JSX,document.getElementById('challenge-node'))

{/*use camel case for all html attributes and event references */}
const JSX2 = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );

{/*create a stateless React component using a Javascript function */}
const MyComponent = function() {
  
  return (
    <div>some string of text</div>

  );

}

{/*Create a React component using the ES6 class syntax */}
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
{/*This creates an ES6 class Kitten which extends the React.Component class. 
So the Kitten class now has access to many useful React features, such as local state and lifecycle hooks.
the Kitten class has a constructor defined within it that calls super(). 
It uses super() to call the constructor of the parent class, in this case React.Component.
 It is best practice to call a component's constructor with super, and pass props to both.
 This makes sure the component is initialized properly.  */}


{/*craete a compoent with composition */}
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        
        <ChildComponent/>

      </div>
    );
  }
};

{/*use react to render neted components */}
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
      <TypesOfFruit />

      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits/>

        { /* Change code above this line */ }
      </div>
    );
  }
};

class Fruits1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <NonCitrus />
        <Citrus />

        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits1/>

        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

{/*render a class/functional component to the DOM */}
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
       <Fruits/>
       <Vegetables/>
        


        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

{/*create react component from scratch */}
// Change code below this line
class MyComponent1 extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
       <h1>My First React Component!</h1>
      </div>

    );
  }
}
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));

{/*pass props to functional components */}
<div>

<p>The current date is: {props.date}</p>

</div>


class Calendar extends React.Component {
constructor(props) {
super(props);
}
render() {
return (
<div>
  <h3>What date is it?</h3>
  { /* Change code below this line */ }
  <CurrentDate date={Date()}/>
  { /* Change code above this line */ }
</div>
);
}
};

{/*pass an array as props */}
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(',')}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "hang out with alice"]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};