import Main from "@/component/layout/Main";
import { fetchGet } from "@/utils/fetch";
import React from "react";
const columns = [
  {
    key: "image",
    img: true,
  },
  {
    key: "title",
    label: "Title",
    mobile: true,
  },
  {
    key: "category",
    label: "Category",
    mobile: true,
    mark: true,
  },
  {
    key: "created_at",
    label: "Created",
    date: true,
  },
  {
    action: true,
    mobile: true,
  },
];
const data = await fetchGet("blog/list");

const BlogPage = () => {
  return (
    <Main
      title={"Blog"}
      desc={"Maganer blog and view details."}
      data={data}
      columns={columns}
    />
  );
};

export default BlogPage;
