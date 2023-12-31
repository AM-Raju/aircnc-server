import React, { useEffect, useState, CSSProperties } from "react";
import Container from "../shared/Container";
import Card from "./Card";

import Loader from "../shared/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../heading/Heading";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log("category", category);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllRooms()
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }

        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, [category]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="min-h-[calc(100vh-300px)] flex items-center justify-center">
          <Heading
            title="No room available in this category"
            subtitle="Please select other categories"
            center={true}
          ></Heading>
        </div>
      )}
    </Container>
  );
};

export default Rooms;
