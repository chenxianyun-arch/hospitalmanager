<template>
  <div id="login">
    <div class="login-wrap">
<!--      顶部图片-->
      <div class="topimg">
        <img src="../../assets/login/topimg.png" alt="爱心标记">
<!--        <img src="assets/login/topimg.png" alt="爱心标记">-->
      </div>
<!--      中间显示的具体内容-->
      <div class="login-container">
        <div class="main">
          <div class="left">
            <img src="../../assets/login/loginimg.svg" alt="">
          </div>
          <div class="right">
            <div class="warp">
              <h1 class="title">医院诊疗信息管理系统</h1>
              <div class="form-table">
                <form>
                  <div class="username">
                    <label for="username"></label>
                    <i class="iconfont icon-yonghuming"></i>
                    <input type="text" v-model="form.username" id="username" placeholder="请输入用户名">
                  </div>
                  <div class="password">
                    <label for="password"></label>
                    <i class="iconfont icon-mimalan"></i>
                    <input type="password" v-model="form.password" id="password" placeholder="请输入密码">
                  </div>
                  <div class="submit">
                    <label for="login"></label>
                    <input type="button" name="login" @click="loginClick" value="登录" >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import userInfoCheck from '../../network/login'
  export default {
    name: "Login",
    components:{

    },
    data(){
      return {
        form:{
          username: '',
          password: ''
        }
      }
    },
    methods:{
      loginClick(){
        console.log("---")
        //1.验证用户信息是否正确，实现登录验证
        userInfoCheck({username: this.form.username,password: this.form.password})
          .then(res=>{
            console.log(res);
          })
      }
    }
  }
</script>

<style scoped>


  /*整体flex结束*/
  .login-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 1200px;
    height: 100vh;
    background-color: #666ee8;
  }
  .login-wrap .login-container{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 80%;
    height: 80%;
    border-radius: 10px;
    background-color: #fff;
  }
  /*整体flex布局结束*/


  /*左上部分心的布局开始*/
  .topimg{
    position: fixed;
    left: 50px;
    top: 50px;
    width: 60px;
    height: 60px;
    z-index: 999;
  }
  .topimg img{
    display: inline-block;
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }
  /*左上部分心的布局结束*/


  /*中间内容部分布局开始*/
  .main{
    width: 100%;
    padding: 70px 50px;
  }

  .left{
    width: 60%;
    height: 100%;
  }

  .left img{
     width: 100%;
     height: 100%;
   }

  .right{
    position: relative;
    width: 40%;
    height: 100%;
    /*background-color: yellow;*/
  }

  .right .warp{
    position: absolute;
    width: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

  .right .title{
    font-size: 30px;
    font-weight: 700;
  }

  .right .form-table div{
    margin-top: 10px;
  }

  .right .form-table div input{
    width: 75%;
    padding: 14px 30px 14px 50px;
    margin: inherit;
    border-radius: 10px;
    background-color: #f0f1fd;
  }

  .right .form-table .submit input{
    width: 75%;
    border: none;
    outline-style: none;
    padding: 14px;
    border-radius: 24px;
    background-color: #666ee8;
    color: #ffffff;
    cursor:pointer;
  }
  /*设置样式icon开始*/
  .username,.password{
    position: relative;
  }
  .iconfont{
    position: absolute;
    left: 10px;
    top: 15px;
    font-size: 30px;
    color: #666ee8;
  }
  /*设置样式icon结束*/

  /*  中间内容部分布局结束*/
</style>
