import React, { useState } from "react";
import { Modal, Card } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

const DetailCard = ({ video, deleteCard }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardActions = [
    <EditTwoTone />, <DeleteTwoTone onClick={() => deleteCard(video)}  />
  ];
  return (
    <>
      <Card actions={cardActions} hoverable size="small">
        <div onClick={() => setIsModalOpen(true)}>
          <h3>{video.name}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            voluptatum eum possimus quo, fuga maiores. Ducimus nihil natus
            officiis ullam!
          </p>
        </div>
      </Card>
      <Modal
        title={video.name}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        width='1000px'
        cancelText='Close'
      >
       <iframe height='500px' width='950px' src={video.videoUrl} title="Tu Hi Meri Shab Hai - Full 4K Video Song | K.K | Gangster | Emraan H, Kangna R | Hitz Music" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
      </Modal>
    </>
  );
};

export default DetailCard;
