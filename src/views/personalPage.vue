<template>
    <div class="main-container">

        <div class="left-container">

            <div class="user-container">
                <!-- 用户 要去掉 -->


                <img class="headshot-container" src="../img/headshot.PNG"  @click="goHome"/>

                <!-- <div class="headshot-container">    
        </div> -->

                <div class="username-container">
                    {{ username }}
                </div>

                <div class="level-container">
                    等级：{{ level }}
                </div>

                <div class="epithet-container">
                    头衔：{{ levelName }}
                </div>

                <div class="user-control-container">
                    <div id="user-btn1" @click="getUserInfo">查看资料</div>
                    <div id="user-btn2" @click="getUserInfo">编辑资料</div>
                </div>

            </div>


            <div class="memorabilia-container">

                <!-- 大事件 -->

                <!-- <div class="memorabilia-search-container">
        </div> -->

                <h2>大事件</h2>

                <div class="things-container">
                    {{ threeMemorabilia[0].happenTime }} {{ threeMemorabilia[0].content }}
                </div>
                <div class="things-container">
                    {{ threeMemorabilia[1].happenTime }} {{ threeMemorabilia[1].content }}
                </div>
                <div class="things-container">
                    {{ threeMemorabilia[2].happenTime }} {{ threeMemorabilia[2].content }}
                </div>


                <div class="memorabilia-control-container">
                    <div id="memorabilia-btn1" @click="getMemorabilia">查看更多信息</div>
                    <!-- <div id="memorabilia-btn2">编辑资料</div> -->
                </div>

            </div>

            <div class="userlog-container">

                <h2>用户日志</h2>

                <div class="userlog-things-container">
                    {{ TwoUserLog[0].createTime }} {{ TwoUserLog[0].log }}
                </div>

                <div class="userlog-things-container">
                    {{ TwoUserLog[1].createTime }} {{ TwoUserLog[1].log }}
                </div>

                <div class="userlog-control-container">
                    <div id="userlog-btn1"  @click="getUserLog">查看更多信息</div>
                    <!-- <div id="userlog-btn2">编辑资料</div> -->
                </div>
            </div>
        </div>





        <div class="right-container">
            <div class="search-container">

                <div class="search-txt-container">

                </div>

                <div id="search-btn1">搜索</div>

            </div>


            <div class="paper-container">

                <div class="paper-img-container" id="paper-img-container01">
                    <img  src="../img/1.PNG" />
                </div>

                <div class="txt-container">
                    <p class="txt-title-container">C语言实现BP神经网络</p>
                    <p class="txt-content-container">本文简要记录了作者在实现BP神经网络过程，学到的各种知识。注意只是简单记录一下用到的知识点，内容以公式和结论为主。</p>
                </div>
            </div>


            <div class="paper-container">

                <div class="txt-container">
                    <p class="txt-title-container">x86 32位汇编知识整理</p>
                    <p class="txt-content-container">本文介绍 X86 架构下的32位汇编，在 Windows操作系统中，用masm编译器进行运行和调试工作。内容包括JCC指令，函数及四种函数调用约定，串的处理，选择与循环结构，宏定义，结构体等知识。</p>
                </div>


                <div class="paper-img-container" id="paper-img-container02">
                    <img  src="../img/5.PNG" />
                </div>
            </div>


            <div class="paper-container">

                <div class="paper-img-container" id="paper-img-container03">
                    <img  src="../img/2.PNG" />
                </div>

                <div class="txt-container">
                    <p class="txt-title-container">PowerShell知识整理</p>
                    <p class="txt-content-container">PowerShell其内容且十分庞杂，文本主要旨在记录一些常用的PowerShell命令，并对PowerShell脚本相关的知识，做一个简要的记录，帮助读者快速上手PowerShell。</p>
                </div>
            </div>


            <div class="paper-container">

                <div class="txt-container">
                    <p class="txt-title-container">论学习的重要性</p>
                    <p class="txt-content-container">学习是人类进步和发展的基石，具有非常重要的意义,无论是在学校里还是在社会中，学习都是我们不断进步和成长的关键</p>
                </div>

                <div class="paper-img-container" id="paper-img-container04">
                    <img  src="../img/3.PNG" />
                </div>
            </div>

            <div class="paper-container">

                <div class="paper-img-container" id="paper-img-container05">
                    <img  src="../img/6.PNG" />
                </div>

                <div class="txt-container">
                    <p class="txt-title-container">chatGPT的一点讨论</p>
                    <p class="txt-content-container">在ChatGPT纪元中，提问题的能力和判断力也许是人类最重要的两个能力。我们这里提出五个关键问题，并且试图抛开网络上的二手观点，做出基于原理的判断。</p>
                </div>


            </div>


            <div class="paper-container">

                <div class="txt-container">
                    <p class="txt-title-container">如何正确躺平</p>
                    <p class="txt-content-container">躺平给我们带来更多的应该是思考，但并不是对社会不公平现象的思考，而是我们应该如何对待生活、对待工作的思考。</p>
                </div>

                <div class="paper-img-container" id="paper-img-container06">
                    <img  src="../img/4.PNG" />
                </div>

            </div>

        </div>

    </div>


    <!-- 用户信息弹窗 -->
    <el-dialog v-model="isBoolByUserInfoData" title="用户信息">
        <el-form :model="userInfoData">

            <el-form-item label="绑定" :label-width="formLabelWidth">
                <el-input v-model="userInfoData.binding" autocomplete="off" />
            </el-form-item>

            <el-form-item label="创建时间" :label-width="formLabelWidth">
                <el-input v-model="userInfoData.createTime" autocomplete="off" />
            </el-form-item>


            <el-form-item label="状态" :label-width="formLabelWidth">
                <el-input v-model="userInfoData.state" autocomplete="off" />
            </el-form-item>

            <el-form-item label="token" :label-width="formLabelWidth">
                <el-input v-model="userInfoData.token" autocomplete="off" />
            </el-form-item>

            <el-form-item label="更新时间" :label-width="formLabelWidth">
                <el-input v-model="userInfoData.updateTime" autocomplete="off" />
            </el-form-item>


            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="userInfoData.userName" autocomplete="off" />
            </el-form-item>

            <el-form-item label="用户类型" :label-width="formLabelWidth">
                <el-input v-model="userInfoData.userType" autocomplete="off" />
            </el-form-item>

        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="isBoolByUserInfoData = false">取消</el-button>
                <el-button type="primary" @click="saveData">保存</el-button>
            </span>
        </template>
    </el-dialog>



    <!-- 用户大事件弹窗 -->
    <el-dialog v-model="isBoolByMemorabilia" title="用户大事件">
        <div class="classroom-tools">
            <el-button type="warning" @click="addMemorabiliaData">添加</el-button>
            <el-input v-model="searchMemorabiliaId" placeholder="请输入教室ID" clearable style="width: 120px;"></el-input>
            <el-button type="primary" @click="searchMemorabiliaData">搜索</el-button>
        </div>

        <el-table :data="MemorabiliaArr" style="width: 100%">
            <el-table-column prop="id" label="ID" width="120" />
            <el-table-column prop="userId" label="用户编号" width="120" />
            <el-table-column prop="content" label="内容" width="120" />
            <el-table-column prop="createTime" label="创建时间" width="120" />
            <el-table-column prop="happenTime" label="发生时间" width="120" />
            <el-table-column prop="updateTime" label="更新时间" width="120" />

            <el-table-column fixed="right" label="功能管理" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="updateMemorabiliaData(scope.row)">更新</el-button>
                    <el-button link type="primary" size="small" @click="delMemorabiliaData(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-dialog>

    <!-- 用户大事件编辑框弹窗 -->
    <el-dialog v-model="isBoolByInputMemorabilia" title="用户大事件">
        <el-form :model="inputMemorabiliaData">

            <el-form-item label="用户编号" :label-width="formLabelWidth">
                <el-input v-model="inputMemorabiliaData.userId" autocomplete="off" />
            </el-form-item>

            <el-form-item label="内容" :label-width="formLabelWidth">
                <el-input v-model="inputMemorabiliaData.content" autocomplete="off" />
            </el-form-item>


            <el-form-item label="创建时间" :label-width="formLabelWidth">
                <el-input v-model="inputMemorabiliaData.createTime" autocomplete="off" />
            </el-form-item>

            <el-form-item label="发生时间" :label-width="formLabelWidth">
                <el-input v-model="inputMemorabiliaData.happenTime" autocomplete="off" />
            </el-form-item>

            <el-form-item label="更新时间" :label-width="formLabelWidth">
                <el-input v-model="inputMemorabiliaData.updateTime" autocomplete="off" />
            </el-form-item>
        </el-form>


        <template #footer>
            <span class="dialog-footer">
                <el-button @click="isBoolByInputMemorabilia = false">取消</el-button>
                <el-button type="primary" @click="saveMemorabiliaData">保存</el-button>
            </span>
        </template>

    </el-dialog>


    <!-- 用户日志弹窗 -->
    <el-dialog v-model="isBoolByUserLog" title="用户日志">
        <div class="classroom-tools">
            <el-button type="warning" @click="addUserLogData">添加</el-button>
        </div>

        <!-- table数据表 (改下面的内容，顺序随便)-->
        <el-table :data="userLogArr" style="width: 100%">
            <el-table-column prop="id" label="ID" width="120" />
            <el-table-column prop="userId" label="用户编号" width="120" />
            <el-table-column prop="createTime" label="创建时间" width="120" />
            <el-table-column prop="log" label="日志内容" width="120" />

            <el-table-column fixed="right" label="功能管理" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="updateUserLogData(scope.row)" disabled="true">更新</el-button>
                    <el-button link type="primary" size="small" @click="delUserLogData(scope.row.id)" disabled="true">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
    </el-dialog>



    <!-- 用户日志编辑框弹窗 -->
    <el-dialog v-model="isBoolByInputUserLog" title="用户日志">
    <el-form :model="inputUserLogData">
      <el-form-item label="用户ID" :label-width="formLabelWidth">
        <el-input v-model="inputUserLogData.userId" autocomplete="off" />
      </el-form-item>

      <el-form-item label="创建时间" :label-width="formLabelWidth">
        <el-input v-model="inputUserLogData.createTime" autocomplete="off" />
      </el-form-item>


      <el-form-item label="日志内容" :label-width="formLabelWidth">
        <el-input v-model="inputUserLogData.log" autocomplete="off" />
      </el-form-item>
    </el-form>


    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isBoolByInputUserLog = false">取消</el-button>
        <el-button type="primary" @click="saveUserLogData">保存</el-button>
      </span>
    </template>

  </el-dialog>


