import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  HistoryTransactionTypes,
  TopUpCategoriesTypes,
} from "../../../../services/data-types";
import { getMemberOverview } from "../../../../services/player";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverViewContent() {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);

  const IMG = process.env.NEXT_PUBLIC_IMG;

  const getMemberOverviewAPI = useCallback(async () => {
    const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      setCategory(response.data.count);
      setData(response.data.data);
    }
  }, []);

  useEffect(() => {
    getMemberOverviewAPI();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {category.map((item: TopUpCategoriesTypes, i) => (
                <Category
                  key={`category-${i}`}
                  icon={`ic-${item.name.toLowerCase()}`}
                  nominal={item.value}
                >
                  Game <br /> {item.name}
                </Category>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data: HistoryTransactionTypes, i) => (
                  <TableRow
                    title={data.historyVoucherTopup.gameName}
                    categori={data.historyVoucherTopup.category}
                    item={`${data.historyVoucherTopup.coinQuantity} ${data.historyVoucherTopup.coinName}`}
                    price={data.value}
                    status={data.status}
                    image={`${IMG}/${data.historyVoucherTopup.thumbnail}`}
                    key={`tablerow-${i}`}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
