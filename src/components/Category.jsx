import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "antd";
import DetailCard from "./DetailCard";
import Spinner from "./Spinner";
import { PlusOutlined } from "@ant-design/icons";

const Category = ({ name, id }) => {
  const [cards, setCards] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [alert, setAlert] = useState({ visible: false, type: 'success', message: '' });

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${id}/videos`)
      .then((res) => res.json())
      .then((json) => {
        setCards(json);
        setTimeout(() => {
          setShowSpinner(false);
        }, 2000);
      });
  }, [id]);

  const deleteCard = (video) => {
    fetch(`http://localhost:3000/videos/${video.id}`, { method: 'DELETE' })
      .then(() => {
        setAlert({
          visible: true,
          type: 'success',
          message: `${video.name} deleted successfully!`
        });
        const newCards = cards.filter((card) => card.id !== video.id);
        setCards(newCards);
        setTimeout(() => {
          setAlert({
            visible: false,
          });
        }, 7000);
      })
      .catch((err) => console.log('failure in deleting video card', err));
  };

  return (
    <Card
      title={name}
      style={{ width: 400 }}
      hoverable
      actions={[
        <>
          <Button type="primary">
            <PlusOutlined /> Add new card
          </Button>
        </>
      ]}
    >
      {showSpinner ? (
        <Spinner />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {alert.visible && <Alert type={alert.type} message={alert.message} closable />}
          {cards.map((video) => {
            return (
              <DetailCard
                key={video.id}
                video={video}
                deleteCard={deleteCard}
              />
            );
          })}
        </div>
      )}
    </Card>
  );
};

export default Category;
