import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Sales</th>
          <th>Month</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.sales}</td>
            <td>{row.month}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
