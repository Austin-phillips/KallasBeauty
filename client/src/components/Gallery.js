import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class Gallery extends Component {
  state = { accepted: [], rejected: [] }

  render() {
    return (
      <div>
        <section>
          <div className="dropzone">
            <Dropzone
              accept="image/jpeg, image/png"
              onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
            >
              <p>Click to upload photo</p>
            </Dropzone>
          </div>
          <aside>
            <h2>Accepted files</h2>
            <ul>
              {
                this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
            <h2>Rejected files</h2>
            <ul>
              {
                this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside>
        </section>
        <Segment basic>
          <Image src='http://res.cloudinary.com/kallasbeauty/image/upload/v1515357630/KallasBeaty%20Folder/picture.jpg' />
        </Segment>
      </div>
    );
  }
}

export default Gallery;