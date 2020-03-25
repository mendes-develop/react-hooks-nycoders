
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.



Install db.json package globally in your computer

### sudo npm install -g json-server

### `json-server --watch db.json --port 3004`

Starts the json server on port 3004.<br />

Resources
http://localhost:3004/users

<br />

### React Hooks

The marketing pitch for Hooks is that they allow you to add state and other React features to function components. In reality, they're much more than that. We'll learn how to take an existing React app with class components, refactor it to functional components and implement the use of Hooks.

### What we'll learn

## useState
How the useState Hook allows you to add state to function components. 

## useEffect
How the useEffect Hook lets you add side effects to your function components. And replace lifecycle methods like: componentDidMount, componentDidUpdate and componentWillUnmount.



### If we have time:

## Context API and useContext
React Context API is a way to essentially create global variables that can be passed around in a React app. This is the alternative to "prop drilling", or passing props from grandparent to parent to child, and so on. Context is often touted as a simpler, lighter solution to using Redux for state management.

## useMemo
In React, memoization optimizes our components, avoiding complex re-rendering when it isn’t intended. useMemo has a similar usage in preventing unnecessary re-renders.

## useRef
Accessing the DOM nodes or React elements.