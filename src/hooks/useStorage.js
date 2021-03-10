import { useState, useEffect } from "react";
import {
  projectFirestore,
  projectStorage,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (file) {
      const storageRef = projectStorage.ref(file.name);
      const collectionRef = projectFirestore.collection("images");
      storageRef.put(file).on(
        "state_changed",
        (snap) => {
          let percentage = Math.round(
            (snap.bytesTransferred / snap.totalBytes) * 100
          );
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const downloadUrl = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          collectionRef.add({ downloadUrl, createdAt });
          setUrl(downloadUrl);
        }
      );
    }
  }, [file]);
  return { url, progress, error };
};

export default useStorage;
