import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import * as styles from "./Gallery.module.scss";
import * as api from "../../utils/api";

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
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const photos = await api.getPhotos();
    setPhotos(photos);
  };

  return (
    <div className={styles.container}>
      <p>
        Use the hashtag #jcwedding2606 on your Instagram posts to add your photo to our gallery below!
      </p>
      <div className={classes.root}>
        <GridList cellHeight={360} cols={4} className={classes.gridList}>
          {photos.map((photo, index) => (
            <GridListTile key={index}>
              <img
                src={photo.node["thumbnail_src"]}
                alt={photo.node["accessibility_caption"]}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default Gallery;
