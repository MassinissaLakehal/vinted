import { useState, useEffect } from "react";
import axios from "axios";
import Offer from "./Offer";

import bannerWide from "../images/bannerWide.jpg";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Page en cours de chargement</div>
  ) : (
    <div>
      <img id="banner" src={bannerWide} alt="" />
      {data.offers.map((offer, index) => {
        return <Offer offer={offer} key={offer.id} />;
      })}
    </div>
  );
};

export default Home;
