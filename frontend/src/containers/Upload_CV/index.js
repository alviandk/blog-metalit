import React, { Fragment, useEffect, useState, useRef } from "react";
import axios from "axios";
import Progress from '../../components/Progress';
import "../../styles.css";
import { Upload_CV  } from '../../constant';
import Alert from 'react-bootstrap/Alert'

const CV = () => {
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState();
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const Reset = React.useRef()
  
  const onChange = e => {
    const file = e.target.files[0];
    setFile(file);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const options = {
      onUploadProgress: progressEvent => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        if (percent < 100) {
          setUploadPercentage(percent);
        }
      },
    };

    axios.post(Upload_CV, formData, options,{
      headers: {
          'Content-Type': 'multipart/form-data'
         },
      })
      .then(res => {
        setUploadPercentage(100);
        setTimeout(() => {
          setUploadPercentage(0);
        }, 1000);
        setMessage('File Uploaded');
      })

      .catch(error => {
        if (error.response.status === 400){
          setError(error.response.data.file[0])
        }
        else {
          setError(error.response);
        }
        setUploadPercentage(0);
    });
    Reset.current.value = "";
    setFile(null);
    setError();
    setMessage();
  };

  return (
    <Fragment>
      <section className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {error ?
                <Alert variant="danger" dismissible>
                  {error}
                </Alert> : null
              }
              {message ?
                <Alert variant="success">
                  {message}
                </Alert> : null
              }
              <div className="biru">
                <form className="py-5 px-5" onSubmit={onSubmit}>  
                  <h3 className="mb-5 text-center text-white">Upload CV</h3>
                  <input type='file'
                         className='form-control'
                         onChange={onChange}
                         ref={Reset}
                  />
                  <br></br>
                  {uploadPercentage > 0 && (
                    <Progress percentage={uploadPercentage} />
                  )}
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