import React from 'react';

import Backdrop from '../Backdrop'
import './modal.css';

class Modal extends React.Component {

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  componentDidUpdate = () => {
    console.log('[Modal] Did Update');
  }

  render() {
    const { title, show, onClose } = this.props

    if (!show) return null

   

    return (
      <div >
        <Backdrop show={show} clicked={this.props.onClose} />
        <div
          className="modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          { title ? <div className="title">{title}</div> : null }
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal;
