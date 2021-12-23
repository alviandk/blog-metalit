import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, slug, name }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug, name: name }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;