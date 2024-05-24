import React from 'react';

const DisplayBox = (props) => {
    const {colorList} = props
    return (
        <div>
            {
                colorList.map((color, idx) => (
                    <div key={idx} style={{
                        display: "inline-block",
                        margin: "10px",
                        height: "50px",
                        width: "50px",
                        backgroundColor: color
                    }}>

                    </div>
                ))
            }
        </div>
    );
}

export default DisplayBox;
