import React, { useState } from 'react';

const Node = ({ data }) => {
    return <div>{data}</div>;
};


// React component to represent the linked list
function LinkedListComponent() {
    const [list, setList] = useState(null);
    const [head, setHead] = useState(null);

    const handleAddNode = () => {
        const value = prompt('Enter data for the new node:');
        debugger
        if (value !== null) {
            const newNode = { data: value, next: list };
            setList(newNode);
        }
    };
    const renderList = (node) => {
        debugger
        const nodes = [];
        let current = node;
        while (current) {
            nodes.push(<Node key={current.data} data={current.data} />)
            current = current.next;
        }
        return nodes;
    };
    // explain stack with example in react js

    const handleDeleteNode = () => {
        const value = prompt('Enter data of the node to delete:');
        if (value !== null) {
            debugger
            let current = list;
            let prev = null;

            while (current !== null) {
                if (current.data === value) {
                    if (prev === null) {
                        current = current.next;
                        setList(current)
                    } else {
                        prev.next = current.next;
                        setList({ ...list })
                    }
                    return;
                }
                prev = current;
                current = current.next;
            }
        }
    };
    console.log(123, list);


    // {
    //     "data": "7",
    //         "next": {
    //         "data": "5",
    //             "next": null
    //     }
    // }

    const lowestValue = () => {
        debugger
        if (!list) {
            return "no Value"
        } else {
            let current = list;

            let low = current.data
            while (current) {
                if (current.data > low) {
                    low = current.data
                }

                current = current.next
            }
            return low
        }
    }

    return (
        <div>
            <button onClick={() => handleAddNode()}>Add Node</button>
            <button onClick={() => handleDeleteNode()}>Delete Node</button>
            {/* <button onClick={() => lowestValue()}>lowest Node</button> */}
            {lowestValue()}
            <ul>
                {list && (
                    <div>
                        <h2>Linked List:</h2>
                        {renderList(list)}
                    </div>
                )}
            </ul>
        </div>
    );
}


export default LinkedListComponent;
