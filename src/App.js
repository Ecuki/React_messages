import React from "react";
import "./App.css";
const data = [
  { id: 1, title: "Wiadomość numer 1", body: "Zawartość wiadomość numer 1" },
  { id: 2, title: "Wiadomość numer 2", body: "Zawartość wiadomość numer 2" }
];
setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość numer ${index}`,
    body: `Zawartość wiadomość numer ${index}`
  });
  console.log(data);
}, 8000);
class App extends React.Component {
  state = {
    comments: [...data]
  };
  getData = () => {
    if (this.state.comments.length !== data.length) {
      console.log("aktalizacja");
      this.setState({
        comments: [...data]
      });
    } else {
      console.log("Dane takie same");
    }
  };
  componentDidMount() {
    this.idInterval = setInterval(this.getData, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.idInterval);
  }
  render() {
    const comments = this.state.comments.map(comment => (
      <div className="App" key={comment.id}>
        <h5>{comment.title}</h5>
        <div>{comment.body}</div>
      </div>
    ));
    return <div>{comments.reverse()}</div>;
  }
}

export default App;
