import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
  let { id } = useParams();

  return (
    <Query query={ARTICLE_QUERY} slug={id}>
      {({ data: { articles } }) => {

        if (articles.length) {
          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? articles[0].image.url
              : process.env.REACT_APP_BACKEND_URL + articles[0].image.url;

          return (
            <div class="container py-5"> 
              <div class="jumbotron px-4"> 
                <h1 class="text-center mb-5">{articles[0].title}</h1>   
                <p>
                  Posted by {articles[0].author.name} at <Moment format="MMM Do YYYY">
                  {articles[0].published_at}</Moment>
                </p>
                <div class="mb-5">
                  <img
                    src={imageUrl}
                    alt={articles[0].image.url}
                  />
                </div>
                <ReactMarkdown children={articles[0].content} />
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Article;