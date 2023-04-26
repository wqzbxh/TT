
import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';

class CustomerInput extends Component {
    constructor(props) {
        super(props);
        // 初始状态为第一个菜单项选中
        this.state = {
          selectedDate: null,
        };
      }
       
 handleDateChange=newDate =>{
    const date = new Date(newDate);
    const formattedDate = date.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'});
  
    const dateParts = formattedDate.split('/');
    const dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    console.log(dateObject); // "16/08/2023"
    this.setState({
      selectedDate: dateObject
    });
  }
    render() {
        return (
            <>    <div className=" py-2 border-gray-100  border-b-4  border-dashed">
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
            </>

        );
    }
}

export default CustomerInput;
