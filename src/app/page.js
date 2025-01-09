'use client'
import { useState } from "react";


// Data from the assignment
const dateArray = ['24-Apr-2024','02-May-2024','09-May-2024','31-May-2024','21-Jun-2024']

const strategyArray = [
  {
    View: "Bullish",
    Value: {
      "24-Apr-2024": [
        "Bull Call Spread",
        "Bull Put Spread",
        "Bull Put Spread",
        "Long Call",
        "Bull Put Spread",
        "Bull Call Spread",
        "Strategy1",
        "Bull Call Spread",
        "Strategy1",
        "Strategy1",
        "SpreadStrategy",
        "Bull Call Spread",
      ],
      "02-May-2024": ['Bull Call Spread','Bull Call Spread','Bull Put Spread','Long Call',
        'Long Call','Long Call','Bull Put Spread','Bull Call Spread','Strategy1','Bull Call Spread','Strategy2','Strategy1','Strategy2','Bull Call Spread'],
      "09-May-2024": [
        "Strategy Put",
        "Strategy Call",
        "Strategy Call",
        "Strategy Call",
        "Strategy Put",
      ],
      "31-May-2024": [
        "Strategy Put",
        "Strategy Call",
        "Strategy Call",
        "Strategy Call",
        "Strategy Put",
      ],
    },
  },
  {
    View: "Bearish",
    Value: {
      "24-Apr-2024": [
        "Bear Call Spread",
        "Bear Call Spread",
        "Bear Call Spread",
        "Long Put",
        "Long Put",
        "Long Put",
        "Bear Call Spread",
      ],
      "31-May-2024": ["Long Put", "Long Put", "Long Put", "Long Put", "Long Put"],
      "21-Jun-2024": [
        "Strategy3",
        "Strategy3",
        "Bear Put Spread",
        "Strategy3",
        "Long Put",
        "Long Put",
      ],
    },
  },
  // Add other views from the assignment data
];

export default function Home() {
  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const strategies =
    strategyArray.find((item) => item.View === selectedView)?.Value[
      selectedDate
    ] || [];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Slider Toggle */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        {["Bullish", "Bearish", "RangeBound", "Volatile"].map((view) => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            style={{
              padding: "10px 20px",
              margin: "0 5px",
              background: selectedView === view ? "blue" : "gray",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {view}
          </button>
        ))}
      </div>

      {/* Date Dropdown */}
      <select
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}
      >
        {dateArray.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>

      {/* Strategy Cards */}
      <div>
        {strategies.length > 0 ? (
          strategies.map((strategy, index) => {
            const count = strategies.filter((s) => s === strategy).length;
            return (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <h4>{strategy}</h4>
                <p>{count} {count === 1 ? "Strategy" : "Strategies"}</p>
              </div>
            );
          })
        ) : (
          <p>No strategies found for {selectedDate}.</p>
        )}
      </div>
    </div>
  );
}