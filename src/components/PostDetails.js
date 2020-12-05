import React, { Component } from 'react';

class PostDetails extends Component {
  state = {
    postDetails: {},
    loading: false,
    error: false,
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        if (response.status > 400) {
          throw new Error();
        }
        return response.json()})
      .then(data => setTimeout(() => {
        this.setState({
          postDetails: data,
          loading: false,
        }
      )},2000))
      .catch(e => this.setState({error: true, loading: false}));
  }

  render() {
    if (this.state.loading) {
      return (<div>Ładowanie danych...</div>);
    }

    if (this.state.error) {
      return (<div>Błąd ładowania danych</div>);
    }
    return (
      <div>
        <h3>{this.state.postDetails.title}</h3>
        <p>{this.state.postDetails.body}</p>
      </div>
    )
  }
}

export default PostDetails;