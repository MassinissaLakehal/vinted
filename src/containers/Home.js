import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        //console.log(response.data);
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
      <div className="offers">
        {data.offers.map((offer, index) => {
          return (
            <Link key={offer._id} to={`/offer/${offer._id}`}>
              <div className="offer">
                <p>{offer.owner.account.username}</p>
                <img src={offer.product_image.secure_url} alt="" />
                <p>{offer.product_price} €</p>
              </div>
            </Link>
          );
          //<Offer offer={offer} key={offer._id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
