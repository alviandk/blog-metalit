import React from "react";
import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";
import Query from "../../components/Query";

const Category_Nav = () => {
  return (
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
  );
};

export default Category_Nav;