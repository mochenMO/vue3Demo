import instance from "./axios";

// 用户登录接口
const userLogin = (data) => {
  return instance.request({
    url: 'api/mobile/elogin',
    method: 'post',
    data,
    headers: {}
  });
};

// 管理员登录接口
const adminLogin2 = (data) => {
  return instance.request({
    url: '', // 添加实际的URL
    method: 'post',
    data
  });
};

// 添加教室接口
const adduserinfo = (data) => {
  return instance.request({
    url: "api/userinfo/add",
    method: "post",
    data,
  });
};

// 获取所有教室接口
const getAllClassrooms = () => {
  return instance.request({
    url: "api/classroom/all",
    method: "get",
  });
};

// 删除教室接口
const deleteuserinfo = async (id) => {
  return instance.request({
    url: "api/userinfo/delete"+ "/" + id,
    method: "get",
  });
};

// 编辑教室接口
const edituserinfo= (data) => {
  return instance.request({
    url: "api/userinfo/edit",
    method: "post",
    data
  });
};

// // 获取单个教室接口
// const getOneClassroom = (id) => {
//   return instance.request({
//     url: "api/classroom/one",
//     method: "get",
//     params: {
//       id: id,
//     },
//   });
// };


// 获取单个教室接口
const getOneuserinfo = (id) => {
  return instance.request({
    url: "api/userinfo/one" + "/" + id,
    method: "get",
  });
};




// 获取所有建筑接口
const getAllBuilding = () => {
  return instance.request({
    url: "api/building/all",
    method: "get",
  });
};

// 获取所有学校接口
const getAlluserinfo = () => {
  return instance.request({
    url: "api/userinfo/all",
    method: "get",
  });
};


export {
  
  adduserinfo,
  getAlluserinfo,
  deleteuserinfo,
  edituserinfo,
  getOneuserinfo,

};
