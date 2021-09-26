import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import ReactHtmlParser from "react-html-parser";
import Moment from "react-moment";
import { useLocation } from 'react-router-dom';
import ARTICLE_QUERY from "../../queries/article/article";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,

} from 'react-share';

const shareUrl = window.location;
const Article = () => {
  let { id } = useParams();
  return (
    <Query query={ARTICLE_QUERY} slug={id}>
      {({ data: { article } }) => {

          const imageUrl =article.image;

          return (
            <div class="container py-5"> 
              <div class="jumbotron px-4"> 
                <h1 class="text-center mb-5">{article.title}</h1>   
                <p>
                  Posted by {article.author.name} at <Moment format="MMM Do YYYY">
                  {article.published_at}</Moment>
                </p>
                <div class="mb-5">
                  <img
                    src={imageUrl}
                    alt={article.image}
                  />
                </div>
                <div class="mb-5">
                  {ReactHtmlParser(article.content)}
                </div>
                <div class="row">
                  <div class="col-md-12 copy">
                    <div>
                      <span>Share With : </span>
                      <span class="mx-2">
                        <FacebookShareButton
                          url={shareUrl}
                          quote={article.title}
                          >
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                      </span>
                      <span class="mx-2">
                        <FacebookMessengerShareButton
                          url={shareUrl}
                          quote={article.title}
                          >
                          <FacebookMessengerIcon size={32} round />
                        </FacebookMessengerShareButton>
                      </span>
                      <span class="mx-2">
                        <TwitterShareButton
                          url={shareUrl}
                          title={article.title}
                          >
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                      </span>
                      <span class="mx-2">
                        <WhatsappShareButton
                          url={shareUrl}
                          quote={article.title}
                          >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                      </span>
                      <span class="mx-2">
                        <TelegramShareButton
                          url={shareUrl}
                          quote={article.title}
                          >
                          <TelegramIcon size={32} round />
                        </TelegramShareButton>
                      </span>
                      <span class="mx-2">
                        <LineShareButton
                          url={shareUrl}
                          title={article.title}
                          >
                          <LineIcon size={32} round />
                        </LineShareButton>
                      </span>
                      <span class="mx-2">
                        <LinkedinShareButton
                          url={shareUrl}
                          quote={article.title}
                          >
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                      </span>
                      <span class="mx-2">
                        <EmailShareButton
                          url={shareUrl}
                          title={article.title}
                          >
                          <EmailIcon size={32} round />
                        </EmailShareButton>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        
      }}
    </Query>
  );
};

export default Article;