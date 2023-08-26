// import React,{useState} from 'react'
import React from 'react'


export default function About(props) {

    // const [myStyle,setMyStyle]=useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    const myStyle={
        color: props.mode==="dark"?"white":"black",
        backgroundColor: props.mode==="dark"?"#042743":"white",
        border: "2px",
        borderColor: props.mode==="dark"?"white":"black"

    }

   
  return (
    <div className='container my3' style={myStyle}>
        <h1 className='my3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is the first item's accordion body.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is the second item's accordion body.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}> 
                    This is the third item's accordion body.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
