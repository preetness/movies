import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

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
                wrapped
                size="small"
                src={`https://image.tmdb.org/t/p/original/${this.props.poster}`}
              />
              <Modal.Description>
                <Header>{this.props.title}</Header>
                <p>{this.props.overview}</p>
              </Modal.Description>
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
