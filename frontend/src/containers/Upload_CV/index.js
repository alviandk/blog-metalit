import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

class CV extends Component {
  state = {
    file: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      file: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('file', this.state.file);
    let url = 'http://127.0.0.1:8000/api/upload-cv/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <header className="py-5 px-2">
        <div className="container px-5">
          <h1>Upload File</h1>
          <form onSubmit={this.handleSubmit}>
            <br></br>         
            <input type="file"
                   id="file"
                   accept="pdf"
                   className="form-control" 
                   onChange={this.handleImageChange} required
              />
            <br></br>
            <button className="btn btn-info">Upload File</button>
          </form>
        </div>
      </header>
    );
  }
}

export default CV;