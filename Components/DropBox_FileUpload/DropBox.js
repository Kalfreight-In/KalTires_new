import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ProgressBarLine from '../ProgressBar/ProgressBarLine';

const DropBox = () => {
  //   const [state, setState] = useState(true);
  //   const [loading, setloading] = useState(true);
  const [Error, setError] = useState(true);
  // const [Progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [select, setSelect] = useState(false);
  const [service, setservice] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  //   const [uploadedFile, setuploadedFile] = useState(null);
  const inputRef = useRef(null);

  const clickInput = () => {
    inputRef.current.click();
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');

    setError(false);

    setButtonText('Submit');
  };

  function handleSubmit(event) {
    event.preventDefault();
    const url = 'http://localhost:5000/load';
    // const formData = new FormData();

    // formData.append('file', file);

    // formData.append('fileName', file.name);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const data = {
      site: 'ssoam@kalfreight.com',
      name,
      email,
      message,
      service,
      file,
      //   location,
    };

    axios
      .post(url, data, config)
      .then(() => [setSuccess(true), resetForm()])
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
        {file ? <img href={file} /> : null}

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex justify-center flex-col items-center
        "
        >
          <div
            className="w-full flex justify-center items-center   mb-6 md:mb-0 lg:pt-4 pt-0"
            id="input_placeholder"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              className="appearance-none  font-medium block w-full h-full placeholder-white  bg-red-600  text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              id="grid-first-name"
              type="text"
              value={name}
              placeholder="Name"
              required
            />
          </div>
          <div
            className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
            id="input_placeholder"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none font-medium block  w-full h-full   bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              id="emailValidate"
              type="email"
              value={email}
              placeholder="Email Id"
              required
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            />
          </div>
          <div
            className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4 "
            id="input_placeholder"
          >
            <div className="w-full relative    appearance-none block h-full  bg-red-600  focus:bg-red-600 rounded  leading-tight focus:outline-none text-white text-base">
              <select
                name="Department"
                // className="block font-Helvetica w-10/12  h-full bg-opacity-30 focus:bg-red-600   bg-red-600  text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                className="w-full appearance-none block h-full  bg-red-600  focus:bg-red-600 rounded  border py-3 px-4  leading-tight focus:outline-none text-white text-base font-medium  p-2.5 "
                onChange={(e) => setservice(e.target.value)}
                type="select"
                value={service}
                required
                onClick={() => {
                  setSelect(!select);
                }}
              >
                <option value="Department" hidden>
                  Department
                </option>

                <option value="Administration">Administration</option>

                <option value="WareHouse Manager">WareHouse Manager</option>
                <option value="Service Technician">Service Technician</option>
                <option value="Delivery Drivers">Delivery Drivers</option>

                <option value="Inventory Control">Inventory Control</option>
                <option value="Operations">Operations</option>
                {/* <option value="speciality">Specialty</option>
          <option value="enquiry">Enquiry</option> */}
                <option value="Sales">Sales</option>
                <option value="others">Other</option>
              </select>
              <div className="absolute z-30 text-white font-xl right-5 bottom-5">
                {select ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </div>
          </div>
          <div
            className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
            id="input_placeholder"
          >
            <input
              onChange={(e) => setMessage(e.target.value)}
              className="appearance-none font-medium block w-full h-full  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-non"
              id="grid-first-name"
              type="number"
              value={message}
              placeholder="Year Of Experience"
              required
            />
          </div>
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
            className="text-white rounded font-bold text-xl  h-12 p-4 w-48 mt-2 flex justify-center items-center font-Helvetica bg-red-500 "
            type="submit"
            id="submitmain"
          >
            {buttonText}
          </button>
        </form>
      </header>
      {/* <div className="progress">
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
      </div> */}
    </div>
  );
};

export default DropBox;
