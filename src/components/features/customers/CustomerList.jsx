"use client";
import React from "react";
import Main from "@/components/layout/Main";
import useSWR from "swr";
import { Loading } from "@/components/ui";

const CustomerList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/users");

  if (isLoading) return <Loading />;
  if (error) return <p>Lỗi khi load customers</p>;

  return (
    <Main
      title={"Customers"}
      desc={"Manage customers and view details."}
      data={data?.data || []}
    />
  );
};

export default CustomerList;
