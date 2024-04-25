import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here...");

    

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
        // let newText = document.getElementById("myBox");
        // newText.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
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
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClickUpr} >convert to UPPERCASE</button> 
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClickLwr}>CONVERT TO lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClickClr}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCpyTxt}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length } words and {text.length} letters.</p>
            <p>{0.008 * text.split(" ").length} Minute read.</p>
            <h2>Preview</h2>
            <p>{text.length < 1 ?'Nothing to preview':text}</p>
        </div>
    </>
    
  )
}
