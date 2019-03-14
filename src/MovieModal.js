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
            <Modal.Content image scrolling>
              <Image
                className="modal-picture"
                size="medium"
                rounded
                src={`https://image.tmdb.org/t/p/original/${this.props.poster}`}
                wrapped
                floated="left"
              />
              <Modal.Description>
                <Header>{this.props.title}</Header>
                <p wrapped>{this.props.overview}</p>
              </Modal.Description>
              <Rating
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
  marginBottom: '15px',
  marginTop: '5px'
};
