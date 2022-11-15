<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style  lang="less" scoped>
/deep/.el-dropdown {
  color: #ffffff !important;
}
* {
  margin: 0;
  padding: 0;
  border: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url("../src/assets/gbBanner.png") no-repeat;
  background-size: 100% 100%;
}
</style>
<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
::-webkit-scrollbar-thumb {
  height: 50px;
  outline-offset: -2px;
  /* outline:2px solid #fff; */
  -webkit-border-radius: 4px;
  border: 2px solid #464b50;
}

::-webkit-scrollbar-thumb:hover {
  height: 50px;
  -webkit-border-radius: 4px;
}

::-webkit-scrollbar {
  width: 10px;
  height: 8px;
}

::-webkit-scrollbar-track-piece {
  -webkit-border-radius: 0;
}

::-webkit-scrollbar-track {
  background-color: #464b50;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-button {
  background-color: #343a40;
}

::-webkit-scrollbar-corner {
  background-color: black;
}

</style>
