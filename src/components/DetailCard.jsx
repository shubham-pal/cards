import React, { useState } from "react";
import { Modal, Card } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

const DetailCard = (props) => {
  const { video, deleteCard } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardActions = [
    <EditTwoTone />,
    <DeleteTwoTone onClick={() => deleteCard(video)} />,
  ];
  return (
    <>
      <Card actions={cardActions} hoverable size="small">
        <div onClick={() => setIsModalOpen(true)}>
          <h3>{video.name}</h3>
          <p>
            {video.description ? video.description : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus soluta libero ex nam rem deleniti eum laudantium
            aperiam at tempore!`}
          </p>
        </div>
      </Card>
      <Modal
        title={video.name}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        width="1000px"
        cancelText="Close"
      >
        <iframe
          height="500px"
          width="950px"
          src={video.videoUrl}
          title={video.name}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
};

export default DetailCard;
