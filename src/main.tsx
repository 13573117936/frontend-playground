import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes.tsx";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import Theme from "./theme/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: Theme.color_6,
          borderRadius: 2,
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
