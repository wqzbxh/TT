import React, { Component } from 'react';

class FillingHours extends Component {
  render() {
    const {target_hours}= this.props;
    console.log(target_hours)
    return (

      <div className="w-1/6 px-4 py-2 overflow-hidden" >
        <div className="font-medium text-sm  text-gray-700 mb-2 text-center">
          <div className="flex items-center flex-wrap py-2" title={target_hours.title}>
            <div className="text-xs truncate text-left  w-4/5"  >{target_hours.title}</div>
            <div className=' w-1/5'>
              <span className="iconfont icon-ziyuanbaosongtijiaoxiaohe hover:text-green-900  text-2xl text-green-500" onClick={() => this.saveSingleTime('targetHoursFEJ')}></span>
            </div>
          </div>


        </div>
        <div className="flex flex-col divide-y divide-gray-200">
          <div className="flex items-center flex-wrap py-2" title="Consulting Hours">
            <div className="text-xs truncate text-left  w-2/4"  >Consulting</div>
            <div className=' w-2/4'>
              <input className="w-full bg-transparent outline-none px-2" type="text" placeholder="eg: 2" />
            </div>
          </div>
          <div className="flex items-center flex-wrap py-2" title="Projekt Mng Hours" >
            <div className="text-xs truncate text-left w-2/4" > Projekt Mng</div>
            <div className=' w-2/4'>
              <input className="w-full  w-2/4 bg-transparent outline-none  px-2" type="text" placeholder="eg: 2" />
            </div></div>
          <div className="flex items-center flex-wrap  py-2" title="Engineering Hours">
            <div className="text-xs truncate text-left   w-2/4">Engineering</div>
            <div className=' w-2/4'>
              <input className="w-full w-2/4 bg-transparent outline-none  px-2" type="text" placeholder="eg: 2" />
            </div></div>
          <div className="flex items-center flex-wrap  py-2 " title="Simulation Hours">
            <div className="text-xs truncate text-left   w-2/4">Simulation</div>
            <div className=' w-2/4'>
              <input className="w-full w-2/4 bg-transparent outline-none  px-2" type="text" placeholder="eg: 2" />
            </div></div>
          <div className="flex items-center flex-wrap  py-2" title="Construktion Hours">
            <div className="text-xs truncate text-left   w-2/4">Construktion</div>
            <div className=' w-2/4'>
              <input className="w-full w-2/4 bg-transparent outline-none  px-2" type="text" placeholder="eg: 2" />
            </div></div>
          <div className="flex items-center flex-wrap  py-2" title="Miscellaneous Hours">
            <div className="text-xs truncate text-left   w-2/4">Miscellaneous </div>
            <div className='w-2/4'>
              <input className="w-full w-2/4 bg-transparent outline-none  px-2" type="text" placeholder="eg: 2" />
            </div></div>
        </div>
      </div>

    );
  }
}

export default FillingHours;
