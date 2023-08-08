import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Navbar from './Navbar';

export default function Form(props) {
  const Uppercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert to Uppercase", "success  ");
  };

  const Lowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Convert to Lowercase", "success  ");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('Enter Text');

  // Function to extract the email from the textarea
  const handleExtractEmail = () => {
    const emailRegex = /[\w\.-]+@[\w\.-]+\.\w+/g;
    const emailsFound = text.match(emailRegex) || [];
    const extractedEmails = emailsFound.join(', ');
    setText(extractedEmails);
    props.showAlert("Here is Email", "success  ");
  };

  const mode = props.mode || 'light';
  const green = props.green || 'light';

  const Color = green === 'success' ? 'light' : 'success';

  return (
    <>
   
    <div className='container'  style={{color: props.mode==='dark'? 'white' :'black'}}>
          <h1>{props.heading}</h1>

      <div className="mb-1" >
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea
        style={{backgroundColor: mode, color: props.mode==='dark'? 'light' :'black'}}
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnChange}
          rows={3}
          defaultValue={""}
        />
        <button className="btn btn-primary mx-1 mt-3" onClick={Uppercase}>Uppercase</button>
        <button className="btn btn-secondary mx-2 mt-3" onClick={Lowercase}>LowerCase</button>
        <button className="btn btn-primary mx-2 mt-3" onClick={handleExtractEmail}>Extract Email</button>
      </div>
      </div>
      <div className="container my-1" style={{color: props.mode==='dark'? 'white' :'black'}}>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      {/* <div style={{color: props.mode==='dark'? 'white' :'black'}}>
        <div className={`form-check form-switch text-${props.green==='light'? 'success' :'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={handleGreenMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
        </div>
      </div> */}

    </>
  );
}