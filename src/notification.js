import React, {PropTypes} from 'react';
import uuid from 'node-uuid';
import {connect} from 'react-redux';
import Items from './components/items';
import {actionCreators} from './reducerAndActions';

class Notification extends React.Component {
  static displayName = 'Notification';

  static propTypes = {
    $$renotify: PropTypes.object,
    children: PropTypes.element,
    notify: PropTypes.func,
    closeNotification: PropTypes.func,
    theme: PropTypes.func.isRequired
  };

  static childContextTypes = {
    __notify: React.PropTypes.func,
    __closeNotification: React.PropTypes.func
  };

  getChildContext() {
    return {
      __notify: this.notify,
      __closeNotification: this.closeNotification
    };
  }

  constructor() {
    super();

    this.notify = this.notify.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
  }

  render() {
    const {theme, $$renotify: {notifications}} = this.props;

    return (
      <div {...theme(1, 'container')}>
        <Items notifications={notifications} theme={theme} />
        {this.props.children}
      </div>
    );
  }

  notify(notification) {
    const {notify} = this.props;
    const id = uuid.v4();

    notify({...notification, id});

    return id;
  }

  closeNotification(id) {
    const {closeNotification} = this.props;

    closeNotification(id);
  }
}

const mapStateToProps = (state) => ({
  $$renotify: state.$$renotify || state
});

export default connect(mapStateToProps, actionCreators)(Notification);
