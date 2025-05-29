"use client";
import React from "react";
import Main from "@/components/layout/Main";
import useSWR from "swr";
import { Loading } from "@/components/ui";

const OrderList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/orders");

  if (isLoading) return <Loading />;
  if (error) return <p>Lỗi khi load blogs</p>;

  return (
    <Main
      title={"Orders"}
      desc={"Manage orders and view details."}
      data={data?.data || []}
    />
  );
};

export default OrderList;
