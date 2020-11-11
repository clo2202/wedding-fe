import React, { useEffect, useState } from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import * as api from "../../utils/api";

import * as styles from "./Gallery.module.scss";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "90%",
    height: "100%"
  }
}));

const Gallery = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  // const [instaPhotos, setInstaPhotos] = useState([]);
  const [photoUrls, setPhotosUrls] = useState([]);

  useEffect(() => {
    fetchPhotos();
    // fetchInstaPhotos();
  }, []);

  const fetchPhotos = async () => {
    const photos = await api.getPhotos();
    setPhotosUrls(photos);
  };

  // const fetchInstaPhotos = async () => {
  //   const photos = await api.getInstaPhotos();
  //   setInstaPhotos(photos);
  // };

  return (
    <div className={styles.container}>
      <h1>Gallery</h1>
      <p>
        Use the hashtag <strong>#jcwedding2606</strong> on your Instagram posts
        and your photos will be added to the gallery below.
      </p>
      <p>Until then, here are some photos of us from over the years.</p>
      <div className={classes.root}>
        <GridList cellHeight={360} cols={isDesktop ? 4 : 1} className={classes.gridList}>
          {photoUrls.map((photo, index) => (
            <GridListTile key={index}>
              <img src={photo.photo_url} alt="chloe & joe" />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default Gallery;
