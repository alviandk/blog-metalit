import React, { Fragment, useState } from 'react';
import Message from '../../components/Message';
import Progress from '../../components/Progress';
import axios from 'axios';
import "../../styles.css";

const CV = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/upload-cv/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });
      
      setTimeout(() => setUploadPercentage(0), 10000);
      setMessage('File Uploaded');
      
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
  };

  return (
    <Fragment>
      <section className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {message ? <Message msg={message} /> : null}
              <div className="biru">
                <form className="py-5 px-5" onSubmit={onSubmit}>  
                  <h3 className="mb-5 text-center text-white">Upload CV</h3>
                  <input type='file'
                         className='form-control mb-3'
                         id='customFile'
                         onChange={onChange}
                  />
                  <Progress percentage={uploadPercentage} />
                  <br></br>
                  <button className="btn btn-light">Upload File</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CV;