<template>
      <Header></Header>
     <el-row>
       <el-col :span="4">
          <Aside></Aside>
       </el-col>
       <el-col :span="20">
         <Main></Main>
       </el-col>
     </el-row>
</template>
<script>
import Header from './components/Header'
import Aside from './components/Aside'
import Main from './pages/Main'
export default {
  name: 'App',
  components: {
      Header,
      Aside,
      Main
  }
}
</script>

<style lang='less' scoped>
.header{
  padding: 0px;
}
</style>
