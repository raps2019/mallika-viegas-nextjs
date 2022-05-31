import React from "react";
import Link from "next/link";
import * as Styled from "./Nav.styles";
import { useRouter } from "next/router";

const TopNav = () => {
  const router = useRouter();

  return (
    <Styled.TopNavContainer>
      <Link href="/">
        <Styled.NavLink className={router.pathname == "/" ? "active" : ""}>
          Home
        </Styled.NavLink>
      </Link>
      <Link href="/about">
        <Styled.NavLink className={router.pathname == "/about" ? "active" : ""}>
          About
        </Styled.NavLink>
      </Link>
      <Link href="/contact">
        <Styled.NavLink
          className={router.pathname == "/contact" ? "active" : ""}
        >
          Contact
        </Styled.NavLink>
      </Link>
    </Styled.TopNavContainer>
  );
};

export default TopNav;
