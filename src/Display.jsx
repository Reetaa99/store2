import React from "react";

export default function Display({ data, header }) {
  return (
    <table>
      <thead>
        {header.map((item) => {
          return <th>{item}</th>;
        })}
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              {header.map((head) => {
                return <td>{item[head]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
