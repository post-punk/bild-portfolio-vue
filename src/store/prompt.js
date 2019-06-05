const state = {
   promptIsOpen: false,
   modalInfo: {},
   method: null
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
    },
}
const actions = {
    closePrompt({commit}, payload) {
        commit('setPromptIsOpen', payload)
    },
    modalInfo({commit}, payload) {
        const defaultOptions = {
            
        };
        commit('setPromptIsOpen', true);
        commit('setModalInfo', payload);
    }
}


export default {
    state,
    mutations,
    actions,
    getters
};
