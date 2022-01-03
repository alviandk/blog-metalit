import React, { useState } from "react";
import Card from "../Card";
import Category_Nav from "../Category_Nav";
import "../../index.css";
/* import Search from "../../components/Search"; */

const Articles = ({ articles, name }) => {
  const displayArticle = articles.edges.map((edge) => {
      return <Card article={edge.node} key={`article__${edge.node.id}`} />;
    });

  const [state, setState] = useState({
    results: displayArticle,
  });

  const onSearch = async (text) => {
    const results = articles.edges.map((edge) => {
      return <Card article={edge.node} key={`article__${edge.node.id}`} />;
    });

    setState(prevState => {
      return { ...prevState, results: results}
    })
  };

  return (
    <header className="py-4">
      <div className="container px-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                {state.results}

              </div>
            </div>
          </div>
          <div className="col-md-4">
            {/* <Search onSearch={onSearch}/> */}
            {/* <br/> */}
            <Category_Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Articles;