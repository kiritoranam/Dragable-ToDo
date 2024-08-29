import react, { useState } from 'react';

const TransferList = () => {

    const [list1, setList1] = useState([
        { name: "Item 1", selected: false },
        { name: "Item 2", selected: false },
        { name: "Item 3", selected: false },
    ])
    const [list2, setList2] = useState([
        { name: "Item 4", selected: false },
        { name: "Item 5", selected: false },
    ])

    const handleChange = (e, itemName) => {
        let a = [...list1]
        a.map(item => {
            return item.name === itemName && (item.selected = e.target.checked)
        })
        setList1(a)
    }
    const handleChange2 = (e, itemName) => {
        let a = [...list2]
        a.map(item => {
            return item.name === itemName && (item.selected = e.target.checked)
        })
        setList2(a)
    }

    const handleTranser = () => {
        const itemsToTransfer = list1.filter(item => item.selected);
        const remainingItems = list1.filter(item => !item.selected);
        setList1(remainingItems);
        setList2([...list2, ...itemsToTransfer])

    }
    const handleTranserLeft = () => {
        const itemsToTransfer = list2.filter(item => item.selected);
        const remainingItems = list2.filter(item => !item.selected);
        setList2(remainingItems);
        setList1([...list1, ...itemsToTransfer])
    }

    return (
        <div>
            <div>
                <h1>List One</h1>

                {list1.map((item, index) => {
                    return (
                        <div key={index}>
                            <input type="checkbox" id={item.name} name={item.name} checked={item.selected} onChange={(e) => handleChange(e, item.name)} />
                            <label for={item.name}>{item.name}</label><br />
                        </div>
                    )
                })}
            </div>
            <div>
                <h1>List Two</h1>

                {list2.map((item, index) => {
                    return (
                        <div>
                            <input type="checkbox" id={item.name} name={item.name} checked={item.selected} onChange={(e) => handleChange2(e, item.name)} />
                            <label for={item.name}>{item.name}</label><br />
                        </div>
                    )
                })}
            </div>

            <button onClick={handleTranser} >{"Transfer Right >>"}</button>
            <button onClick={handleTranserLeft} >{"Transfer Left <<"}</button>
        </div>
    )
}

export default TransferList