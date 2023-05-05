/*******************************
 *                             * 
 *                             * 
 *    Time记录组件              * 
 *                             * 
 * *****************************/
import React, { Component } from "react";
import "./track.less";
import CreaterTimeSheet from "./create_sheet";
import ReactDatePicker from "react-datepicker";
class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
    currentDate: new Date(),
    currentWeek: this.getWeekOfYear(new Date()),
    weeksToAdd: 0,
    expandedRows: {},
    sheetid:0,
    isModalOpen: false,
    selectedDate: new Date(),
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
            projectname: "Note informat",
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
            projectname: "Note informatio",
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
            projectname: "Note informatio",
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
            projectname: "Note information",
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
            projectname: "Note information ",
            customer: "",
            type: "Vor-Ort",
            totaltime: "01:29",
            time: {
              mo: "01:05",
              di: "00:00",
              mi: "0000撒旦撒旦:00",
              do: "00:10",
              fr: "00:00",
              sa: "00:14",
              so: "00:00",
            },
          },
          {
            id: 123,
            projectname: "Note information ",
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
          sa: "00:00撒旦撒旦",
          so: "00:00",
        },
        timevisual: 60,
        state: false,
      },
    ],
    
  };
  // this.handleWeeksChange = this.handleWeeksChange.bind(this);   
    this.handleAddWeek = this.handleAddWeek.bind(this);
    this.handleSubtractWeek = this.handleSubtractWeek.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
}
getWeekOfYear(date) {
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
  return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
}

handleAddWeek() {
  const newDate = new Date(this.state.currentDate);
  newDate.setDate(newDate.getDate() + 7);
  const newWeek = this.getWeekOfYear(newDate);
  this.setState({
    currentDate: newDate,
    currentWeek: newWeek,
    weeksToAdd: 0,
  });
}

handleSubtractWeek() {
  const newDate = new Date(this.state.currentDate);
  newDate.setDate(newDate.getDate() - 7);
  const newWeek = this.getWeekOfYear(newDate);
  this.setState({
    currentDate: newDate,
    currentWeek: newWeek,
    weeksToAdd: 0,
  });
}