</template>



<script setup>


import { adduserinfo, getAlluserinfo, deleteuserinfo, edituserinfo, getOneuserinfo } from '../http/userInfo';
import { addUserlevel, getAllUserlevel, deleteUserlevel, editUserlevel, getOneUserlevel } from '../http/userlevel';
import { addMemorabilia, getAllMemorabilia, deleteMemorabilia, editMemorabilia, getOneMemorabilia } from "../http/memorabilia";
import { getAllUserLog, addUserLog, getOneUserLog } from "../http/userLog";

import { cloneDeep } from 'lodash';
import { ref, watch, computed } from 'vue';

import route from "../router"

let username = ref();
let userID = ref();
let level = ref(5);
let levelName = ref();

let isBoolByUserInfoData = ref(false);


let userInfoData = ref({
    "binding": 0,
    "createTime": "",
    "id": 0,
    "state": 0,
    "token": "",
    "updateTime": "",
    "userName": "",
    "userType": ""
});

let MemorabiliaArr = ref([]);

let threeMemorabilia = ref(
    [{
        "happenTime": "",
        "content": "",
    },
    {
        "happenTime": "",
        "content": "",
    },
    {
        "happenTime": "",
        "content": "",
    },]
);


let isBoolByMemorabilia = ref(false);
let isBoolByInputMemorabilia = ref(false);

