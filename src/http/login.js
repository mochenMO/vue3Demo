import request from './request'

const getLoginInfo=(data)=>{
   return request.request({      // 格式：return request.XXXX{}
        url:'api/mobile/elogin', // fullpath=baseURL+url  http://api.jqrjq.cn/ + api/mobile/elogin
        method:'post',
        data,                    // 用data接收回传的数据
    })
}




export {
    getLoginInfo

};