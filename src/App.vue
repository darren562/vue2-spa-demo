<template>
  <div id="wrapper">
    <nav class="">
      <div class="container">
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/notice-list">公告</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">

      <div class="">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>