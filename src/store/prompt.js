const state = {
   promptIsOpen: false,
   modalInfo: {}
}

const getters = {
    getPromptIsOpen: state => {
        return state.promptIsOpen;
    },
    getModalInfo: state => {
        return state.modalInfo;
    }
   
}
const mutations = {
    setPromptIsOpen(state, payload) {
        state.promptIsOpen = payload
    },
    setModalInfo(state, payload) {
        state.modalInfo = payload;
        console.log(payload)
    }
    
}
const actions = {
    closePrompt({commit}, payload) {
        commit('setPromptIsOpen', payload)
    },
    modalInfo({commit}, payload) {
        commit('setModalInfo', payload)
    }
}


export default {
    state,
    mutations,
    actions,
    getters
};
