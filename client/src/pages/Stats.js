import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";

function Stats() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Jumbotron>
              <h1 className="text-center">
                <strong>Placeholder</strong>
              </h1>
              <h2 className="text-center">Placeholder</h2>
          </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
  
export default Stats;