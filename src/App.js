import React from 'react';
import ConditionalWorkflowChart from './ConditionalWorkflowChart'; // Ensure this path is correct
import userData from './userData'; // Import the user data
import './App.css'; // Optional, for any additional styling

function App() {
  return (
    <div className="App">
      <h1>Workflow Chart</h1>
      <ConditionalWorkflowChart userData={userData} /> {/* Pass userData as a prop */}
    </div>
  );
}

export default App;
