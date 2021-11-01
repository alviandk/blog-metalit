import React, { Component } from 'react';
import { API_Course } from '../../constant';

class Course extends Component {
    state = {
        course : []
    };


    async componentDidMount() {
        try { 
            const res = await fetch(API_Course);
            const course = await res.json();
            this.setState({
                course
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return(
          <div className="py-4">
            <div className="container px-5">
              <div className="row">
                <div className="col-md-8">
                  <div className="card-body">
                    {this.state.course.map(item => (
                      <div key={item.id}>
                        <h1>{item.title}</h1>  
                        <p>{item.description}</p>                  
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
       );
    }
}

export default Course;