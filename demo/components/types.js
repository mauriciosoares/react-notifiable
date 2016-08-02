import React from 'react';
import {notifiable} from '../../src/';

class Types extends React.Component {
  render() {
    const {notify} = this.props;
    return (
      <div>
        <h3>Types</h3>
        <button onClick={() => {
          notify({title: 'success', type: 'success'});
        }}>Success</button>
        <button onClick={() => {
          notify({title: 'warning', type: 'warning'});
        }}>Warning</button>
        <button onClick={() => {
          notify({title: 'danger', type: 'danger'});
        }}>Danger</button>
        <p>
          React Notifiable comes with 3 default types, <b>success</b>, <b>warning</b> and <b>danger</b>, but it's pretty easy to create no types.
        </p>
        <hr/>
      </div>
    );
  }
}

export default notifiable()(Types);
