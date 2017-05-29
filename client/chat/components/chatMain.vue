<template>
  <div class="chatmain">
    <ul>
        <li v-for="post in posts" key="$index">
            <Post  :post="post" v-once></Post>
        </li>
    </ul>
  </div>
</template>

<script>
import Post from "./Post"
export default {
    data (){
        return{
            posts:[]
        }
    },
    components:{
        Post
    },
    created (){
        EventHub.$on("sendMsg",this.sendMsg.bind(this));
    },
    methods: {
        sendMsg( data ){
            this.posts.push( {
                from : data.from,
                message : data.message,
                is_from_me: data.from.openId === Me.openId
            } );
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chatmain{
    overflow: auto;
    background-color: #f0f2f8;
}
</style>
