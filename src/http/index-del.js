import instance from "./axios";

const userLogin=(data)=>{
   return instance.request({
        url:'api/mobile/elogin', //fullpath=baseURL+url  http://api.jqrjq.cn/ + api/mobile/elogin
        method:'post',
        data,
    })
}


const adminLogin=(data)=>{
   return instance.request({
        url:'', 
        method:'post',
        data
   })
}

const adCatePage=(data)=>{
   return instance.request({
    url:'api/adcate/page',
    method:'post',
    data
   })
}
const adCateDelId=(params)=>{
    return instance.request({
        url:'api/adcate/delete',
        params
    })
}
const adCateAdd=(data)=>{
    return instance.request({
        url:'api/adcate/add',
        method:'post',
        data
    })
}
const adCateEdit=(data)=>{
    return instance.request({
        url:'api/adcate/edit',
        method:'post',
        data
    })
}



export {
    userLogin,
    adminLogin,
    adCatePage,
    adCateDelId,
    adCateAdd,
    adCateEdit,
} 