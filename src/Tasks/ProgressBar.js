import React, { useState } from "react"

const ProgressBar = ({ value }) => {
    const [count, setCount] = useState(0)
    const [firstName, setFirstName] = useState('')
    function handleCount() {
        setCount(count + 1)
    }
    function submit(e) {
        debugger
        e.preventDefault()
        if (!firstName) {
            document.getElementById("errr").innerHTML = "Mandotary Field !!!"
        }

        const arr = [1, 2, 3, 4, 5];
        const sum = arr.reduce((total, num) => total + num);
        console.log(sum / arr.length);
    }

    return (
        <>
            <div style={{ width: '100%', height: '20px', background: "black" }}>
                <div style={{ width: `${80}%`, height: '15px', backgroundColor: "orange", padding: '5px', borderRadius: '5px' }}></div>
            </div>

            <div>
                <button id="hov" onMouseEnter={handleCount}></button>
                {count}
            </div>
        </>
        // <div>
        //     <form onSubmit={submit}>
        //         <div>
        //             <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        //             <span id="errr" style={{ color: 'red' }}></span>
        //         </div>
        //         <button type="submit" >Submit</button>
        //     </form>
        // </div>
    )
}

export default ProgressBar