import React, { Component } from "react";
import { API_Course } from '../../constant';

class Course extends Component {
    state = {
        course : []
    };


    async componentDidMount() {
        document.title = "Metalit - Course";
        try { 
            const res = await fetch(API_Course);
            const course = await res.json();
            this.setState({
                course
            });
        } catch (e) {
            console.log(e);
            this.setState({ errorMessage: "Course Tidak Tersedia" });
        }
    }

    render() {
        const { errorMessage } = this.state;
        return(
          <header className="py-5 px-3">
            <div className="container px-5">
              <h1>Course</h1>
              {errorMessage ? <p className="py-2">{errorMessage}</p> : null}
              <div>
                <div class="card-body">
                  {this.state.course.map(item => (
                    <div key={item.id}>
                      <h2>{item.title}</h2>  
                      <p>{item.description}</p>                  
                      </div>
                  ))}
                </div>
              </div>
            </div>

          </header>
       );
    }
}

export default Course;