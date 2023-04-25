import React, { Component } from "react";
import "./track.less";
import CreaterTimeSheet from "./create_sheet";
class Track extends Component {
  state = {
    month_num: 12,
    current_year: 2022,
    current_month: 7,
    expandedRows: {},
    sheetid:0,
    isModalOpen: false,
    current_day: 18,
    week_day:null,
    dataList: [
      {
        id: 1,
        projectname: "projectname",
        customer: "Markus",
        type: "TicKet",
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
        projectname: "Diyou",
        customer: "XIAOHEI",
        type: "Vor-Ort",
        totaltime: "18:00",
        time: {
          mo: "00:10",
          di: "00:00",
          mi: "00:00",
          do: "02:00",
          fr: "00:00",
          sa: "00:00",
          so: "00:00",
        },
        timevisual: 78,
        state: true,
      },
      {
        id: 3,
        projectname: "Shenguan",
        customer: "Changshen",
        type: "TicKet",
        totaltime: "18:00",
        time: {
          mo: "01:15",
          di: "00:00",
          mi: "00:00",
          do: "00:00",
          fr: "00:00",
          sa: "00:00",
          so: "00:19",
        },
        timevisual: 13,
        state: true,
      },
      {
        id: 15,
        projectname: "Timetarck",
        customer: "Markus",
        type: "Vor-Ort",
        totaltime: "18:00",
        time: {
          mo: "02:05",
          di: "00:00",
          mi: "00:00",
          do: "00:00",
          fr: "00:00",
          sa: "00:14",
          so: "00:00",
        },
        detaile: [
          {
            id: 1233,
            projectname: "Note information + summary information2",
            customer: "",
            type: "Vor-Ort",
            totaltime: "01:29",
            time: {
              mo: "01:05",
              di: "00:00",
              mi: "00:00",
              do: "00:10",
              fr: "00:00",
              sa: "00:14",
              so: "00:00",
            },
          },
          {
            id: 123,
            projectname: "Note information + summary information1",
            customer: "",
            type: "Vor-Ort",
            totaltime: "1:00",
            time: {
              mo: "00:30",
              di: "00:00",
              mi: "00:05",
              do: "00:10",
              fr: "00:00",
              sa: "00:15",
              so: "00:00",
            },
          },
        ],
        timevisual: 12,
        state: true,
      },
      {
        id: 14,
        projectname: "Timetarck",
        customer: "Markus",
        type: "Vor-Ort",
        totaltime: "18:00",
        time: {
          mo: "02:05",
          di: "00:00",
          mi: "00:00",
          do: "00:00",
          fr: "00:00",
          sa: "00:14",
          so: "00:00",
        },
        detaile: [
          {
            id: 45,
            projectname: "Note information + summary information2",
            customer: "",
            type: "Vor-Ort",
            totaltime: "01:29",
            time: {
              mo: "01:05",
              di: "00:00",
              mi: "00:00",
              do: "00:10",
              fr: "00:00",
              sa: "00:14",
              so: "00:00",
            },
          },
          {
            id: 46,
            projectname: "Note information + summary information1",
            customer: "",
            type: "Vor-Ort",
            totaltime: "1:00",
            time: {
              mo: "00:30",
              di: "00:00",
              mi: "00:05",
              do: "00:10",
              fr: "00:00",
              sa: "00:15",
              so: "00:00",
            },
          },
        ],
        timevisual: 12,
        state: true,
      },
      {
        id: 9,
        projectname: "Timetarck",
        customer: "Markus",
        type: "Vor-Ort",
        totaltime: "18:00",
        time: {
          mo: "02:05",
          di: "00:00",
          mi: "00:00",
          do: "00:00",
          fr: "00:00",
          sa: "00:14",
          so: "00:00",
        },
        detaile: [
          {
            id: 47,
            projectname: "Note information + summary information2",
            customer: "",
            type: "Vor-Ort",
            totaltime: "01:29",
            time: {
              mo: "01:05",
              di: "00:00",
              mi: "00:00",
              do: "00:10",
              fr: "00:00",
              sa: "00:14",
              so: "00:00",
            },
          },
          {
            id: 48,
            projectname: "Note information + summary information1",
            customer: "",
            type: "Vor-Ort",
            totaltime: "1:00",
            time: {
              mo: "00:30",
              di: "00:00",
              mi: "00:05",
              do: "00:10",
              fr: "00:00",
              sa: "00:15",
              so: "00:00",
            },
          },
        ],
        timevisual: 12,
        state: true,
      },
      
    
      {
        id: 4,
        projectname: "Timetarck",
        customer: "Markus",
        type: "Vor-Ort",
        totaltime: "18:00",
        time: {
          mo: "02:05",
          di: "00:00",
          mi: "00:00",
          do: "00:00",
          fr: "00:00",
          sa: "00:14",
          so: "00:00",
        },
        detaile: [
          {
            id: 1233,
            projectname: "Note information + summary information2",
            customer: "",
            type: "Vor-Ort",
            totaltime: "01:29",
            time: {
              mo: "01:05",
              di: "00:00",
              mi: "00:00",
              do: "00:10",
              fr: "00:00",
              sa: "00:14",
              so: "00:00",
            },
          },
          {
            id: 123,
            projectname: "Note information + summary information1",
            customer: "",
            type: "Vor-Ort",
            totaltime: "1:00",
            time: {
              mo: "00:30",
              di: "00:00",
              mi: "00:05",
              do: "00:10",
              fr: "00:00",
              sa: "00:15",
              so: "00:00",
            },
          },
        ],
        timevisual: 12,
        state: true,
      },
      {
        id: 5,
        projectname: "Rental",
        customer: "CaiJie",
        type: "Telefon",
        totaltime: "18:00",
        time: {
          mo: "00:00",
          di: "00:00",
          mi: "00:10",
          do: "00:00",
          fr: "00:00",
          sa: "00:00",
          so: "00:00",
        },
        timevisual: 60,
        state: false,
      },
    ],
  };
  reduceMonth = () => {
    const { month_num, current_day, current_year } = this.state;
    if (month_num == 1) {
      this.setState({
        month_num: 52,
        current_year: current_year - 1,
      });
    } else {
      this.setState({
        month_num: month_num - 1,
        current_day: current_day - 7,
      });
    }
  };
  addMonth = () => {
    const { month_num, current_day, current_year } = this.state;
    if (month_num == 52) {
      this.setState({
        month_num: 1,
        current_year: current_year + 1,
      });
    } else {
      this.setState({
        month_num: month_num + 1,
        current_day: current_day + 7,
      });
    }
  };

