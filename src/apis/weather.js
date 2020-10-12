import axios from 'axios';

//can also put jwt authentication here
export default axios.create({
	baseURL: 'https://api.stormglass.io/v1'
});
