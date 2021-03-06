import React from "react";
import { useParams } from "react-router";
import Category_Nav from "../../components/Category_Nav";
import Query from "../../components/Query";
import ReactHtmlParser from "react-html-parser";
import Moment from "react-moment";
import ARTICLE_QUERY from "../../queries/article/article";
import {StickyShareButtons} from 'sharethis-reactjs';

const Article = () => {
  let { id } = useParams();
  return (
    <header className="py-4">
      <div className="container px-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                <Query query={ARTICLE_QUERY} slug={id}>
                  {({ data: { article } }) => {
                    const imageUrl = article.image;
                    return (
                      <div className="container px-5 py-5">
                        <div className="jumbotron"> 
                          <h1 className="text-center mb-5">{article.title}</h1>   
                          <p>
                            Posted by {article.author.name} at <Moment format="MMM Do YYYY">
                            {article.published_at}</Moment>
                          </p>
                          <div className="mb-5">
                            <img src={imageUrl} alt={imageUrl}/>
                          </div>
                          <div className="mb-5">
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
                    );
                  }}
                </Query>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Category_Nav />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Article;