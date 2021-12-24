import React, { useState } from 'react'

export default function TextForm (props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleLcClick = () => {
        setText(text.toLowerCase());
    }

    const handleClear = () => {
        setText("");
    }

    const handleCapitalize = () => {
        try {
            setText(text[0].toUpperCase() + text.substring(1, text.length).toLowerCase());
        } catch (error) {
            console.log("Enter Some Text to Analyze");
        }

    }

    const handleCapitalizeEachWordRemoveExtraSpaces = () => {
        try {
            let myarr = text.split(/[ ]+/);
            let newText = '';
            for (let i = 0; i < myarr.length; i++) {
                if (i < myarr.length - 1) {
                    newText += myarr[i][0].toUpperCase() + myarr[i].substring(1, myarr[i].length).toLowerCase() + " ";
                } else {
                    newText += myarr[i][0].toUpperCase() + myarr[i].substring(1, myarr[i].length).toLowerCase();
                }

            }
            setText(newText);
        } catch (errot) {
            console.log("Enter Some Text To Analyze");
        }
    }

    const handleCopyToClipboard = () => {
        try {
            let myBox = document.getElementById("myBox");
            myBox.select()
            navigator.clipboard.writeText(myBox.value)
        } catch (errot) {
            console.log("Enter Text To Copy");
        }
    }

    const handleExtraSpaces = () => {
        try {
            setText(text.split(/[ ]+/).join(" "))
        } catch (error) {
            console.log("Enter Text");
        }
    }

    const [text, setText] = useState("");
    // text = "new Text" // Wrong way to change the state
    // setText("New Text"); // Correct way to change the state

    return (
        <>
            <div className='container my-3'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} rows="12" placeholder='Enter Text Here'></textarea>
                </div>
                <button className="btn btn-primary btn-sm" onClick={handleUpClick}>Upper Case</button>
                <button className="btn btn-primary btn-sm ms-2" onClick={handleLcClick}>Lower Case</button>
                <button className="btn btn-primary btn-sm ms-2" onClick={handleCapitalize}>Capitalize</button>
                <button className="btn btn-primary btn-sm ms-2" onClick={handleCapitalizeEachWordRemoveExtraSpaces}>Capitalize Each Word</button>
                <button className="btn btn-primary btn-sm ms-2" onClick={handleCopyToClipboard}>Copy To Clipboard</button>
                <button className="btn btn-primary btn-sm ms-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-danger btn-sm ms-2" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my2">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h4>{text.length === 0 ? "Enter Text To Preview" : "Preview"}</h4>
                <p>{text}</p>
            </div>
        </>
    );
}
