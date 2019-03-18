const state = {
    contactInfo: 
        {
            map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5937.033511898321!2d19.203451119617903!3d41.92474603759312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x14fd22a73b629943!2sCaffe+Bureau!5e0!3m2!1sen!2s!4v1544184565997',
            headers: [
                'CONTACT FORM', 'CONTACT INFO', 'STORE HOURS'
            ],
            paragraphs: [
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quis obcaecati voluptatum harum nam sequi enim ludantium quas dignissimos consequuntur.',
                '<p>Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit velit justo.</p><p><strong>email:</strong><a href="mailto:info@display.com" target="_blank" style="color: #2ecc71">info@display.com</a><br><strong>phone:</strong> 1.306.222.4545<p>222 2nd Ave South<br>Saskabush, SK S7M 1T6</p>',
                '<p class="col-6">Monday - Thursday<br>Friday <br>Saturday <br>Sunday & Holidays</p><p class="col-6">8 am - 5 pm<br>8 am - 6 pm<br>9 am - 5 pm<br>Closed</p>',

            ],
        }
    
}

//namjerno kombinujem
const getters = {
    contactInfo: state => {
        return state.contactInfo;
    },
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
