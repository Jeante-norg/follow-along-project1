import { useEffect, useState } from "react";
import Card from "../components/ProductCard/Card";
import axios from "axios";

function HomePage() {
  const [data, setdata] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/product/get-products"
      );
      setdata(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    console.log("Fetching products");
    fetchProduct();
  }, []);

  return (
    <div>
      <h1 className="text-center">Home Page for Follow along</h1>

      <div className="grid grid-cols-3">
        {data?.map((ele, index) => (
          <div
            key={ele.id || index}
            style={{ margin: "auto" }}
            className="border border-white"
          >
            <Card
              title={ele.title}
              image={ele.images[0] || "https://via.placeholder.com/150"}
              Index={index}
              description={ele.description}
              originalPrice={ele.originalPrice}
              discountedPrice={ele.discountedPrice}
              rating={ele.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
