import * as React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { ImageModel } from '../types/ImageModel'

interface ImageCardProps {
  image: ImageModel
}

interface ImageCardState {}

export class UdagramImage extends React.PureComponent<
  ImageCardProps,
  ImageCardState
> {

  render() {
    return (
      <Card fluid color="red">
        <Card.Content>
          <Card.Header>{this.props.image.title}</Card.Header>
          <Card.Description>{this.props.image.timestamp}</Card.Description>
          {this.props.image.imageUrl && (
            <Image src="https://serverless-udagram-v2-images-dev.s3.amazonaws.com/1939237b-1b15-4454-b510-6568badb60d5.jpg" ui={false}/>
          )}
        </Card.Content>
      </Card>
    )
  }
}
