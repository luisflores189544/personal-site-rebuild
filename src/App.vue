<template>
  <div id="app">
    <navbar-menu></navbar-menu>
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavbarMenu from './components/Menu/NavbarNormal'
import FooterBar from './components/Footer/Footer'

export default {
  name: 'app',
  components: { NavbarMenu, FooterBar }
}
</script>

<style>
/* html {
  height: 100%;
} */

body {
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  height: 100%;
  margin: 0;
  background-color:rgb(255, 255, 255);
}

h1 {
  text-align: center;
  font-size: 400%;
  padding: 20px 0 0 0;
  margin: 0 0;
  font-weight: 500;
}

h2 {
  text-align: center;
  padding: 0 0 20px 0;
  font-weight: 500;
}

#app {
  /* color: #2c3e50; */
  /* margin-top: -100px; */
  /* max-width: 600px; */
  font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
  /* text-align: center; */
}

#app a {
  /* color: #42b983; */
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

.main {
  margin-top: 50px;
}

.syntax__color_a {
    color:#4EC5EF;
    font-weight: 600;
}
.syntax__color_b {
    color:#4CC9A6;
    font-weight: 600;
}
.syntax__color_c {
    color:#C3622C;
    font-weight: 600;
}

@media all and (max-width: 470px) {
    .main {
        margin-top: 50px;
    }
}

</style>