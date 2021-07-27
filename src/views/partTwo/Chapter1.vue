<template>
  <div class="container">
    <div>
      <h2>第一章：建筑分类</h2>
    </div>
    <div>
      <h3>按使用性质分类</h3>
      <h3>按建筑高度分类</h3>
      <h3>按建筑结构分类</h3>
    </div>

    <div class="contentBox">
      <div class="title">一、按使用性质分类</div>
      <div class="content">
        <div>
          1、民用建筑（住宅/公共）
          <div>住宅：家庭使用的建筑。 <br> 特列：首层或首层及二层是商业服务网点，每个分割单元不能超过<span>300m2</span></div>
        </div>
        <div>2、工业建筑（厂房/仓库）</div>
        <div>3、农业建筑</div>
      </div>
    </div>

    <div class="contentBox">
      <div class="title">二、按建筑高度分类</div>
      <div class="content">
        <div>
          1、单多层
          <div>住宅：&lt;= 27m</div>
          <div>其他：&lt;= 24m</div>
        </div>
        <div>2、高层（一类/二类）</div>
        <div>3、超高层</div>
      </div>
    </div>

    <div class="contentBox">
      <div class="title">三、按建筑结构分类</div>
      <div class="content">
    
      </div>
    </div>

    <div class="contentBox">
      <div class="title">四、工业建筑火宅危险性分类</div>
      <div class="content">
        <div>
          根据生产和储存的火灾危险性分为 <span>甲乙丙丁戊</span> 五类
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="less">
.container {
  padding: 10px;

  h3 {
    text-align: left;
  }

  .contentBox {
    margin: 30px 10px;
    .title {
      font-weight: 400;
    }
  }
  .content {
    span {
      color: red;
    }
    & > div > div {
      padding-left: 40px;
    }
    & > div {
      padding-left: 20px;
    }
  }
}
</style>
