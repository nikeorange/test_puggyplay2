<template>
  <div class="container">
    <div class="row">
      <div class="coll">
        <input
          v-model="query"
          @input="debouncedSearch"
          placeholder="Search.."
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import debounce from 'lodash/debounce';

export default {
  name: 'search',
  computed: {
    ...mapState(['searchQuery']),
    query: {
      get() {
        return this.searchQuery;
      },
      set(val) {
        return this.setSearchQuery(val);
      },
    }
  },
  methods: {
    ...mapActions(['setSearchQuery', 'search']),
    debouncedSearch: debounce(function() {
      this.search();
    }, 500)

  }

};
</script>

<style lang="sass"></style>
