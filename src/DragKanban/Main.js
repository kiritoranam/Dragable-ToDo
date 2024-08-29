// import React, { useState } from "react";

// const DragKanban = () => {
//     const [colums, setColumns] = useState([
//         { name: 'BackLog', duty: [{ id: "1", name: 'Task 1', status: "Pending" }] },
//         { name: 'In Progress', duty: [{ id: "1", name: 'Task 2', status: "Pending" }] },
//         { name: 'Done', duty: [{ id: "1", name: 'Task 3', status: "Pending" }] },
//     ])

//     const handleDragStart = (e, item, fromColumn) => {
//         e.dataTransfer.setData("item", JSON.stringify(item));
//         e.dataTransfer.setData("fromColumn", fromColumn);
//     };

//     const handleDrop = (e, toColumn) => {
//         debugger
//         const item = JSON.parse(e.dataTransfer.getData("item"));
//         const fromColumn = e.dataTransfer.getData("fromColumn");

//         if (fromColumn === toColumn) return;

//         setColumns((prevState) => {
//             debugger
//             const newFromColumn = prevState.filter((i) => {
//                 return i.duty.filter((ite) => {
//                     return ite !== item
//                 })
//             });
//             const newToColumn = [...prevState[toColumn], item];
//             return {
//                 ...prevState,
//                 [fromColumn]: newFromColumn,
//                 [toColumn]: newToColumn,
//             };
//         });
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };


//     return (
//         <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
//             {colums.map((column, index) => {
//                 return (
//                     <div key={index} style={{ border: '1px solid black', padding: '0rem 2rem 2rem 2rem', width: '20rem' }}
//                         onDrop={(e) => handleDrop(e, column.name)}
//                         onDragOver={handleDragOver}
//                     >
//                         <h3>{column.name}</h3>
//                         <div>
//                             {column.duty.map((item, index) => (
//                                 <div style={{ border: '1px solid black' }}
//                                     key={index}
//                                     draggable
//                                     onDragStart={(e) => handleDragStart(e, item, column.name)}
//                                 >
//                                     {item.name}
//                                 </div>
//                             )
//                             )}
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default DragKanban

import React, { useState } from "react";

const DragKanban = () => {
    const [columns, setColumns] = useState({
        todo: [
            { id: "1", task: "Task 1" }
        ],
        InProgess: [
            { id: "2", task: "Task 2" },
            { id: "4", task: "Task 4" },
        ],
        Done: [
            { id: "3", task: "Task 3" }
        ],
    });

    const handleDragStart = (e, id, fromColumn) => {
        e.dataTransfer.setData("item", id);
        e.dataTransfer.setData("fromColumn", fromColumn);
    };

    const handleDrop = (e, toColumn) => {
        const item = e.dataTransfer.getData("item");
        const fromColumn = e.dataTransfer.getData("fromColumn");

        let fromItemColumn = columns[fromColumn].find(data => data.id === item)

        setColumns((preColumn) => {
            debugger
            let fromFilterData = preColumn[fromColumn].filter((data, index) => data.id !== item)
            let toFilterData = [...preColumn[toColumn], fromItemColumn]

            return { ...preColumn, [fromColumn]: fromFilterData, [toColumn]: toFilterData }
        })
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const moveRight = (e, id, fromColumn, direct) => {
        let fromItemColumn = columns[fromColumn].find(data => data.id === id)
        let toColumn = ''
        let key = Object.keys(columns)
        for (let i = 0; i < key.length; i++) {
            debugger
            if (key[i] === fromColumn) {
                if (direct === "right") {
                    toColumn = key[i + 1] ? key[i + 1] : 0
                } else {
                    toColumn = key[i - 1] ? key[i - 1] : 0
                }
            }
        }

        if (toColumn) {

            setColumns((preColumn) => {
                let fromFilterData = preColumn[fromColumn].filter((data, index) => data.id !== id)
                let toFilterData = [...preColumn[toColumn], fromItemColumn]
                return { ...preColumn, [fromColumn]: fromFilterData, [toColumn]: toFilterData }
            })
        }

    };

    return (
        <div>
            <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
                {Object.keys(columns).map((column) => (
                    <div
                        className="column"
                        onDrop={(e) => handleDrop(e, column)}
                        onDragOver={handleDragOver}
                        key={column}
                    >
                        <h5>{column}</h5>
                        {columns[column].map((item, index) => (
                            <div
                                key={item.id}
                                className="item"
                                draggable={true}
                                onDragStart={(e) => handleDragStart(e, item.id, column)}
                            >
                                {item.task}

                                <button onClick={(e) => moveRight(e, item.id, column, "right")}>{"->"}</button>
                                <button onClick={(e) => moveRight(e, item.id, column, "left")}>{"<-"}</button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragKanban;
