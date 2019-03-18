const state = {
    banner: {
        background: require("@/assets/banner-background.svg"),
        mac: require("@/assets/macbook.svg"),
        ipad: require("@/assets/ipad.svg"),
        iphone: require("@/assets/iphone.svg"),
        portfolioText: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT PELLENTESQUE EU ERATIUY LACUS, VEL CONGUE MAURIS. FUSCE <br>VELITARIA JUSTO, FAUCIBUS EU.',
        portfolioButton: 'BROWSE PORTFOLIO',
    },
    popupVideo: {
        header: 'GET TO KNOW US A LITTLE BETTER!',
        paragraph: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia. </p> <p> Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>',
        image: require('@/assets/video-player-placeholder.svg'),
        modalVideo: "https://www.youtube.com/embed/tqvh8mz2Q9s?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1"
    }
}

//namjerno kombinujem
const getters = {
    banner: state => {
        return state.banner;
    },
    popupVideo: state => {
        return state.popupVideo;
    }

}
const mutations = {

}
const actions = {

}


export default {
    state,
    mutations,
    actions,
    getters
};
