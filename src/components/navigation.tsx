import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const StyledItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`;

interface ListItemProps {
  To: string;
  Label: string;
}

const ListItem: React.FC<ListItemProps> = ({ To, Label }) => (
  <StyledItem>
    <Link to={To}>{Label}</Link>
  </StyledItem>
);

const leftNavStyle = css`
  text-shadow: none;
  background-image: none;
`;

const leftNavTextStyle = css`
  display: inline;
  font-size: 2rem;
`;

const LeftNav: React.FC<{}> = () => (
  <Link css={leftNavStyle} to={`/`}>
    <h3 css={leftNavTextStyle}>MySweetTest</h3>
  </Link>
);

const rightNavStyle = css`
  list-style: none;
  float: right;
`;

const RightNav: React.FC<{}> = () => (
  <ul css={rightNavStyle}>
    <ListItem To={`/`} Label={`Home`} />
    <ListItem To={`/about`} Label={`About`} />
    <ListItem To={`/contact`} Label={`Contact`} />
  </ul>
);

const StyledNav = styled.nav`
  margin-bottom: 1.5rem;
`;

const Navigation: React.FC<{}> = () => (
  <StyledNav>
    <LeftNav />
    <RightNav />
  </StyledNav>
);

export default Navigation;
