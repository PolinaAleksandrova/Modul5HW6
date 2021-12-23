import { observer } from 'mobx-react';
import React from 'react'
import { Card, Button, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

interface Props {
  user: {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
  } | null
}

const UserCard = observer((props: Props) => {
  const navigate = useNavigate();

  if (!props.user) {
    return null
  }
  const { id, email, first_name, last_name, avatar } = props.user

  return (
     <Row>
    <Card style={{ width: '25rem',  }}>
  <Card.Img variant="top" src="https://s4.thingpic.com/images/jT/BMUCPtpXe6uPpKEhUdw5pETt.png" width="40" height="170" />
  <Card.Body>
    <Card.Title>Book Title</Card.Title><Card.Title>Price $</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to cart</Button>
  </Card.Body>
</Card>
</Row>
  )
});

export default UserCard
