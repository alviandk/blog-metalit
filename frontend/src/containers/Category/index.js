import React from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";
import { Link } from "react-router-dom";

const Category = () => {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} slug={id}>
      {({ data: { categories } }) => {

        if (categories.length) {
          return (
            <header className="py-5 px-3">
              <div className="container px-5">
                  <h1>
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <Link className="text-decoration-none" to="/">Blog</Link>
                        </li>  
                        <li class="breadcrumb-item active" aria-current="page">{categories[0].name}</li>
                      </ol>
                    </nav>
                  </h1>
                  <Articles articles={categories[0].articles} />
                </div>
            </header>
          );
        }
      }}
    </Query>
  );
};

export default Category;