<template>
  <div class="home main">
    <img class="home__bg_img" src="@/assets/334251-code-Doom_game.jpg" alt="doom code">
    <div class="container">
      
      <h1 style="position:absolute; top:70px; color:white">Luis Flores</h1>
      <h3>SELF-TAUGHT PROGRAMMER THAT LOVES WHAT I DO!</h3>
      <p>Welcome to my website.</p>
      <p>I'm a back end developer, 
        that has learned front end stack
        to become a solid full-stack developer.
      </p>
    </div>
    <!-- <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      title: "Talking Code - Writing Code",
      subTitle: "Mostly Code Thoughts"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home__bg_img {
  height: 620px;
  width: 100%;
  overflow: hidden;
}
.home__container {
  display: flex;
  flex-flow: row;
  /* height: 200px; */
}

.home__header {
  width: 50%;
}

.home__item {
  background-color: rgba(0, 0, 0, 0.856);
  height: 100%;
  text-align: center;
  border: 1px solid black;
}

.home__item h3 {
  color: #42b983;
  top: 30%;
  position: relative;
}

.home__item2 {
  border: 1px solid black;
  height: 100%;
  text-align: center;
}

.home__item2 h3 {
  color: #42b983;
  top: 30%;
  position: relative;
}
/* h1 {
  color: #42b983;
} */

@media all and (max-width: 470px) {
  .home__header {
    width: 100%;
  }
  .home__container {
    flex-flow: column;
  }
}
</style>
