import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3B444B`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#e5e4e2`,
            textDecoration: `none`,
          }}
        >
          {siteTitle= "Сайт на фреймворке Gatsby"}
        </Link>
        <ul>
          <nav>
            <li>
              <Link
                style={{
                  color: "#ccffcc",
                  textDecoration: "none",
                  fontSize: "x-large"
                }}
                to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: "#fff68f",
                  textDecoration: "none",
                  fontSize: "x-large"
                }}
                to="/page-2">
                Page 2
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: "#fa4d57",
                  textDecoration: "none",
                  fontSize: "x-large"
                }}
                to="/page-3">
                Page 3
              </Link>
            </li>
          </nav>
        </ul>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
