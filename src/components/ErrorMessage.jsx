import React, { Component } from 'react';

class ErrorToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { list } = this.state;
      if (list.length > 0) {
        this.props.upErrorListComback(list.slice(1))
        this.setState({
          list: list.slice(1),
        });
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listdd !== this.props.listdd) {
      this.setState({
        list: this.props.listdd,
      });
    }
  }

  handleToastClick = (index) => {
    const { list } = this.state;
    const newList = [...list];
    newList.splice(index, 1);
    this.props.upErrorListComback(newList)
    this.setState({ list: newList });
  }

  render() {
    const { list } = this.state;
    const errorCss =  {
      position: 'fixed',
      bottom: '20px',
      right: '20px'
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
