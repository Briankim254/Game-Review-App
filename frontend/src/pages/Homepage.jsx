import React from "react";
import useFetch from "../Hooks/UseFetch";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  console.log(data);
  return <></>;
}
