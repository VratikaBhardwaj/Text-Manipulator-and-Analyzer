import React, { useState } from "react";

export default function TextForm(props) {

    const myStyle = {
        color: "white",
        backgroundColor: "Black",
        padding: "10px",
        fontfamily: ["Sofia", "Lobster"]
    }

    const handleUpClick = () => {
        console.log("upper case was clicked" + text);
        let uptext = text.toUpperCase();
        settext(uptext);
    };

    const handleLoClick = () => {
        console.log("Lower case was clicked" + text);
        let Lotext = text.toLowerCase();
        settext(Lotext);
    };

    const clearClick = () => {
        let cleantext = '';
        settext(cleantext);

    }

    const [text, settext] = useState("My uppercase text");
    // now for changing the text into settext
    // text = "my new test"   (wrong way)

    const handleOnChange = (event) => {
        console.log("on change");
        settext(event.target.value);
    };

    return (
        <>
            <div className="container box">
                <div className="container">
                    <h1 class="text-center" style={myStyle}>Text Analyzer</h1>

                    <h3>{props.heading}</h3>
                    <div className="container mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-dark mx-3" onClick={handleUpClick}> Convert to UPPER case </button>
                        <button className="btn btn-dark mx-3" onClick={handleLoClick}> Convert to lower case </button>
                        <button className="btn btn-dark mx-3" onClick={clearClick}> Clear the textarea </button>
                    </div>
                </div>

                <div className="container my-3">
                    <h3>Your Text Summary</h3>
                    <p>
                        {text.split(" ").length} words and {text.length} characters
                    </p>
                    <h3>Time Period</h3>
                    <p>
                        The time period of reading the words is {0.008 * text.split(" ").length}
                    </p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}
