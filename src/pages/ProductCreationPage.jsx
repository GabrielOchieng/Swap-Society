// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCreateProductMutation } from "../redux/slices/productApiSlice"; // Import the mutation

// const ProductCreationPage = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState(0);
//   const [location, setLocation] = useState("");
//   const [category, setCategory] = useState("");
//   const [images, setImages] = useState([]);
//   const navigate = useNavigate();

//   const [createProduct, { isLoading, error }] = useCreateProductMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await createProduct({
//         title,
//         description,
//         price,
//         location,
//         category,
//         images: Array.from(images),
//       }); // Use the mutation
//       console.log("RESPONSE", response);

//       // navigate("/products"); // Redirect after successful creation
//     } catch (err) {
//       console.log(err);
//       // Handle errors appropriately (e.g., display error message to user)
//     }
//   };

//   const handleImageChange = (e) => {
//     setImages(e.target.files);
//   };

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../redux/slices/productApiSlice"; // Import the mutation

const ProductCreationPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]); // Array to store selected images
  const navigate = useNavigate();

  const [createProduct, { isLoading, error }] = useCreateProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data for the mutation (including images)
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("category", category);

    // Append each selected image to the formData
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const response = await createProduct(formData);
      console.log("RESPONSE", response);

      // navigate("/products"); // Redirect after successful creation
    } catch (err) {
      console.log(err);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  const handleImageChange = (e) => {
    // setImages(e.target.files); // Update the images state with selected files
    setImages([...images, ...e.target.files]);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Images
          </label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default ProductCreationPage;
