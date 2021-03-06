import React, {useState} from 'react'
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';

const Home = () => {
  const { error, data, loading, fetchMore } = useQuery(ARTICLES_QUERY)
  const [name, setName] = useState('');
  
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
    <header className="py-5 px-3">
      <div className="container px-5">
        <h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="text-decoration-none" to="/">Blog</Link>
              </li>  
            </ol>
          </nav>
        </h1>
      </div>

      <Query query={ARTICLES_QUERY} name={name}>
        {({ data: { articles } }) => {
          return <Articles articles={articles} />
        }}
      </Query>

      <div className="container px-5">
        {data.articles.pageInfo.hasNextPage && (<button
          className="btn btn-primary"
            onClick={() => {
              const { endCursor } = data.articles.pageInfo;
              fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.articles.edges = [
                    ...prevResult.articles.edges,
                    ...fetchMoreResult.articles.edges
                  ];
                  return fetchMoreResult;
                }
              });
            }}
          >Lebih Banyak
          </button>
        )}
      </div>
      
    </header>
  );
};

export default Home;