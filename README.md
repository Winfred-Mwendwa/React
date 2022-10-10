# React
React is a popular JavaScript library for building reusable, component-driven user interfaces for web pages or applications.  React combines HTML with JavaScript functionality into its own markup language called JSX. React also makes it easy to manage the flow of data throughout the application

React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. 

However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process.

The function call, ReactDOM.render(JSX, document.getElementById('root')) places your JSX into React's own lightweight representation of the DOM(Document Object Model). React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.

~Nested JSX must return a single element which wraps all other levels of nested elements. A div in this case will work, without which your JSX will not transpile.

~To put comments inside JSX, you use the syntax {/* */} to wrap around the comment text.

~ReactDOM is React's rendering API that allows you to render JSX components directly to the html DOM. ReactDOM.render(componentToRender, targetNode) must be called after the JSX component declarations.

~The naming convention for all HTML attributes and event references in JSX become camelCase; use className to define an html class in JSX

~Any JSX element can be written with a self-closing tag (<div /> ;no content can be added to this div), and every element must be closed. 

~One of two ways to create a React component is by using a JavaScript function. This creates a stateless component i.e. one which can receive data and render it but does not manage changes to the data. To create a component using a function, simply write a JS function that returns either JSX or null.
Using the React component architecture, the UI of a page can be constructed from several isolated components, making the code base more maintainable.
Function names must start with a capital letter in React.

~The other way to define a React component is using the ES6 class syntax

~You can compose multiple React components and render them together by making them child components of a parent component. when react encounters the child component (component name in a self closing tag < />) it will render its markup at its current position.


