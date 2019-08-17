// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require(`gatsby-source-filesystem`);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    if (fileNode.relativeDirectory.includes(`posts`)) {
      const slug = createFilePath({ node, getNode, basePath: `content` });
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
      createNodeField({
        node,
        name: `category`,
        value: `posts`,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { title: { ne: "About" } } }) {
        edges {
          node {
            fields {
              slug
              category
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        slug: node.fields.slug,
        category: node.fields.category,
      },
    });
  });
};
