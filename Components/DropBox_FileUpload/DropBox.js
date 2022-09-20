import React, { useRef, useState } from 'react';
import axios from 'axios';
import ProgressBarLine from '../ProgressBar/ProgressBarLine';

const DropBox = () => {
  const [state, setState] = useState(true);
  const [loading, setloading] = useState(true);
  const [Progress, setProgress] = useState(0);
  const [uploadedFile, setuploadedFile] = useState(null);
  const inputRef = useRef(null);

  const clickInput = () => {
    inputRef.current.click();
  };

  const onFileChange = (e) => {
    const upload = e.target.files;
    if (upload.length < 1) return;
    const fileUpload = new FormData();
    fileUpload.append('file', upload[0]);
    axios({
      method: 'post',
      url: 'http://localhost:5000/upload',
      data: fileUpload,
      onUploadProgress: (uploadEvt) => {
        const percentCompleted = Math.round(
          (uploadEvt.loaded * 100) / uploadEvt.total
        );
        setProgress(percentCompleted);
      },
    });
  };
  return (
    <div>
      <header className="App-header">
        <div className="drop-zone" onClick={clickInput}>
          <span className="drop-zone__prompt">
            Drop file here or click to upload
          </span>
          <input
            type="file"
            name="file"
            className="drop-zone__input"
            ref={inputRef}
            onChange={onFileChange}
          />
        </div>
      </header>
      <div className="progress">
        <ProgressBarLine
          value={Progress}
          min={0}
          max={100}
          strokeWidth={5}
          trailWidth={5}
          styles={{
            path: {
              stroke: '#17b978',
            },
            trail: {
              stroke: '#ffffff',
            },
            text: {
              fill: '#ffffff',
              textAlign: 'center',
              fontSize: '12px',
            },
          }}
        />
      </div>
    </div>
  );
};

export default DropBox;
