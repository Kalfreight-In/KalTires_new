import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import ProgressBarLine from '../ProgressBar/ProgressBarLine';

const DropBox = () => {
  //   const [state, setState] = useState(true);
  //   const [loading, setloading] = useState(true);
  const [Error, setError] = useState(true);
  const [Progress, setProgress] = useState(0);
  const [file, setFile] = useState();

  //   const [uploadedFile, setuploadedFile] = useState(null);
  const inputRef = useRef(null);

  const clickInput = () => {
    inputRef.current.click();
  };

  function handleSubmit(event) {
    event.preventDefault();
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();

    formData.append('file', file);

    formData.append('fileName', file.name);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const data = {
      site: 'ssoam@kalfreight.com',
      file,
      email: 'email@mail.com',
      //   location,
    };

    axios
      .post('http://localhost:5000/load', formData, config)
      .then((uploadEvt) => {
        const percentCompleted = Math.round(
          (uploadEvt.loaded * 100) / uploadEvt.total
        );
        setProgress(percentCompleted);
      })
      .catch(() => {
        setError(true);
        console.log('Message not sent');
      });
  }

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div>
      <header className="App-header">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="drop-zone" onClick={clickInput}>
            <span className="drop-zone__prompt">
              Drop file here or click to upload
            </span>
            <input
              type="file"
              name="file"
              className="drop-zone__input"
              ref={inputRef}
              onChange={handleChange}
            />
          </div>
          <button
            className="text-black bg-white rounded h-12 p-4 w-48 mt-2 flex justify-center items-center font-Helvetica"
            type="submit"
            id="submitmain"
          >
            submit
          </button>
        </form>
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
