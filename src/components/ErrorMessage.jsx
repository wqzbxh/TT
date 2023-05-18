import React, { Component } from 'react';

class ErrorToast extends Component {
  timer = null;

  state = {
    list: [],
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { list } = this.state;
      if (list.length > 0) {
        const newList = [...list.slice(1)];
        this.props.upErrorListComback(newList);
        this.setState({ list: newList });
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listdd !== this.props.listdd) {
      this.setState({ list: this.props.listdd });
    }
  }

  handleToastClick = (index) => {
    const { list } = this.state;
    const newList = [...list];
    newList.splice(index, 1);
    this.props.upErrorListComback(newList);
    this.setState({ list: newList });
  };

  render() {
    const { list } = this.state;
    const errorCss = {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
    };
    return (
      <div style={errorCss}>
        {list.map((item, index) => (
          <div
            style={{
              backgroundColor: item.color,
              color: '#fff',
              padding: '10px 20px',
              margin: '2px 0px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'opacity 2s ease-in-out',
              opacity: 1,
            }}
            key={index}
            onClick={() => this.handleToastClick(index)}
          >
            <div>{item.msg}</div>
            <div style={{ cursor: 'pointer', marginLeft: '10px' }}>×</div>
          </div>
        ))}
      </div>
    );
  }
}

export default ErrorToast;
