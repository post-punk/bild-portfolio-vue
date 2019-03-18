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
                image: 'static/img/dude.svg',
                paragraphs: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.',
                    'Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.'],
                headers: [
                    'MISSION STATEMENT', 'FUN FACTS', 'SERVICES'
                ]
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
            },

        ],
        logo: { image: 'https://i.imgur.com/g7ypgKk.png' },
        icons: [{
            id: 'twitter',
            link: 'https://www.twitter.com',
            transform: 'translate(-927 -46)',
            path: 'M960.451 62.868c0 9.316-7.489 16.868-16.725 16.868-9.238 0-16.726-7.552-16.726-16.868C927 53.552 934.488 46 943.726 46c9.236 0 16.725 7.552 16.725 16.868zm-4.181 0c0-6.987-5.617-12.65-12.544-12.65-6.928 0-12.545 5.663-12.545 12.65s5.617 12.651 12.545 12.651c6.927 0 12.544-5.664 12.544-12.65zm-7.404-2.222c.005.116.007.233.007.35 0 3.581-2.702 7.71-7.645 7.71a7.56 7.56 0 0 1-4.119-1.217 5.36 5.36 0 0 0 3.978-1.122 2.693 2.693 0 0 1-2.51-1.882 2.678 2.678 0 0 0 1.214-.047 2.706 2.706 0 0 1-2.155-2.657v-.034c.362.203.776.325 1.217.339a2.715 2.715 0 0 1-1.196-2.255c0-.497.133-.962.364-1.363a7.606 7.606 0 0 0 5.538 2.831 2.75 2.75 0 0 1-.069-.617c0-1.496 1.203-2.71 2.687-2.71.773 0 1.471.33 1.961.856a5.343 5.343 0 0 0 1.706-.657 2.715 2.715 0 0 1-1.18 1.499 5.336 5.336 0 0 0 1.542-.427 5.486 5.486 0 0 1-1.34 1.403z'
        },
        {
            id: 'facebook',
            link: 'http://www.facebook.com',
            transform: 'translate(-968 -46)',
            path: 'M1002.266 62.868c0 9.316-7.49 16.868-16.726 16.868-9.238 0-16.726-7.552-16.726-16.868 0-9.316 7.488-16.868 16.726-16.868 9.237 0 16.726 7.552 16.726 16.868zm-4.182 0c0-6.987-5.617-12.65-12.544-12.65-6.928 0-12.545 5.663-12.545 12.65s5.617 12.651 12.545 12.651c6.927 0 12.544-5.664 12.544-12.65zm-11.993 6.598l-2.647.008-.008-6.347-1.567-.017v-2.4l1.584-.009.048-1.31c0-1.802.617-2.93 2.722-2.93l1.934.007.009 2.13-1.024.073c-.82 0-1.119.28-1.119.855l-.003 1.192h2.1l-.454 2.392h-1.583z'
        },
        {
            id: 'rss',
            link: 'http://feeds.bbci.co.uk/news/rss.xml',
            transform: 'translate(-1010 -46)',
            path: 'M1043.557 63.132c0 9.315-7.489 16.868-16.725 16.868-9.238 0-16.726-7.553-16.726-16.868 0-9.317 7.488-16.868 16.726-16.868 9.236 0 16.725 7.551 16.725 16.868zm-4.181 0c0-6.988-5.617-12.651-12.544-12.651-6.928 0-12.545 5.663-12.545 12.65s5.617 12.652 12.545 12.652c6.927 0 12.544-5.665 12.544-12.651zm-10.207 4.656h-1.964c0-2.592-2.091-4.7-4.66-4.7v-1.98c3.66 0 6.624 2.992 6.624 6.68zm3.568 0h-1.964c0-4.576-3.69-8.3-8.228-8.3V57.51c5.63 0 10.192 4.604 10.192 10.28zm-7.79-1.212c0 .67-.537 1.212-1.2 1.212a1.206 1.206 0 0 1-1.202-1.212c0-.669.538-1.21 1.201-1.21.664 0 1.202.541 1.202 1.21z'
        },
        {
            id: 'pinterest',
            link: 'http://www.pinterest.com',
            transform: 'translate(-1052 -46)',
            path: 'M1085.372 63.132c0 9.315-7.49 16.868-16.726 16.868-9.238 0-16.726-7.553-16.726-16.868 0-9.317 7.488-16.868 16.726-16.868 9.236 0 16.726 7.551 16.726 16.868zm-4.182 0c0-6.988-5.617-12.651-12.544-12.651-6.928 0-12.545 5.663-12.545 12.65s5.617 12.652 12.545 12.652c6.927 0 12.544-5.665 12.544-12.651zm-7.105-1.99c0 3.194-1.76 5.58-4.355 5.58-.872 0-1.691-.476-1.972-1.015 0 0-.469 1.875-.567 2.237-.35 1.28-1.378 2.56-1.457 2.665-.057.073-.18.05-.193-.047-.022-.163-.284-1.777.025-3.094l1.038-4.436s-.258-.52-.258-1.288c0-1.206.694-2.107 1.557-2.107.734 0 1.089.556 1.089 1.222 0 .745-.47 1.857-.713 2.889-.203.864.43 1.568 1.274 1.568 1.53 0 2.56-1.981 2.56-4.328 0-1.785-1.192-3.12-3.36-3.12-2.447 0-3.974 1.842-3.974 3.899 0 .709.208 1.21.533 1.596.15.178.17.25.116.454-.039.15-.127.51-.165.654-.054.206-.219.28-.404.203-1.127-.464-1.653-1.71-1.653-3.11 0-2.312 1.934-5.085 5.77-5.085 3.081 0 5.11 2.249 5.11 4.663'
        },
        {
            id: 'google',
            link: 'https://plus.google.com/',
            transform: 'translate(-1093 -46)',
            path: 'M1127.186 63.132c0 9.315-7.49 16.868-16.726 16.868-9.238 0-16.726-7.553-16.726-16.868 0-9.317 7.488-16.868 16.726-16.868 9.237 0 16.726 7.551 16.726 16.868zm-4.182 0c0-6.988-5.616-12.651-12.544-12.651-6.928 0-12.544 5.663-12.544 12.65s5.616 12.652 12.544 12.652c6.928 0 12.544-5.665 12.544-12.651zm-7.315-2.118v2.156l-1.055-.008.014-2.15h-2.132v-1.066h2.102v-2.104l1.09-.014.013 2.17h2.054v1.016zm-5.79-2.565c.784.304 1.2 1.225 1.2 2.17 0 .793-.436 1.476-1.051 1.962-.6.473-.715.671-.715 1.074 0 .344.643.928.98 1.168.985.702 1.303 1.354 1.303 2.442 0 1.357-1.302 2.706-3.66 2.706-2.07 0-3.814-.848-3.814-2.206 0-1.377 1.565-2.732 3.634-2.732.225 0 .458.02.672.02-.283-.278-.472-.567-.472-.986 0-.25.044-.54.155-.753-.113.008-.228.01-.347.01-1.698 0-2.836-1.219-2.836-2.729 0-1.478 1.571-2.754 3.24-2.754h3.726l-.834.608zm-1.703 6.96c-1.43-.016-2.71.878-2.71 1.953 0 1.096 1.032 2.009 2.462 2.009 2.01 0 2.71-.856 2.71-1.953 0-.132-.016-.261-.045-.387-.158-.62-.714-.929-1.49-1.473a3.087 3.087 0 0 0-.927-.15zm1.565-4.716c-.166-1.271-1.078-2.29-2.037-2.32-.96-.029-1.603.944-1.438 2.216.166 1.27 1.078 2.323 2.038 2.352.959.03 1.602-.977 1.437-2.248z'
        },
        {
            id: 'dribbble',
            link: 'https://dribbble.com/',
            transform: 'translate(-1135 -46)',
            path: 'M1169 63.132c0 9.315-7.489 16.868-16.726 16.868-9.237 0-16.725-7.553-16.725-16.868 0-9.317 7.488-16.868 16.725-16.868 9.237 0 16.726 7.551 16.726 16.868zm-4.181 0c0-6.988-5.617-12.651-12.545-12.651s-12.544 5.663-12.544 12.65 5.616 12.652 12.544 12.652c6.928 0 12.545-5.665 12.545-12.651zm-5.348 1.492a7.498 7.498 0 0 1-1.105 2.651c-.264.391-.566.76-.897 1.096a7.353 7.353 0 0 1-2.335 1.587 7.3 7.3 0 0 1-6.969-.684 7.489 7.489 0 0 1-1.086-.903 7.627 7.627 0 0 1-.896-1.096 7.399 7.399 0 0 1-1.254-4.144 7.463 7.463 0 0 1 1.254-4.143 7.517 7.517 0 0 1 1.983-2 7.367 7.367 0 0 1 2.629-1.115 7.332 7.332 0 0 1 4.34.432 7.372 7.372 0 0 1 2.334 1.588c.331.335.633.703.897 1.095.264.397.492.82.677 1.26a7.528 7.528 0 0 1 .577 2.884 7.47 7.47 0 0 1-.15 1.492zm-3.715 3.618a6.192 6.192 0 0 0 2.543-3.861c.018-.094.027-.19.042-.284a5.82 5.82 0 0 0-.235-.064 8.885 8.885 0 0 0-.693-.143h-.004a8.934 8.934 0 0 0-2.852-.026 28.293 28.293 0 0 1 1.199 4.378zm-5.876.604c.372.158.76.28 1.154.361a6.227 6.227 0 0 0 2.479 0 6.08 6.08 0 0 0 1.154-.361l.035-.017a26.902 26.902 0 0 0-1.32-4.675l-.04.013c-.374.131-.717.28-1.042.434-.046.022-.095.043-.14.066-.302.149-.58.306-.84.468l-.143.091c-.251.163-.485.328-.696.495-.034.026-.064.052-.097.079a8.094 8.094 0 0 0-1.064 1.02l-.06.068a7.508 7.508 0 0 0-.645.88 4.858 4.858 0 0 0-.138.235c.118.093.236.187.359.27.33.224.68.417 1.044.573zm-3.745-5.914c-.002.067-.01.133-.01.2a6.175 6.175 0 0 0 1.05 3.467c.151.223.334.421.511.624.042-.067.105-.163.178-.27l.036-.054c.078-.112.172-.24.28-.382l.063-.082c.116-.147.244-.304.391-.472l.068-.075c.16-.178.331-.362.526-.55.19-.185.4-.37.623-.555.035-.028.066-.056.1-.084a9.524 9.524 0 0 1 1.659-1.066l.132-.06c.307-.146.626-.281.967-.393.08-.026.161-.046.242-.069a21.431 21.431 0 0 0-.507-1.083c-2.538.765-4.988.888-5.977.902-.141.002-.255.003-.332.002zm3.541-5.415a6.133 6.133 0 0 0-.84.472c-.325.222-.63.476-.909.757a6.155 6.155 0 0 0-1.663 3.081c.065 0 .155 0 .266-.003h.008c.225-.005.538-.016.92-.041h.002a23.98 23.98 0 0 0 3.888-.583c.191-.045.384-.094.578-.146a38.529 38.529 0 0 0-2.25-3.537zm6.036.472a6.114 6.114 0 0 0-4.678-.934c-.052.011-.103.03-.154.041.3.41 1.317 1.832 2.255 3.569.245-.093.475-.192.689-.292l.012-.006c1.506-.712 2.26-1.566 2.492-1.866-.2-.177-.396-.362-.616-.512zm2.587 3.892a6.259 6.259 0 0 0-.926-2.217c-.102-.153-.233-.284-.35-.427-.251.318-1.08 1.226-2.65 2.024l-.05.024a10.34 10.34 0 0 1-.704.322c.148.305.291.614.423.927.047.111.086.218.13.328.224-.028.446-.048.666-.061l.111-.006c.189-.01.373-.016.556-.018l.093-.001c.209 0 .413.004.61.012l.042.002a15.743 15.743 0 0 1 1.532.145l.091.014c.096.015.182.028.259.042l.064.01c.09.016.166.03.223.042a6.451 6.451 0 0 0-.12-1.162'
        },
        
    ],
    footerText: { 
        callout: 'ARE YOU READY TO BE BLOWN AWAY?',
        footerButton: 'CLICK HERE TO FIND OUT' ,
        copyright: 'COPYRIGHT 2013 DISPLAY. ALL RIGHTS RESERVED.' 
    }

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
        },
        tabText: state => {
            return state.tabText;
        },
        aboutText: state => {
            return state.aboutText;
        },
        logo: state => {
            return state.logo;
        },
        icons: state => {
            return state.icons;
        },
        navMain: state => {
            return state.navMain
        },
        footerText: state => {
            return state.footerText
        }


    },
    mutations: {
    },
    actions: {
        
    }

})