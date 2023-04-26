
import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';

class ProjectInput extends Component {
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
            <>   <div className=" py-1 border-gray-100  border-b-4  border-dashed">
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
                            placeholder="Enter Order No."
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
                            placeholder="Enter Project Name"
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
                            placeholder="Enter  Project budget"
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
                            placeholder="Enter  Exchange rate"
                        />
                    </div>
                    <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="date"
                        >
                            Date
                        </label>
                        <ReactDatePicker
                            showIcon
                            dateFormat="dd/MM/yyyy"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            selected={this.state.selectedDate}
                            onChange={this.handleDateChange}
                        />

                    </div>
                </div>
            </>

        );
    }
}

export default ProjectInput;