// let userInfoArr = ref([]);
// let userLevelArr = ref([]);
// let userLevelArr = ref([]);


const getUserName = () => {
    let temp = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    username.value = temp.split('@')[0];
}

const getUserID = async () => {
    const res = await getAlluserinfo();
    // userInfoData = res.data.userinfos
    userID.value = res.data.userinfos.find(data => data.userName == username.value).id;

    console.log("username", username.value);////
    console.log("userID", userID.value);  ////
}


const getLevelName = async () => {
    const res = await getAllUserlevel();
    levelName.value = res.data.userLevels.find(data => data.levelId == level.value).levelName;
}


const getAllMemorabiliaInfo = async () => {
    const res = await getAllMemorabilia();

    // console.log(res);

    let temp = res.data.memorabilias.filter(data => data.userId == userID.value)
    MemorabiliaArr.value = temp;



    console.log(temp.length);

    for (let i = 0; i < temp.length && i < 3; i++) {  // 三条记录
        threeMemorabilia.value[i].happenTime = temp[i].happenTime.split("T")[0];
        threeMemorabilia.value[i].content = temp[i].content;
    }

    console.log(threeMemorabilia.value);

    // levelName.value = res.data.userLevels.find(data => data.levelId == level.value).levelName;
}



let userLogArr = ref([]);


