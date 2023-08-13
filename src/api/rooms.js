// Add a room

export const addRoom = async (roomData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(roomData),
  });

  const data = await response.json();
  return data;
};

// get all rooms data
export const getAllRooms = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`);

  const data = await response.json();
  return data;
};

// Get single room data
export const getRoom = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`);
  const data = await response.json();
  return data;
};

// Get filtered room for host
// Note: We didn't use this code because we use axiosSecure to send authorization header. And we will do it on MyListing.jsx page.
/* export const getRooms = async (email) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${email}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
  const data = await response.json();
  return data;
}; */

// Delete Room
export const deleteRoom = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
    method: "DELETE",
    headers: { "content-type": "application.json" },
  });
  const data = await response.json();
  return data;
};
