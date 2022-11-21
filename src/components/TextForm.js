import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("UpperCase was Clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Coverted to Upper case ',"success");
    }
    const handleLoClick = () => {
        //console.log("UpperCase was Clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Coverted to Lower case ',"success");
    }
    const handleClearClick = () => {
        //console.log("Clear Text: " + text);
        let newText = '';
        setText(newText);
        props.showAlert('Text cleared',"success");
    }
    const handleCopy = () => {
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copy To Clipboard ',"success");
    
    }
    const handleOnChange = (event) => {
        //console.log("OnChange was Clicked");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1> {props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}}  id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lowerCase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>
            </div>
            <div className='container' mx-2 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2> Your text Summary </h2>
                <p> {text.split(" ").length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").length}  Minutes read </p>
                <h3> Preview </h3>
                <p> {text.length>0?text: 'Enter something in the textbox above to preview here'}</p>
            </div>
        </>
    )
}
