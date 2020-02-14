
import React, { useEffect, useState } from 'react'
import Spin from 'antd/lib/spin';
import isEmpty from 'lodash/isEmpty'
import Icon from 'antd/lib/icon'
import Progress from 'antd/lib/progress'
import firebase from "firebase";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';


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
      {/* {url} */}
      <div className="uploader">
      <CustomUploadButton
            accept="*"
            name="file"
            randomizeFilename
            storageRef={firebase.storage().ref("file")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
            multiple
            style={{backgroundColor: 'steelblue', color: 'white', padding:20, height: "150px", borderRadius: 4}}
        >
          <Icon type="cloud-upload" /> Upload 
        </ CustomUploadButton >
        
        </div>
        <Progress percent={progress}  />
    </section>
  )
}

export default Home
