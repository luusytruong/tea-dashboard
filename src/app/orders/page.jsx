import Main from "@/component/layout/Main";
import { fetchGet } from "@/utils/fetch";
import React from "react";

const columns = [
  {
    key: "slug",
    label: "Code",
    mobile: true,
  },
  {
    key: "total_price",
    label: "Total",
    price: true,
    mobile: true,
  },
  {
    key: "status",
    label: "Status",
    mark: true,
    mobile: true,
  },
  {
    key: "created_at",
    label: "Created at",
    date: true,
  },
  {
    action: true,
    mobile: true,
  },
];

const data = await fetchGet("order/all");

const OrderPage = () => {
  return (
    <Main
      title={"Orders"}
      desc={"Maganer orders and view details."}
      data={data}
      columns={columns}
    />
  );
};

export default OrderPage;
