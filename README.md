JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup directly inside your JS code. It's not actually HTML — it's syntactic sugar that gets compiled into regular JavaScript function calls.

--Components:. A component is a piece of the UI (user interface) that has its own logic and appearance. 

-- Writing markup with JSX : close <br> tags as well in react
JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper

--Adding styles : In React, you specify a CSS class with className. It works the same way as the HTML class attribute:

<img className="avatar" />
Then you write the CSS rules for it in a separate CSS file:

/* In your CSS */
.avatar {
  border-radius: 50%;
}

--Rendering lists 

--state: memory of components,jabtak state change nhi hoti tabtak compoennt woi dekhta rehta haii

--A Hook is a special function in React whose name starts with use. Hooks let you "hook into" React features — like state and lifecycle behavior — from inside a function component.
Before Hooks existed, only class components could do things like remember data (state) or run code at specific times (like when a component loads). Hooks brought those same abilities to function components, which are simpler to write and read.


 JSX is a syntax extension, while React is a JavaScript library.

 Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>:

 Adding interactivityy less gooo

 Adding event handlers 
To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag. 

