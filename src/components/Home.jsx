import React, { useEffect, useState } from "react";
import Category from "./Category";
import Spinner from "./Spinner";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setTimeout(() => {
          setShowSpinner(false);
        }, 1500);
      })
      .catch((err) => console.log("unable to get categories", err));
  }, []);

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
        {showSpinner ? (
          <Spinner />
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
              <Category key={category.id} name={category.name} id={category.id} />
            ))}
          </div>
        )}
      </Content>
      <Footer style={{ textAlign: "center" }}>©2023 Created by Shubham</Footer>
    </Layout>
  );
};

export default Home;
