// @flow
import { HeaderLink } from "dicty-components-header-footer"
import { Link } from "react-router-dom"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const generateLinks = (link: Object, i: string) =>
  link.isRouter ? (
    <Link
      style={{ color: "#15317e", padding: "15px", textDecoration: "none" }}
      key={i}
      to={link.url}>
      <center>
        <FontAwesomeIcon icon={link.icon} size="2x" />
        <br />
        {link.text}
      </center>
    </Link>
  ) : (
    <HeaderLink key={i} href={link.url}>
      <center>
        <FontAwesomeIcon icon={link.icon} size="2x" />
        <br />
        {link.text}
      </center>
    </HeaderLink>
  )

const headerItems = [
  {
    url: "/cite",
    icon: "plus",
    text: "Cite Us",
  },
  {
    url: "/downloads",
    icon: "download",
    text: "Downloads",
  },
  {
    url: "/about",
    icon: "info-circle",
    text: "About dictyBase",
  },
  {
    url: "/login",
    icon: "sign-in-alt",
    text: "Login",
    isRouter: true,
  },
]

const loggedHeaderItems = [
  {
    url: "/cite",
    icon: "plus",
    text: "Cite Us",
  },
  {
    url: "/downloads",
    icon: "download",
    text: "Downloads",
  },
  {
    url: "/about",
    icon: "info-circle",
    text: "About dictyBase",
  },
  {
    url: "/mydsc",
    icon: "user",
    text: "MyDSC",
    isRouter: true,
  },
  {
    url: "/logout",
    icon: "sign-out-alt",
    text: "Logout",
    isRouter: true,
  },
]

export { headerItems, loggedHeaderItems, generateLinks }
