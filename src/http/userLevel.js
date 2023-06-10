import instance from "./axios";



const addUserlevel = (data) => {
  return instance.request({
    url: "api/userlevel/add",
    method: "post",
    data,
  });
};


const getAllUserlevel = () => {
  return instance.request({
    url: "api/userlevel/all",
    method: "get",
  });
};

// 删除教室接口
const deleteUserlevel = async (id) => {
  return instance.request({
    url: "api/userlevel/delete"+ "/" + id,
    method: "get",
  });
};

// 编辑教室接口
const editUserlevel = (data) => {
  return instance.request({
    url: "/api/userlevel/modify",
    method: "post",
    data
  });
};



// 获取单个教室接口
const getOneUserlevel = (id) => {
  return instance.request({
    url: "api/userlevel/one" + "/" + id,
    method: "get",
  });   
};



export {
  addUserlevel,
  getAllUserlevel,
  deleteUserlevel,
  editUserlevel,
  getOneUserlevel
};
