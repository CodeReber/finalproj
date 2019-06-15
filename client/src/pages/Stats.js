import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";
import { VictoryPie } from 'victory';

// const data = [
//   // {quarter: 1, earnings: 13000},
//   // {quarter: 2, earnings: 16500},
//   // {quarter: 3, earnings: 14250},
//   {inprogress: 4, complete: 6},
//   {inprogrss: 4, complete: 8}
// ];



class Stats extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };
    render() {return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Jumbotron>
              <h1 className="text-center">
                <strong>Project Stats</strong>
              </h1>
          </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title = "Pie Chart" >
            <div>
            <VictoryPie
              colorScale={["gold","green"]}
              data={[
                    { x: "Inprogress", y: 10 },
                    { x: "Complete", y: 25 },
                    ]}
            />
            </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
  
export default Stats;