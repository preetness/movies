import React, { Component } from 'react';
import { Button, Header, Image, Modal, Rating } from 'semantic-ui-react';

export default class MovieModal extends Component {
  render() {
    return (
      <div style={divStyle}>
        <div>
          <Modal
            trigger={
              <Button attached="bottom" positive>
                Details
              </Button>
            }
          >
            <Modal.Content wrapped scrolling>
              <Modal.Description>
                <Header>{this.props.title}</Header>
                <p wrapped="true">{this.props.overview}</p>
              </Modal.Description>
              <Rating
                style={ratingStyle}
                icon="star"
                size="large"
                disabled
                defaultRating={Math.ceil(this.props.rating / 2)}
                maxRating={5}
              />
            </Modal.Content>
          </Modal>
        </div>
      </div>
    );
  }
}

const divStyle = {
  marginBottom: '15px'
};

const ratingStyle = {
  marginTop: '15px'
};
