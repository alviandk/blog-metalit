import React from "react";
import Card from "../Card";
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

          <div className="col-md-4">
            <div className="card my-4">
              <h5 className="card-header">Kategori</h5>
              <div className="card-body">
                <Query query={CATEGORIES_QUERY} id={null}>
                  {({ data: { category } }) => {

                    return (
                      <div className="row">
                        <div className="col-lg-12">
                          <ul className="list-unstyled mb-0">
                            {category.map((category, i) => {
                              return (
                                <li className="text-capitalize" key={category.slug}>
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
    </header>
  );
};

export default Articles;