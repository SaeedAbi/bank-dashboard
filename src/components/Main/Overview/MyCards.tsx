import * as React from "react";
import Card from "@/components/Main/Overview/_Card";

function MyCards() {
  return (
    <div>
      <div className="mb-[20px] mt-[25px] flex justify-between overflow-auto">
        <span className="text-3xl font-semibold text-primary">my cards</span>
        <button className="text-base font-semibold text-primary">
          see all
        </button>
      </div>
      <div className="flex flex-wrap gap-[30px]">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default MyCards;
