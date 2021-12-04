import React from "react";
import Card from "../Card";
import Category_Nav from "../Category_Nav";
import Query from "../Query";
import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";
import "../../index.css";
import ARTICLES_QUERY from "../../queries/article/articles";
import { useQuery } from '@apollo/client';

const Articles = ({ articles }) => {
  const displayArticle = articles.edges.map((edge) => {
      return <Card article={edge.node} key={`article__${edge.node.id}`} />;
    });

  return (
    <header className="py-4">
      <div className="container px-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                {displayArticle}
              </div>
            </div>
          </div>

          <Category_Nav />

        </div>
      </div>
    </header>
  );
};

export default Articles;