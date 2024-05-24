import React from 'react';

const TabButton = (props) => {
    const {tab, setTab} = props

    const handleTab = (n) => {
        setTab(`Tab ${n} content is showing here.`)
    }
    return (
        <div>
            <button onClick={() => handleTab(props.number)}>Tab {props.number}</button>
        </div>
    );
}

export default TabButton;
