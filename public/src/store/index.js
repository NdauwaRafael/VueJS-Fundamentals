import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


var state = {
  services: [],
};

var getters = {
  services: state => {
    return state.services
  }
};

var mutations = {
  GET_SERVICES(state) {
    state.services = JSON.parse(localStorage.getItem('servicelist'));
  }
};



var actions = {

};


var store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
store.commit('GET_SERVICES');
export default store;
