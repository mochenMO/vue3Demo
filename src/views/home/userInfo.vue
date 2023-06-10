<template>
    <!-- 添加和搜索框 -->

    <h3>用户信息管理</h3>
    <div class="classroom-tools">
        <el-button type="warning" @click="addData">添加</el-button>
        <el-input v-model="searchId" placeholder="请输入教室ID" clearable style="width: 120px;"></el-input>
        <el-button type="primary" @click="searchData">搜索</el-button>
    </div>

    <!-- table数据表 (改下面的内容，顺序随便)-->
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="120" />
        <el-table-column prop="binding" label="绑定" width="120" />
        <el-table-column prop="createTime" label="创建时间" width="120" />
        <el-table-column prop="state" label="状态" width="120" />
        <el-table-column prop="token" label="token" width="120" />
        <el-table-column prop="updateTime" label="更新时间" width="120" />
        <el-table-column prop="userName" label="用户名" width="120" />
        <el-table-column prop="userType" label="用户类型" width="120" />

     
        <el-table-column fixed="right" label="功能管理" width="120">
            <template #default="scope">
                <el-button link type="primary" size="small" @click="updateData(scope.row)">更新</el-button>
                <el-button link type="primary" size="small" @click="delData(scope.row.id)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>


    <el-pagination
      :page.sync="pageinfo.currentPage"
      :page-size="pageinfo.pageSize"
      :total="pageinfo.totalpage"
      @current-change="handleCurrentChange"
    />

    <!-- 编辑框 (改下面的内容，顺序随便)-->
    <el-dialog v-model="dialogFormVisible" title="教室编辑">
        <el-form :model="inputData">


            <el-form-item label="绑定" :label-width="formLabelWidth">
                <el-input v-model="inputData.binding" autocomplete="off" />
            </el-form-item>

            <el-form-item label="创建时间" :label-width="formLabelWidth">
                <el-input v-model="inputData.createTime" autocomplete="off" />
            </el-form-item>


            <el-form-item label="状态" :label-width="formLabelWidth">
                <el-input v-model="inputData.state" autocomplete="off" />
            </el-form-item>

            <el-form-item label="token" :label-width="formLabelWidth">
                <el-input v-model="inputData.token" autocomplete="off" />
            </el-form-item>

            <el-form-item label="更新时间" :label-width="formLabelWidth">
                <el-input v-model="inputData.updateTime" autocomplete="off" />
            </el-form-item>


            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="inputData.userName" autocomplete="off" />
            </el-form-item>

            <el-form-item label="用户类型" :label-width="formLabelWidth">
                <el-input v-model="inputData.userType" autocomplete="off" />
            </el-form-item>

        </el-form>




        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="saveData">保存</el-button>
            </span>
        </template>

    </el-dialog>
</template>


<script setup>
// setup是组合式 API 的核心一定要写

/*// 说明
* 1.声明变量：       let/const 变量名 = ref(变量值);
* 2.变量的赋值：     变量名.value = 变量值;
* 3.声明函数：       const 函数名 = async(参数) => {}
* 3.调用http：       let res = await getOneClassroom(searchId.value);
*/


// 导入页面对应的js
// import { addClassroom, getAllClassrooms, deleteClassroom, editClassroom, getOneClassroom, getAllBuilding, getAllSchool } from '../../http/classroom';
import {
  adduserinfo,
  getAlluserinfo,
  deleteuserinfo,
  edituserinfo,
  getOneuserinfo

} from '../../http/userInfo';

import { ref, watch } from 'vue';
import { cloneDeep } from 'lodash';

import { ElMessageBox, ElMessage } from 'element-plus/es';
import 'element-plus/es/components/message-box/style/css';
import 'element-plus/es/components/message/style/css';

let tableData = ref([]);

let pageinfo = ref({
    "currentPage": 1,
    "pageSize": 10,
    "totalpage": 1000
});



let dialogFormVisible = ref(false);


// 改下面的内容，与老师给的表一致
let inputData = ref({
    "binding": 0,
    "createTime": "",
    "id": 0,
    "state": 0,
    "token": "",
    "updateTime": "",
    "userName": "",
    "userType": ""
});





let searchId = ref();


// function ================================================================================

const initTableData = async () => {
    try {
        const res = await getAlluserinfo();      // 改这里，获得所用数据
        console.log(res);   ///////
        if (res.success) {
            tableData.value = res.data.userinfos;   // 改这里，res.data.XXX (看控制台的输出)

            let start = pageinfo.value.pageSize * (pageinfo.value.currentPage - 1);
            let end = Math.min(pageinfo.value.currentPage * pageinfo.value.pageSize,tableData.value.length);
            // console.log(start, end);
            tableData.value = tableData.value.slice(start,end);
        } else {
            console.log(res.msg);
        }
    } catch (err) {
        console.log(err);
    }
}
initTableData();


// 处理页码改变事件
const handleCurrentChange = (val) => {
      pageinfo.value.currentPage = val;
      console.log(val);
      initTableData();
};


const delData = async (id) => {
    console.log(id);
    try {
        const confirmResult = await ElMessageBox.confirm('是否确认删除', 'Warning', {
            confirmButtonText: '确认删除',
            cancelButtonText: '在考虑一下',
            type: 'warning',
        });
        if (confirmResult !== 'confirm') return;
        const res = await deleteuserinfo(id);    // 改这里，删除功能
        if (res.success) {
            initTableData();
            ElMessage.success('删除成功');
        } else {
            console.log(res.msg);
            ElMessage.error('删除失败，请重试');
        }
    } catch (err) {
        console.log(err);
        ElMessage.error('删除失败，请重试');
    }
};



const addData = async () => {
    dialogFormVisible.value = true;
}

const updateData = async (row) => {
    inputData.value = cloneDeep(row);
    dialogFormVisible.value = true;
}

const saveData = async () => {
    try {
        dialogFormVisible.value = false;
        if (!inputData.value.id) {
            await adduserinfo(inputData.value);    // 改这里，添加功能
        }
        else {
            await edituserinfo(inputData.value);  // 改这里，更改功能
        }
        await initTableData();  // 更新数据
        // 操作成功的弹窗
        ElMessage.success('操作成功');
    } catch (err) {
        console.log(err);
        // 操作失败的弹窗
        ElMessage.error('操作失败，请重试');
    }
    clearData();
};



const searchData = async () => {
    try {
        if (!searchId.value) {
            initTableData();
        }
        else {

            const res = await getAlluserinfo();  
            const targetData = res.data.userinfos.find(data => data.id == searchId.value);

            console.log("asdsad",tableData.value);

            console.log(targetData);

            if(tableData == null){
                ElMessage.error('查询失败，请重试');
                return;
            }

            // let res = await getOneuserinfo(searchId.value);   // 改这里，查询数据

            tableData.value = [targetData];          // 改这里，res.data.xxx
        }
        ElMessage.success('查询成功');
    } catch (err) {
        searchId.value = null;
        initTableData();
        console.log(err);
        // 操作失败的弹窗
        ElMessage.error('查询失败，请重试');
    }
}

const clearData = () => {
    Object.keys(inputData.value).forEach(key => {
        inputData.value[key] = null;
    });
};



</script>




<style setup></style>