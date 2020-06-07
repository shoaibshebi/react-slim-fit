import React from 'react';
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Projects = (props) => {
  return (
    <Container >
      <Row md="12" className="pr-m">
        <Col md="3">
            <Card>
                <CardImg top width="100%" src={img3} alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary" justify-content-center>Button</Button>
                </CardBody>
            </Card>
        </Col>
        <Col md="3">
            <Card>
                <CardImg top width="100%" src={img1} alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
        <Col md="3">
            <Card>
                <CardImg top width="100%" src={img2} alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
        <Col md="3">
            <Card>
                <CardImg top width="100%" img src={img3} alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
       
      </Row>
      
    </Container>
  );
}

export default Projects;
