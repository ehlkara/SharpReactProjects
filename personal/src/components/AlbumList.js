import React from "react";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import { Button, CircularProgress } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import AlbumListItem from "./AlbumListItem";

export default function AlbumList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "auto" }} />
    );
  } else if (isError) {
    content = <div>an error has occurred.</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }


  return (
    <>
      <div>
        <div className="topArrangement">
          <h3>{user.name} Album's</h3>
          <Button variant="outlined" onClick={handleAlbumAdd}>
            {results.isLoading ? <CircularProgress /> : <span>Add Album+</span>}
          </Button>
        </div>
      </div>
      <div>{content}</div>
    </>
  );
}
