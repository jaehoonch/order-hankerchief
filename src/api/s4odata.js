import axios from 'axios';

// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRF-Token'

// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


export default axios.create({
    baseURL : 'https://cors-anywhere.herokuapp.com/https://my300183-api.s4hana.ondemand.com',
    auth: {
        username: 'KR_API_USER',
        password: 'agcyyPFECeMwn7+LYmoCszMEwqfjybfkewipKsTd'
    }
});