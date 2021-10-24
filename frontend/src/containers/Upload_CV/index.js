import React, { Fragment, useState } from 'react';
import Message from '../../components/Message';
import Progress from '../../components/Progress';
import axios from 'axios';
import "../../styles.css";
import { Upload_CV  } from '../../constant';

const CV = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    const file = e.target.files[0];
    setFile(file);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    const filesFormats = ["application/pdf"];
    const isRightFormat = filesFormats.includes(file.type);
    if (!isRightFormat) {
      setMessage('You can only upload pdf files');
    }
    else{
      if (file.size > 3072 * 1024){
        setMessage('File size cannot exceed more than 3 MB');
      }
      else{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
          const res = await axios.post(Upload_CV, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
              const persen = parseInt(Math.round((progressEvent.loaded*100)/
                                       progressEvent.total));
              setUploadPercentage(persen);
            }
          });
          setMessage('File Uploaded');
        } catch (err) {
          if (err.response.status === 500) {
            setMessage('There was a problem with the server');
          } else {
            setMessage(err.response.data.msg);
          }
        }
      }
    }
  };

  return (
    <Fragment>
      <section className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {message ? <Message msg={message}/> : null}
              <div className="biru">
                <form className="py-5 px-5" onSubmit={onSubmit}>  
                  <h3 className="mb-5 text-center text-white">Upload CV</h3>
                  <input type='file'
                         className='form-control mb-3'
                         id='customFile'
                         onChange={onChange}
                  />
                  {uploadPercentage ? <Progress percentage={uploadPercentage} /> : null}
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
