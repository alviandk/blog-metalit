import React from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';

const Category = () => {
  let { id } = useParams();
  const delay = true;
  const { error, data, loading, fetchMore } = useQuery(CATEGORY_ARTICLES_QUERY, {
    variables: { slug: id }, notifyOnNetworkStatusChange: true,
  })

  if (error) {
    console.error(error);
    return (
      <header className="py-5 px-3">
        <div className="container px-5">
          <h1 className="py-2">
            <Link className="text-decoration-none" to="/">Blog</Link>
          </h1>
          <p className="py-2">Artikel tidak tersedia</p>
        </div>
      </header>
    );
  }

  if (loading) {
    return (
      <header className="py-5 px-3">
        <div className="container px-5">
          <h1 className="py-2">
            <Link className="text-decoration-none" to="/">Blog</Link>
          </h1>
          <p className="py-2">Loading</p>
        </div>
      </header>
    );
  }

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} slug={id}>
      {({ data: { categories } }) => {
          return (
            <header className="py-5 px-2">
              <div className="container px-5">
                <h1>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <Link className="text-decoration-none" to="/">Blog</Link>
                      </li>  
                      <li class="breadcrumb-item active" aria-current="page">{categories.name}</li>
                    </ol>
                  </nav>
                </h1>
              </div>
              <Articles articles={categories.article} />

                   <div className="container px-5">
      {data.categories.article.pageInfo.hasNextPage && (<button
        className="btn btn-primary"
          onClick={() => {
            const { endCursor } = data.categories.article.pageInfo;
            fetchMore({
              variables: { after: endCursor },
              updateQuery: (prevResult, { fetchMoreResult }) => {
                fetchMoreResult.categories.article.edges = [
                  ...prevResult.categories.article.edges,
                  ...fetchMoreResult.categories.article.edges
                ];
                return fetchMoreResult;
              }
            });
          }}
        >More
        </button>
      )}
      </div>
            </header>
          );
      }}
    </Query>
  );
};

export default Category;