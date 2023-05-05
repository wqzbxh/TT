import React, { Component } from "react";
import ReactDatePicker from "react-datepicker";

class CustomerInput extends Component {
  constructor(props) {
    super(props);
    // 初始状态为第一个菜单项选中
    this.state = {
      selectedDate: null,
      contactList:[  
        {contact_name:"",contact:"" },
      ]
    };
  }

  handleDateChange = (newDate) => {
    const date = new Date(newDate);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const dateParts = formattedDate.split("/");
    const dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    console.log(dateObject); // "16/08/2023"
    this.setState({
      selectedDate: dateObject,
    });
  };
/***********************添加联系人 联系电话，一对多关系 */
/***********************Add a contact phone number in one-to-many relationship */
  addContact=()=>{
    this.setState((prevState)=>({
      contactList:[
        ...prevState.contactList,{
          contact_name:"",contact:""
        }
      ]
    }))
  }
/***********************删除联系人 联系电话，一对多关系 */
/***********************delete a contact phone number in one-to-many relationship */
  removeContact=(contactIndex)=>{
      console.log(contactIndex)
      if(this.state.contactList.length <2 ){
        return false
      }
      this.setState((prevState)=>({
        contactList:prevState.contactList.filter((item,oldIndex) => oldIndex !==contactIndex)
     }))
  }

/***********************处理表数据 */
/***********************Processing table data */
    handelChange=(even,index)=>{
      const target = even.target;
      const value = target.type === 'checkbox'  ? target.checked : target.value
      const name = target.name;
      console.log(name,value)
      this.setState((prevState)=>({
        contactList:prevState.contactList.map((olderRecord,oldIndex)=>{
            if(oldIndex === index){
                olderRecord[name]=value
                return { ...olderRecord }
            }
          return olderRecord;
        }) 
    }))
  }
  render() {
    const {contactList}  = this.state
    return (
      <>
        {" "}
        <div className=" py-2 border-gray-100  border-b-4  border-dashed">
          <span className="text-xl font-medium">
            {" "}
            <span className="px-2 iconfont icon-xiangmu1"></span>
            Customer Data
          </span>
        </div>
        <div className=" flex-wrap  py-2  -mx-4 mb-4">
          <div className="w-full  py-4 md:w-2/5 px-4 mb-4 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              htmlFor="name"
            >
              Customer Number
            </label>
            <input
              className="block  px-2  shadow w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gary-600 sm:text-sm sm:leading-6"
              id="name"
              type="text"
              placeholder=""
            />
          </div>
          <div className="w-full md:w-2/5   py-2 px-4 mb-4 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              htmlFor="email"
            >
              Customer name
            </label>
            <input
              className="block  px-2  shadow w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gary-600 sm:text-sm sm:leading-6"
              id="email"
              type="email"
              placeholder=""
            />
          </div>
          <div className="w-full  px-4  py-2  mb-4 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              htmlFor="date"
            >
              Customer Contact &nbsp; &nbsp;{" "}
              <span
                className="iconfont icon-ziyuan53  text-gray-700 text-xl hover:text-blue-800 hover:font-bold"
                onClick={this.addContact}
              >
                {" "}
              </span>
            </label>
            {contactList.map((contactItem, contactIndex) => {
              return (
                <div className="flex w-full my-1 " key={contactIndex}>
                  <div className="md:w-2/4">
                    {" "}
                    <input
                      className="block  px-2  shadow w-full rounded-md  border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gary-600 sm:text-sm sm:leading-6"
                      id="email"
                      type="email"
                      name="contact_name"
                      value={contactItem.contact_name}
                      onChange={(even)=>this.handelChange(even,contactIndex)}
                      placeholder=" Customer Contact "
                    />
                  </div>
                  <div className="px-2 md:w-2/4">
                    {" "}
                    <input
                      className="block px-2  shadow w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gary-600 sm:text-sm sm:leading-6"
                      id="email"
                      type="email"
                      name="contact"
                      value={contactItem.contact}
                      onChange={(even)=>this.handelChange(even,contactIndex)}
                      placeholder=" Contact  Comment"
                    />
                  </div>
                  <div className="px-2 py-1 md:w-2/4">
                    {/* {contactList.length > 1 &&  contactIndex > 0? <span
                        className="iconfont icon-guanbi1  text-gray-700 text-sm hover:text-blue-800 hover:font-bold"
                        onClick={()=>this.removeContact(contactIndex)}
                      >
                      </span> : ''
                    } */}
                    <span
                        className="iconfont icon-guanbi1   text-gray-700 text-sm hover:text-blue-800 hover:font-bold"
                        onClick={()=>this.removeContact(contactIndex)}
                      >
                      </span> 
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-span-full    py-2 px-4 mb-4 ">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              About
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows="3"
                className="block  shadow  px-2  w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gary-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CustomerInput;
