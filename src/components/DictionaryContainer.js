import React, { useState } from "react";
import { CreateItemsContainer } from "./CreateItemsContainer";

export const DictionaryContainer = () => {
  const [inputValueWord, setInputValueWord] = useState("Hello");
  const [inputValueTranslate, setInputValueTranslate] = useState("Ahoj");
  const [selectValue, setSelectValue] = useState("EN");
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));
  return (
    <div className="dictionary-container">
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
      <button
        onClick={() => {
          setData({
            ...data,
            [selectValue]: [
              ...(data && data[selectValue] ? data[selectValue] : ""),
              {
                originalWord: inputValueWord,
                translatedWord: inputValueTranslate
              }
            ]
          });
        }}
      >
        Add
      </button>
      <button
        onClick={() => localStorage.setItem("data", JSON.stringify(data))}
      >
        Save
      </button>
      <button onClick={() => localStorage.clear()}>Remove dictionary</button>
      <CreateItemsContainer
        data={data}
        onChangeProp={(language, index, value) => {
          const mutatedData = data;
          mutatedData[language][index].originalWord = value;
          setData(mutatedData);
        }}
      />
    </div>
  );
};
