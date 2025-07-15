import React, { Component } from "react";
import { Container, Button, Card } from "react-bootstrap";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "Aya Othmen",
        bio: "A passionate web developer from Tunisia.",
        imgSrc:
          "https://media.licdn.com/dms/image/v2/D4D03AQEkCu72q8b0Uw/profile-displayphoto-crop_800_800/B4DZfgQAwmHkAI-/0/1751814024161?e=1757548800&v=beta&t=6mS7bQ8fvw9uyfOpYKtycSe6NWn1VLFHO8F1qYo2xFs",
        profession: "Industrial Computer Engineer",
      },
      shows: false,
      mountedTime: 0,
    };
    this.intervalId = null;
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { Person, shows, mountedTime } = this.state;

    return (
      <Container className="text-center py-4">
        <h1 className="mb-4">Checkpoint: Class-Based Component</h1>

        <Button
          variant={shows ? "danger" : "primary"}
          onClick={this.toggleShow}
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </Button>

        {shows && (
          <Card className="mt-4 mx-auto" style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src={Person.imgSrc}
              alt={Person.fullName}
              style={{ borderRadius: "50%", width: "50%", margin: "1rem auto" }}
            />
            <Card.Body>
              <Card.Title>{Person.fullName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {Person.profession}
              </Card.Subtitle>
              <Card.Text>{Person.bio}</Card.Text>
            </Card.Body>
          </Card>
        )}

        <p className="mt-4 text-secondary">
          ⏱ Component has been mounted for <strong>{mountedTime}</strong>{" "}
          seconds
        </p>
      </Container>
    );
  }
}

export default App;
