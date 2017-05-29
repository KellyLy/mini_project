<template>
  <div class="post" :class='{from_me:post.is_from_me}'>
    <div class="userProfile">
        <div class="user-logo">
            <img :src="post.from.userIcon">   
        </div>
    </div>
    <div class="msg-wrapper">
        <p class="message">
            <span class="text">
                {{post.message}}
            </span>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  created(){
      this.$nextTick(()=>{
          this.$el && this.$el.scrollIntoView();
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
}
.userProfile{
    width: 4rem;
    height: 4rem;
    padding: .3rem;
    box-sizing: border-box;
}
.from_me .userProfile{
    order: 2
}
.user-logo{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 1px 1px 5px -1px #c9c9c9;
    overflow: hidden;
    background-image: url(../assets/default-user-image.png);
    background-size: cover;
}
.user-logo img{
    width: 100%;
    height: 100%;
}
.msg-wrapper{
    min-height: 4rem;
    padding-left: 1rem;
    padding-right: 2rem;
    text-align: left;
    width: calc(100% - 7rem);
}

.from_me .msg-wrapper{
    order: 1;
    text-align: right;
    padding-left: 2rem;
    padding-right: 1rem;
}
.message{
    background: #FFF;
    border-radius: .8rem;
    min-height: 4rem;
    box-shadow: 1px 1px 5px -1px #c9c9c9;
    position: relative;
    text-align: left;
    display: inline-block;
    padding: 1.5rem;
    line-height: 1.25rem;
    box-sizing: border-box;
    max-width: 100%;
    word-wrap: break-word;
}
.message:before{
    content: ' ';
    position: absolute;
    left: -.5rem;
    top: 1.5rem;
    width: 1rem;
    height: 1rem;
    background: white;
    transform: rotateZ(45deg);
    box-shadow: 0px 1px 1px -1px #c9c9c9;
}
.from_me .message:before{
    left: auto;
    top: auto;
    right: -.5rem;
    box-shadow: 2px -1px 1px -1px #c9c9c9;
}
</style>
