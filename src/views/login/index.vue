
<!--  // 功能列表
1.注册功能
2.密码隐藏
3.背景图片

-->



<template>
    <div class="login-contatiner">
        <el-form ref="formRef" :model="form" class="login-form" :rules="rules">    <!-- rules是输入格式验证 --> <!-- ref="formRef"是为了绑定el-form，以此在下面的js中获得用户的输入 -->  

            <!-- 标题 -->
            <div class="title-contatiner">
                <h3 class="title">用户登录</h3>
            </div>

            <!-- 用户名 -->
            <el-form-item prop="name">                                         <!-- 用 prop 绑定指定的 rules 格式验证 -->
                <el-icon :size="20" class="svg-contatiner"><edit /></el-icon>
                <el-input v-model="form.name" />
            </el-form-item>

            <!-- 密码 -->
            <el-form-item prop="password">
                <el-icon :size="20" class="svg-contatiner"><edit /></el-icon>
                <el-input v-model="form.password" />
            </el-form-item>


            <!-- 登录按钮 -->
            <el-button type="primary" class="login-button" @click="handleLogin">登录</el-button>
            
            <!-- 注册页面 -->

        </el-form>
    </div>
</template>

<script setup>
import { ref } from 'vue'    // 用 ref(数值) 用于双向绑定 
import { Edit } from '@element-plus/icons-vue'
import {getLoginInfo} from '../../http/login'

import { useUserStore } from "../../store/user";  ///////////

const form = ref({
    name: '',
    password: ''
})


const rules = ref({
    name: [
        {
            required: true,                     // 必填项
            message: '请输入正确的电子邮箱',     // 提示语
            trigger: 'blur'                     // 触发方式
        },
        {                                      // 添加多个格式验证条件
            type: 'email',
            message: "电子邮箱格式错误",
            trigger: 'blur'
        }

    ],
    password: [
        {
            required: true,
            message: '正确的用户密码',
            trigger: 'blur'
        },
        {
            min: 8,
            message:'密码长度不得小于8个字符',
            trigger: 'blur'
        }
    ],
})




const formRef = ref(null);
const handleLogin = ()=>{
    formRef.value.validata(async (valid) =>{
        if(valid){
            // alert("成功");

           await getLoginInfo(form.value);

        }
        else{
            console.log("不成功");
            return false;
        }

    })
}

</script>





<style lang="scss">

body{
    background-color: #c0c0c0;  // 弄一张图片替换 #c0c0c0; ？？？？？？？？？？？？？？？ 
}



.login-container {
    min-height: 100%;
    width: 100%;
    background-color: black;
    overflow: hidden;

}

.login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
}
</style>
