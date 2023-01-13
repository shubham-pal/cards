import React, { useState } from "react";
import { Card, Button } from "antd";
import DetailCard from "./DetailCard";
import { PlusOutlined } from '@ant-design/icons';

const Category = ({ name, data }) => {
  const [cards, setCards] = useState(data);

  const deleteCard = (cardIndex) => {
    const newCards = cards.filter((_, index) => index !== cardIndex);
    setCards(newCards);
  }

  return (
    <Card
      title={name}
      style={{ width: 400 }}
      hoverable
      actions={[
        <>
          <Button type="primary"><PlusOutlined /> Add new card</Button>
        </>,
      ]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {cards.map((video, index) => {
          return <DetailCard key={index} index={index} video={video} deleteCard={deleteCard} />;
        })}
      </div>
    </Card>
  );
};

export default Category;
