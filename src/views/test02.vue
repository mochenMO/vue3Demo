<template>


<div class="main-container"> 

<div class="left-container">

    <div class="user-container">
        <!-- 用户 要去掉 -->
        
    
        <img class = "headshot-container" src = "../img/headshot.PNG" />

        <!-- <div class="headshot-container">    
        </div> -->

        <div class="username-container">
            用户名
        </div>

        <div class="level-container">
            等级：
        </div>

        <div class="epithet-container">
            头衔：
        </div>

        <div class="user-control-container">
            <div id="user-btn1">查看资料</div>
            <div id="user-btn2">编辑资料</div>
        </div>
        
    </div>


    <div class="memorabilia-container">

        <!-- 大事件 -->

        <!-- <div class="memorabilia-search-container">
        </div> -->

        <h2>大事件</h2>

        <div class="things-container">

        </div>
        <div class="things-container">
            
        </div>
        <div class="things-container">
            
        </div>


        <div class="memorabilia-control-container">
            <div id="memorabilia-btn1">查看资料</div>
            <div id="memorabilia-btn2">编辑资料</div>
        </div>

    </div>

    <div class="userlog-container">

        <h2>用户日志</h2>

        <div class="userlog-things-container">

        </div>
      
        <div class="userlog-things-container">

        </div>

        <div class="userlog-control-container">
            <div id="userlog-btn1">查看资料</div>
            <div id="userlog-btn2">编辑资料</div>
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
    
        <div class="paper-img-container">
    
        </div>
        
        <div class="txt-container">
            <p class="txt-title-container">文章标题</p>
            <p class="txt-content-container">文章内容</p>
        </div>
    </div>


    <div class="paper-container">
          
        <div class="txt-container">
            <p class="txt-title-container">文章标题</p>
            <p class="txt-content-container">文章内容</p>
        </div>


        <div class="paper-img-container">
    
        </div>
    </div>


    <div class="paper-container">
    
        <div class="paper-img-container">
    
        </div>
        
        <div class="txt-container">
            <p class="txt-title-container">文章标题</p>
            <p class="txt-content-container">文章内容</p>
        </div>
    </div>


    <div class="paper-container">
        
        <div class="txt-container">
            <p class="txt-title-container">文章标题</p>
            <p class="txt-content-container">文章内容</p>
        </div>

        <div class="paper-img-container">
    
        </div>
    </div>

    <div class="paper-container">
        
        <div class="paper-img-container">
    
        </div>

        <div class="txt-container">
            <p class="txt-title-container">文章标题</p>
            <p class="txt-content-container">文章内容</p>
        </div>

       
    </div>


    <div class="paper-container">
        
        <div class="txt-container">
            <p class="txt-title-container">文章标题</p>
            <p class="txt-content-container">文章内容</p>
        </div>

        <div class="paper-img-container">
    
        </div>
       
    </div>

</div>

</div>

</template>



<script setup>


</script>



<style>




body{
    background-color: #eee;
}


.main-container{
    width:1100px;
    height: 1700px;
    margin: 0 auto;

    border: 1px solid red;  /*  =====*/

    

    display: flex;
    border-radius:15px;
}


.left-container{
    width:300px;
    height: 1700px;

    border: 1px solid red;  /*  =====*/

    display: flex;
    justify-content: center;
    flex-wrap: wrap;      /* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;   /* 自动换行后，行与行之间没有间隔 */
    border-radius:15px;
 
}



.right-container{
    width:890px;
    height: 1700px;

    border: 1px solid red;   /* =====*/


    display: flex;
    justify-content: center;
    flex-wrap: wrap;      /* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;   /* 自动换行后，行与行之间没有间隔 */
    border-radius:15px;
}



.user-container{
    width: 260px;
    height: 400px;
    margin-top: 40px;
    border: 1px solid red;    /*=====*/
    border-radius:15px;
    background-color: #fff;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;      /* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;   /* 自动换行后，行与行之间没有间隔 */
}

.memorabilia-container{
    width: 260px;
    height: 350px;
    margin-top: 20px;
    border: 1px solid red;    /*=====*/
    border-radius:15px;
    background-color: #fff;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;      /* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;   /* 自动换行后，行与行之间没有间隔 */
}


.userlog-container{
    width: 260px;
    height: 300px;
    margin-top: 20px;
    border: 1px solid red;    /*=====*/
    border-radius:15px;
    background-color: #fff;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;      /* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;   /* 自动换行后，行与行之间没有间隔 */
}


