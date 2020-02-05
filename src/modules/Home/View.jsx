
import React, { useEffect, useState } from 'react'
import Spin from 'antd/lib/spin';
import isEmpty from 'lodash/isEmpty'
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

const Home = props => {
  
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const [url, setURL] = useState("");
  const handleUploadStart = () => {
    setUploading(true)
    setProgress(0)
  }  
  const handleProgress = progress => {
    setProgress(progress)
  }
  const handleUploadError = error => {
    setUploading(false)
    console.error(error);
  };
  const handleUploadSuccess = name => {
    setFileName(name)
    setProgress(100)
    setUploading(false)
    firebase
      .storage()
      .ref("file")
      .child(name)
      .getDownloadURL()
      .then(url => {
        setURL(url)
        console.log(url, 'url')
      });
      
  };
  return (
    <section className="home-section">
      Home
      {url}
      <FileUploader
            accept="*"
            name="file"
            randomizeFilename
            storageRef={firebase.storage().ref("file")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
          />
    </section>
  )
}

export default Home
