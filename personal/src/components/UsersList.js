import React from "react";
import { useFetchUsersQuery, useAddUserMutation } from "../store";
import Skeleton from "@mui/material/Skeleton";
import UsersListItem from "./UsersListItem";
import { Button, CircularProgress } from "@mui/material";

function UsersList() {
  const { data, isError, isFetching } = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation();

  const handleUserAdd = () => {
    addUser();
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />
    );
  } else if (isError) {
    content = <div>an error has occurred.</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="topArrangement">
        <h1 style={{ fontSize: "20px" }}>Users</h1>
        <Button variant="outlined" onClick={handleUserAdd}>
          {results.isLoading ? <CircularProgress /> : <span>Add User+</span>}
        </Button>
      </div>
      {content}
    </div>
  );
}

export default UsersList;
