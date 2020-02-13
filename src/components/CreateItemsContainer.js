import React from "react";
import { CreateItem } from "./CreateItem";

export const CreateItemsContainer = props => {
  return props.data.map(item => <CreateItem item={item} />);
};
