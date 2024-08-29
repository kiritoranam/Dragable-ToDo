import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";

const CheckBox = () => {

    const [parent, setParent] = useState(false);
    const [child, setChild] = useState({
        child1: false,
        child2: false,
        child3: false,
    });

    const handleParent = (e) => {
        setParent(e.target.checked)
        setChild({
            child1: e.target.checked,
            child2: e.target.checked,
            child3: e.target.checked,
        })
    }

    const handleChild = (e) => {
        const { name, checked } = e.target;
        setChild({ ...child, [name]: checked })
        if (Object.values(child).every(Boolean)) {
            setParent(false)
        }
    }

    return (
        <div>
            <div>
                <input type="checkbox" id="Parent" name="Parent" checked={parent} onChange={handleParent} />
                <label for="Parent"> Parent</label><br />
            </div>
            <div>
                <input type="checkbox" id="child1" name="child1" checked={child.child1} onChange={handleChild} />
                <label for="child1"> Child 1</label><br />
                <input type="checkbox" id="child2" name="child2" checked={child.child2} onChange={handleChild} />
                <label for="child2"> Child 2</label><br />
                <input type="checkbox" id="child3" name="child3" checked={child.child3} onChange={handleChild} />
                <label for="child3"> Child 3</label><br />
            </div>
        </div>
    )
}

export default CheckBox

