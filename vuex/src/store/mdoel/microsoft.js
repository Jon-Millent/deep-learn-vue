
let $tool = require('../../tool')
let colors = [
  'yellow',
  'orange',
  'pink',
  'green'
]

const state = {
  microsoftColor: colors[0]
}

const getters = {
  microsoftColor: state => state.microsoftColor,
}

const mutations = {
  setMicrosoftColor (state, newColor) {
    state.microsoftColor = newColor
  },
}

const actions = {
  updateAppleColor ({ commit, state }, products) {
    setTimeout(()=>{
      commit('setAppleColor', colors[$tool.random(0, colors.length-1)])
    }, 2000)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
