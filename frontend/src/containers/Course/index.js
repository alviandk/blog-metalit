import React, { Component } from "react";
import { API_Course } from '../../constant';
import { Link } from "react-router-dom";

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

              <div class="row"> 
                {this.state.course.map(item => (
                  <div key={item.id} class="col-md-4 mb-5">
                    <Link to={`/course/${item.slug}`} className="uk-link-reset">
                      <div class="card h-100">
                        <div class="placeholder-item placeholder-loading">
                          <img class="card-img-top lazy-image" src={item.cover_image}></img>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">{item.course_name}</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </header>
       );
    }
}

export default Course;