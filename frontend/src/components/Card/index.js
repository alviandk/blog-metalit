import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Card = ({ article }) => {
  const imageUrl = article.image;
  return (
    <Link to={`/article/${article.slug}`} className="uk-link-reset">
      <div className="card mb-4">
        <div>
          <img
            className="card-img-top lazy-image"
            src={imageUrl}
            alt={imageUrl}
            height="100"
          />
        </div>
        <div className="card-body">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>
        <div className="card-footer text-muted">
          <p>
            Posted by {article.author.name} in category <b className="text-capitalize">
            {article.Category.name}</b> on <Moment format="MMM Do YYYY">
            {article.published_at}</Moment>
          </p>    
        </div>
      </div>
    </Link>
  );
};

export default Card;