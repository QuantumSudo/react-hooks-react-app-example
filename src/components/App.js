import React from "react";
import { format } from "date-fns";  // Utility to format dates
import ExampleComponent from "./ExampleComponent";  // Import ExampleComponent
import TestComponent from "./TestComponent";  // Import TestComponent

function App() {
  return (
    <div className="App">
      {/* Deliverable 1: Replace the content of h1 to just "Now" */}
      <h1>Now</h1>

      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the HTML,
        and also allows us to add in components, which are separate, self-contained
        chunks of JSX.
      </p>

      {/* Deliverable 2: Remove the second ExampleComponent */}
      <ExampleComponent />

      {/* Deliverable 3: Add the TestComponent below ExampleComponent */}
      <TestComponent />
    </div>
  );
}

export default App;
