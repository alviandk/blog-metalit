import React from "react";
import { Link } from "react-router-dom";

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
          <h2 class="card-title">{article.title}</h2>
       </div>
       <div class="card-footer text-muted">
        <p>Posted in category : {article.category.name}</p>
       </div>
    </div>
    </Link>
  );
};

export default Card;