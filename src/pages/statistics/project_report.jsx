import React, { Component } from "react";
import logo from '../../public/image/logo.png';



class ProjectReport extends Component {
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
      ProjectReport
       </div>
  
      
    );
  }
}

export default ProjectReport;
