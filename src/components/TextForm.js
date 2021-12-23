import React, { useState } from 'react'

export default function TextForm (props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleLcClick = () => {
        setText(text.toLowerCase())
    }


    const [text, setText] = useState("");
    // text = "new Text" // Wrong way to change the state
    // setText("New Text"); // Correct way to change the state

    return (
        <>
            <div className='container my-3'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} rows="10" placeholder='Enter Text Here'></textarea>
                </div>
                <button className="btn btn-primary btn-sm" onClick={handleUpClick}>Upper Case</button>
                <button className="btn btn-primary btn-sm ms-2" onClick={handleLcClick}>Lower Case</button>
            </div>
            <div className="container my2">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>

                <h4>Preview</h4>
                <p>{text}</p>

            </div>
        </>
    );
}
