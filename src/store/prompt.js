const state = {
   promptIsOpen: false
}

//namjerno kombinujem
const getters = {
    getPromptIsOpen: state => {
        return state.promptIsOpen;
    },
   
}
const mutations = {
    setPromptIsOpen(state, payload) {
        state.promptIsOpen = payload
    },
    
}
const actions = {

}


export default {
    state,
    mutations,
    actions,
    getters
};
