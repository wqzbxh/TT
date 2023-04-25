import React, { Component } from "react";
import CreateProject from "./project_create";
import EditProject from "./project_edit";
import TimePlanProject from "./project_time_plan";

class Project extends Component {
  state={
    expandedRows: {},
    isCreaterMedal: false,
    isEditModal:false,
    isTimePlan:false,
    current_day: 18,
    week_day:null,
    dataList: [
      {
        id: 1,
        projectname: "projectname1",
        customer: "Markus",
        Distributen : "Markus Freiberger",
        Amount:'98$',
        totaltime: "18:00",
        time: {
          mo: "00:15",
          di: "00:00",
          mi: "00:00",
          do: "00:00",
          fr: "00:20",
          sa: "00:00",
          so: "00:00",
        },
        timevisual: 45,
        state: false,
      },
      {
        id: 2,
        projectname: "projectname2",
        customer: "Haiyang",
        Distributen : "Georg Käsmeier",
        Amount:'998$',
        totaltime: "18:00",
        time: {
          mo: "00:15",
          di: "00:00",
          mi: "00:00",
          do: "00:00",
          fr: "00:20",
          sa: "00:00",
          so: "00:00",
        },
        timevisual: 45,
        state: false,
      },
    ],
  }

  /***********打开添加项目框 */
  handleCreaterProject=()=>{
    console.log(this.state.isModalOpen)
    this.setState({ isCreaterMedal: true});
    
  }
  /***********关闭添加框 */
  closeCreateProject=()=>{
    this.setState({
      isCreaterMedal: false
    });
  }
  /***********打开编辑框 */
  handleEditProject=()=>{
    this.setState({ isEditModal: true});
    
  }
/***********关闭编辑框 */
closeEditProject=()=>{
  this.setState({
    isEditModal: false
  });
}
/***********打开时间计划框 */
handleTimePlanProject=()=>{
  this.setState({ isTimePlan: true});
  
}
/***********关闭时间计划框 */
closeTimePlanProject=()=>{
this.setState({
  isTimePlan: false
});
}
  render() {
    const {expandedRows,dataList} = this.state
    return (
      <div className="overflow-y-auto md:mx-auto  rounded-md  shadow-md">
        <div className="flex flex-wrap text-white rounded-lg">
          <div className="flex-none w-full sm:w-1/4 h-16 flex text-center items-center">
            <h1 className=" font-bold text-2xl text-gray-700">Projects </h1>
          </div>
          <div className="flex-grow w-full sm:w-1/4 h-16 flex text-center items-center">
            <div className="text-white ml-auto">
              <div className="text-white text-sm rounded-lg px-4 py-2 bg-gray-900  hover:bg-blue-700" onClick={this.handleCreaterProject}>
                  Create  project
              </div>
              <CreateProject isVisible={this.state.isCreaterMedal}  closeModal={this.closeCreateProject}  />
            </div>
          </div>
        </div>
        
        <div className="border flex px-2  py-2 items-center justify-center  rounded-sm">
          <div className="flex-none  text-lg px-8 ">FILTER</div>
          <div className="relative inline-block w-64">
            <select className="block w-full py-3 px-4 pr-8 leading-tight text-gray-700 bg-white rounded-lg appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-500">
              <option className="bg-transparent border-0" value="1">
                Active
              </option>
              <option className="bg-transparent border-0" value="2">
                Archived
              </option>
              <option className="bg-transparent border-0" value="3">
                All
              </option>
            </select>
          </div>
          <div className="flex-grow px-8 ">
            <input
              className="px-4 py-3 rounded-lg w-full  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              placeholder="请输入内容"
            />
          </div>

          <div className="rounded-2xl px-10">
            <div className="text-bluegray-700 text-sm px-2.5 py-2 border border-blue-200  hover:border-dashed  hover:bg-blue-50  hover:">
                <span className="iconfont icon-chaxun1"></span> &nbsp;&nbsp;  Apply filter
            </div>
          </div>
        </div>
        <div className="py-3"></div>
        <div className="overflow-x-auto bg-white ">
          <table className="text-left table-auto min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="  text-xs">
                <th  scope="col"    className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider" > Order No. </th>
             
                <th  scope="col"    className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider" > Project. </th>
             
                <th  scope="col"    className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider" > Customer. </th>
             
                <th  scope="col"    className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider" > Distributen FW.</th>
                <th  scope="col"    className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider" > Amount. </th>
             
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  Action.
                </th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm  font-extralight  divide-gray-200">
              {dataList.map((item, index) => {
                return (
                  <React.Fragment key={item.id}>
                    <tr>
                      <td className="px-6 py-4 whitespace-wrap  break-all">{item.id}</td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">{item.projectname}</td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        {" "}
                        {item.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all ">
                        {item.Distributen }
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all ">
                        {item.Amount}
                      </td>
               
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        <span className="iconfont icon-jihua2 text-green-600" onClick={this.handleTimePlanProject}></span>
                        &nbsp; &nbsp;
                        <span className="iconfont icon-bianji3" onClick={this.handleEditProject}></span> &nbsp;
                        <span className="iconfont icon-shanchu1 text-red-600"></span>
                      </td>
                    </tr>
                  
                  </React.Fragment>
                );
              })}
            </tbody>
            
          </table>
        </div>
        <CreateProject isVisible={this.state.isCreaterMedal}  closeModal={this.closeCreateProject}  />
        <EditProject isVisible={this.state.isEditModal}   closeModal={this.closeEditProject} />
        <TimePlanProject isVisible={this.state.isTimePlan}   closeModal={this.closeTimePlanProject} />
      </div>
    );
  }
}

export default Project;
