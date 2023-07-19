import React from "react";
import Calender from "../rooms/Calender";
import Button from "../buttons/Button";

const RoomReservation = () => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-natural-200 overflow-hidden col-span-3">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$200</div>
        <div className="font-light text-neutral-500">night</div>
      </div>
      <hr />
      <Calender></Calender>
      <div className="p-4">
        <Button label="Reserve"></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold">
        <div>Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
