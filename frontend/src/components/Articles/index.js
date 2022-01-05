import React, { useState } from "react";
import Card from "../Card";
import Category_Nav from "../Category_Nav";

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
          <div className="col-md-4">
            <Category_Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Articles;