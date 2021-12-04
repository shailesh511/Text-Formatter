import React,{useState} from 'react'

export default function Textfield(props) {
    const [text, setText] = useState("");
     
    const handleLoToUpper =()=>{
        var str=text.toUpperCase();       
        setText(str);
    }

    const handleUpToLower =()=>{
        var str=text.toLowerCase();
        setText(str);
    }
    const capitalizeWord =()=>{
   
        let ch = text.split("");
        for (let i = 0; i < text.length; i++) {
    
            // If first character of a word is found
            if ((i === 0 && ch[i] !== ' ' )||
                (ch[i] !== ' ' && ch[i - 1] === ' ')) {
    
                // If it is in lower-case
                if (ch[i] >= 'a' && ch[i] <= 'z') {
    
                    // Convert into Upper-case
                    ch[i] = String.fromCharCode(ch[i].charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0));
                }
            }
    
            // If apart from first character
            // Any one is in Upper-case
            else if (ch[i] >= 'A' && ch[i] <= 'Z')
    
                // Convert into Lower-Case
                ch[i] = String.fromCharCode(ch[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));          
        }
    
        // Convert the char array to equivalent String
        let st = (ch).join("");
        setText(st);
    }
    const removeSpaces =()=>{

    }
  
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    return (
        <>
        <div className="form-group container py-5">
        <label htmlFor="exampleFormControlTextarea1"><h3 style={{color:props.mode==='dark'?'white':'black'}}>Text Formatter- Word Counter, Upper to Lower case/ Lower to Upper Case / Capitalize word</h3></label>
        <textarea className="form-control py-10" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3" style={{backgroundColor:props.mode==='dark'?'rgb(35 49 72)':'white',height:'200px',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
     <div className="container">

        <button disabled={text.length===0} className="btn btn-success" onClick={handleLoToUpper}>Lower To Upper</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpToLower}>Upper To Lower</button>
        <button disabled={text.length===0} className="btn btn-info" onClick={capitalizeWord}>Capitalize Word</button>
        <button disabled={text.length===0} className="btn btn-dark" onClick={removeSpaces}>Remove Extra spaces</button>

     </div>
     <div className="container" >
         <p style={{color:props.mode==='dark'?'white':'black'}}> {text.split(/\s+/).filter((element)=> {return element.length!==0}).length} Words and {text.length} characters</p>
         <p style={{color:props.mode==='dark'?'white':'black'}}>Text Preview</p>
         <p style={{color:props.mode==='dark'?'white':'black'}}>{text}</p>
     </div>
     
      </>
    )
}
