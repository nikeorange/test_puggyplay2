<template>
  <div class="container-fluid">
    <div class="row">
      <div class="coll">
        
      </div>
      <div class="coll">
          <img src="../assets/photo.jpg" alt="photo" />
          <strong>Petr Uba</strong>
          <a href="https://github.com/nikeorange" target="_blank"> GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Footer"

};
</script>

<style lang="scss" scoped>

.container-fluid {
    position: relative;
    bottom: 0;
    width: 100%;
    background: #cdcdcd;
    
    .coll {
        margin: 0 auto;

        img {
            width: 100px;
            height: 140px;
            border-radius: 50px;
            margin: 0 auto 15px;
            padding-top: 15px;
        }

        
    }
}

</style>
