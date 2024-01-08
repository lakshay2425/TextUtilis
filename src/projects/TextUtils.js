import React from 'react';
import Navbar from '../components/NavBar';
import TextForm from '../components/TextForm';

const TextUtils = () => {
  return (
    <>
      <Navbar title = "TextUtils"/>
      <div className="container my-3">
        <TextForm heading = "Enter text here to analyze"/>
      </div>
    </>
  )
}

export default TextUtils
