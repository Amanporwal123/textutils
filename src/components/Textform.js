import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpclick = ()=>{
        console.log("convert uppercase")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase" , "success")
    }
    const handleDownclick = ()=>{
      console.log("convert lowercase")
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase" , "success")
  }
    const handleOnchange= (event)=>{
        setText(event.target.value)
    }
    const handleclear = ()=>{
      let newText = "";
      setText(newText);
  }
  const handleCopy = ()=>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const [text , setText] = useState('');
//   text = "kdeef"   wrong way to change the state
// setText("new text"); //correct way
  return (
   <>
   <div className="container">
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="mybox"  onChange={handleOnchange} value={text} rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-3" onClick={handleUpclick} >convert to uppercase</button>
  <button className="btn btn-primary mx-3" onClick={handleDownclick} >convert to lowercase</button>
  <button className="btn btn-primary mx-3" onClick={handleclear} >Clear Text</button>
  <button className="btn btn-primary mx-3" onClick={handleCopy} >Copy Text</button>
  
</div>
<div className="container my-4">
  <h1>YOur text summary</h1>
  <p>{text.split(" ").length} words and {text.length} character</p>
  <p>{0.008*text.split(" ").length } Minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>
</>
  )
}
