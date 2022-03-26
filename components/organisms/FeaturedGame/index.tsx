import { useState, useEffect, useCallback } from "react";
import GameItem from "../../molecules/GameItem";
import { getFeatureGame } from "../../../services/player";
import { GameItemTypes } from "../../../services/data-types";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeatureGame();
    setGameList(data);
  }, [getFeatureGame]);

  useEffect(() => {
    getFeatureGameList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes, i) => (
            <GameItem
              key={`game-item-${i}`}
              thumbnail={`${API_IMG}/${item.thumbnail}`}
              title={item.name}
              id={item._id}
              category={item.category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
