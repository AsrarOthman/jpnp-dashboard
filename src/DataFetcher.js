import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetcher = ({ onDataFetched }) => {
  const SPREADSHEET_ID = "1_2kDcvAaS5tIvbWbLDMMcwZMNpiAEorv38vXS_z2a-s"; // Gantikan dengan Spreadsheet ID anda
  const API_KEY = "AIzaSyDXvVBBpt50wgt0qBomxI4Wohrjg5OoqHk"; // Gantikan dengan API Key anda
  const SHEET_NAME = "Sheet1"; // Nama Sheet anda

  const fetchData = async () => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
    const response = await axios.get(url);
    const rows = response.data.values;

    // Format data
    const formattedData = rows.slice(1).map((row) => ({
      name: row[0],
      sales: parseInt(row[1], 10),
      month: row[2],
    }));

    onDataFetched(formattedData); // Hantar data ke parent component
  };

  useEffect(() => {
    fetchData(); // Ambil data pertama kali semasa load
    const intervalId = setInterval(fetchData, 60000); // Memuat semula data setiap 60 saat

    return () => clearInterval(intervalId); // Bersihkan interval semasa komponen dibuang
  }, [onDataFetched]);

  return null;
};

export default DataFetcher;
