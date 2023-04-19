import React from "react";
import { useFetchAlbumsQuery } from "../store";

export default function AlbumList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);

  return <div>{user.name} Album</div>;
}
