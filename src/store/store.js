import Vue from 'vue'
import Vuex from 'vuex'
import { strictEqual } from 'assert';

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        navMain: [
            {
                path: '/',
                name: 'HOME'
            },

            {
                path: '/about',
                name: 'ABOUT'
            },

            {
                path: '/work',
                name: 'WORK'
            },

            {
                path: '/contact',
                name: 'CONTACT'
            }
        ],
        
        projects: [
            {
                name: "img1",
                category: "web",
                url: "https://i.imgur.com/QJMYERw.png",
                text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit elit tellus, at aliqam leo dignissim ut. Quisque tincidunt dolor sapien, non laoreet ipsum tincidunt at. Curabitur scelerisque, ligula nec volutpat tincidunt, purus nulla molestie quam, vel maximus erat quam eget massa. Phasellus sed placerat massa, vitae euismod orci. Nam posuere ligula non nunc mollis, eu luctus tortor sollicitudin. Integer volutpat leo lorem, non vulputate ante tempus tempor. Sed bibendum neque ut porta faucibus. Praesent eget venenatis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In sodales eros eros. Sed congue magna id augue placerat, at feugiat purus tristique. Proin vitae justo sagittis, suscipit neque sit amet, commodo est."
            },
            {
                name: "img2",
                category: "web",
                url: "https://i.imgur.com/zENEKl0.png",
                text:
                    "Morbi ac magna vel dolor vehicula tempor. Duis mattis volutpat lectus. Nullam convallis, dui quis rhoncus faucibus, turpis arcu elementum erat, a vulputate libero metus ut mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam non luctus ligula, dapibus dapibus erat. Pellentesque efficitur nulla nec iaculis feugiat. Maecenas et iaculis ligula."
            },
            {
                name: "img3",
                category: "photo",
                url: "https://i.imgur.com/8SPAekX.png",
                text:
                    "Etiam condimentum volutpat metus et placerat. Duis bibendum augue nec dapibus feugiat. Phasellus id mauris leo. Pellentesque pharetra leo vel lacus viverra, id cursus leo sagittis. Vestibulum tempor id nunc in hendrerit. Mauris eget lobortis justo. Nullam tempor cursus eros id mattis. Donec orci libero, mollis vel blandit vel, malesuada blandit urna. Nunc sodales molestie massa vel convallis. Donec varius suscipit maximus. Pellentesque id scelerisque massa, nec pulvinar erat. Sed sed lectus ac tortor pretium eleifend sed eget ligula."
            },
            {
                name: "img4",
                category: "print",
                url: "https://i.imgur.com/WFs2EpX.png",
                text:
                    "Nunc tempus leo eget velit imperdiet, non cursus leo porta. Nam nec neque vel dui volutpat rhoncus. Vestibulum turpis erat, condimentum quis blandit id, dignissim vel odio. Suspendisse imperdiet pellentesque dignissim. Nullam ex ex, pulvinar a enim in, faucibus venenatis ligula. Vestibulum odio ligula, suscipit vitae aliquet at, sagittis ac sem. Pellentesque scelerisque aliquam posuere. Ut in posuere magna, sed lacinia ex. Duis auctor feugiat metus vel eleifend. Aliquam id libero vel metus vestibulum scelerisque. Nullam et hendrerit eros, aliquam vehicula felis."
            },
            {
                name: "img5",
                category: "web",
                url: "https://i.imgur.com/Ai437o4.png",
                text:
                    "Donec placerat ac quam id malesuada. Nullam vitae erat ac diam faucibus elementum non eu purus. Nulla gravida, mauris vulputate rhoncus vestibulum, enim quam vulputate mauris, ac molestie nulla ante in quam. Nunc eu nisl quis eros convallis feugiat. Duis ac mattis felis. Ut nec magna eu nisl volutpat congue sit amet ut massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent commodo vestibulum mi bibendum dictum."
            },
            {
                name: "img6",
                category: "app",
                url: "https://i.imgur.com/NobXWbq.png",
                text:
                    "Etiam posuere, lacus vel dignissim sollicitudin, augue purus fringilla ante, et suscipit erat velit sit amet tortor. Vestibulum felis nisl, congue sit amet nibh vel, euismod ornare eros. Pellentesque dolor odio, aliquet nec odio quis, lobortis ultrices tellus. Nunc varius lacinia diam id commodo. Mauris nulla lorem, faucibus sed elit at, commodo dapibus lorem. Nam molestie ut est vel feugiat. Maecenas faucibus et dui ut pretium. Nam quis nisl lacinia, dignissim mi vitae, sagittis erat. Nulla non auctor elit. Ut semper justo sit amet nibh aliquet, id lobortis eros tincidunt. Sed pulvinar semper dui nec tempus. Curabitur nisi ante, imperdiet in dolor id, tristique vestibulum orci."
            },
            {
                name: "img7",
                category: "photo",
                url: "https://i.imgur.com/TQgkicD.png",
                text:
                    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vitae maximus dui. Nam nisl elit, ullamcorper quis nisl ullamcorper, aliquam sodales arcu. Donec sollicitudin enim orci, a ullamcorper felis mollis non. In pretium tempus nisl ut lobortis. Vivamus non sapien in odio porta varius. Nam ornare ligula lacus. Vestibulum augue quam, blandit eu sapien vulputate, gravida pretium tellus. Aliquam erat volutpat. Aenean et mauris vitae ipsum dignissim ornare a et ligula. Mauris eu mi nibh. Praesent sodales rutrum condimentum. Cras bibendum erat sed lectus fermentum, eu interdum ligula lacinia."
            },
            {
                name: "img8",
                category: "print",
                url: "https://i.imgur.com/cFfimNq.png",
                text:
                    "Donec ornare risus sapien. Sed dui quam, molestie nec vehicula et, cursus a tellus. Suspendisse pulvinar sem enim, ac pretium arcu scelerisque ac. Quisque nunc purus, pulvinar nec est eget, scelerisque imperdiet purus. Pellentesque ullamcorper nibh ipsum, finibus blandit augue semper vitae. Donec et nulla lacus. Vivamus maximus condimentum justo suscipit feugiat. In pellentesque finibus est sit amet tempor. Nullam et nulla id erat faucibus hendrerit."
            },
            {
                name: "img9",
                category: "web",
                url: "https://i.imgur.com/apUA4Hw.png",
                text:
                    "Sed eu blandit est. Duis tincidunt eleifend eleifend. Integer hendrerit tempor risus eget vestibulum. Etiam placerat ex in ligula hendrerit ornare. Vestibulum scelerisque neque eget posuere volutpat. Nam dictum, dui at imperdiet mattis, enim arcu mattis dui, ac suscipit nisi sapien in sem. Cras hendrerit quis odio eget fringilla. Sed vitae nibh eu dolor efficitur pulvinar at ac dui. Nam fermentum orci ut condimentum dapibus. Nam pulvinar nisi in nulla imperdiet, ac molestie eros fermentum. Aenean vel ultricies nibh, sollicitudin mollis urna. Vivamus ultricies risus lorem, nec faucibus nisi facilisis et. Sed imperdiet aliquet sapien sed luctus. Morbi imperdiet porttitor libero, et ornare turpis. Curabitur eu porta arcu, iaculis dignissim arcu."
            }
        ],
        aboutText: [
            {
                image: '../../assets/dude.svg'
            }
        ],
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
            }
          ]

    },

    //namjerno kombinujem
    getters: {
        allItems: state => {
            return state.projects;
        },
        webItems(state) {
            return state.projects.filter(project => project.category == 'web');
        },
        appItems(state) {
            return state.projects.filter(project => project.category == 'app');
        },
        printItems: state => {
            return state.projects.filter(function (project) {
                return project.category == 'print'
            });
        },
        photoItems: state => {
            return state.projects.filter(project => project.category == 'photo')
        }

    },
    mutations: {

    },
    actions: {

    }

})