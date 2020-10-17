import React, {Component} from 'react';
import {Jumbotron, Button, Card, CardTitle, CardText, Row, Col} from 'reactstrap';

export default class MenuCard extends Component{
    render(){
        return (
            <Row>
      <Col sm="3">
        <Card body>
          <CardTitle>Potter Head!</CardTitle>
          <CardText>We are not muggles!! You also? Come and join us then...</CardText>
          <Button>Join Room</Button>
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>M 23 but a fan of wimpy kid!!</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Join Room</Button>
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>Zootopia Craze :)</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Join Room</Button>
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>A thousand splendid suns! :)</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Join Room</Button>
        </Card>
      </Col>
      
    </Row>
          );
    }
}