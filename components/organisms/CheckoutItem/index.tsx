import { useEffect, useState } from "react";

export default function CheckoutItem() {
  const [dataItem, setDataItem] = useState({
    thumbnail: "img/Thumbnail-3.png",
    name: "",
    category: {
      name: "",
    },
  });

  const IMG = process.env.NEXT_PUBLIC_IMG;
  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-item");
    const dataItemLocal = JSON.parse(dataFromLocal!);
    setDataItem(dataItemLocal);
  }, []);

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img
            src={`${IMG}/${dataItem.thumbnail}`}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">{dataItem.name}</p>
        <p className="color-palette-2 m-0">{dataItem.category.name}</p>
      </div>
    </div>
  );
}
