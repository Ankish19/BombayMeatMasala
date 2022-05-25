<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page-title {
   height: 250px;
}
.col-lg-12.mt-6 {
    margin-top: 57px;
}

@media screen and (max-width: 375px) {
  .col-lg-12.mt-6 {
    margin-top: 86px !important;
}
}
.section, section {
    position: relative;
    padding-top: 5rem;
    padding-bottom: 5rem;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.hidden-md{
  display: none;
}
</style>
