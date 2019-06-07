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
        if (payload && payload.deleteModal) {
            commit('setModalInfo', {
                modalHeader: 'Are you sure?',
                modalText: 'This action cannot be undone.',
                cancelButton: 'No',
                dangerButton: 'Yes',
                onSubmit: payload.onSubmit
            })
        } else {
            commit('setModalInfo', {
                modalHeader: payload.modalHeader,
                modalText: payload.modalText,
                cancelButton: payload.cancelButton,
                dangerButton: payload.dangerButton,
                buttonInfo: payload.buttonInfo,
                onSubmit: payload.onSubmit
            })
        }
        // const defaultOptions = {
            
        // };
        commit('setPromptIsOpen', true);
        // commit('setModalInfo', payload);
    }
}


export default {
    state,
    mutations,
    actions,
    getters
};
