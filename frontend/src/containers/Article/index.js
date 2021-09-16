import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
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
                <div class="mb-5">
                  <ReactMarkdown children={articles[0].content} />
                </div>
                <div class="row">
                  <div class="col-md-12 copy">
                    <div>
                      <span>Share With : </span>
                      <span class="mx-2">
                        <FacebookShareButton
                          url={shareUrl}
                          quote={articles[0].title}
                          >
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                      </span>
                      <span class="mx-2">
                        <FacebookMessengerShareButton
                          url={shareUrl}
                          quote={articles[0].title}
                          >
                          <FacebookMessengerIcon size={32} round />
                        </FacebookMessengerShareButton>
                      </span>
                      <span class="mx-2">
                        <TwitterShareButton
                          url={shareUrl}
                          title={articles[0].title}
                          >
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                      </span>
                      <span class="mx-2">
                        <WhatsappShareButton
                          url={shareUrl}
                          quote={articles[0].title}
                          >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                      </span>
                      <span class="mx-2">
                        <TelegramShareButton
                          url={shareUrl}
                          quote={articles[0].title}
                          >
                          <TelegramIcon size={32} round />
                        </TelegramShareButton>
                      </span>
                      <span class="mx-2">
                        <LineShareButton
                          url={shareUrl}
                          title={articles[0].title}
                          >
                          <LineIcon size={32} round />
                        </LineShareButton>
                      </span>
                      <span class="mx-2">
                        <LinkedinShareButton
                          url={shareUrl}
                          quote={articles[0].title}
                          >
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                      </span>
                      <span class="mx-2">
                        <EmailShareButton
                          url={shareUrl}
                          title={articles[0].title}
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
        }
      }}
    </Query>
  );
};

export default Article;