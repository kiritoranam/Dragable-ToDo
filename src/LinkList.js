import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import DashBoard from './Dashboard';
// Define the node of the linked list
class Node {
    constructor(value) {
        debugger
        this.value = value;
        this.next = null;
    }
}

// Define the linked list
class LinkedList {
    constructor() {
        debugger
        this.head = null;
    }

    add(value) {
        debugger
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // v = 10, next = v = 5, next= v = 20, next= v = 7, next = null -->

    findLowestValue() {
        debugger
        if (!this.head) {
            return null; // Return null if the list is empty
        }

        let current = this.head;
        let lowestValue = current.value;

        while (current) {
            if (current.value < lowestValue) {
                lowestValue = current.value;
            }
            current = current.next;
        }

        return lowestValue;
    }
}

// Functional component to use the linked list and find the lowest value
const LowestValueComponent = () => {
    debugger
    const linkedList = new LinkedList();
    linkedList.add(10);
    linkedList.add(5);
    linkedList.add(20);
    linkedList.add(7);

    const lowestValue = linkedList.findLowestValue();

    return (
        <div>
            <h1>Lowest Value: {lowestValue}</h1>

            <Link to="Dashboard" >Dashboard</Link>

            {/* <BrowserRouter> */}
            {/* <Router> */}
            {/* <Routes>
                <Route path='/Dashboard' Component={DashBoard} />
            </Routes> */}
            {/* </BrowserRouter> */}
        </div>

    );
};

export default LowestValueComponent;
