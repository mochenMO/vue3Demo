import instance from "./axios";


const getAllUserLog = (data) => {
  return instance.request({
    url: "api/userLog/page",
    method: "post",
    data
  });
};

const addUserLog = (data) => {
    return instance.request({
      url: "api/userLog/add",
      method: "post",
      data,
    });
  };
  

const getOneUserLog = (data) => {
  return instance.request({
    url: "api/userLog/page/user",
    method: "post",
    data,
  });   
};



export {
    getAllUserLog,
    addUserLog,
    getOneUserLog
};
