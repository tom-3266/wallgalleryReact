import React, { useState } from "react";
import Progressbar from "../progressBar/progressbar";
import "./uploadForm.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const fileType = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && fileType.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };
  console.log(file);
  return (
    <form className="input">
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        {file && <Progressbar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
