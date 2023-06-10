import instance from "./axios";


// 添加教室接口
const addMemorabilia = (data) => {
  return instance.request({
    url: "api/memorabilia/add",
    method: "post",
    data,
  });
};

// 获取所有教室接口
const getAllMemorabilia = () => {
  return instance.request({
    url: "api/memorabilia/all",
    method: "get",
  });
};

// 删除教室接口
const deleteMemorabilia = async (id) => {
  return instance.request({
    url: "api/memorabilia/delete"+ "/" + id,
    method: "get",
  });
};

// 编辑教室接口
const editMemorabilia = (data) => {
  return instance.request({
    url: "api/memorabilia/edit",
    method: "post",
    data
  });
};



// 获取单个教室接口
const getOneMemorabilia = (id) => {
  return instance.request({
    url: "api/memorabilia/one" + "/" + id,
    method: "get",
  });   
};



export {
  addMemorabilia,
  getAllMemorabilia,
  deleteMemorabilia,
  editMemorabilia,
  getOneMemorabilia
};
