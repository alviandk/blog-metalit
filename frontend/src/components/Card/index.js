import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article.image.url;
  return (
    <Link to={`/article/${article.slug}`} className="uk-link-reset">
      <div class="card mb-4">
        <div>
          <img
            class="card-img-top lazy-image"
            src={imageUrl}
            alt={article.image.url}
            height="100"
          />
        </div>
        <div class="card-body">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>
       <div class="card-footer text-muted">
        <p>
          Posted by {article.author.name} in category <b class="text-capitalize">
          {article.category.name}</b> on <Moment format="MMM Do YYYY">
          {article.published_at}</Moment>
        </p>    
       </div>
    </div>
    </Link>
  );
};

export default Card;