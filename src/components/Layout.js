import { Container } from "react-bootstrap";
import "./Layout.css"
import PropTypes from "prop-types"
import React from "react"


const Layout = ({ children }) => {

    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout