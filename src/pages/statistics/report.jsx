import React, { Component } from "react";
import { Navigate,Link  } from "react-router-dom";
import logo from '../../public/image/logo.png';



class Report extends Component {
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
                            <span className="iconfont icon-baobiao4  text-2xl"></span>
                    </div>
                    <div>
                        <Link to="/project_report" className="font-semibold text-gray-900">
                          Project Report
                        <span className="absolute inset-0"></span>
                       </Link>
                      <p className="mt-1 text-gray-600">Get  Project Report</p>
                    </div>
                </div>
              <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                 
                       <span className="iconfont icon-quanbu2  text-2xl"></span>
                </div>
                <div>
                    <Link to="#" className="font-semibold text-gray-900">
                  All Projects Report
                    <span className="absolute inset-0"></span>
                   </Link>
                  <p className="mt-1 text-gray-600">Get All project reports</p>
                </div>
              </div>
              <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <span className="iconfont icon-employees_icon  text-2xl"></span>
                </div>
                <div>
                  <Link href="#" className="font-semibold text-gray-900">
                  Employee Report
                    <span className="absolute inset-0"></span>
                  </Link>
                  <p className="mt-1 text-gray-600">Get employee's report</p>
                </div>
              </div>
              <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                 
                <span className="iconfont icon-overtime text-2xl"></span>
                </div>
                <div>
                    <Link to="#" className="font-semibold text-gray-900">
                  Overtime Report
                    <span className="absolute inset-0"></span>
                   </Link>
                  <p className="mt-1 text-gray-600">Get Overtime Report</p>
                </div>
              </div>
              <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                
                <span className="iconfont icon-renshiguanli text-2xl"></span>
                </div>
                <div>
                    <Link to="#" className="font-semibold text-gray-900">
                  Overtime development on employees
                    <span className="absolute inset-0"></span>
                   </Link>
                  <p className="mt-1 text-gray-600">Get Overtime development on employees</p>
                </div>
              </div>
              <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                
                <span className="iconfont icon-baobiao5 text-2xl"></span>
                </div>
                <div>
                    <Link to="#" className="font-semibold text-gray-900">
                  Short Time Work Report (Month)
                    <span className="absolute inset-0"></span>
                   </Link>
                  <p className="mt-1 text-gray-600">Get Short Time Work Report (Month)</p>
                </div>
              </div>
              
              <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
               
                <span className="iconfont icon-baobiao6 text-2xl"></span>
                </div>
                <div className="">
                    <Link to="#" className="font-semibold text-gray-900">
                  Sick Time Report
                    <span className="absolute inset-0"></span>
                   </Link>
                  <p className="mt-1 text-gray-600">Get Sick Time Report</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default Report;
