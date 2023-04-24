import React, { Component } from 'react';

class ErrorToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
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
  // 卸载和销毁时清除计时器，避免内存泄漏。
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

  render() {
    const toastStyle = {
      backgroundColor: '#dc2626',
      color: '#fff',
      padding: '10px 20px',
      margin: '2px 0px',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'opacity 2s ease-in-out',
    };
    const errorCss =  {
      position: 'fixed',
      top: '20px',
      right: '20px'
    };
    const { show ,list} = this.state;
    return (
      <div style={errorCss}>
        {list.map((item, index) => (
          <div
            style={{
              ...toastStyle,
              backgroundColor: item.color,
            }}
            key={index}
          >
            <div>{item.msg}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default ErrorToast;
