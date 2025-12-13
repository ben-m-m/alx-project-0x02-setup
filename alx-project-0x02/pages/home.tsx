
import React from "react";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card
        title="Welcome"
        content="This is a reusable card component built with React and TypeScript."
      />

      <Card
        title="About Us"
        content="We focus on building scalable and maintainable frontend applications."
      />

      <Card
        title="Our Mission"
        content="To deliver clean, efficient, and user-friendly web solutions."
      />
    </div>
  );
};

export default Home;
