import React from "react";
import { PieChart, Pie } from "recharts";

const Stats = () => {
  const data = [
    { name: "Group A", value: 400, fill: "#0088FE" },
    { name: "Group B", value: 300, fill: "#00C49F" },
    { name: "Group C", value: 300, fill: "#FFBB28" },
    { name: "Group D", value: 200, fill: "#FF8042" },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={80}
          outerRadius={120}
          paddingAngle={5}
          cornerRadius={10}
          isAnimationActive={true}
        />
      </PieChart>
    </div>
  );
};

export default Stats;