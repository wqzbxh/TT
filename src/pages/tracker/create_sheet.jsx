import React, { Component, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ErrorToast from "../../components/ErrorMessage";
class CreaterTimeSheet extends Component {
  constructor(props) {
    super(props);
    // 初始状态为第一个菜单项选中
    this.state = {
      text: "",
      item_description:"",
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
    const { quill_formats,item_description, text, quill_modules, listD } = this.state;
    const { isVisible } = this.props;
    // console.log("***********");
    // console.log(this.props);
    // console.log(isVisible);
    // console.log("***********");
    if (!isVisible) return null;
    return (


        <div className="fixed bg-black  bg-opacity-50 inset-0 z-50 overflow-auto bg-black-transparen overflow-y-auto">
        <div className="flex  items-center justify-center h-3/4  mt-2 min-h-screen">
          <div className="relative rounded-lg h-5/6 text-gray-800 rounded-lg w-4/5">
            <div className="px-2 text-left">
                    <div className="w-full  mx-auto">
                      <form className="bg-white  rounded-lg px-8 pt-6 pb-8 mb-4">
                      <div className="text-right flex px-6  bg-white">
                    <div className="subpixel-antialiased text-2xl font-semibold flex-grow h-16 text-center">
                       Edit  Time Sheet |  （ ID：{id}   ***    Edit Day :{week_day}）
                    </div>
                    
                
                    <div className="flex-none px-2 h-16 ...">
                      <span
                        className="iconfont icon-tijiao01 hover:text-green-900  text-2xl text-green-500"
                        onClick={this.saveTimePlan}
                      ></span>
                    </div>
                    <div className="flex-none px-1 h-16 ...">
                      <span
                        className="iconfont  text-2xl  text-red-500  hover:text-red-700 icon-shanchu3"
                        onClick={this.closeModal}
                      ></span>
                    </div>

                  </div>
                  
                  <div className=" py-1 border-gray-100  border-b-4  border-dashed">
                    <span className="text-xl font-medium">
                      {" "}
                      <span className="px-2 iconfont icon-xiangmu1"></span>
                      Project Data
                    </span>
                  </div>
                  <div className="flex flex-wrap  py-2   -mx-4 mb-4">
                  <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="name"
                      >
                        Time Hours
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder=""
                      />
                    </div>
                    <div className="w-full md:w-full px-4 py-5 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="date"
                      >
                        Descriptions
                      </label>
                      <ReactQuill
                  value={item_description}
                  // onChange={this.handleChange}
                  theme="snow"
                  modules={quill_modules}
                  formats={quill_formats}
                  className="w-auto pb-12 h-60"
                />
                    </div>
                 
                  </div>

                </form>
              </div>
            </div>
            {/* 内容 */}
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

export default CreaterTimeSheet;
