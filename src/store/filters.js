
import moment from 'moment';

      // const formatDate = function(date) {
      //   return moment(date).format("DD/MM/YYYY");
  // }
      export default function formatDate(date) {
        return moment(date).format("DD/MM/YYYY");
    }

    // Vue.filter('formatDate', date => moment(date).format("DD/MM/YYYY"+'asdads'));