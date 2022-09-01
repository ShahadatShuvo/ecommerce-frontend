import React from "react";

function SearchData({ data, query }) {
  const createSlicedString = (string, query) => {
    string = string.toLowerCase();
    let index = string.indexOf(query);
    if (index === 0 && query.length > 0) {
      if (string.length > query.length) {
        return {
          beforeMatch: "",
          match: query,
          afterMatch: string.slice(query.length, string.length),
        };
      } else {
        return {
          beforeMatch: "",
          match: query,
          afterMatch: "",
        };
      }
    } else if (index > 0 && query.length > 0 && string.length > query.length) {
      return {
        beforeMatch: string.slice(0, index),
        match: query,
        afterMatch: string.slice(index + query.length, string.length),
      };
    } else if (
      index > 0 &&
      query.length > 0 &&
      string.length === query.length + index
    ) {
      return {
        beforeMatch: string.slice(0, query.length),
        match: query,
        afterMatch: "",
      };
    } else {
      return {
        beforeMatch: string,
        match: "",
        afterMatch: "",
      };
    }
  };

  const matchedFirstName = createSlicedString(data.first_name, query);
  const matchedLastName = createSlicedString(data.last_name, query);
  const matchedEmail = createSlicedString(data.email, query);
  const matchedGender = createSlicedString(data.gender, query);
  return (
    <div>
      <div className="w-[60vw] mx-auto flex justify-between items-center">
        <p>
          <span>{matchedFirstName.beforeMatch}</span>
          <span className="text-red-500">{matchedFirstName.match}</span>
          <span>{matchedFirstName.afterMatch}</span>
        </p>
        <p>
          <span>{matchedLastName.beforeMatch}</span>
          <span className="text-red-500">{matchedLastName.match}</span>
          <span>{matchedLastName.afterMatch}</span>
        </p>
        <p>
          <span>{matchedEmail.beforeMatch}</span>
          <span className="text-red-500">{matchedEmail.match}</span>
          <span>{matchedEmail.afterMatch}</span>
        </p>
        <p>
          <span>{matchedGender.beforeMatch}</span>
          <span className="text-red-500">{matchedGender.match}</span>
          <span>{matchedGender.afterMatch}</span>
        </p>
      </div>
    </div>
  );
}

export default SearchData;
