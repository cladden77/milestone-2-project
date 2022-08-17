import Card from "react-bootstrap/Card";

function About() {
  return (
    <Card>
      <Card.Header>About Us</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default About;
