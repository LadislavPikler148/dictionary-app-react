import React from "react";

export const CreateItemsContainer = ({ data, onChangeProp }) => {
  if (data) {
    console.log(data);
    const languages = Object.keys(data);
    return languages.map(language => {
      return (
        <div className="card" key={language}>
          <h1>{language}</h1>
          <table>
            <thead>
              <tr>
                <th>Original word</th>
                <th>Translated word</th>
              </tr>
            </thead>
            <tbody>
              {data[language].map(({ originalWord, translatedWord }, ind) => {
                return (
                  <tr key={originalWord}>
                    <td>
                      <input
                        value={originalWord}
                        onChange={e => {
                          data[language].forEach((item, index) => {
                            if (ind === index) {
                              onChangeProp(language, index, e.target.value);
                            }
                          });
                        }}
                      />
                    </td>
                    <td>
                      <input value={translatedWord} readOnly />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    });
  }
  return null;
};
