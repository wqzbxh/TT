import React, { Component } from 'react';
import ErrorToast from '../ErrorMessage';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FillingHours from './filling_hour';
class TimePlanProject extends Component {
    constructor(props) {
        super(props);
        // 初始状态为第一个菜单项选中
        this.state = {
          text: "",
          completion_time:new Date(),
          start_time:new Date(),
          isVisible: false,
          listError: [],
          target_hours_fe:{
            title:'Target Hours FE',
          },
          target_hours_fena:{
            title:'Target Hours FENA',
          },
            target_hours_fej:{
            title:'Target Hours FE',
          },
          target_hours_fe_china:{
            title:'Target Hours Fe China',
          },
          target_hours_fe_xx:{
            title:'Target Hours FE XX',
          },
          item_description:'',
          individualDataList: [
            {
                bill_type: "2",
                Date_of_invoice: "21321",
                distributionfe: "",
                currency: "",
                Exchange: "",
              },
          ],  quill_formats: [
            "bold",
            "italic",
            "underline",
            "strike",
            "list",
            "bullet",
            "ordered",
            "link",
            "image",
            "align",
          ],
          quill_modules: {
            toolbar: {
              container: [
                ["bold", "italic", "underline", "strike"],
                [{ list: "bullet" }, { list: "ordered" }],
                [{ align: [] }],
                ["link", "image"],
              ],
            },
          },
        };
      }
      
