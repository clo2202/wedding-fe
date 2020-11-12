import axios from "axios";

const InstaUrl =
  "https://www.instagram.com/explore/tags/jcwedding2606/?__a=1";
const dbUrl = `https://jdcw-wedding.herokuapp.com/api`;

export const getPhotos = async () => {
  try {
    const { data } = await axios.get(`${dbUrl}/photos`);
    return data.photos
  } catch (err) {
    return err.response.data
  }
};

export const getInstaPhotos = async () => {
  const { data } = await axios.get(InstaUrl);
  return data.graphql.hashtag["edge_hashtag_to_media"].edges;
};

export const checkLogin = async password => {
  try {
    const { data } = await axios.post(`${dbUrl}/login`, { password: password });
    return data
  } catch (err) {
      return err.response.data 
  }
};

export const submitRsvp = async (response) => {
  const { data } = await axios.post(`${dbUrl}/rsvp`, response)
  return data
}
