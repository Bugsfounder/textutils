import React, { useState } from 'react'

export default function About () {

    const [myStyle, setMyStyle] = useState(
        {
            color: 'black',
            backgroundColor: 'white',
        }
    );

    const [buttonText, setButtonText] = useState('Enable Dark Mode')

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle(
                {
                    color: 'black',
                    backgroundColor: 'white',
                }
            );
            setButtonText("Enable Dark Mode");
            document.body.style.backgroundColor = 'white'
        } else {
            setMyStyle(
                {
                    color: 'white',
                    backgroundColor: '#1d254f',
                    border: '1px solid white'
                }
            );
            setButtonText("Disable Dark Mode");
            document.body.style.backgroundColor = '#1d255f'
        }

    }

    return (
        <div className='container my-3' style={myStyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Yout Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Analyze Yout Text</strong> It is shown Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Free to use</strong> It is Textutils is a free character counter tools that provides instant characters count & word count statistics for a given text. Text reports the number of words and charactes. Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Browser Compatible</strong> This word counter software works in any web brownsers wuch as chrome, firefox, internet explorer, sarari, opera. It suits to count charactes in facebook, blog, books, excel documents, pdf documents, essays, etc.
                        </div>
                    </div>
                </div>
                <button onClick={toggleStyle} className="my-3 btn btn-primary">{buttonText}</button>
            </div>
        </div>
    )
}
