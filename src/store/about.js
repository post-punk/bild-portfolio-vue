const state = {
    aboutText: [],
    tabText: [
        {
            description:
                "Vel omnis nulla at, nam doming deleniti ei. Pri ne error primis. Sed accumsan fabellas ut, cum ei tacimates reprehendunt. Tantas laoreet instructior nec an, eu vix augue vulputate consectetuer. Duis pertinax salutandi an has. Vivendo facilisi constituam ea vim.",
            details1: "No accusamus voluptatibus.",
            details2: "Sale dicta et per.",
            details3: "Dictas probatus mea eu."
        },
        {
            description:
                "Et pro posse exerci. Alterum suscipit ad mea, id tota decore contentiones nam. Ne sea iriure albucius percipitur, cu clita utamur has. Eos an tibique partiendo.",
            details1: "Te expetendis salutatus vim.",
            details2: "No aeque viderer signiferumque eum.",
            details3: "Id docendi minimum electram."
        },
        {
            description:
                "Sit id mentitum iudicabit consectetuer, modus nonumes constituam quo an. At explicari conclusionemque est. Choro saepe appellantur cu sea. Dolorem euripidis laboramus ad sea, facer graeci ei sed, et eam malis nullam altera.",
            details1: "Pri ei nihil debitis.",
            details2: "Propriae expetendis no quo.",
            details3: "Impedit epicuri te sea."
        },
        {
            description:
                "Cum errem necessitatibus ex, at decore accommodare consequuntur has. Qui ea nulla fabellas. Ad dolore suscipit vix. Voluptua intellegat sententiae te his. Eum ad agam augue scriptorem, ex causae dissentias nam.",
            details1: "Eum quod verear nusquam no.",
            details2: "Ex pri elitr nostrud.",
            details3: "Id inermis concludaturque qui."
        },

    ],
}

const getters = {
    tabText: state => {
        return state.tabText;
    },
    aboutText: state => {
        return state.aboutText;
    },

}
const mutations = {
    setAboutText(state, payload) {
        state.aboutText = payload
    },
    setTabText(state, payload) {
        state.tabText = payload
    }
}
const actions = {

}


export default {
    state,
    mutations,
    actions,
    getters
};
