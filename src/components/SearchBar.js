import React from "react";
import Form from "react-bootstrap/Form";

class SearchBar extends React.Component {
  state = { keyword: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.keyword);
  };

  render() {
    return (
      <div className="mt-5">
        <h1 className="text-center">Image Search Engine</h1>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Search Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter word"
              value={this.state.keyword}
              onChange={(e) => this.setState({ keyword: e.target.value })}
            />
            <Form.Text className="text-muted">
              Search any word to see related images.
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
