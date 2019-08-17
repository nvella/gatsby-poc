import React from "react";
import { graphql, Link } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";

interface IndexPageNode {
  node: {
    id: string;
    frontmatter: {
      title: string;
      date: string;
    };
    fields: {
      slug: string;
      category: string;
    };
    excerpt: string;
  };
}

interface IndexPageProps {
  allMarkdownRemark: {
    totalCount: number;
    edges: IndexPageNode[];
  };
}

const IndexPage: React.FC<{ data: IndexPageProps }> = ({ data }) => {
  return (
    <Layout>
      <section>
        <Header>Amazing!</Header>
        <p>What a world!</p>
        <img
          src="https://source.unsplash.com/random/400x200"
          alt="Randomly fetched"
        />
      </section>
      <section>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
              <h6>{node.frontmatter.date}</h6>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { category: { eq: "posts" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
            category
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
