import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

interface PostTemplateProps {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      author: string;
    };
  };
}

const PostTemplate: React.FC<{ data: PostTemplateProps }> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`;

export default PostTemplate;
