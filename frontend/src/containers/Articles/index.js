import React from "react";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';

const Home = () => {
  const { loading, error, data } = useQuery(ARTICLES_QUERY);
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    console.error(error);
    return (
      <div className="container py-4">
        <h1 class="my-4 text-center">Artikel Tidak Tersedia</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="container py-3">
        <h1 class="my-4 px-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link className="text-decoration-none" to="/">Blog</Link>
              </li>  
            </ol>
          </nav>
        </h1>
      </div>

      <Query query={ARTICLES_QUERY}>
        {({ data: { articles } }) => {
          return <Articles articles={articles} />;
        }}
      </Query>
    </div>
  );
};

export default Home;