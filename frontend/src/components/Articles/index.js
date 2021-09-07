import React from "react";
import Card from "../Card";
import Query from "../Query";
import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";

const Articles = ({ articles }) => {
  const leftArticles = articles.slice(0, 6);
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
                <Query query={CATEGORIES_QUERY} id={null}>
                  {({ data: { categories } }) => {
                    const left = categories.slice(0, 3);
                    const right = categories.slice(3, 5);

                    return (
                      <div class="row">
                        <div class="col-lg-6">
                          <ul class="list-unstyled mb-0">
                            {left.map((category, i) => {
                              return (
                                <li class="text-capitalize" key={category.slug}>
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
                        </div>

                        <div class="col-lg-6">
                          <ul class="list-unstyled mb-0">
                            {right.map((category, i) => {
                              return (
                                <li class="text-capitalize" key={category.slug}>
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
                        </div>
                      </div>
                      );
                    }}
                  </Query>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
};

export default Articles;