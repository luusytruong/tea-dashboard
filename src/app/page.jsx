import Main from "@/component/layout/Main";
import { fetchGet } from "@/utils/fetch";

const columns = [
  {
    key: "avatar",
    label: "",
    img: true,
  },
  {
    key: "full_name",
    label: "Full name",
    mobile: true,
  },
  {
    key: "role",
    label: "Role",
    mark: true,
    mobile: true,
  },
  {
    key: "phone",
    label: "Phone",
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

const data = await fetchGet("user/list");

export default function Home() {
  return (
    <Main
      title={"Customers"}
      desc={"Maganer customers and view details."}
      data={data}
      columns={columns}
    />
  );
}
