import {useState} from 'react'
import { Title } from "./components/Title/title";
import UploadForm from "./components/dataUpload/uploadForm";
import ImageGrid from "./components/imageGrid/imageGrid";
import Modal from './components/modal/modal';
import "./App.css";


function App() {
    const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
