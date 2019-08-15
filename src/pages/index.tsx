import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const IndexPage: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Layout>
      <section>
        <Header>Amazing {data.site.siteMetadata.title}!</Header>
        <p>What a world!</p>
        <img
          src="https://source.unsplash.com/random/400x200"
          alt="Randomly fetched"
        />
      </section>
    </Layout>
  );
};

export default IndexPage;
