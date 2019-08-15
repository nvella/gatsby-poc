import React from "react";
import Layout from "../components/layout";

const ContactPage: React.FC<{}> = () => (
  <Layout>
    <section>
      <h1>I{`'`}d love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </section>
  </Layout>
);

export default ContactPage;
