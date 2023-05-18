/**
 * 发送异步请求的函数ajax
 * 
 */
import axios from "axios";
import memoryUtils from "../utils/memoryUtils";

export default function ajax(url, data = {}, type = 'GET', isContainsFiles = false) {
   const token = memoryUtils.user.token;
   return new Promise((resolve, reject) => {
      let promise;
      //发送GET请求
      //send GET request
      if (type === 'GET') {
        let  config = {
            headers: {
               'Authorization': token,
            }
         }
         promise = axios.get(url, {
            params: data,...config
         });
         //发送POST请求
         //Send POST request
      } else if (type === 'POST') {
         // 默认application/json方式提交
         // Submit by default application/json
         let config = {
            headers: {
               'Authorization': token,
               'Content-Type': 'application/json'
            }
         };
         console.log(isContainsFiles)
         //  文件提交
         // file submission
         if (isContainsFiles === true) {
            config = {
               headers: {
                  'Authorization': token,
                  'content-type': 'multipart/form-data'
               }
            };
         }
         promise = axios.post(url, data, config)
      } else if (type === 'PUT' ) {
         // 默认application/json方式提交
         // Submit by default application/json
         let config = {
            headers: {
               'Authorization': token,
               'Content-Type': 'application/json'
            }
         };
         console.log(isContainsFiles)
         //  文件提交
         // file submission
         if (isContainsFiles === true) {
            config = {
               headers: {
                  'Authorization': token,
                  'content-type': 'multipart/form-data'
               }
            };
         }
         promise = axios.put(url, data, config)
      }else if (type === 'DELETE' ) {
         // 默认application/json方式提交
         // Submit by default application/json
         let config = {
            headers: {
               'Authorization': token,
               'Content-Type': 'application/json'
            }
         };
         console.log(isContainsFiles)
         //  文件提交
         // file submission
         if (isContainsFiles === true) {
            config = {
               headers: {
                  'Authorization': token,
                  'content-type': 'multipart/form-data'
               }
            };
         }
         promise = axios.delete(url, {data,...config})
      }
      promise.then(response => {
         console.log(response)
         resolve(response);
      }).catch(error => {
         resolve(error);
      })
   })

}
