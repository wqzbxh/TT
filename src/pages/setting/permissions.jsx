import React, { Component } from "react";
import logo from '../../public/image/logo.png';



class Permissions extends Component {
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
      <div className="max-w-3xl px-8  bg-white rounded-lg">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">WebsiteInfo：</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Company Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="company"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                 <div>
                    <img src={logo} alt="" className="rounded-full h-24 w-24" />
                 </div>
                <button  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={this.handleUploadClick}>Change</button>
                    <input
                    type="file"
                    ref={this.fileInput}
                    style={{ display: 'none' }}
                    onChange={this.handleFileInputChange}
                    />
              </div>
            </div>
          </div>
        </div>
        </div>


     </div>
    );
  }
}

export default Permissions;
