<template>
  <div class="footer">
    <div class="input-wrapper">
        <input type="text" @keyup.13="send" v-model="text"/>
    </div>
    <div class="sendbtn-wrapper">
        <button class="sendBtn" :class='{ enable: text}' @click="send">发送</button>
    </div>
  </div>
</template>

<script>
import { RequestCode } from '../constants'
import Axios from 'axios'
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
      async send(){
          if ( !this.text ){
              return;
          }
          let msgpack = {
              from: Me,
              to: Guest,
              message: this.text
          }

          //测试使用
          EventHub.$emit("sendMsg",{
              from: Guest,
              to: Me,
              message: this.text
          });
          
          this.text = "";

          let {data} = await Axios.post('/chat/sendMsg',msgpack,{
              'Content-Type': "application/json;charset=UTF-8"
          });

          if(data.code === RequestCode.REQUEST_SUCCESS){
              EventHub.$emit("sendMsg",msgpack);
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  overflow: hidden;
  background: #f0f2f8;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
}
.input-wrapper{
    flex: 1;
    padding: .75rem .4rem
}
.input-wrapper input{
    width: 99%;
    height: 100%;
    border-radius: .2rem;
    border: 1px solid #fcfcfd;
    padding: 0 .5rem;
    box-sizing: border-box;
}
.input-wrapper input:focus{
    outline: none;
}
.sendbtn-wrapper{
    width: 4rem;
    line-height: 2.2rem;
    padding: .75rem 0;
    padding-right: .5rem;
}
.sendBtn{
    height: 100%;
    width: 100%;
    border: none;
    border-radius: .2rem;
    background-color: #dddee2;
    color: #f0f1f2;
}
.sendBtn:focus{
    outline: none;
}
.enable{    
    background-color: #12b7f5;
    color: #FFF;
}
</style>
