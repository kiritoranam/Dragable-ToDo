
import React, { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import DashBoard from './Dashboard';

// Define Node component to represent each node in the linked list
const Node = ({ data }) => {
    return <div>{data}</div>;
};

// Define LinkedList component
const LinkedList = () => {
    // State to hold the head of the linked list
    const [head, setHead] = useState(null);

    // Function to insert a new node at the beginning of the linked list
    const insertNode = (value) => {
        debugger
        const newNode = { data: value, next: head };
        setHead(newNode);
    }; //6,7,8,9,10,11,12,13

    return (
        <div>
            {/* Button to insert a new node */}
            <button onClick={() => insertNode(Math.floor(Math.random() * 100))}>
                Insert Node
            </button>
            {/* Render each node in the linked list */}
            {head && (
                <div>
                    <h2>Linked List:</h2>
                    {renderList(head)}
                </div>
            )}
        </div>
    );
};

// Helper function to render the linked list
const renderList = (node) => {
    debugger
    const nodes = [];
    let current = node;
    while (current) {
        nodes.push(<Node key={current.data} data={current.data} />);
        current = current.next;
    }
    return nodes;
};

// App component
const InsertNewNode = () => {
    return (
        <div>
            <h5>Linked List with React Functional Component</h5>
            <LinkedList />
            <Link to="/Dashboard" >Dashboard</Link>

            {/* <BrowserRouter> */}
            {/* <Router> */}
            <Routes>
                <Route path='/Dashboard' element={<DashBoard />} />
            </Routes>
            {/* </Router> */}
            {/* </BrowserRouter> */}
        </div>

    );
};

export default InsertNewNode;
