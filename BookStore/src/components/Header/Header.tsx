import { observer } from 'mobx-react';
import React from 'react'
import { Navbar, Nav, Container, Image, Button, Col, Row, Stack , Form} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { useInjection } from '../../ioc/ioc.react';
import ownTypes from '../../ioc/ownTypes';
import AuthStore from '../../stores/AuthStore';
import { useNavigate } from "react-router-dom";

const Header = observer(() => {
  const { t } = useTranslation(['header']);
  const store = useInjection<AuthStore>(ownTypes.authStore);
  const navigate = useNavigate();

  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">BookStore</Navbar.Brand>

    <Nav className="me-auto">
      <Nav.Link href="/users?page=1">Главная</Nav.Link>
      <Nav.Link href="/">Контакты</Nav.Link>
      <Nav.Link href="/">Новости</Nav.Link>

    </Nav>

    <Button variant="outline-light" className="d-flex justify-content-en ms-1">Войти</Button>{' '}
    <Button variant="outline-light" className="mx-6">Зарегистрироваться</Button>{' '}

    </Container>
  </Navbar>
  <br />

</>
    </Container>
  )
});

export default Header
