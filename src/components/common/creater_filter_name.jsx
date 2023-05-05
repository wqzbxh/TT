import React, { Component } from 'react';
import CreateProject from '../project/project_create';

class CustomerFilterName extends Component {
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
         <div className="relative inline-block border w-64  h-10 mx-1">
            <select className="block w-full py-2 px-4 pr-8 leading-tight text-gray-700 bg-white rounded-lg appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-500">
              <option className="bg-transparent border-0" value="1">
                Select Customer
              </option>
              <option className="bg-transparent border-0" value="2">
                xiaoming
              </option>
              <option className="bg-transparent border-0" value="3">
              xiaoming2
              </option>
            </select>
          </div>
      
    );
  }
}

export default CustomerFilterName;
