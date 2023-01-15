import React from "react";
import { Spin } from 'antd';

const Spinner = () => {
  return (
    <div
      style={{
        height: "88vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin size="large" tip="Loading" />
    </div>
  );
};

export default Spinner;
