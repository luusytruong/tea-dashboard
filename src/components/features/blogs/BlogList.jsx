"use client";

import useSWR from "swr";
import Main from "@/components/layout/Main";
import { Loading } from "@/components/ui";

const BlogList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/blogs");

  if (isLoading) return <Loading />;
  if (error) return <p>Lỗi khi load blogs</p>;

  return (
    <Main
      title={"Blogs"}
      desc={"Manage blogs and view details."}
      data={data?.data || []}
    />
  );
};

export default BlogList;
