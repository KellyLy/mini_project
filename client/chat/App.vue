<template>
  <div id="app">
    <im-main ref="posts" class="im-main"></im-main>
    <im-header class="im-header"></im-header>
    <im-footer class="im-footer"></im-footer>
  </div>
</template>

<script>
import imHeader from './components/Header'
import imFooter from './components/Footer'
import imMain from './components/chatMain'

export default {
  name: 'app',
  components: {
    imHeader,imFooter,imMain
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  font-size: 1rem;
}
html,body,#app{
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 38px;
}
#app {
  text-align: center;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-direction: column;
}
.im-header{
  order: 1;
  height: 2.6rem;
}
.im-main{
  flex: 1;
  order: 2;
}
.im-footer{
  order: 3;
  height: 3.4rem;
}
</style>
