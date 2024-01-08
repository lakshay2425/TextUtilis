import React, {useState} from 'react';

const TextForm = (props) => {
    const [text, setText] = useState("");
    const [font, setFont] = useState("Algerian");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to lowercase", "success");
    }
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to uppercase", "success");
    }
    const handleSpace = () =>{
        let newText = text.split(" ").join("");
        setText(newText);
        props.showAlert("Unwanted Space removed", "success");
    }
    const handleReverse = () => {
        let newText = text.split("").reverse("").join("");
        setText(newText);
        props.showAlert("Text Reversed", "success");
    }
    const handleClearText = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }
    const handleFont = () => {
        const font_family = ['TimesNewRoman', 'Arial' , 'Times', 'serif' ,'Georgia' , 'cursive', 'fantasy'];
        let number = Math.floor(Math.random() * font_family.length);
        let font = font_family[number];
        setFont(font);
        props.showAlert("Text Font Converted", "success");
    }
  return (
    <>  
        <div className ="mb-3">
            <h1>{props.heading}</h1>
            <div className="container my-3">
                <textarea style={{ fontFamily : font, backgroundColor : props.mode ==='light' ? 'white' : '#041d38' , color : props.mode ==='light' ? 'black' : 'white' }} className="form-control" value={text} onChange={handleOnChange} id="TextBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick = {handleUpperCase} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick = {handleLowerCase} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick = {handleSpace} >Remove Space between words</button>
            <button className="btn btn-primary mx-2" onClick = {handleReverse} >Reverse the text</button>
            <button className="btn btn-primary mx-2" onClick = {handleClearText} >Clear text</button>
            <button className="btn btn-primary mx-2" onClick = {handleFont} >Change font family</button>
        </div>
        <div className="container">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Character</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter some text in the above textbox to preview it here"}</p>
        </div>
    </>
  )
}

export default TextForm;
