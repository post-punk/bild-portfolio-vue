
      import Vue from 'vue';

      
      export default {
        formatDate(date) {
            return moment(date).format("DD/MM/YYYY");
      }
    }

//     Vue.filter('dateFilter', formatDate(date) => moment(date).format("DD/MM/YYYY");
//   });