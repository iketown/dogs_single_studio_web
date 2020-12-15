import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import classnames from "classnames";
import MultiLink from "@util/router/MultiLink";

const StyledNavBar = styled(Navbar)`
  background: #ffffffcc;
  transition: 0.5s background;
  :hover {
    background: #ffffff;
  }
  .navbar-brand {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    .kennel {
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 1;
      display: flex;
      justify-content: space-between;
    }
    .breed {
      font-weight: 200;
      font-size: 12px;
      line-height: 10px;
      display: flex;
      justify-content: space-between;
    }
  }
  .buttonText {
    color: var(--color-darkB);
    :hover {
      color: var(--color-darkA);
    }
  }
`;

const NavBarComponent: React.FC<{ layout_info: LayoutI }> = ({
  layout_info,
}) => {
  const { contact, kennel_name, links, isLive } = layout_info;
  const { query, route, push } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const allLinks = links?.default
    .map((link, i) => (link.slug ? link : links.custom[i]))
    .filter(({ button_text }) => !!button_text);

  console.log("navbar", route, query);

  return (
    <StyledNavBar expand="md" fixed="top">
      <MultiLink href={"/"} as="/">
        <h3 style={{ color: "var(--color-darkA)" }} className="title">
          {kennel_name}
        </h3>
      </MultiLink>
      <Navbar.Toggle
        className="ml-auto"
        aria-controls="responsive-navbar-nav"
        onClick={() => setMenuOpen((old) => !old)}
      />
      <Navbar.Collapse in={menuOpen}>
        <Nav className="ml-auto">
          {allLinks?.map(({ button_text, slug }, linkIndex) => {
            return (
              <MultiLink
                key={slug}
                href="/[page_slug]"
                as={`/${slug}`}
                className={classnames("ml-auto nav-link", {
                  active: query.page_slug === slug,
                })}
              >
                {button_text.toUpperCase()}
              </MultiLink>
            );
          })}
          {/* <Nav.Link
            className="ml-auto"
            active={route.includes("puppies")}
            onClick={() => push("/puppies")}
          >
            <div className="buttonText">PUPPIES</div>
          </Nav.Link> */}

          <Nav.Link className="ml-auto" onClick={() => push("/apply")}>
            <Button
              style={{
                margin: "-3px 0 -3px 5px",
              }}
              variant="outline-info"
              size="sm"
            >
              APPLY
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </StyledNavBar>
  );
};

export default NavBarComponent;
