import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    type: [],
    difficult: 1,
    time: 100,
    trainingResult: 0
  },
  mutations: {
    SET_TYPE: (state, payload) => {
      state.type = payload;
    },
    SET_DIFFICULT: (state, payload) => {
      state.difficult = payload;
    },
    SET_TIME: (state, payload) => {
      state.time = payload;
    },
    SET_TRAINING_RESULT: (state, payload) => {
      state.trainingResult = payload;
    }
  },
  getters: {
    type: state => {
      return state.type;
    },
    difficult: state => {
      return state.difficult;
    },
    time: state => {
      return state.time;
    },
    trainingResult: state => {
      return state.trainingResult;
    }
  },
  actions: {},
  modules: {}
});
