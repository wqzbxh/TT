
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
          <div className=" flex-wrap  py-2  -mx-4 mb-4">
            <div className="w-full  py-4 md:w-2/5 px-4 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="name"
              >
                Customer Number
              </label>
              <input
                className="block  shadow w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gary-600 sm:text-sm sm:leading-6"
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
                className="block  shadow w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gary-600 sm:text-sm sm:leading-6"
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
                Customer Contact &nbsp; &nbsp;  <span class="iconfont icon-xinzeng3 text-gray-700 text-sm"> </span>
              </label>
              <div className='flex w-full '>
                  <div className='md:w-2/4'>   <input
                className="block  shadow w-full rounded-md  border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gary-600 sm:text-sm sm:leading-6"
                id="email"
                type="email"
                placeholder=" Customer Contact "
              /></div>
                  <div className='px-2 md:w-2/4'>   <input
                className="block  shadow w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gary-600 sm:text-sm sm:leading-6"
                id="email"
                type="email"
                placeholder=" Contact  Comment"
              /></div>
              </div>
             
           
            </div>
            
            <div className="col-span-full    py-2 px-4 mb-4 ">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
              <div className="mt-2">
                <textarea id="about" name="about" rows="3" className="block  shadow w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gary-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
            </>

        );
    }
}

export default CustomerInput;
