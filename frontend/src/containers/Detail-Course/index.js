import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import { API_Course } from '../../constant';
import ReactHtmlParser from "react-html-parser";

function Detail() {
  const [course, setCourse] = useState({});
  const [syllabus, setSyllabus] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(API_Course + id )
      .then(res => {
        setCourse(res.data)
        setSyllabus(res.data.syllabus)
        console.log(syllabus)
      })
  });

  useEffect(() => {
     document.title = "Blog - Course";  
  }, []);

  return (
          <header className="py-5 px-3">
            <div className="container px-5 py-5">
              <div class="jumbotron"> 
                <h1>Silabus : {course.course_name}</h1>   
                <p>{ReactHtmlParser(course.description)}</p>
                {syllabus.map(item => (
                  <div key={item.id}>
                    <h2>Materi Pembelajaran</h2>
                    {ReactHtmlParser(item.objectives)}
                    <h2>Teknologi yang digunakan pada Materi Ini</h2>
                    {ReactHtmlParser(item.technologies)}
                    <h2>Prasyarat Mengikuti Materi Ini</h2>
                    {ReactHtmlParser(item.prerequisites)}
                  </div>
                ))}
            
              </div>
            </div>
          </header>
  )
};

export default Detail;