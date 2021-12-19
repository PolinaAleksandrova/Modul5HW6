import React from 'react'
import { Button, Col, Container, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap'
import ownTypes from '../../ioc/ownTypes'
import { observer } from 'mobx-react'
import { useInjection } from '../../ioc/ioc.react'
import ResourceStore from '../../stores/UserStore'
import ResourceCard from '../../components/UserCard'
import { useTranslation } from 'react-i18next';

const Resource = observer(() => {
  const store = useInjection<ResourceStore>(ownTypes.resourceStore);
  const { t } = useTranslation(['resource']);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={4} md={6} xs>
          <InputGroup className="mb-2">
            <FormControl
              type="number"
              value={store.queryString}
              onChange={(ev)=> {store.changeQueryString(ev.target.value)}}
              isInvalid={!!store.error}
              placeholder={t('placeholder')}
            />
            <Button
              disabled={!store.queryString}
              variant="primary"
              onClick={store.search}
              type="button"
            >
              {store.isLoading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                `${t('submit')}`
              )}
            </Button>
          </InputGroup>
          {!!store.error && (
            <p style={{ color: 'red', fontSize: 14 }}>{store.error}</p>
          )}
          <ResourceCard resource={store.resource} />
        </Col>
      </Row>
    </Container>
  )
});

export default Resource
