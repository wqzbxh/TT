
import React, { Component } from 'react';

class IndividualInvoicesPerOrder extends Component {
  constructor(props) {
    super(props);
    // 初始状态为第一个菜单项选中
    this.state = {
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
    const {individualDataList} = this.state;
    return (
        <>
        <div className=" py-2 border-gray-100  border-b-4  border-dashed">
                    <span className="text-xl font-medium">
                      {" "}
                      <span className="px-2 iconfont icon-xiangmu1"></span>
                      Individual Invoices Per Order{" "}
                      {/* <span
                        className="iconfont text-xl px-8 icon-xinzeng5  text-gray-400  hover:text-gray-900"
                        onClick={this.addRecord}
                      ></span> */}
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
                          value="1"
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

        </>
    );
  }
}

export default IndividualInvoicesPerOrder;
