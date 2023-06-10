<!--  // 功能列表
1.把icon改一下
-->



<template>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->

    <div class="container">

        <div class="menu">
            <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">

            <el-menu-item index="1">
                <el-icon><icon-menu /></el-icon>
                <template #title><router-link to="/home/userInfo">用户管理</router-link></template>
            </el-menu-item>

            <el-menu-item index="2">    
                <el-icon><icon-menu /></el-icon>
                <template #title><router-link to="/home/userLevel">用户等级管理</router-link></template>
            </el-menu-item>

            <el-menu-item index="3">
                <el-icon><icon-menu /></el-icon>
                <template #title><router-link to="/home/userArticle">用户文章管理</router-link></template>
            </el-menu-item>

            <el-menu-item index="4">
                <el-icon><icon-menu /></el-icon>
                <template #title><router-link to="/home/memorabilia">用户大事记管理</router-link></template>
            </el-menu-item>

            <el-menu-item index="5">
                <el-icon><icon-menu /></el-icon>
                <template #title><router-link to="/home/userLog">用户日志管理</router-link></template>
            </el-menu-item>
        </el-menu>
        </div>


        <div class = "content">
            <router-view></router-view>
        </div>

    </div>
</template>
  
<script setup> // setup是组合式 API 的核心一定要写
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'


//   const isCollapse = ref(true)
//   const handleOpen = (key, keyPath) => {
//     console.log(key, keyPath)
//   }
//   const handleClose = (key, keyPath) => {
//     console.log(key, keyPath)
//   }
</script>
  

<style>

a {
  text-decoration: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 800px;
}


.container{
    display: flex;
    min-width: 1280px;
    margin: 0 auto;
}

.meun{
    width: 200px;
    box-sizing: border-box;
    min-height: 800px;
}


/* h3{
    margin-left: 10px;
} */

/* .content */

</style>