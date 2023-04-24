import React, { Component, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ErrorToast from "../../components/ErrorMessage";
class Quill extends Component {
  constructor(props) {
    super(props);
    // 初始状态为第一个菜单项选中
    this.state = {
      text: "",
      isVisible: false,
      quill_formats: [
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "ordered",
        "link",
        "image",
        "align",
      ],
      quill_modules: {
        toolbar: {
          container: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "bullet" }, { list: "ordered" }],
            [{ align: [] }],
            ["link", "image"],
          ],
        },
      },
      listD: [],
    };
  }

  handleChange = (index) => {
    // 点击菜单项时设置当前选中的菜单项
    console.log(index);
  };

  closeModal = () => {
    this.props.closeSheet();
  };
  handleButtonClick = () => {
    alert("提交成功！");
    this.props.closeSheet();
  };

  /***********************错误信息提示时，接收错误信息提示组件中每次销毁后单个错误信息的新数组，避免当有新的信息提示出现时，又全部加载 */
  upErrorList = (newErroeList) => {
    console.log("测试接收子组件传来的数据" + newErroeList);
    this.setState({
      listD: newErroeList,
    });
  };

  handleButtonClick = () => {
    this.setState((prevState) => ({
      listD: [...prevState.listD, { msg: "测试提交", color: "#34D399" }],
    }));
  };

  render() {
    const { week_day } = this.props;
    const { id } = this.props;
    const { quill_formats, text, quill_modules, listD } = this.state;
    const { isVisible } = this.props;
    console.log("***********");
    console.log(this.props);
    console.log(isVisible);
    console.log("***********");
    if (!isVisible) return null;
    return (
      <div className="fixed bg-black bg-opacity-50 z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center  h-3/4  mt-2 min-h-screen">
          <div className="relative h-3/4 bg-white rounded-lg w-2/5">
            {/* 内容 */}

            <div className="max-w-md mx-auto  py-10">
              <h2 className="text-2xl font-bold mb-4">Project ID：{id}  |    Edit Day :{week_day}</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  Time
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your working hours"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="age"
                >
                  Detailed information records
                </label>
                <ReactQuill
                  value={text}
                  onChange={this.handleChange}
                  theme="snow"
                  modules={quill_modules}
                  formats={quill_formats}
                  style={{ height: 200 }}
                  className="w-auto"
                />
              </div>
              <div className="mb-4  text-white flex items-center justify-center my-14">
                <div className="mr-2">
                  <button
                    onClick={this.handleButtonClick}
                    type="submit"
                    className="w-full bg-green-400 py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                  >
                  <span className="icon-baocun1 text-white  iconfont text-xl text-sm"></span>
                     &nbsp;&nbsp;
                    Save
                  </button>
                </div>
                <div className="ml-2 ">
                  <button
                    onClick={this.closeModal}
                    type="submit"
                    className="w-full py-2 px-4 bg-red-600 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                  >
                  <span className="icon-quxiaoquanping_o text-white text-xl  iconfont text-sm"></span>
                     &nbsp;&nbsp;  Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 信息提示 */}
        <div>
          <ErrorToast listdd={listD} upErrorListComback={this.upErrorList} />
        </div>
      </div>
    );
  }
}

export default Quill;
