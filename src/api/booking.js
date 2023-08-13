// Add a booking

export const addBooking = async (bookingData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await response.json();
  return data;
};

// update room status
export const updateStatus = async (id, status) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/status/${id}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ status }),
  });
  const data = await response.json();
  return data;
};

// Get all booking for a user by email
export const getBookings = async (email) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings?email=${email}`);

  const booking = await response.json();

  return booking;
};

// Get all booking for a user by email
export const getHostBookings = async (email) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/host?email=${email}`);

  const booking = await response.json();
  return booking;
};

// Delete a booking using ID
export const deleteBooking = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });

  const data = await response.json();
  console.log("Data in booking.js", data);
  return data;
};
