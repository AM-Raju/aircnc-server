// Image upload to the imgbb
// Step 1:  Get image from form field. Here we get image as argument

export const imageUpload = async (image) => {
  // Step 2: create formData object just like a packet
  const formData = new FormData();
  // Step 3: Insert image into the formData object
  formData.append("image", image);
  // Step 4: Creating url with imgbb api link
  const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
  // Step 5: fetching image to imgbb and get image url
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data;
};
