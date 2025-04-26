import Main from "@/component/layout/Main";
import { fetchGet } from "@/utils/fetch";

const columns = [
  {
    key: "image",
    img: true,
  },
  {
    key: "name",
    label: "Name",
    mobile: true,
  },
  {
    key: "price",
    label: "Price",
    price: true,
  },
  {
    key: "stock",
    label: "Stock",
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

const data = await fetchGet("product/list");

const ProductPage = () => {
  return (
    <Main
      title={"Products"}
      desc={"Maganer products and view details."}
      columns={columns}
      data={data}
    />
  );
};

export default ProductPage;
