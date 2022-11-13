import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageDisplay from "./components/ImageDisplay";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (keyword) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: keyword },
      headers: {
        Authorization: "Client-ID f_nTyRUd5UrfVTkduywcBKEiOe4ZHfCQEdNG6DZ5zGA",
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="App container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageDisplay images={this.state.images} />
      </div>
    );
  }
}

export default App;
