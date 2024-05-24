import React from 'react';
import { useState } from 'react';

const TodoDisplay = (props) => {
    const {todoList} = props
    const [isChecked, setIsChecked] = useState(false)
    const [checkedItems, setCheckedItems] = useState([])
    
    const handleCheck = (e, index) => {
        if (e.target.value) {
            setCheckedItems([...checkedItems, index])
        } else {
            setCheckedItems(checkedItems.filter(item => item !== index))
        }
        setIsChecked(!isChecked)
    }

    const findCheckedItem = (item) => {
        return checkedItems.includes(item)
    }

    return (
        <div>
            <p>
                {
                    todoList.map((item, idx) => (
                        <div key={idx} style={{textDecoration: findCheckedItem(item)? "line-through": "none"}}>
                            {
                                <p>
                                    {item} <input type="checkbox" onChange={() => handleCheck(idx)}/>
                                </p>
                            }
                            
                        </div>
                    ))
                }
            </p>
        </div>
    );
}

export default TodoDisplay;
