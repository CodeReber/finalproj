import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Table1 from '../components/Table1'

var data1 = [
  {machine_name: 'xyz.com', assignedto: 'Jim', api1: 'Bad', ping_tool: 'Good', status: 'In_Progress', comment: 'Needs a new Cert' },
  {machine_name: 'pug.com', assignedto: 'Jenny', api1: 'Good', ping_tool: 'Good', status: 'Complete', comment: 'Software Installed' },
  {machine_name: 'xyz.com', assignedto: 'Joe', api1: 'Bad', ping_tool: 'Bad', status: 'In_Progress', comment: 'DMZ machine' }
];

class Saved extends Component {
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

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };


  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Project Helper</strong>
              </h1>
              <h2 className="text-center">Tool to help your project run smoother</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Table">
              <div className="App">
              <p className="Table-header">Basic Table</p>
              <Table1 data={this.state.books}/>
              </div>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      Machine_Name={book.machine_name}
                      AssignedTo={book.assignedto}
                      API1={book.api1}
                      Ping_Tool={book.ping_tool}
                      Status={book.status}
                      Comment={book.comment}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row> */}
        <Footer />
      </Container>
    );
  }
}

export default Saved;
