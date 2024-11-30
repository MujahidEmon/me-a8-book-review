import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getItem } from "../../Utils/LocalStorage";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReadPage = () => {
  const [readBooks, setReadBooks] = useState([]);

  // Load readBooks data from local storage
  useEffect(() => {
    const readBooks = getItem()
    setReadBooks(readBooks)
  }, []);

  // Prepare data for the bar chart
  const data = {
    labels: readBooks.map((book) => book.bookName), // Book names
    datasets: [
      {
        label: "Total Pages",
        data: readBooks.map((book) => book.totalPages), // Total pages
        backgroundColor: "rgb(223,255,0)",
       
        
        borderRadius: 5, // Add rounded corners for bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.label}: ${tooltipItem.raw} Pages`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#333" },
        title: {
          display: true,
          text: "Books",
          color: "#666",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Total Pages",
          color: "#666",
        },
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Pages to Read</h1>
      {readBooks.length > 0 ? (
        <div className="w-full max-w-3xl mx-auto">
          <Bar data={data} options={options} />
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No books in the Read list yet!
        </p>
      )}
    </div>
  );
};

export default ReadPage;
