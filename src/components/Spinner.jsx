import React from "react";
import { Spin } from 'antd';

const Spinner = ({ fullHeight }) => {
  return (
    <div
      style={{
        minHeight: fullHeight ? '88vh' : 'auto',
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
