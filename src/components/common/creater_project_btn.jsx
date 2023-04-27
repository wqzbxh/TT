import React, { Component } from 'react';
import CreateProject from '../project/project_create';

class CreateProjectBtn extends Component {
    state={
        isCreaterMedal: false,
      }
    /***********打开添加项目框 */
    handleCreaterProjects=()=>{
        this.setState({ isCreaterMedal: true});
    }
    /***********关闭添加框 */
    closeCreateProject=()=>{
      this.setState({
        isCreaterMedal: false
    });
    }

  render() {
    console.log(this.state.isCreaterMedal)
    return (
        <div className="rounded-2xl  flex px-1">
          <div  className="text-gray-700 text-sm px-2.5 py-1 border border-gray-200   hover:border-dashed  hover:bg-gray-100"  onClick={this.handleCreaterProjects} >
            <span className="iconfont icon-xinzeng5"></span> &nbsp; Add Project
        </div> 
        
        <CreateProject isVisible={this.state.isCreaterMedal}  closeModal={this.closeCreateProject}  />
      </div>
      
    );
  }
}

export default CreateProjectBtn;
