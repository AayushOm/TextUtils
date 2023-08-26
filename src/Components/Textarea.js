import React, {useState} from 'react'

export default function Textarea(props) {
    const handleUpClick=()=>{
        let upp=text.toUpperCase();
        setText(upp);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick=()=>{
        let upp=text.toLowerCase();
        setText(upp);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick=()=>{
        let upp="";
        setText(upp);
        props.showAlert("Text cleared","success");
    }
    const handleInClick=()=>{
        let up="";
        let i=0;
        for(i=0;i<text.length;i++)
        {
            if(text[i].toUpperCase()===text[i])
            {
                up+=text[i].toLowerCase();
            }
            else{
                up+=text[i].toUpperCase();
            }
        }
        setText(up);
        props.showAlert("Converted to Inversecase","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState("");
  return (
    <>
        <div style={{color: props.mode==="light"?"black":"white"}}>
            <h1 >{props.title}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"white":"#af9e9e", color: props.mode==="light"?"black":"white"}} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleInClick}>Convert to InverseCase</button>

        </div>
        <div className='container my-3' style={{color: props.mode==="light"?"black":"white"}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
        <p>Estimated read time is {0.008*text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} minutes.</p>
        </div>
    </>
  ) 
}
