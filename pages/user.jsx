import React from "react";
import { TextField } from "@mui/material";
import { UserData } from "../components/data/UserData";
import SearchData from "../components/SearchData";

function User() {
  const [query, setQuery] = React.useState("");

  const keys = ["first_name", "last_name", "email", "gender"];

  const search = (data) => {
    return data.filter((item) => {
      return (
        // item.first_name.toLowerCase().includes(query.toLowerCase()) ||
        // item.last_name.toLowerCase().includes(query) ||
        // item.email.toLowerCase().includes(query) ||
        // item.gender.toLowerCase().includes(query)
        keys.some((key) =>
          item[key].toLowerCase().includes(query.toLowerCase())
        )
      );
    });
  };

  return (
    <div>
      <div className="w-[30%] mx-auto">
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
        />
      </div>
      <p className="my-5 text-center">{search}</p>
      <div className="w-[60vw] mx-auto flex justify-between items-center font-semibold text-lg border-b border-blue-400">
        <p className="w-1/3">First Name</p>
        <p className="w-1/3 text-left ml-10">Last Name</p>
        <p className="w-1/3 text-center">Email</p>
        <p className="w-1/3 text-right">Gender</p>
      </div>
      {search(UserData).map((data) => {
        return <SearchData key={data.id} data={data} query={query} />;
      })}
    </div>
  );
}

export default User;
