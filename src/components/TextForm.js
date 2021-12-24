import React, { useState } from 'react'

export default function TextForm (props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        try {
            if (text.length > 0) {
                setText(text.toUpperCase());
                props.showAlert("Action Successfully Applied", 'success')
            } else {
                props.showAlert("Enter Something to Apply Changes", 'warning')
            }
        } catch (error) {
            props.showAlert("Some Error Occur Try Again", 'danger')
        }
    }

    const handleLcClick = () => {
        try {
            if (text.length > 0) {
                setText(text.toLowerCase());
                props.showAlert("Action Successfully Applied", 'success')
            } else {
                props.showAlert("Enter Something to Apply Changes", 'warning')
            }
        } catch (error) {
            props.showAlert("Some Error Occur Try Again", 'danger')
        }
    }

    const handleClear = () => {
        try {
            if (text.length > 0) {
                props.showAlert("Action Successfully Applied", 'success')
                setText("");
            } else {
                props.showAlert("Container Already Clear", 'warning')
            }
        } catch (error) {
            props.showAlert("Some Error Occur Try Again", 'danger')
        }
    }

    const handleCapitalize = () => {
        try {
            if (text.length > 0) {
                props.showAlert("Action Successfully Applied", 'success')
                setText(text[0].toUpperCase() + text.substring(1, text.length).toLowerCase());
            } else {
                props.showAlert("Enter Something to Apply Changes", 'warning')
            }
        } catch (error) {
            props.showAlert("Some Error Occur Try Again", 'danger')
        }

    }

    const handleCapitalizeEachWordRemoveExtraSpaces = () => {
        try {
            if (text.length > 0) {
                props.showAlert("Action Successfully Applied", 'success')
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
            } else {
                props.showAlert("Enter Something to Apply Changes", 'warning')
            }
        } catch (errot) {
            props.showAlert("Some Error Occur Try Again", 'danger')
        }
    }

    const handleCopyToClipboard = () => {
        try {
            if (text.length > 0) {
                props.showAlert("Action Successfully Applied", 'success')
                let myBox = document.getElementById("myBox");
                myBox.select()
                navigator.clipboard.writeText(myBox.value)
            } else {
                props.showAlert("Enter Something to Apply Changes", 'warning')
            }
        } catch (errot) {
            props.showAlert("Some Error Occur Try Again", 'danger')
        }
    }

    const handleExtraSpaces = () => {
        try {
            if (text.length > 0) {
                props.showAlert("Action Successfully Applied", 'success')
                setText(text.split(/[ ]+/).join(" "))
            } else {
                props.showAlert("Enter Something to Apply Changes", 'warning')
            }
        } catch (error) {
            props.showAlert("Some Error Occur Try Again", 'danger')
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
