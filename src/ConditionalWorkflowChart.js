import React from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';
import userData from './userData'; // Import the user data

// Function to determine the color of a node
const getNodeColor = (nodeId, userData) => {


  // Default to gray for all nodes
  let color = 'gray';

  // Check conditions to determine if the color should be green
  if(userData && !(Object.keys(userData).length==0)){
   if (nodeId === '1') { // Start node
    color = 'green';
  } else if (nodeId === '2') { // Input Node (check user data)
    color = 'green';
  } else if (nodeId === '3') { // Check Age
    color = 'green'; // Always green (if this should be conditional, adjust accordingly)
  } else if (nodeId === '4') { // Age > 30
    if (userData.age > 30) color = 'green';
  } else if (nodeId === '5') { // Age < 30
    if (userData.age <= 30) color = 'green';
  } else if (nodeId === '6') { // Update DB Node for Age < 30
    if (userData.age <=30) color = 'green';
  } else if (nodeId === '7') { // End Node for Age < 30
    if (userData.age <= 30) color = 'green';
  } 
  if(userData.age>30){
    if (nodeId === '8') { // Update DB Node for Age > 30
    if (userData.age > 30) color = 'green';
  } else if (nodeId === '9') { // Check Gender
    color = 'green'; // Always gray (if this should be conditional, adjust accordingly)
  } else if (nodeId === '10') { // Male Node
    if (userData.gender === 'Male') color = 'green';
  } else if (nodeId === '11') { // Female Node
    if (userData.gender === 'Female') color = 'green';
  } else if (nodeId === '12') { // Update DB Node for Female
    if (userData.gender === 'Female') color = 'green';
  } 
  else if (nodeId === '22') { // END for female case
    if (userData.gender === 'Female') color = 'green';
}if (userData.gender === 'Male')
{ if (nodeId === '13') { // Check Pincode
    color = 'green'; // Always gray (if this should be conditional, adjust accordingly)
  } else if (nodeId === '14') { // Pincode Starts with '40'
    if (userData.pincode.startsWith('40')) color = 'green';
  } else if (nodeId === '15') { // Pincode Else
    if (!userData.pincode.startsWith('40')) color = 'green';
  } else if (nodeId === '17') { // Update DB Node for Pincode Starts with '40'
    if (userData.pincode.startsWith('40')) color = 'green';
  } else if (nodeId === '18') { // End Node for Pincode Starts with '40'
    if (userData.pincode.startsWith('40')) color = 'green';
  } else if (nodeId === '20') { // Update DB Node for Pincode Else
    if (!userData.pincode.startsWith('40')) color = 'green';
  } else if (nodeId === '21') { // End Node for Pincode Else
    if (!userData.pincode.startsWith('40')) color = 'green';
  }
}
  }
}
  return color; // Return the determined color
};



// Define the nodes
const baseNodes = [
  { id: '1', data: { label: 'Start' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Input: Name, DOB, Gender, Pincode' }, position: { x: 250, y: 100 } },
  { id: '3', data: { label: 'Check Age' }, position: { x: 250, y: 200 } },
  { id: '4', data: { label: 'Age > 30' }, position: { x: 100, y: 300 } },
  { id: '5', data: { label: 'Age < 30' }, position: { x: 400, y: 300 } },
  { id: '6', data: { label: 'Update DB: status = \'loan_approved\' and dob_less_than_30 = \'Y\'' }, position: { x: 400, y: 400 } },
  { id: '7', data: { label: 'End' }, position: { x: 400, y: 500 } },
  { id: '8', data: { label: 'Update DB: dob_less_than_30 = \'N\'' }, position: { x: 100, y: 400 } },
  { id: '9', data: { label: 'Check Gender' }, position: { x: 100, y: 500 } },
  { id: '10', data: { label: 'Gender = Male' }, position: { x: -50, y: 600 } },
  { id: '11', data: { label: 'Gender = Female' }, position: { x: 350, y: 600 } },
  { id: '12', data: { label: 'Update DB: status = \'loan_approved\'' }, position: { x: 350, y: 700 } },
  { id: '22', data: { label: 'End' }, position: { x: 350, y: 800 } },
  { id: '13', data: { label: 'Check Pincode' }, position: { x: -50, y: 700 } },
  { id: '14', data: { label: 'Pincode starts with \'40\'' }, position: { x: -300, y: 800 } },
  { id: '15', data: { label: 'Pincode Else' }, position: { x: 150, y: 800 } },
  { id: '17', data: { label: 'Update DB: status = \'loan_approval_required\'' }, position: { x: -300, y: 900 } },
  { id: '18', data: { label: 'End' }, position: { x: -300, y: 1000 } },
  { id: '20', data: { label: 'Update DB: status = \'loan_approved\'' }, position: { x: 150, y: 900 } },
  { id: '21', data: { label: 'End' }, position: { x: 150, y: 1000 } },
];

// Define the edges
const edges = [
  { id: 'e1', source: '1', target: '2' },
  { id: 'e2', source: '2', target: '3' },
  { id: 'e3', source: '3', target: '4' },
  { id: 'e4', source: '3', target: '5' },
  { id: 'e5', source: '5', target: '6' },
  { id: 'e6', source: '6', target: '7' },
  { id: 'e7', source: '4', target: '8' },
  { id: 'e8', source: '8', target: '9' },
  { id: 'e9', source: '9', target: '10' },
  { id: 'e10', source: '9', target: '11' },
  { id: 'e11', source: '10', target: '13' },
  { id: 'e12', source: '13', target: '14' },
  { id: 'e13', source: '13', target: '15' },
  { id: 'e14', source: '14', target: '17' },
  { id: 'e15', source: '17', target: '18' },
  { id: 'e16', source: '15', target: '20' },
  { id: 'e17', source: '20', target: '21' },
  { id: 'e18', source: '11', target: '12' },
  { id: 'e19', source: '12', target: '22' },
];

const ConditionalWorkflowChart = ({ userData }) => {
  // Check if userData is provided and valid
  const isValidUserData = userData && typeof userData === 'object';

  // Dynamically set node colors based on user data
  const nodes = baseNodes.map(node => ({
    ...node,
    style: { background: getNodeColor(node.id, isValidUserData ? userData : null) }
  }));

  return (
    <div style={{ height: 1000, position: 'relative' }}>
      {/* Heading */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        
      </div>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default ConditionalWorkflowChart;
