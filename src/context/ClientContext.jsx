"use client";

import { SWRConfig } from "swr";
import { ColumnProvider } from "./ColumnContext";
import { NetworkProvider } from "./NetworkContext";
import { SidebarProvider } from "./SidebarContext";
import fetcher from "@/lib/fetcher";
import { AuthProvider } from "./AuthContext";

const ClientContext = ({ children }) => {
  return (
    <NetworkProvider>
      <AuthProvider>
        <SWRConfig
          value={{
            fetcher,
            refreshInterval: 60000,
            revalidateOnReconnect: true,
            revalidateOnFocus: true,
          }}
        >
          <ColumnProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ColumnProvider>
        </SWRConfig>
      </AuthProvider>
    </NetworkProvider>
  );
};

export default ClientContext;
