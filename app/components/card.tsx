import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
interface ProsType {
  name: string;
  rollNo: number;
  batch: number;
  distanceLearning: string;
  city:string;
  
}

const CardComponent = (children: ProsType) => {
  return (
    <div className="flex flex-col   mt-4 items-center rounded-xl ">
      <Card className=" flex flex-col xl:w-[500px] lg:w-[500px] hover:scale-105 md:w-[500px] sm:w-96 xs:w-96 bg-gradient-to-br from-blue-600 to-fuchsia-500">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            Student Id Card{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl text-green-300 hover:text-black font-normal transition-all duration-1000 ease-in-out">
            Name: {children.name}
          </h1>
          <h1 className="text-2xl text-green-300 hover:text-black font-normal transition-all duration-1000 ease-in-out">
            RollNo:{children.rollNo}
          </h1>
          <h1 className="text-2xl text-green-300 hover:text-black font-normal transition-all duration-1000 ease-in-out">
            Batch:{children.batch}
          </h1>
          <h1 className="text-2xl text-green-300 hover:text-black font-normal transition-all duration-1000 ease-in-out">
            Distance Learning:{children.distanceLearning}
          </h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardComponent;
