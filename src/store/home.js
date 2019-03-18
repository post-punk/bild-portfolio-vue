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
    },
    featuredProject: {
        header: 'A COUPLE OF OUR FEATURED PROJECTS',
        paragraph: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit<br></p><p>justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros.</p>'
    },
    carousel: [
  
           {
               url: require('@/assets/carousel/project-jezik.jpg'),
               header: 'DARK UI FREEBIE',
               paragraph: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born'
           },
           {
               url: require('@/assets/carousel/project-social-media.jpg'),
               header: 'DEFENESTRATION',
               paragraph: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain'
           },
           {
               url: require('@/assets/carousel/project-boy-and-girl.jpg'),
               header: 'FANGED NOUMENA',
               paragraph: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
           },
           {
               url: require('@/assets/carousel/project-buttons.jpg'),
               header: 'SCHOPENHAUER',
               paragraph: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil'
           },
           {
               url: require('@/assets/carousel/project-jes.jpg'),
               header: 'ENCHIRIDION',
               paragraph: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized'
           }
        ],
        // images: [
        //     require('@/assets/carousel/project-jezik.jpg'),
        //     require('@/assets/carousel/project-social-media.jpg'),
        //     require('@/assets/carousel/project-boy-and-girl.jpg'),
        //     require('@/assets/carousel/project-buttons.jpg'),
        //     require('@/assets/carousel/project-jes.jpg'),
        //     // require('@/assets/carousel/project-jezik.jpg'),
        //     // require('@/assets/carousel/project-social-media.jpg'),
        //     // require('@/assets/carousel/project-jes.jpg'),
        // ],
        // headers: [
        //     'DARK UI FREEBIE', 'DEFENESTRATION', 'FANGED NOUMENA', 'SCHOPENHAUER', 'ENCHIRIDION', 
        // ],
        // paragraphs: [
        //     'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born',
        //     'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain',
        //     'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
        //     'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil',
        //     'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized'
        // ]
    }


const getters = {
    banner: state => {
        return state.banner;
    },
    popupVideo: state => {
        return state.popupVideo;
    },
    featuredProject: state => {
        return state.featuredProject;
    },
    carousel: state => {
        return state.carousel;
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
    getters,
};
