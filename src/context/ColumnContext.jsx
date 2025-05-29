"use client";

import fetcher, { fetchPOST } from "@/lib/fetcher";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";

const ColumnContext = createContext();

export const ColumnProvider = ({ children }) => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/site/column",
    fetcher,
    {
      refreshInterval: 0,
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
    }
  );
  const [columns, setColumns] = useState({});
  const [isInitialized, setIsInitialized] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const handleSave = async () => {
    const result = await fetchPOST("/api/site/column", columns);
    if (result?.status) {
      toast.success(result?.message);
    } else {
      toast.error(result?.message || "Sửa thất bại!");
    }
  };

  const sortColumns = (arr = []) => {
    arr.sort((a, b) => {
      if (a.img && !b.img) return -1;
      if (!a.img && b.img) return 1;
      return 0;
    });
  };

  useEffect(() => {
    if (!isLoading && data?.status) {
      setColumns(data?.data);
      setIsInitialized(true);
    }
  }, [data]);

  useEffect(() => {
    if (!isInitialized || !isDirty) return;

    const timeout = setTimeout(() => {
      handleSave();
      setIsDirty(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [columns]);

  const setTableColumns = (storageKey = "", newCols = []) => {
    setColumns((prev) => ({
      ...prev,
      [storageKey]: newCols,
    }));
    setIsDirty(true);
  };

  const updateColumnVisibility = (storageKey = "", key = "", visible) => {
    setColumns((prev) => ({
      ...prev,
      [storageKey]: prev[storageKey]?.map((col) =>
        col.key === key ? { ...col, visible } : col
      ),
    }));
    setIsDirty(true);
  };

  const loadCurrentColumns = (storageKey = "", row = {}) => {
    if (!Object.keys(row).length) return [];

    if (columns[storageKey]) {
      return;
    }

    const tableColumns = Object.entries(row)?.map(([key, _]) => ({
      key,
      label: key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      price: key.includes("price"),
      date: key.includes("_at"),
      mark: ["status", "stock", "role", "category"].includes(key),
      img: ["avatar", "image"].includes(key),
      visible: true,
    }));

    sortColumns(tableColumns);
    setTableColumns(storageKey, tableColumns);
  };

  return (
    <ColumnContext.Provider
      value={{
        columns,
        loadCurrentColumns,
        updateColumnVisibility,
      }}
    >
      {children}
    </ColumnContext.Provider>
  );
};

export const useColumns = () => {
  const context = useContext(ColumnContext);
  if (!context) {
    throw new Error("useColumns must be used within a ColumnProvider");
  }
  return context;
};
