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
            <div>
              <section>
                <div className="container py-3">
                  <h1 class="my-4 px-3">
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
              </section>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Category;