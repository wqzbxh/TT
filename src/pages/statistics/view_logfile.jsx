import React, { Component } from "react";
import logo from '../../public/image/logo.png';



class ViewLogfile extends Component {
    fileInput = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            logo:logo // initialize state variable to store the URL of the uploaded image
          };
      }

      handleUploadClick = () => {
        this.fileInput.current.click();
      };
    
      handleFileInputChange = (event) => {
        const file = event.target.files[0];
        const logo = URL.createObjectURL(file); // create URL for uploaded file
        this.setState({ logo }); // update state with image URL
        // 处理上传文件的代码
      };
  render() {
   const {logo} = this.state;
    return (
        <div className=" mt-5 flex">
          <div className="flex-auto overflow-hidden rounded-3xl bg-white text-sm ">
            <div className="p-4">
              <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <span className="iconfont icon-rizhi1  text-2xl"></span>
                </div>
                <div>
                  <a href="#" className="font-semibold text-gray-900">
                  Logfile
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-gray-600">Get view  Logfile</p>
                </div>
              </div>
              <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                 
                       <span className="iconfont icon-woderizhi  text-2xl"></span>
                </div>
                <div>
                  <a href="#" className="font-semibold text-gray-900">
                  View Logfile by name
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-gray-600">Get View Logfile by name</p>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      
    );
  }
}

export default ViewLogfile;
