import React from "react";
import CardComponent from "@/app/components/card";

const page = () => {
  return (
    <div>
      <CardComponent
        name="Wahaj Ali"
        rollNo={136182}
        batch={2023}
        distanceLearning={"No"}
      />
      <CardComponent
        name="Zayan"
        rollNo={243578}
        batch={2023}
        distanceLearning="No"
      />
    </div>
  );
};

export default page;
