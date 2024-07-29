import React from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';

// Define the nodes
const nodes = [
  // Start Node
  { id: '1', data: { label: 'Start' }, position: { x: 250, y: 5 } },
  
  // Input Node
  { id: '2', data: { label: 'Input: Name, DOB, Gender, Pincode' }, position: { x: 250, y: 100 } },
  
  // Check Age Node
  { id: '3', data: { label: 'Check Age' }, position: { x: 250, y: 200 } },
  
  // Age > 30 Node
  { id: '4', data: { label: 'Age > 30' }, position: { x: 100, y: 300 } },
  
  // Age < 30 Node
  { id: '5', data: { label: 'Age < 30' }, position: { x: 400, y: 300 } },
  
  // Update DB Node for Age < 30
  { id: '6', data: { label: 'Update DB: status = \'loan_approved\' and dob_less_than_30 = \'Y\'' }, position: { x: 400, y: 400 } },
  
  // End Node for Age < 30
  { id: '7', data: { label: 'End' }, position: { x: 400, y: 500 } },
  
  // Update DB Node for Age > 30
  { id: '8', data: { label: 'Update DB: dob_less_than_30 = \'N\'' }, position: { x: 100, y: 400 } },
  
  // Gender Check Node
  { id: '9', data: { label: 'Check Gender' }, position: { x: 100, y: 500 } },
  
  // Male Node
  { id: '10', data: { label: 'Gender = Male' }, position: { x: -200, y: 600 } },
  
  // Female Node
  { id: '11', data: { label: 'Gender = Female' }, position: { x: 350, y: 600 } },

  
  // Update DB Node for Female
  { id: '12', data: { label: 'Update DB: status = \'loan_approved\'' }, position: { x: 350, y: 700 } },
    // End Node for female
    { id: '22', data: { label: 'End' }, position: { x: 350, y: 800 } },
  
  // Pincode Check Node
  { id: '13', data: { label: 'Check Pincode' }, position: { x: -200, y: 700 } },
  
  // Pincode Starts with '40' Node
  { id: '14', data: { label: 'Pincode starts with \'40\'' }, position: { x: -250, y: 800 } },
  
  // Pincode Else Node
  { id: '15', data: { label: 'Pincode Else' }, position: { x: 50, y: 800 } },
  
  // Update DB Node for Pincode Starts with '40'
  { id: '17', data: { label: 'Update DB: status = \'loan_approval_required\'' }, position: { x: -250, y: 900 } },
  
  // End Node for Pincode Starts with '40'
  { id: '18', data: { label: 'End' }, position: { x: -250, y: 1000 } },

  // Update DB Node for Pincode Else
  { id: '20', data: { label: 'Update DB: status = \'loan_approved\'' }, position: { x: 50, y: 900 } },

  // End Node for Pincode Else
  { id: '21', data: { label: 'End' }, position: { x: 50, y: 1000 } },
  
];

// Define the edges
const edges = [
  { id: 'e1', source: '1', target: '2' },
  { id: 'e2', source: '2', target: '3' },
  { id: 'e3', source: '3', target: '4'},
  { id: 'e4', source: '3', target: '5'},
  { id: 'e5', source: '5', target: '6' },
  { id: 'e6', source: '6', target: '7' },
  { id: 'e7', source: '4', target: '8' },
  { id: 'e8', source: '8', target: '9' },
  { id: 'e9', source: '9', target: '10' },
  { id: 'e10', source: '9', target: '11'},
  { id: 'e19', source: '12', target: '22'  },// Connect Female to End Node
  { id: 'e11', source: '10', target: '13' }, // Male leads to Pincode Check Node
  { id: 'e12', source: '13', target: '14' },
  { id: 'e13', source: '13', target: '15' },
  { id: 'e14', source: '14', target: '17' }, // Pincode Starts with '40' leads to Update DB Node
  { id: 'e15', source: '17', target: '18' }, // Update DB Node for Pincode Starts with '40' leads to End

  { id: 'e16', source: '15', target: '20' }, // Pincode Else leads to Update DB Node
  { id: 'e17', source: '20', target: '21' }, // Update DB Node for Pincode Else leads to End

  { id: 'e18', source: '11', target: '12' },

];

// Define the end node
const endNode = { id: '21', data: { label: 'End' }, position: { x: 150, y: 1000 } };

const ConditionalWorkflowChart = () => (
  <div style={{ height: 1000 }}>
    <ReactFlow nodes={[...nodes, endNode]} edges={edges} fitView>
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  </div>
);

export default ConditionalWorkflowChart;