  closeModal = () => {
    this.props.closeModal();
  };
  /***************增加一条可以填写的记录 */
  addRecord =()=>{
        this.setState((prevState)=>({
            individualDataList:[
                ...prevState.individualDataList,{
                    bill_type: "4",
                    Date_of_invoice: "",
                    distributionfe: "",
                    currency: "",
                    Exchange: "",
                }
            ]
        }))
  }
  /******************删除记录 */
  handleRemoveRecord=(index)=>{
    console.log(index)
        if(this.state.individualDataList.length < 2){
            return false;
        }
        this.setState((prevState)=>({
            individualDataList:prevState.individualDataList.filter( (item,olderIndex) => olderIndex !== index)
        }))}
 /************************选择 */
 handleChange=(event,index)=>{
    const {name,value} = event.target
    console.log(event.target.value,event.target.name,index)
    this.setState((prevState)=>({
        individualDataList:prevState.individualDataList.map((olderRecord,oldIndex)=>{
            if(oldIndex === index){
                olderRecord[name]=value
                return { ...olderRecord }
            }
          return olderRecord;
        }) 
    }))
 }
 saveSingleTime=(type)=>{
   alert('What you want to save is '+ type)
 }
 saveTimePlan=(type)=>{
   alert('What you want to save All ')
 }
  render() {
    const {  quill_formats,item_description, target_hours_fej ,target_hours_fe,target_hours_fe_china,target_hours_fena,target_hours_fe_xx,quill_modules,listError,individualDataList } = this.state;
    const { isVisible } = this.props;
    if(!isVisible) return null
    return (
      <div className="fixed bg-black  bg-opacity-50 inset-0 z-50 overflow-auto bg-black-transparen overflow-y-auto">
        <div className="flex  items-center justify-center h-3/4  mt-2 min-h-screen">
          <div className="relative rounded-lg h-5/6 text-gray-800 rounded-lg w-4/5">
            <div className="px-2 text-left">
                    <div className="w-full  mx-auto">
                      <form className="bg-white  rounded-lg px-8 pt-6 pb-8 mb-4">
                      <div className="text-right flex px-6  bg-white">
                    <div className="subpixel-antialiased text-2xl font-semibold flex-grow h-16 text-center">
                       Project Time Plan 
                    </div>
                    
                
                    <div className="flex-none px-2 h-16 ...">
                      <span
                        className="iconfont icon-tijiao01 hover:text-green-900  text-2xl text-green-500"
                        onClick={this.saveTimePlan}
                      ></span>
                    </div>
                    <div className="flex-none px-1 h-16 ...">
                      <span
                        className="iconfont  text-2xl  text-red-500  hover:text-red-700 icon-shanchu3"
                        onClick={this.closeModal}
                      ></span>
                    </div>

                  </div>
                  <div className=" py-1 border-gray-100  border-b-4  border-dashed">
                    <span className="text-xl font-medium">
                      {" "}
                      <span className="px-2 iconfont icon-xiangmu1"></span>
                      Project Data
                    </span>
                  </div>
                  <div className="flex flex-wrap  py-2   -mx-4 mb-4">
                    <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="name"
                      >
                       Start time
                      </label>
                      <ReactDatePicker
                       showIcon
                       dateFormat="dd/MM/yyyy"
                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                       selected={this.state.start_time}
                       onChange={this.handleDateChange}
                      />
                               
                    </div>
                    <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="name"
                      >
                       Completion time
                      </label>
                      <ReactDatePicker
                       showIcon
                       dateFormat="dd/MM/yyyy"
                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                       selected={this.state.completion_time}
                       onChange={this.handleDateChange}
                      />
                               
                    </div>
                    <div className="w-full md:w-full px-4 py-5 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="date"
                      >
                        Descriptions
                      </label>
                      <ReactQuill
                  value={item_description}
                  // onChange={this.handleChange}
                  theme="snow"
                  modules={quill_modules}
                  formats={quill_formats}
                  style={{ height: 200 }}
                  className="w-auto pb-12"
                />
                    </div>
                 
                  </div>

                  <div className=" py-2 border-gray-100  border-b-4  border-dashed">
                    <span className="text-xl font-medium">
                      {" "}
                      <span className="px-2 iconfont icon-xiangmu1"></span>
                    
                    </span>
                  </div>
                        {/* Consulting     Projekt Mng  
                        
                      
                                        
                        Engineering     Simulation     Construktion   Miscellaneous      */}
                        <div className="flex flex-wrap -mx-4 overflow-hidden   divide-x-4 divide-gray-100  divide-dashed bg-white shadow-md rounded-lg">
                           <FillingHours  target_hours={target_hours_fe}  />
                        {/* ******************************************Target Hours FENA************ */}
                          <FillingHours  target_hours={target_hours_fena}  />
                        {/* ************************************Target Hours FEJ*FEJ***************** */}
                            <FillingHours  target_hours={target_hours_fej}  />
                        {/* ******************************************************Fe China */}
                        <FillingHours  target_hours={target_hours_fe_china}  />
                        {/* ******************************************************  FE XX*/}
                         <FillingHours  target_hours={target_hours_fe_xx}  />
                        {/* ******************************************************Material ext. Serv.                */}
                            <div className="w-1/6 px-4 py-2 overflow-hidden" >
                              <div className="font-medium text-sm  text-gray-700 mb-2 text-center"> 
                              <div className="flex items-center flex-wrap py-2" title="Target Hours FE">
                                <div className="text-xs truncate text-left font-semibold w-4/5"  >Target Budget</div>
                                   <div  className=' w-1/5'> 
                                  <span className="iconfont icon-ziyuanbaosongtijiaoxiaohe hover:text-green-900  text-2xl text-green-500"   onClick={() => this.saveSingleTime('targetHours')}></span>
                                  </div>
                                </div>

                              </div>
                              <div className="flex flex-col divide-y divide-gray-200">
                                <div className="flex items-center flex-wrap py-2" title="Material Hours">
                                  <div className="text-xs  truncate text-left  w-2/4"  >Material</div>
                                  <div  className=' w-2/4'> 
                                    <input className="w-full bg-transparent outline-none px-2" type="text"  placeholder="eg: 2" />
                                  </div>
                                </div>
                                <div className="flex items-center flex-wrap py-2" title="ext. Serv.  Hours" >
                                <div className="text-xs truncate text-left w-2/4" > ext. Serv. </div>
                                <div  className=' w-2/4'> 
                                  <input className="w-full  w-2/4 bg-transparent outline-none  px-2" type="text" placeholder="eg: 2" />
                                </div></div>
                                <div className="flex items-center flex-wrap  py-2 "  title="Testing Hours">
                                  <div className="text-xs truncate text-left   w-2/4">Testing</div>
                                  <div  className=' w-2/4'> 
                                  <input className="w-full w-2/4 bg-transparent outline-none  px-2" type="text" placeholder="eg: 2" />
                                </div></div>
                                <div className="flex items-center flex-wrap  py-2"  title="Travel exp Hours">
                                <div className="text-xs truncate text-left   w-2/4"> Travel exp </div>
                                <div  className=' w-2/4'> 
                                  <input className="w-full w-2/4 bg-transparent outline-none  px-2" type="text" placeholder="eg: 2" />
                                </div></div>
                                <div className="flex items-center flex-wrap  py-2"  title="Miscellaneous Hours">
                                <div className="text-xs truncate text-left   w-2/4">Miscellaneous </div>
                                <div  className='w-2/4'> 
                                  <input className="w-full w-2/4 bg-transparent outline-none  px-2" type="text" placeholder="eg: 2" />
                                  </div></div>
                              </div>
                            </div>
                          
                      </div>
                </form>
              </div>
            </div>
            {/* 内容 */}
          </div>
        </div>
        {/* 信息提示 */}
        <div>
          <ErrorToast
            listdd={listError}
            upErrorListComback={this.upErrorList}
          />
        </div>
      </div>
    );
  }
}

export default TimePlanProject;
