import React from "react";
import { Container, Segment, Header, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Единый Реестр Лицензий
        </Header>
        <Header as="h2" inverted content="Добро пожаловать в ЕРЛ" />
        <Button as={Link} to="/activities" size="huge" inverted>
          Перейти к реестру лицензий!
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
