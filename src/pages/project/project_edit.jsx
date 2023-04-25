import React, { Component } from 'react';
import ErrorToast from '../../components/ErrorMessage';

class EditProject extends Component {
    constructor(props) {
        super(props);
        // 初始状态为第一个菜单项选中
        this.state = {
          text: "",
          isVisible: false,
          listError: [],
          individualDataList: [
            {
                bill_type: "2",
                Date_of_invoice: "21321",
                distributionfe: "",
                currency: "",
                Exchange: "",
              },
          ],
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

  render() {
    const { listError,individualDataList } = this.state;
    const { isVisible } = this.props;
    if(!isVisible) return null
    return (
      <div className="fixed bg-black bg-opacity-70 inset-0 z-50 overflow-auto bg-black-transparen overflow-y-auto">
        <div className="flex  items-center justify-center h-3/4  mt-2 min-h-screen">
          <div className="relative rounded-lg h-5/6 text-gray-800 rounded-lg w-4/5">
            
            <div className="px-2 text-left">
                    <div className="w-full  mx-auto">
                      <form className="bg-white  rounded-lg px-8 pt-6 pb-8 mb-4">
                
                  <div className="text-right flex px-6  bg-white">
                    <div className="subpixel-antialiased text-2xl font-semibold flex-grow h-16 text-center">
                    Edit Project
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
                        Order No.
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder=""
                      />
                    </div>
                    <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="email"
                      >
                        Project Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder=""
                      />
                    </div>
                    <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="date"
                      >
                        Project budget
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder=""
                      />
                    </div>
                    <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="phone"
                      >
                        Exchange rate
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="tel"
                        placeholder=""
                      />
                    </div>
                    <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="date"
                      >
                        Date
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="date"
                        type="date"
                      />
                    </div>
                  </div>

                  <div className=" py-2 border-gray-100  border-b-4  border-dashed">
                    <span className="text-xl font-medium">
                      {" "}
                      <span className="px-2 iconfont icon-xiangmu1"></span>
                      Customer Data
                    </span>
                  </div>
                  <div className="flex flex-wrap  py-2   -mx-4 mb-4">
                    <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="name"
                      >
                        Customer Number
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder=""
                      />
                    </div>
                    <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="email"
                      >
                        Customer name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder=""
                      />
                    </div>
                    <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="date"
                      >
                        Customer Contact
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder=""
                      />
                    </div>
                    <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                      <label
                        className="block text-gray-700 text-sm font-normal mb-2"
                        htmlFor="phone"
                      >
                        Distribution FE
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="tel"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className=" py-2 border-gray-100  border-b-4  border-dashed">
                    <span className="text-xl font-medium">
                      {" "}
                      <span className="px-2 iconfont icon-xiangmu1"></span>
                      Individual Invoices Per Order{" "}
                      <span
                        className="iconfont text-xl px-8 icon-xinzeng5  text-gray-400  hover:text-gray-900"
                        onClick={this.addRecord}
                      ></span>
                    </span>
                  </div>
                  {individualDataList.map((individualDataItem, index) => (
                    <div
                      className="flex flex-wrap  py-2   -mx-4 mb-4"
                      key={index}
                    >
                      <div className="w-full md:w-1/6 px-4 mb-4 md:mb-0">
                        <label
                          className="block text-gray-700 text-sm font-normal mb-2"
                          htmlFor="name"
                        >
                          Date of invoice
                        </label>
                        <input
                          value={individualDataItem.Date_of_invoice}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="Date_of_invoice"
                          type="text"
                          onChange={(event) =>
                            this.handleChange(event, index)
                          }
                          placeholder=""
                        />
                      </div>
                      <div className="w-full md:w-1/6 px-4 mb-4 md:mb-0">
                        <label
                          className="block text-gray-700 text-sm font-normal mb-2"
                          htmlFor="email"
                        >
                          Currency
                        </label>
                        <input
                          value={individualDataItem.currency}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       
                          type="text"
                          name="currency"
                          onChange={(event) =>
                            this.handleChange(event, index)
                          }
                          placeholder=""
                        />
                      </div>
                      <div className="w-full md:w-1/6 px-4 mb-4 md:mb-0">
                        <label
                          className="block text-gray-700 text-sm font-normal mb-2"
                          htmlFor="date"
                        >
                          Exchange
                        </label>
                        <input
                          value={individualDataItem.Exchange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        
                          type="text"
                          name="Exchange"
                          onChange={(event) =>
                            this.handleChange(event, index)
                          }
                          placeholder=""
                        />
                      </div>
                      <div className="w-full md:w-1/6 px-4 mb-4 md:mb-0">
                        <label
                          className="block text-gray-700 text-sm font-normal mb-2"
                          htmlFor="phone"
                        >
                          Distribution FE
                        </label>
                        <input
                          value={individualDataItem.distributionfe}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       
                          type="text"
                          name="distributionfe"
                          onChange={(event) =>
                            this.handleChange(event, index)
                          }
                          placeholder=""
                        />
                      </div>
                      <div className="w-full md:w-1/6 px-4 mb-4 md:mb-0">
                        <label
                          className="block text-gray-700 text-sm font-normal mb-2"
                          htmlFor="date"
                        >
                          Bill type
                        </label>
                        <select
                          onChange={(event) =>
                            this.handleChange(event, index)
                          }
                          name="bill_type"
                          value={individualDataItem.bill_type}
                          className="block w-full py-3 px-4 pr-8 leading-tight text-gray-700 bg-white rounded-lg  focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
                        >
                          <option className="bg-transparent border-0" value="1">
                            {" "}
                            Bill type
                          </option>
                          <option className="bg-transparent border-0" value="2">
                            {" "}
                            Anzahlung
                          </option>
                          <option className="bg-transparent border-0" value="3">
                            {" "}
                            Rechnung
                          </option>
                          <option className="bg-transparent border-0" value="4">
                            {" "}
                            Endrechnung
                          </option>
                        </select>
                      </div>
                      <div className="w-full md:w-1/6 px-4 mb-4 md:mb-0 text-center">
                        <label
                          className="block text-gray-700 text-sm font-normal mb-2"
                          htmlFor="phone"
                        >
                          Delete Record
                        </label>
                        <div
                          onClick={() => this.handleRemoveRecord(index)}
                          className="text-gray-700 text-sm px-2.5 py-2 border border-blue-200  hover:border-dashed   hover:text-white    hover:bg-red-600  hover:"
                        >
                          <span className="iconfont icon-quxiao "></span>{" "}
                          &nbsp;&nbsp; Delete
                        </div>
                      </div>
                    </div>
                  ))}

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

export default EditProject;