handleDateChange(event) {
  // const date = new Date(event);
  // console.log('************/')
  // const select_year = date.getFullYear();
  // const select_month = (date.getMonth() + 1).toString().padStart(2, '0');
  // const select_day = date.getDate().toString().padStart(2, '0');
  // const newDate = `${select_year}-${select_month}-${select_day}`;
  // console.log(newDateStr)
  const newDate = new Date(event.target.value);
  // const newDate = event;
  console.log(newDate)
  const newWeek = this.getWeekOfYear(newDate);
  this.setState({
    currentDate: newDate,
    currentWeek: newWeek,
  });
}
  // 当用户单击父级行的按钮时，更新状态对象以展开或收缩该行的子级行
  handleExpand = (index) => {
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
    const { expandedRows,currentDate, currentWeek, weeksToAdd  } = this.state;
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const date = currentDate.toLocaleDateString();
    return (
      <div className="  overflow-y-auto  md:mx-auto  rounded-md ">
        <div className="flex relative  flex-wrap z-40  shadow-md text-white mx-4 h-20 text-justify items-center px-10 bg-transparent bg-gradient-to-br from-customize-blue-49 to-customize-blue-1a  transform rotate-15 rounded-lg">
          <div className="flex-none w-full sm:w-1/4 h-16 flex text-center items-center">
            <h2 className="text-lg font-bold text-white">TimeSheet Edit</h2>
          </div>
          <div className="lex-grow w-full sm:w-1/2 h-16 flex items-center justify-center">
            <h2 className="text-lg text-white">
              {/* KW {currentWeek} | {date} */}
            </h2>
          </div>
          <div className="flex-grow w-full sm:w-1/4 h-16 flex text-center items-center">
            <div className="text-white ml-auto">
              <div>
                <span
                  onClick={this.handleSubtractWeek}
                  className="iconfont icon-zuojiantou"
                ></span>&nbsp;KW:{currentWeek}&nbsp;
                <span
                  className="iconfont icon-youjiantou"
                  onClick={this.handleAddWeek}
                ></span>
              </div>
              <div className="flex"> 
                <input type="date" className="bg-transparent rounded-sm text-white appearance-non"  value={currentDate.toISOString().slice(0,10)} onChange={this.handleDateChange} />
                
                  </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto bg-white pt-6  shadow-md relative z-10 -mt-5">
          <table className="px-4 text-sm text-center table-fixed  font-normal w-full  divide-y divide-gray-200">
            <thead>
              <tr className="text-xs">
                <th scope="col"  
                    className="py-2   w-2/13 uppercase tracking-wider">
                  <p className="">Project</p>
                  <p>Customer</p>
                </th>
                <th
                  scope="col"
                  className="w-1/13 uppercase tracking-wider"
                >
                  Typ
                </th>
                <th
                  scope="col"
                  className="w-1/13 uppercase tracking-wider"
                >
                  Total Time
                </th>
                <th
                  scope="col"
                  className="w-1/13 uppercase tracking-wider"
                >
                  Mo
                </th>
                <th
                  scope="col"
                  className="w-1/13 uppercase tracking-wider"
                >
                  Di
                </th>
                <th
                  scope="col"
                  className="w-1/13 uppercase tracking-wider"
                >
                  Mi
                </th>
                <th
                  scope="col"
                  className="w-1/13 uppercase tracking-wider"
                >
                  Do
                </th>
                <th
                  scope="col"
                  className="w-1/13 uppercase tracking-wider"
                >
                  Fr
                </th>
                <th
                  scope="col"
                  className="w-1/13 uppercase tracking-wider"
                >
                  Sa
                </th>
                <th
                  scope="col"
                  className="w-1/13 uppercase tracking-wider"
                >
                  So
                </th>
                <th
                  scope="col"
                  className=" w-1/13 uppercase tracking-wider"
                >
                  TimeVisual
                </th>
                <th
                  scope="col"
                  className="w-1/13 uppercase tracking-wider"
                >
                  Expand
                </th>
                <th
                  scope="col"
                  className=" w-1/13 uppercase tracking-wider"
                >
                  Option
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {dataList.map((item, index) => {
                return (
                  <React.Fragment key={item.id}>
                    <tr className="py-2 text-xs">
                      <td className="py-4 font-medium whitespace-normal break-words overflow-hidden text-overflow-ellipsis">
                        <p> {item.projectname} </p>
                        <p>{item.customer}</p>
                        </td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">{item.type}</td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis  bg-blue-50"> {item.totaltime} </td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">{item.time.mo == "00:00" ? "" : item.time.mo}</td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">{item.time.di == "00:00" ? "" : item.time.di}</td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">{item.time.mi == "00:00" ? "" : item.time.mi}</td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">{item.time.do == "00:00" ? "" : item.time.do}</td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">{item.time.fr == "00:00" ? "" : item.time.fr}</td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">{item.time.sa == "00:00" ? "" : item.time.sa}</td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">{item.time.so == "00:00" ? "" : item.time.so}</td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">
                        <div className="relative h-2 bg-gray-200 rounded-full">
                          <div className={` h-2 rounded-full absolute top-0 left-0  ${item.state === true
                              ? "bg-customize-alert  text-white"
                              : " text-white bg-customize-success hover:bg-opacity-5 "
                            }`} style={{ width: `${item.timevisual}%` }}></div>

                        </div>
                      </td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">
                        <span
                          className={`iconfont   ${
                            expandedRows[index]
                              ? "icon-shouqi- text-blue-500"
                              : "icon-zhankai4  text-gray-600"
                          }`}
                          onClick={() => this.handleExpand(index)}
                        ></span>
                      </td>
                      <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">
                        <span className="iconfont icon-xinzeng1 text-gray-600"></span>{" "}
                        &nbsp;
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
                              className="bg-neutral-300"
                            >
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">{detaileItem.projectname}</td>
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">{detaileItem.type}</td>
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">  {detaileItem.totaltime}</td>
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"> {detaileItem.time.mo == "00:00"  ? "" : detaileItem.time.mo} 
                                   &nbsp; &nbsp;<span  onClick={() => this.handleEditSheet(detaileItem.id,'mo')} className="iconfont text-xs icon-bianji3"></span>
                              </td>
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"> {detaileItem.time.di == "00:00" ? ""   : detaileItem.time.di}
                              </td>
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">
                                {detaileItem.time.mi == "00:00"
                                  ? ""
                                  : detaileItem.time.mi}  
                              </td>
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">
                                {" "}
                                {detaileItem.time.do == "00:00"
                                  ? ""
                                  : detaileItem.time.do} 
                              </td>
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">
                                {" "}
                                {detaileItem.time.fr == "00:00"
                                  ? ""
                                  : detaileItem.time.fr }
                                  
                              </td>
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">
                                {" "}
                                {detaileItem.time.sa == "00:00"
                                  ? ""
                                  : detaileItem.time.sa} 
                              </td>
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">
                                {detaileItem.time.so == "00:00"
                                  ? ""
                                  : detaileItem.time.so} 
                              </td>
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis">

                              </td>
                              <td className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"></td>
                              <td className="px-6 py-4 whitespace-wrap overflow-hidden  break-all">
                              <span className="iconfont icon-xinzeng1 text-gray-600"></span>{" "}
                              &nbsp;
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
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                >
                  Summary
                </th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                ></th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                >
                  90:00
                </th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                >
                  3:35
                </th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                >
                  0:00
                </th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                >
                  0:10
                </th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                >
                  2:00
                </th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                >
                  0:20
                </th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                >
                  0:14
                </th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                >
                  0:19{" "}
                </th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                >
                  <div className=" h-2 mt-2  text-sm   font-medium ">90 % </div>&nbsp;&nbsp;
                  <div className="relative h-2 bg-gray-200">
                    <div
                      className="absolute top-0 h-2 bg-customize-success"
                      style={{ width: 90 }}
                    >
                      {" "}
                    </div>
                  </div>
                </th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
                ></th>
                <th
                  scope="col"
                  className="whitespace-normal break-words overflow-hidden text-overflow-ellipsis"
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
