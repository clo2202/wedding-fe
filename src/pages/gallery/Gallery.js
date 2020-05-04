import React, { Fragment } from 'react';
import { buildUrl } from 'react-instafeed';

const ACCESS_KEY = process.env.REACT_APP_INSTAGRAM_ACCESS_KEY;

const options = {
    accessToken: ACCESS_KEY,
    get: 'tagged',
    resolution: 'standard_resolution',
    sortBy: 'none',
    tagName: 'awesome',
}

const Gallery = () => {
    const instagramUrl = buildUrl(options)
    console.log(instagramUrl)
    return (
        <h1>Gallery</h1>
    );
};

export default Gallery;