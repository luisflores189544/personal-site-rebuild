<template>
  <div class="navbar__container">
    <div class="navbar__header">
        <div class="navbar__logo">
            <code id="logoText">
                <span class="syntax__color_a">console</span><span class="syntax__color_b">.log</span><span class="syntax__color_b">(</span><span class="syntax__color_c">'luisFloresCoder'</span><span class="syntax__color_b">)</span>
            </code>
        </div>
        <div class="navbar__menu">
            <div class="navbar__menuItem">
                <a href="/" class="navbar__menuLink">{{ homeLink }}</a>
            </div>
            <div class="navbar__menuItem">
                <a href="/projects" class="navbar__menuLink">{{ projectLink }}</a>
            </div>
            <!-- <div class="navbar__menuItem">
                <a href="/" class="navbar__menuLink">{{ blogLink }}</a>
            </div>
            <div class="navbar__menuItem">
                <a href="/" class="navbar__menuLink">{{ resourceLink }}</a>
            </div>
            <div class="navbar__menuItem">
                <a href="/" class="navbar__menuLink">{{ contactLink }}</a>
            </div> -->
            <div class="navbar__menuItem">
                <a href="/" class="navbar__menuLink">{{ aboutLink }}</a>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeLink: 'Home',
      projectLink: 'Projects',
    //   blogLink: 'Blog',
    //   resourceLink: 'Resources',
    //   contactLink: 'Contact Me',
      aboutLink: 'About Me'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar__container {
    display: block;
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color:white;
    font-size: 1.25em;
    border-bottom: .05em solid #b1b4b3;
    
}
.navbar__header {
    display: block;
    height: 100%;
    padding: 0 20px;
    white-space: nowrap;
}

.navbar__logo {
    display: inline-block;
    vertical-align: middle;
    
}
.navbar__menu {
    height: 100%;
    display: inline-block;
    text-align: right;
    width: calc(100% - 350px);
}
.navbar__menuItem {
    height: 100%;
    display: inline-block;
    vertical-align: middle;
}

.navbar__menuLink {
    padding: 5px 5px 0 9px;
    display: inline-block;
    line-height: 40px;
    color: rgb(51, 51, 51);
    /* height: 100%; */
    letter-spacing: 4px;
    font-weight: 750;
}

.navbar__menuLink:hover {
    border-bottom: 1em solid #2cdb9b;
    
}

@media all and (max-width: 470px) {
    .navbar__container {
        display: none;
    }
}
</style>
