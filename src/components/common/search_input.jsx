import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
    };
  }

  /*********处理表数据 */
  handelChange = (even) => {
    const {name,value} = even.target;
    console.log(name, value)
    this.setState({
      [name]: value
    })
    this.props.searchDataCallback(value)
  }

  render() {
    const {search} =this.state
    return (
      <div className="flex-none pr-8  px-1 h-10 flex  w-64  ">
      <input
        className="px-1 py-2 w-full border "
        type="text"
        name='search'
        value={search}
        onChange={this.handelChange}
        placeholder="请输入内容"
      />
      <span className="py-2  mx-1 px-4 text-white  border-r border-b border-t  bg-customize-dark-19 hover:bg-customize-dark-42 iconfont icon-chaxun1"></span> &nbsp;&nbsp; 
   

    </div>
    );
  }
}

export default SearchInput;
