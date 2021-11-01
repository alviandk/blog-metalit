import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactHtmlParser from "react-html-parser";
import Moment from "react-moment";
import ARTICLE_QUERY from "../../queries/article/article";
import {StickyShareButtons} from 'sharethis-reactjs';

const Article = () => {
  let { id } = useParams();
  return (
    <Query query={ARTICLE_QUERY} slug={id}>
      {({ data: { article } }) => {
        const imageUrl = article.image;
        return (
          <header className="py-5 px-3">
            <div className="container px-5 py-5">
              <div class="jumbotron"> 
                <h1 class="text-center mb-5">{article.title}</h1>   
                <p>
                  Posted by {article.author.name} at <Moment format="MMM Do YYYY">
                  {article.published_at}</Moment>
                </p>
                <div class="mb-5">
                  <img
                    src={imageUrl}
                    alt={imageUrl}
                  />
                </div>
                <div class="mb-5">
                  {ReactHtmlParser(article.content)}
                </div>
              </div>
              <StickyShareButtons
                config={{
                  alignment: 'left',
                  color: 'social',
                  enabled: true,
                  font_size: 16,
                  hide_desktop: false,
                  labels: 'counts',    
                  language: 'en',
                  min_count: 0,
                  networks: [
                    'whatsapp',
                    'telegram',
                    'linkedin',
                    'instagram',
                    'messenger',
                    'facebook',
                    'twitter',
                  ],
                  padding: 12,
                  radius: 4,
                  show_total: false, 
                  show_mobile: false,
                  show_toggle: true,
                  size: 48,
                  top: 140,
                  url: window.location.href,
                  image: imageUrl,
                  description: article.description,
                  title: article.title
                }}
              />
            </div>
          </header>
        );
      }}
    </Query>
  );
};

export default Article;