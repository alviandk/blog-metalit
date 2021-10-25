import React, { useState } from "react";
import Card from "../Card";
import Query from "../Query";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import CATEGORIES_QUERY from "../../queries/category/categories";
import { Pagination } from "react-bootstrap";
import "../../index.css";

const Articles = ({ articles }) => {
  const [articless, setUsers] = useState(articles.slice(0, 6));
  const [pageNumber, setPageNumber] = useState(0);
  const articlesPerPage = 2;
  const pagesVisited = pageNumber * articlesPerPage;
  
  const displayArticle = articless
    .slice(pagesVisited, pagesVisited + articlesPerPage)
    .map((article) => {
      return <Card article={article} key={`article__${article.slug}`} />;
    });

  const pageCount = Math.ceil(articless.length / articlesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <header className="py-4">
      <div className="container px-5">
        <div class="row">
          <div class="col-md-8">
            <div class="card mb-4">
              <div class="card-body">
                {displayArticle}
              </div>
            </div>

            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>

          <div class="col-md-4">
            <div class="card my-4">
              <h5 class="card-header">Categories</h5>
              <div class="card-body">
                <Query query={CATEGORIES_QUERY} id={null}>
                  {({ data: { category } }) => {
                    const left = category.slice(0, 3);
                    const right = category.slice(3, 5);

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
    </header>
  );
};

export default Articles;