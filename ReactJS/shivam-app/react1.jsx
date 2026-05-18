/* React has faster loading due to virtual DOM and efficient updates, while Angular's two-way data binding can lead to slower performance in complex applications. React's component-based architecture allows for better code reuse and maintainability, whereas Angular's monolithic structure can make it harder to manage large codebases. React has a larger community and more third-party libraries, while Angular has a steeper learning curve due to its extensive features and concepts. Ultimately, the choice between React and Angular depends on the specific needs of the project and the preferences of the development team.
React is a JavaScript library for building user interfaces, while Angular is a full-fledged framework for building web applications. React focuses on the view layer and allows developers to create reusable UI components, while Angular provides a complete solution for building complex applications with features like dependency injection, routing, and form handling. React uses a virtual DOM to optimize rendering performance, while Angular uses a real DOM which can lead to slower updates in large applications. React has a larger ecosystem and community support, while Angular has a steeper learning curve due to its extensive features and concepts. Ultimately, the choice between React and Angular depends on the specific needs of the project and the preferences of the development team.
high industry demand for React developers due to its popularity and widespread adoption in the web development community. React's component-based architecture and efficient rendering make it a preferred choice for building modern web applications, leading to increased job opportunities for developers skilled in React. Additionally, many companies are adopting React for their projects, further driving the demand for React developers in the industry.
React uses JSX (JavaScript XML) which allows developers to write HTML-like syntax within JavaScript, making it easier to create and manage UI components. Angular, on the other hand, uses TypeScript, a statically typed superset of JavaScript, which provides additional features like type checking and enhanced tooling. React's use of JSX can lead to a more intuitive and seamless development experience for those familiar with HTML, while Angular's use of TypeScript can provide better code organization and maintainability for larger applications.
JSX to JS syntax transformation is handled by Babel, which compiles JSX syntax into regular JavaScript that can be executed by the browser.
function name should start with capital letter because React treats components starting with lowercase letters as DOM tags. By convention, React components are named with a capital letter to distinguish them from regular HTML elements and to indicate that they are custom components. This allows React to correctly identify and render the component when it is used in JSX.


*/

function Counter() {
  const [count, setCount] = React.useState(0);  
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;

    
}

function StyledComponent() {
  const style = {
    color: 'blue',
    fontSize: '20px',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '5px'
  };

  return <div style={style}>This is a styled component.</div>
};





