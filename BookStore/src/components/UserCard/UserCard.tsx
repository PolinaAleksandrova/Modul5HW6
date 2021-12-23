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
  const { id } = props.user

  return (
     <Row>
    <Card style={{ width: '25rem',  }}>
  <Card.Img variant="top" src="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-f14edf2c5828768997ebd57d41c9ec37.png" width="40" height="170" onClick={() => navigate(`/profile/${id}`)} />
  <Card.Body>
    <Card.Title>Book Title</Card.Title><Card.Title>Price $</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of the cards content.
    </Card.Text>
    <Button variant="outline-primary" onClick={() => navigate(`/login`)}>Add to cart</Button>{' '}
  </Card.Body>
</Card>
</Row>
  )
});

export default UserCard
