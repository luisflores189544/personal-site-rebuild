<template>
  <div class="project main">
    <div class="project__container">
      <div class="project__header">
        <h1>{{ msg }}</h1>
      </div>
      <div class="project__content">
        <div class="project__item">
          <div class="project__item_img">
            <img src="@/assets/email-project.png" alt="">
          </div>

          <div class="project__item_title">
            <h4>Email Signature Tool</h4>
          </div>
          <div class="project__item_description">
            <p>Testing the paragraph section of the app</p>
          </div>

          
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Project World!!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project__container {
  max-width: 900px;
  margin: auto;
}

.project__content {
  display: flex;
}

.project__item {
  width: 33%;
  border-radius: 0%;
  border: 1px solid green;
  padding: 5px 0;
  margin: 10px 10px;
}


.project__item_img img{
  width: 100%;
  border-bottom: 1px solid green;
}
h1 {
  color: #42b983;
}
</style>
