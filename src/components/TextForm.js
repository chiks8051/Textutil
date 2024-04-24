import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here...");

    console.log(props)

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const  handleOnClickUpr =() =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to uppercase','success');
    };

    const handleOnClickLwr = () =>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to lowercase','success');
    }

    const handleOnClickClr = () =>{
        let newText = '';
        setText(newText);
        props.showAlert('Text cleared!','success');
    }
    const handleCpyTxt = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert('Text copied!','success');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces is removed!','success');
    }

  return (
    <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control"  id="myBox" onChange={handleOnChange} value = {text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleOnClickUpr} >convert to UPPERCASE</button> 
            <button className="btn btn-primary mx-2" onClick={handleOnClickLwr}>CONVERT TO lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleOnClickClr}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCpyTxt}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length } words and {text.length} letters.</p>
            <p>{0.008 * text.split(" ").length} Minute read.</p>
            <h2>Preview</h2>
            <p>{text.length < 1 ?'Enter your text in above input to preview here':text}</p>
        </div>
    </>
    
  )
}
