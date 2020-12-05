import React, { Component } from 'react';

class PostDetails extends Component {
  state = {
    id: 1,
    postDetails: {},
    loading: false,
    error: false,
  }

  fetchData = () => {
    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
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

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.id !== this.state.id) {
      this.fetchData();
    }
  }


  renderSwitch = () => (
    <div>
      Current id: {this.state.id}
      <button onClick={() => this.setState({id: this.state.id + 1})}>+</button>
    </div>
  )

  render() {
    if (this.state.loading) {
      return (<div>Ładowanie danych...</div>);
    }

    if (this.state.error) {
      return (<div>
        {this.renderSwitch()}
        Błąd ładowania danych
      </div>);
    }
    return (
      <div>
        {this.renderSwitch()}
        <h3>{this.state.postDetails.title}</h3>
        <p>{this.state.postDetails.body}</p>
      </div>
    )
  }
}

export default PostDetails;