.search-container{
    width:810px;
    height: 40px;
    border: 1px solid red;    /*=====*/
    margin-top: 40px;
    border-radius:15px;
    background-color: #fff;

    display: flex;
} 


/* 用户页面 ===================================================================== */


.headshot-container{
    width: 120px;
    height: 120px;
    margin-top: 20px;
}

.username-container{
    width: 200px;
    height: 40px;
    border: 1px solid red;   /*  =====*/
    
    margin-top: 20px;
    line-height: 40px;
    text-align: center;
}


.level-container{
    width: 200px;
    height: 40px;
    border: 1px solid red;   /*  =====*/
    
    margin-top: 20px;
    line-height: 40px;
    text-align: center;
}


.epithet-container{
    width: 200px;
    height: 40px;
    border: 1px solid red;   /*  =====*/
    
    /* margin-top: 20px; */
    line-height: 40px;
    text-align: center;
}


.user-control-container{
    width: 180px;
    height: 30px;
    border: 1px solid red;   /*  =====*/
    
    margin-top: 20px;
    line-height: 30px;
    text-align: center;

    display: flex;
    justify-content: space-around;
}

.user-control-container div{
    width: 80px;
    border: 1px solid red;   /*  =====*/
    border-radius:15px;
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

.memorabilia-container h2{
    width: 250px;
    height: 40px;
    /* border: 1px solid red;  */

    text-align: center;
    line-height: 40px;
    margin-bottom: 15px;
}


.things-container{
    width: 250px;
    height: 40px;
    border: 1px solid red; 
    border-radius:15px;

    margin-top: 15px;
}



.memorabilia-control-container{
    width: 180px;
    height: 30px;
    border: 1px solid red;   /*  =====*/
    
    margin-top: 20px;
    line-height: 30px;
    text-align: center;

    display: flex;
    justify-content: space-around;
}

.memorabilia-control-container div{
    width: 80px;
    border: 1px solid red;   /*  =====*/
    border-radius:15px;
}



/* 用户日志 ===================================================================== */


.userlog-container h2{
    width: 250px;
    height: 40px;
    /* border: 1px solid red;  */

    text-align: center;
    line-height: 40px;
    margin-bottom: 15px;
}


.userlog-things-container{
    width: 250px;
    height: 40px;
    border: 1px solid red; 
    border-radius:15px;

    margin-top: 15px;
}



.userlog-control-container{
    width: 180px;
    height: 30px;
    border: 1px solid red;   /*  =====*/
    
    margin-top: 20px;
    line-height: 30px;
    text-align: center;

    display: flex;
    justify-content: space-around;
}

.userlog-control-container div{
    width: 80px;
    border: 1px solid red;   /*  =====*/
    border-radius:15px;
}



/* 搜索框 ===================================================================== */

.search-txt-container{
    width:650px;
    height: 40px;
    border: 1px solid red;    /*=====*/

    border-radius:15px;
    background-color: #fff;
} 



#search-btn1{
    width: 80px;
    height: 30px;
    border: 1px solid red;   /*  =====*/
    border-radius:15px;

    margin-top: 5px;
    margin-left: 60px; 
        
    text-align: center;
    line-height: 30px;
}


/* 用户文章 ===================================================================== */


.paper-container{
    width:810px;
    height: 250px;
    margin-top: 10px;
    border: 1px solid red;    /*=====*/
    border-radius:15px;
    background-color: #fff;

    display: flex;
}



.paper-img-container{
    width:300px;
    height: 250px;
    
    border: 1px solid red;    /*=====*/
    border-radius:15px;
    background-color: #fff;

    display: flex;
}


.txt-container{
    width:500px;
    height: 250px;

    border: 1px solid red;    /*=====*/
    border-radius:15px;
    background-color: #fff;

    display: flex;
    flex-wrap: wrap;      /* 一行中的子容器放不下时，会自动换行 */
    align-content: flex-start;   /* 自动换行后，行与行之间没有间隔 */
}


.txt-title-container {

    width:400px;
    height: 40px;
    border: 1px solid red;    /*=====*/
    font-size: 24px;
    padding-left: 30px;
    
    margin-bottom: 0px;
}



.txt-content-container {
    width: 400px;
    height: 150px;
    padding-left: 30px;
    border: 1px solid red;    /*=====*/
}






</style>