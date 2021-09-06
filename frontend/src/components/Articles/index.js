import React from "react";
import Card from "../Card";
import Query from "../Query";
import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";

const Articles = ({ articles }) => {
  const leftArticles = articles.slice(0, 5);
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="card mb-4">
              <div class="card-body">
                {leftArticles.map((article, i) => {
                  return <Card article={article} key={`article__${article.slug}`} />;
                })}
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card my-4">
              <h5 class="card-header">Categories</h5>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <Query query={CATEGORIES_QUERY} id={null}>
                      {({ data: { categories } }) => {
                        return (
                          <ul class="list-unstyled mb-0">
                            {categories.map((category, i) => {
                              return (
                                <li key={category.slug}>
                                  <Link
                                    to={`/category/${category.slug}`}
                                    className="uk-link-reset"
                                  >
                                    {category.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        );
                      }}
                    </Query>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
};

export default Articles;