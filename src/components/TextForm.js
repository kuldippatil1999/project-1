import React,{useState} from 'react'
export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was click" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was click" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const handleOnchange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleClearClick = (event)=>{
        // console.log("On change");
        let newText='';
        setText(newText)
        props.showAlert("Text Cleard!","success")
    }
    const [text, setText] = useState('');
    return (
        <>     <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
                 <h1>{props.heading}  </h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
     </div>
             <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                 <h2>Your text summary</h2>
                 <p><b>{text.split(" ").length} Words and {text.length} Charectors</b></p>
                 <p><b> {0.008* text.split(" ").length} Minutes read</b></p>
                 <h3>Preview</h3>
                 <p>{text.length>0?text:'Enter somthing in the textbox above to preview here'}</p>
             </div>

     </>

)
}
