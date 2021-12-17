import React, {Fragment} from "react";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { withRouter } from "react-router-dom";

const Dashboard = () => {
  console.log("dashboard");
  return (
    <Fragment>
    <section className="py-5">
      <div className="container px-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
           <div className="biru">
              <h3 className="mb-5 text-center text-white">DASHBOARD</h3>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
  );
};

export default Dashboard;