let TwoUserLog = ref(
    [{
        "createTime": "",
        "log": "",
    },
    {
        "createTime": "",
        "log": "",
    },]
);

const getUserLogArr = async () => {
    let temp = {
        "colums": [],
        "current": 1,
        "size": 20
    };

    const res = await getAllUserLog(temp);      // 改这里，获得所用数据
    let tempData = res.data.page.records.filter(data => data.userId == userID.value)
    //console.log(tempData);////
    userLogArr.value = tempData;


    for (let i = 2; i <= res.data.page.pages; i++) {
        temp.current = i;
        const res2 = await getAllUserLog(temp);
        const tempData2 = res2.data.page.records.filter(data => data.userId == userID.value);
        // console.log(tempData2);/////

        userLogArr.value = userLogArr.value.concat(tempData2)
        // console.log(userLogArr.value); ///
    }

    for (let i = 0; i < userLogArr.value.length; i++) {   // 两条记录
        TwoUserLog.value[i].createTime = userLogArr.value[i].createTime.split("T")[0];
        TwoUserLog.value[i].log = userLogArr.value[i].log;
    }

    // console.log(res.data.page.pages);
    // console.log(res.data.page.records);

    // console.log(userLogArr.value);

}





const main = async () => {
    await getUserName();
    await getUserID();
    await getLevelName();
    await getAllMemorabiliaInfo();
    await getUserLogArr();
}

main();


/* 用户信息 ================================================================================================ */



const getUserInfo = async () => {
    const res = await getAlluserinfo();
    // console.log(res);

    let temp = res.data.userinfos.find(data => data.id == userID.value);
    userInfoData.value = cloneDeep(temp);
    isBoolByUserInfoData.value = true;

    // console.log("temp",temp); ////
}



/* 用户大事件 ================================================================================================ */


let inputMemorabiliaData = ref({
    "content": "",
    "createTime": "",
    "happenTime": "",
    "id": 0,
    "updateTime": "",
    "userId": 0
});


let searchMemorabiliaId = ref();



const getMemorabilia = async () => {
    // console.log("asdsa");
    isBoolByMemorabilia.value = true;
}


const addMemorabiliaData = async () => {
    clearData();
    inputMemorabiliaData.value.userId = userID.value;
    isBoolByInputMemorabilia.value = true;
}


const updateMemorabiliaData = async (row) => {
    inputMemorabiliaData.value = cloneDeep(row);
    isBoolByInputMemorabilia.value = true;
}



const saveMemorabiliaData = async () => {
    try {
        isBoolByInputMemorabilia.value = false;
        if (!inputMemorabiliaData.value.id) {
            await addMemorabilia(inputMemorabiliaData.value);    // 改这里，添加功能
        }
        else {
            await editMemorabilia(inputMemorabiliaData.value);  // 改这里，更改功能
        }
        // await initTableData();  // 更新数据
        await getAllMemorabiliaInfo();

        // 操作成功的弹窗
        ElMessage.success('操作成功');
    } catch (err) {
        console.log(err);
        // 操作失败的弹窗
        ElMessage.error('操作失败，请重试');
    }
    clearData();
};


