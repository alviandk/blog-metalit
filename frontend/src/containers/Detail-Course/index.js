import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import { API_Course } from '../../constant';

function Detail() {
  const [post, setPost] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(API_Course + id )
      .then(res => {
        setPost(res.data)
      })
  });

  return (
          <header className="py-5 px-3">
            <div className="container px-5 py-5">
              <div class="jumbotron"> 
                <h1 class="mb-5">{post.course_name}</h1>   
                <div class="mb-5">
                  <img
                    src={post.cover_image}
                  />
                </div>
                <div class="mb-5">
                  {post.description}
                </div>
              </div>
            </div>
          </header>
  )
};

export default Detail;