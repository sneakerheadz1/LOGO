import axios from 'axios'
export const GET_URL_START = 'GET_URL_START'

const fetchGIF = async () => {

    dispatchEvent({ type: GET_URL_START })

    try {

        const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=CcUH9GDwahdUq0YmtwceBXAaj3FQDl29') //<--*Axios https request syntax*

        console.log('This is the data we got back from giphy api', response);
        setGifURL(response.data.data.fixed_height_downsampled_url)
    } catch (err) {
        console.log(err)
    }
}