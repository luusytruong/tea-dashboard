"use client";

import { Loading } from "@/components/ui";
import useSWR from "swr";

const BlogDetail = ({ id }) => {
  const { data, error, isLoading, mutate } = useSWR(`/api/blogs/${id}`);

  if (isLoading) return <Loading />;
  if (error) return <p>Lỗi khi load blog</p>;

  return (
    <div>
      <h1>Blog Detail {id}</h1>
    </div>
  );
};

export default BlogDetail;
