
let $tool = require('../../tool')
let colors = [
  '#E00',
  '#CCC',
  '#000',
  '#ECE'
]

const state = {
  appleColor: colors[0]
}

const getters = {
  appleColor: state => state.appleColor,
}

const mutations = {
  setAppleColor (state, newColor) {
    state.appleColor = newColor
  },
}

const actions = {
  updateMicrosoftColor ({ commit, state }, products) {
    setTimeout(()=>{
      commit('setMicrosoftColor', colors[$tool.random(0, colors.length-1)])
    }, 2000)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
