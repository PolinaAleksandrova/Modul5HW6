import React from 'react'
import { Resource } from 'react-bootstrap'

interface Props {
  resource: {
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string
  } | null
}

const ResourceCard = (props: Props) => {
  if (!props.resource) {
    return null
  }
  const { id, name, year, color, pantone_value  } = props.resource

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {name} {year}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ResourceCard