const delMemorabiliaData = async (id) => {
    try {
        const confirmResult = await ElMessageBox.confirm('是否确认删除', 'Warning', {
            confirmButtonText: '确认删除',
            cancelButtonText: '在考虑一下',
            type: 'warning',
        });
        if (confirmResult !== 'confirm') return;
        const res = await deleteMemorabilia(id);    // 改这里，删除功能
        if (res.success) {
            // initTableData();


            getAllMemorabiliaInfo();

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


const searchMemorabiliaData = async () => {

    // console.log(searchId.value);
    try {
        if (!searchMemorabiliaId.value) {
            // initTableData();
            getAllMemorabiliaInfo();
        }
        else {
            let res = await getOneMemorabilia(searchMemorabiliaId.value);   // 改这里，查询数据
            MemorabiliaArr.value = [res.data.memorabilia];          // 改这里，res.data.xxx
        }
        ElMessage.success('查询成功');
    } catch (err) {
        searchId.value = null;
        // initTableData();

        getAllMemorabiliaInfo();

        console.log(err);
        // 操作失败的弹窗
        ElMessage.error('查询失败，请重试');
    }
}


const clearData = () => {
    Object.keys(inputMemorabiliaData.value).forEach(key => {
        inputMemorabiliaData.value[key] = null;
    });
};



/* 用户日志 ================================================================================================ */




let isBoolByInputUserLog = ref(false);
let isBoolByUserLog = ref(false);

let inputUserLogData = ref({
  createTime: '',
  id: null,
  log: '',
  userId: ''
});

const getUserLog = async()=>{

    isBoolByUserLog.value = true;

}

const addUserLogData = async () => {
    clearUserLogData();
    isBoolByInputUserLog.value = true;
}


const saveUserLogData = async () => {
    try {
        isBoolByInputUserLog.value = false;
        await addUserLog(inputUserLogData.value);    // 改这里，添加功能
      
      
        // await initTableData();  // 更新数据
        await getUserLogArr();

        // 操作成功的弹窗
        ElMessage.success('操作成功');
    } catch (err) {
        console.log(err);
        // 操作失败的弹窗
        ElMessage.error('操作失败，请重试');
    }
    clearUserLogData();
};


const clearUserLogData = () => {

    console.log("clearUserLogData");

    Object.keys(inputUserLogData.value).forEach(key => {
        inputUserLogData.value[key] = null;
    });
};


const goHome = ()=>{
    route.push("/home")
}



</script>





<style>
body {
    background-color: #eee;
    /* font-family: "微软雅黑"; */
    font-family:"Microsoft YaHei";
}


.main-container {
    width: 1100px;
    height: 1700px;
    margin: 0 auto;

    /* border: 1px solid red;  =====*/

    display: flex;
    border-radius: 15px;
}


.left-container {
    width: 300px;
    height: 1700px;

    /*border: 1px solid red;  =====*/

    display: flex;
    justify-content: center;
    flex-wrap: wrap;/* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;/* 自动换行后，行与行之间没有间隔 */
    border-radius: 15px;

}



.right-container {
    width: 890px;
    height: 1700px;

    /*border: 1px solid red; =====*/

    display: flex;
    justify-content: center;
    flex-wrap: wrap;/* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;/* 自动换行后，行与行之间没有间隔 */
    border-radius: 15px;
}



.user-container {
    width: 260px;
    height: 400px;
    margin-top: 40px;
    border: 1px solid #c0c0c0;/*=====*/
    border-radius: 15px;
    background-color: #fff;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;/* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;/* 自动换行后，行与行之间没有间隔 */
}

.memorabilia-container {
    width: 260px;
    height: 350px;
    margin-top: 20px;
    border: 1px solid #c0c0c0;
    /*=====*/
    border-radius: 15px;
    background-color: #fff;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;
    /* 自动换行后，行与行之间没有间隔 */
}


.userlog-container {
    width: 260px;
    height: 300px;
    margin-top: 20px;
    border: 1px solid #c0c0c0;
    /*=====*/
    border-radius: 15px;
    background-color: #fff;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;/* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;/* 自动换行后，行与行之间没有间隔 */
}


.search-container {
    width: 810px;
    height: 40px;
    border: 1px solid #c0c0c0;
    /*=====*/
    margin-top: 40px;
    border-radius: 15px;
    background-color: #fff;

    display: flex;
}


/* 用户页面 ===================================================================== */


.headshot-container {
    width: 120px;
    height: 120px;
    margin-top: 20px;
}

.username-container {
    width: 200px;
    height: 40px;
    border: 1px solid #c0c0c0;
    /*  =====*/

    margin-top: 20px;
    line-height: 40px;
    text-align: center;
    border-radius: 15px;
}


.level-container {
    width: 200px;
    height: 40px;
    border: 1px solid #c0c0c0;
    /*  =====*/

    margin-top: 20px;
    line-height: 40px;
    text-align: center;
    border-radius: 15px;
}


.epithet-container {
    width: 200px;
    height: 40px;
    border: 1px solid #c0c0c0;
    /*  =====*/

    /* margin-top: 20px; */
    line-height: 40px;
    text-align: center;
    border-radius: 15px;
}


.user-control-container {
    width: 180px;
    height: 30px;
    /*  border: 1px solid red; =====*/

    margin-top: 20px;
    line-height: 30px;
    text-align: center;

    display: flex;
    justify-content: space-around;
}

.user-control-container div {
    width: 80px;
    border: 1px solid #c0c0c0; /*  =====*/
    border-radius: 15px;
    cursor: default;
}



/* 用户大事件 ===================================================================== */


/* .memorabilia-search-container{
    width: 250px;
    height: 40px;
    border: 1px solid red;    /// 
    margin-top: 10px;
    border-radius:15px;
} 
*/

.memorabilia-container h2 {
    width: 250px;
    height: 40px;
    /* border: 1px solid red;  */

    text-align: center;
    line-height: 40px;
    margin-bottom: 15px;
}


.things-container {
    width: 250px;
    height: 40px;
    border: 1px solid #c0c0c0;
    border-radius: 15px;

    margin-top: 15px;
    text-align: center;
    line-height: 40px;
}



.memorabilia-control-container {
    width: 180px;
    height: 30px;
    /*border: 1px solid red;  =====*/

    margin-top: 20px;
    line-height: 30px;
    text-align: center;

    display: flex;
    justify-content: space-around;
}

.memorabilia-control-container div {
    width: 110px;
    border: 1px solid #c0c0c0;/*  =====*/
    border-radius: 15px;
    cursor: default;
}



/* 用户日志 ===================================================================== */


.userlog-container h2 {
    width: 250px;
    height: 40px;
    /* border: 1px solid red;  */

    text-align: center;
    line-height: 40px;
    margin-bottom: 15px;
}


.userlog-things-container {
    width: 250px;
    height: 40px;
    border: 1px solid #c0c0c0;
    border-radius: 15px;

    margin-top: 15px;
    text-align: center;
    line-height: 40px;
}



.userlog-control-container {
    width: 180px;
    height: 30px;
    /*border: 1px solid red;  =====*/

    margin-top: 20px;
    line-height: 30px;
    text-align: center;

    display: flex;
    justify-content: space-around;
}

.userlog-control-container div {
    width: 110px;
    border: 1px solid #c0c0c0;/*  =====*/
    border-radius: 15px;
    cursor: default;
}



/* 搜索框 ===================================================================== */

.search-txt-container {
    width: 650px;
    height: 40px;
    border: 1px solid #c0c0c0;
    /*=====*/

    border-radius: 15px;
    background-color: #fff;
}



#search-btn1 {
    width: 80px;
    height: 30px;
    border: 1px solid #c0c0c0;
    /*  =====*/
    border-radius: 15px;

    margin-top: 5px;
    margin-left: 60px;

    text-align: center;
    line-height: 30px;
}


/* 用户文章 ===================================================================== */


.paper-container {
    width: 810px;
    height: 250px;
    margin-top: 10px;
    border: 1px solid #c0c0c0;/*=====*/
    border-radius: 15px;
    background-color: #fff;

    display: flex;
}



.paper-img-container {
    width: 310px;
    height: 250px;

    /*border: 1px solid red;=====*/
    border-radius: 15px;
    background-color: #fff;

    display: flex;
}


.txt-container {
    width: 500px;
    height: 250px;

    /*border: 1px solid red;=====*/
    border-radius: 15px;
    background-color: #fff;

    display: flex;
    flex-wrap: wrap;/* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;/* 自动换行后，行与行之间没有间隔 */
}


.txt-title-container {

    width: 400px;
    height: 40px;
    /*border: 1px solid red;=====*/
    font-size: 24px;
    padding-left: 30px;

    margin-bottom: 0px;

    line-height: 40px;
}



.txt-content-container {
    width: 400px;
    height: 150px;
    padding-left: 30px;
    /*border: 1px solid red;=====*/
}



#paper-img-container01 img{
    border-radius: 15px;
    width: 310px;
    height: 250px;
}

#paper-img-container02 img{
    border-radius: 15px;
    width: 310px;
    height: 250px;
}

#paper-img-container03 img{
    border-radius: 15px;
    width: 310px;
    height: 250px;
}

#paper-img-container04 img{
    border-radius: 15px;
    width: 310px;
    height: 250px;
}

#paper-img-container05 img{
    border-radius: 15px;
    width: 310px;
    height: 250px;
}

#paper-img-container06 img{
    border-radius: 15px;
    width: 310px;
    height: 250px;
}

</style>