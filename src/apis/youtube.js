import axios from 'axios';

const KEY = 'AIzaSyBhdz-YB3LzxZxoOqIV9cHLDs2GsBIvtk0';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 8,
        key: KEY
    }
});




