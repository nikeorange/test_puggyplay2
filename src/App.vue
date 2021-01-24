<template>
  <div id="app">
    <Search />
    <Result />
    <Footer />
  </div>
</template>

<script>
import Search from './components/Search';
import Result from './components/Result';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Search,
    Result,
    Footer
  }
};
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>