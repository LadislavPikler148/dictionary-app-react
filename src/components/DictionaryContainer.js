import React, { useState } from "react";
import { CreateItemsContainer } from "./CreateItemsContainer";

export const DictionaryContainer = () => {
  const [inputValueWord, setInputValueWord] = useState("Hello");
  const [inputValueTranslate, setInputValueTranslate] = useState("Ahoj");
  const [selectValue, setSelectValue] = useState("EN");
  const [data, setData] = useState([
    {
      [selectValue]: {
        EN: inputValueWord,
        SK: inputValueTranslate
      }
    }
  ]);
  const addDataToState = e => {
    setData([
      ...data,
      {
        [selectValue]: {
          EN: inputValueWord,
          SK: inputValueTranslate
        }
      }
    ]);
  };
  return (
    <React.Fragment>
      <label>
        Slovo:
        <input
          type="text"
          onChange={e => setInputValueWord(e.target.value)}
          value={inputValueWord}
        />
      </label>
      <label>
        Preklad:
        <input
          type="text"
          onChange={e => setInputValueTranslate(e.target.value)}
          value={inputValueTranslate}
        />
      </label>
      <select
        onChange={e => setSelectValue(e.target.value)}
        value={selectValue}
      >
        <option>EN</option>
        <option>SK</option>
      </select>
      <button onClick={addDataToState}>Add</button>
      <CreateItemsContainer data={data} />
    </React.Fragment>
  );
};
