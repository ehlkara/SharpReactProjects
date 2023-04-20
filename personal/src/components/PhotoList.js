import React from "react";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Skeleton from "@mui/material/Skeleton";
import PhotoListItem from "./PhotoListItem";
import { Button, CircularProgress } from "@mui/material";

export default function PhotoList({ album }) {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handlePhotoAdd = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "auto" }} />
    );
  } else if (isError) {
    content = <div>an error has occurred.</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <>
      <div>
        <div className="topArrangement">
          <h3>{album.title} Photo's</h3>
          <Button variant="outlined" onClick={handlePhotoAdd}>
            {results.isLoading ? <CircularProgress /> : <span>Add Photo+</span>}
          </Button>
        </div>
      </div>
      <div className="photoDiv">{content}</div>
    </>
  );
}
