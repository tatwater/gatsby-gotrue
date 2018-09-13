import GoTrue from 'gotrue-js';


const auth = new GoTrue({
  APIUrl: "https://www.teaganatwater.com/.netlify/identity",
  setCookie: true,
});


export default auth;
