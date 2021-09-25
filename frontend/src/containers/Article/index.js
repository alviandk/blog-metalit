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
      {({ data: { article } }) => {

        if (article.length) {
          const imageUrl =article[0].image;

          return (
            <div class="container py-5"> 
              <div class="jumbotron px-4"> 
                <h1 class="text-center mb-5">{article[0].title}</h1>   
                <p>
                  Posted by {article[0].author.name} at <Moment format="MMM Do YYYY">
                  {article[0].published_at}</Moment>
                </p>
                <div class="mb-5">
                  <img
                    src={imageUrl}
                    alt={article[0].image}
                  />
                </div>
                <div class="mb-5">
                  <ReactMarkdown children={article[0].content} />
                </div>
                <div class="row">
                  <div class="col-md-12 copy">
                    <div>
                      <span>Share With : </span>
                      <span class="mx-2">
                        <FacebookShareButton
                          url={shareUrl}
                          quote={article[0].title}
                          >
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                      </span>
                      <span class="mx-2">
                        <FacebookMessengerShareButton
                          url={shareUrl}
                          quote={article[0].title}
                          >
                          <FacebookMessengerIcon size={32} round />
                        </FacebookMessengerShareButton>
                      </span>
                      <span class="mx-2">
                        <TwitterShareButton
                          url={shareUrl}
                          title={article[0].title}
                          >
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                      </span>
                      <span class="mx-2">
                        <WhatsappShareButton
                          url={shareUrl}
                          quote={article[0].title}
                          >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                      </span>
                      <span class="mx-2">
                        <TelegramShareButton
                          url={shareUrl}
                          quote={article[0].title}
                          >
                          <TelegramIcon size={32} round />
                        </TelegramShareButton>
                      </span>
                      <span class="mx-2">
                        <LineShareButton
                          url={shareUrl}
                          title={article[0].title}
                          >
                          <LineIcon size={32} round />
                        </LineShareButton>
                      </span>
                      <span class="mx-2">
                        <LinkedinShareButton
                          url={shareUrl}
                          quote={article[0].title}
                          >
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                      </span>
                      <span class="mx-2">
                        <EmailShareButton
                          url={shareUrl}
                          title={article[0].title}
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