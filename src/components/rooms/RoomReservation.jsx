import React, { useContext, useState } from "react";
import Calender from "../rooms/Calender";
import Button from "../buttons/Button";
import { AuthContext } from "../../providers/AuthProvider";
import { formatDistance } from "date-fns";
import BookingModal from "../modal/BookingModal";
import { addBooking, updateStatus } from "../../api/booking";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RoomReservation = ({ roomData }) => {
  const { user, role } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const closeModal = () => {
    setIsOpen(false);
  };
  const totalPrice =
    parseFloat(formatDistance(new Date(roomData.to), new Date(roomData.from)).split(" ")[0]) *
    roomData?.price;

  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: "selection",
  });
  const [bookingInfo, setBookingInfo] = useState({
    guest: { name: user?.displayName, email: user?.email, image: user?.photoURL },
    room: roomData?.title,
    host: roomData?.host?.email,
    location: roomData?.location,
    price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    roomId: roomData?._id,
    image: roomData?.image,
  });

  const handleSelect = (range) => {
    setValue({ ...value });
  };

  /*   const modalHandler = () => {
    addBooking(bookingInfo)
      .then((data) => {
        console.log("bookingInfo", data);
        updateStatus(roomData._id, true).then((data) => {
          toast.success("Booking successful");
          navigate("/dashboard/my-bookings");
          closeModal();
        });
      })
      .catch((error) => {
        console.log(error.message);
        closeModal();
      });
    console.log(bookingInfo);
  }; */

  return (
    <div className="bg-white rounded-xl border-[1px] border-natural-200 overflow-hidden col-span-3">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${roomData?.price}</div>
        <div className="font-light text-neutral-500">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender handleSelect={handleSelect} value={value}></Calender>
      </div>
      <div className="p-4">
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          disabled={roomData?.host?.email === user?.email || roomData?.booked}
          label="Reserve"
        ></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
      <BookingModal
        bookingInfo={bookingInfo}
        isOpen={isOpen}
        closeModal={closeModal}
      ></BookingModal>
    </div>
  );
};

export default RoomReservation;
