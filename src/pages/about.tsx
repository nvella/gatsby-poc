import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import { graphql } from "gatsby"

interface AboutPageNode {
  node: {
    html: string
  }
}

interface AboutPageProps {
  allMarkdownRemark: {
    edges: AboutPageNode[]
  }
}

const AboutPage: React.FC<{data: AboutPageProps}> = ({data}) => (
  <Layout>
    <section>
      <Header>About Page</Header>
      <p>Much Wow. Very React</p>
      {data.allMarkdownRemark.edges[0].node.html}
    </section>
  </Layout>
);

export const query = graphql`
  query AboutPageContent {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "About"}}}, limit: 1) {
      edges {
        node {
          html
        }
      }
    }
  }
`;

export default AboutPage;
