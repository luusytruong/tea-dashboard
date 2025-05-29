"use client";
import React from "react";
import Main from "@/components/layout/Main";
import useSWR from "swr";
import { Loading } from "@/components/ui";

const ProductList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/products");

  if (isLoading) return <Loading />;
  if (error) return <p>Lỗi khi load products</p>;

  return (
    <Main
      title={"Products"}
      desc={"Manage products and view details."}
      data={data?.data || []}
    />
  );
};

export default ProductList;
