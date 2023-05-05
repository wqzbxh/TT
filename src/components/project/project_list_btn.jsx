import React, { Component } from 'react';
import CreateProject from '../project/project_create';

class ProjectListBtn extends Component {
    state={
        isCreaterMedal: false,
      }
/***********关闭编辑框 */
  closeCustomerData=()=>{
  this.setState({
      isCustomerModal: false
  });
}

  render() {
    console.log(this.state.isCreaterMedal)
    return (
        <div className="rounded-2xl  flex px-1">
          <div  className="text-gray-700 text-sm px-2.5 py-1 border border-gray-200   hover:border-dashed  hover:bg-gray-100"  onClick={this.handleCreaterProjects} >
            <span className="iconfont icon-xinzeng5"></span> &nbsp; ProjectListBtn
        </div> 
        
        <CreateProject isVisible={this.state.isCreaterMedal}  closeModal={this.closeCreateProject}  />
      </div>
      
    );
  }
}

export default ProjectListBtn;
