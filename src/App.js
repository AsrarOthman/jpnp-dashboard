import React, { useState } from "react";
import DataFetcher from "./DataFetcher";
import Table from "./Table";

const App = () => {
  const [data, setData] = useState([]);

  const handleDataFetched = (fetchedData) => {
    setData(fetchedData);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <DataFetcher onDataFetched={handleDataFetched} />
      <Table data={data} />
    </div>
  );
};

export default App;
