import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const SET_LOADING = 'SET_LOADING';
const SET_PACKAGES = 'SET_PACKAGES';
const RESET_PACKAGES = 'RESET_PACKAGES';

export default new Vuex.Store({

  state: {
    searchQuery: '',
    loading: false,
    packages: []
  },
  mutations: {
    [SET_SEARCH_QUERY]: (state, searchQuery) => state.searchQuery = searchQuery,
    [SET_LOADING]: (state, loading) => state.loading = loading,
    [SET_PACKAGES]: (state, packages) => state.packages = packages,
    [RESET_PACKAGES]: state => state.packages = null
  },
  actions: {
    setSearchQuery({commit}, searchQuery) {
      commit(SET_SEARCH_QUERY, searchQuery);
    },
    search({commit, state}) {
      commit(SET_LOADING, true);
      axios.get(`https://registry.npmjs.org/-/v1/search?text=${state.searchQuery}`)
        .then((response) => {
          commit(SET_PACKAGES, response.data.objects);
        })
        .catch(() => {
          commit(RESET_PACKAGES);
        }).finally(() => {
          commit(SET_LOADING, false);
        });
    }
    
  }

});

