<template>
  <div>
    <h3>人人学消防</h3>
    <div class="card">
      <div class="title">第一部分</div>
      <Router-link to="/">第一章：</Router-link>
    </div>

    <div class="card">
      <div class="title">第二部分</div>
      <Router-link to="/partTwo/one">第一章：建筑分类</Router-link>
    </div>

    <div class="card">
      <div class="title">第三部分</div>
      <Router-link to="/partThree/one">第一章：概述</Router-link><br />
      <Router-link to="/partThree/one"
        >第二章：消防给水和消火栓系统</Router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="less" scope>
h3 {
  text-align: center;
}
.card {
  background: #fff;
  border-radius: 6px;
  margin: 0 10px 10px 10px;
  padding: 10px;
  .title {
    color: #333;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
  }
}
</style>