import React, { Component } from 'react';
import SearchBox from '../common/search_box';
import CreateProject from "./project_create"
import EditProject from "./project_edit";
import TimePlanProject from "./project_time_plan";

class ProjectList extends Component {
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
      
        <SearchBox />
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
                        <th  scope="col"    className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider" > Action. </th>
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

export default ProjectList;
