import React, { useEffect, useState } from "react";
import Category from "./Category";
import { Layout, Spin } from "antd";
const { Header, Content, Footer } = Layout;

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setTimeout(() => {
          setShowLoader(false);
        }, 3000);
      })
      .catch((err) => console.log("unable to get categories", err));
  });

  return (
    <Layout>
      <Header>
        <span
          style={{ color: "whitesmoke", fontSize: "25px", fontWeight: "bold" }}
        >
          Convin
        </span>
      </Header>
      <Content>
        {showLoader ? (
          <div style={{ height: '88vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spin size="large" tip="Loading" />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: "15px",
              minHeight: "280px",
              paddingTop: "24px",
            }}
          >
            {categories.map((category) => (
              <Category name={category.categoryName} data={category.data} />
            ))}
          </div>
        )}
      </Content>
      <Footer style={{ textAlign: "center" }}>©2023 Created by Shubham</Footer>
    </Layout>
  );
};

export default Home;
