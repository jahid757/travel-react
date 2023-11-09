import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SingleBlogContent from "./SingleBlogContent";
import Partners from "../Tour/partners";

const BlogSingle = () => {
  return (
    <>
      <Header />
      <SingleBlogContent />
      <Partners />
      <Footer />
    </>
  );
};

export default BlogSingle;
