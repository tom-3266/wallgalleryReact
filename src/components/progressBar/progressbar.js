import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import './progressbar.css'

const Progressbar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);
  useEffect(()=>{
    if(url){
      setFile(null)
    }
  },[url,setFile])
  return (
    <div id="progressbar">
      <div style={{ width: progress + "%" }}></div>
    </div>
  );
};
export default Progressbar;
