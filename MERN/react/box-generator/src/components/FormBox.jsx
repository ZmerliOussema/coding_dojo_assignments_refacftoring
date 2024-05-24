import React, { useState } from 'react';

const FormBox = (props) => {
    const {colorList, setColorList} = props;
    const [color, setColor] = useState("")

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    const addColor = (e) => {
        e.preventDefault();
        
        setColorList([...colorList, color])

        setColor("")
    }

    return (
        <form onSubmit={addColor}>
            <label htmlFor="color">Color: </label>
            <input type="text" onChange={handleColor} value={color}/>
            <button>Add</button>
        </form>
    );
}

export default FormBox;
