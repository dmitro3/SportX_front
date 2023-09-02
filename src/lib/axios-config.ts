import axios from 'axios';
import { CookieJar } from 'tough-cookie';
import { wrapper } from 'axios-cookiejar-support';

const cookieJar = new CookieJar();
wrapper(axios);
axios.defaults.jar = cookieJar;
axios.defaults.baseURL = 'https://0809-5-173-16-56.ngrok-free.app'; 