  // 当用户单击父级行的按钮时，更新状态对象以展开或收缩该行的子级行
  handleExpand = (index) => {
    console.log(index);
    const expandedRows = { ...this.state.expandedRows };
    expandedRows[index] = !expandedRows[index];
    this.setState({ expandedRows });
  };

  handleEditSheet=(index,week_day)=>{
    console.log(this.state.isModalOpen,index)
    this.setState({ isModalOpen: true, sheetid: index ,week_day:week_day});
    
  }
/***********关闭编辑框 */
  closeMadalSheet=()=>{
    this.setState({
      isModalOpen: false
    });
  }
  
  render() {
    const { dataList } = this.state;
    const { expandedRows } = this.state;
    return (
      <div className="overflow-y-auto  md:mx-auto bg-white rounded-md  shadow-md">
        <div className="flex flex-wrap text-white px-10 bg-gray-900 rounded-lg">
          <div className="flex-none w-full sm:w-1/4 h-16 flex text-center items-center">
            <h2 className="text-lg font-bold text-white">TimeSheet Edit</h2>
          </div>
          <div className="lex-grow w-full sm:w-1/2 h-16 flex items-center justify-center">
            <h2 className="text-lg text-white">
              KW {this.state.month_num} / Dienstag {this.state.current_day} .07.
              {this.state.current_year}
            </h2>
          </div>
          <div className="flex-grow w-full sm:w-1/4 h-16 flex text-center items-center">
            <div className="text-white ml-auto">
              <div>
                <span
                  onClick={this.reduceMonth}
                  className="iconfont icon-zuojiantou"
                ></span>
                &nbsp; KW <span className="iconfont icon-riqixuanze"></span>{" "}
                &nbsp;{" "}
                <span
                  className="iconfont icon-youjiantou"
                  onClick={this.addMonth}
                ></span>
              </div>
              <div> {this.state.month_num} </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto  ">
          <table className="text-center   table-auto min-w-full divide-y divide-gray-200">
            <thead>
              <tr className=" text-xs">
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  {" "}
                  Project/Customer
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  Typ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider bg-blue-50"
                >
                  Total Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  Mo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  Di
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  Mi
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  Do
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  Fr
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  Sa
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  So
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  TimeVisual
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  Expand
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                >
                  Option
                </th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm text-left divide-gray-200">
              {dataList.map((item, index) => {
                return (
                  <React.Fragment key={item.id}>
                    <tr>
                      <td className="px-6 py-4  whitespace-wrap  break-all">
                        {item.projectname} / {item.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        {" "}
                        {item.type}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all bg-blue-50">
                        {item.totaltime}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        {" "}
                        {item.time.mo == "00:00" ? "" : item.time.mo}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        {item.time.di == "00:00" ? "" : item.time.di}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        {item.time.mi == "00:00" ? "" : item.time.mi}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        {" "}
                        {item.time.do == "00:00" ? "" : item.time.do}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        {" "}
                        {item.time.fr == "00:00" ? "" : item.time.fr}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        {" "}
                        {item.time.sa == "00:00" ? "" : item.time.sa}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        {item.time.so == "00:00" ? "" : item.time.so}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        <div className=" h-1 text-xs">{item.timevisual} % </div>
                        &nbsp;&nbsp;
                        <div className="relative h-2 bg-gray-200">
                          <div
                            className={`absolute top-0 h-2 ${
                              item.state ? "bg-green-600" : " bg-blue-500"
                            }`}
                            style={{ width: item.timevisual }}
                          >
                            {" "}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        <span
                          className={`iconfont   ${
                            expandedRows[index]
                              ? "icon-shouqi- text-blue-600"
                              : "icon-zhankai4  text-gray-600"
                          }`}
                          onClick={() => this.handleExpand(index)}
                        ></span>
                      </td>
                      <td className="px-6 py-4 whitespace-wrap  break-all">
                        <span className="iconfont icon-xinzeng1 text-gray-600"></span>{" "}
                        &nbsp; &nbsp;
                        <span className="iconfont icon-bianji3"></span> &nbsp;
                        <span className="iconfont icon-shanchu1 text-red-600"></span>
                      </td>
                    </tr>

                    {expandedRows[index] &&
                    item.detaile &&
                    item.detaile.length > 0
                      ? item.detaile.map((detaileItem, detaileIndex) => {
                          return (
                            <tr
                              key={detaileItem.id}
                              className="text-center font-thin italic md:not-italic text-xs bg-gray-200"
                            >
                              <td className="px-6 py-4 whitespace-wrap">
                                {detaileItem.projectname}
                              </td>
                              <td className="px-6 py-4 whitespace-wrap">
                                {detaileItem.type}
                              </td>
                              <td className="px-6 py-4 whitespace-wrap">
                                {detaileItem.totaltime}
                              </td>
                              <td className="px-6 py-4 whitespace-wrap  ">
                                {" "}
                                {detaileItem.time.mo == "00:00"
                                  ? ""
                                  : detaileItem.time.mo}  &nbsp; &nbsp;<span    onClick={() => this.handleEditSheet(detaileItem.id,'mo')} className="iconfont text-xs icon-bianji3"></span>
                              </td>
                              <td className="px-6 py-4 whitespace-wrap ">
                                {detaileItem.time.di == "00:00"
                                  ? ""
                                  : detaileItem.time.di}
                              </td>
                              <td className="px-6 py-4 whitespace-wrap">
                                {detaileItem.time.mi == "00:00"
                                  ? ""
                                  : detaileItem.time.mi}  
                              </td>
                              <td className="px-6 py-4 whitespace-wrap ">
                                {" "}
                                {detaileItem.time.do == "00:00"
                                  ? ""
                                  : detaileItem.time.do} 
                              </td>
                              <td className="px-6 py-4 whitespace-wrap">
                                {" "}
                                {detaileItem.time.fr == "00:00"
                                  ? ""
                                  : detaileItem.time.fr }
                                  
                              </td>
                              <td className="px-6 py-4 whitespace-wrap ">
                                {" "}
                                {detaileItem.time.sa == "00:00"
                                  ? ""
                                  : detaileItem.time.sa} 
                              </td>
                              <td className="px-6 py-4 whitespace-wrap ">
                                {detaileItem.time.so == "00:00"
                                  ? ""
                                  : detaileItem.time.so} 
                              </td>
                              <td className="px-6 py-4 whitespace-wrap">

                              </td>
                              <td className="px-6 py-4 whitespace-wrap"></td>
                              <td className="px-6 py-4 whitespace-wrap">
                                <span className="iconfont icon-bianji3"></span>{" "}
                                &nbsp;
                                <span className="iconfont icon-shanchu1 text-red-600"></span>
                              </td>
                            </tr>
                          );
                        })
                      : ""}
                  </React.Fragment>
                );
              })}
            </tbody>
            <thead className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
              <tr className="bg-blue-50">
                <th
                  scope="col"
                  className="px-6 py-3   font-medium  uppercase tracking-wider"
                >
                  Summary
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  font-medium uppercase tracking-wider"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-3   font-medium uppercase tracking-wider"
                >
                  90:00
                </th>
                <th
                  scope="col"
                  className="px-6 py-3   font-medium uppercase tracking-wider"
                >
                  3:35
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  font-medium uppercase tracking-wider"
                >
                  0:00
                </th>
                <th
                  scope="col"
                  className="px-6 py-3   font-medium uppercase tracking-wider"
                >
                  0:10
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  font-medium  uppercase tracking-wider"
                >
                  2:00
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  font-medium  uppercase tracking-wider"
                >
                  0:20
                </th>
                <th
                  scope="col"
                  className="px-6 py-3    font-medium uppercase tracking-wider"
                >
                  0:14
                </th>
                <th
                  scope="col"
                  className="px-6 py-3   font-medium uppercase tracking-wider"
                >
                  0:19{" "}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold  text-gray-600 uppercase tracking-wider"
                >
                  <div className=" h-2 mt-2  text-sm   font-medium ">90 % </div>&nbsp;&nbsp;
                  <div className="relative h-2 bg-gray-200">
                    <div
                      className="absolute top-0 h-2 bg-green-600"
                      style={{ width: 90 }}
                    >
                      {" "}
                    </div>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold text-center text-gray-600 uppercase tracking-wider"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold text-center text-gray-600 uppercase tracking-wider"
                ></th>
              </tr>
            </thead>
          </table>
        </div>
        <CreaterTimeSheet isVisible={this.state.isModalOpen} id={this.state.sheetid} week_day={this.state.week_day}  closeSheet={this.closeMadalSheet}/>
      </div>
    );
  }
}

export default Track;
