import React from "react";

export const CreateItem = ({ item }) => {
  return (
    <div>
      <p>
        {item.EN.EN} - {item.EN.SK}
      </p>
    </div>
  );
};
