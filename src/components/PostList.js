import React, { Component } from 'react';

class PostList extends Component {
  state = {
    postList: [],
    loading: false,
    error: false,
  }

  fetchData = () => {
    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then(response => {
        if (response.status > 400) {
          throw new Error();
        }
        return response.json()})
      .then(data => setTimeout(() => {
        this.setState({
            postList: data,
            loading: false,
          }
        )},2000))
      .catch(e => this.setState({error: true, loading: false}));
  }

  componentDidMount() {
    this.fetchData();
  }

  renderList = () => this.state.postList.map((postElement) => <div key={postElement.id}>{postElement.title}</div>);


  render() {
    if (this.state.loading) {
      return (<div>Ładowanie danych...</div>);
    }

    if (this.state.error) {
      return (<div>
        Błąd ładowania danych
      </div>);
    }
    return (
      <div>
        <h3>Lista postów</h3>
        {this.renderList()}
      </div>
    )
  }
}

export default PostList;