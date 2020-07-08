import axios from "axios";

const baseUrl = 'https://www.instagram.com/explore/tags/notsponsoredbyryanair/?__a=1';

export const getPhotos = async () => {
    const { data } = await axios.get(baseUrl);
    return data.graphql.hashtag['edge_hashtag_to_media'].edges
}