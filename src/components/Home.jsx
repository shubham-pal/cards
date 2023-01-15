import React from 'react'
import Category from './Category'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout;

const data = [
  {
    categoryName: 'Music',
    data: [
      {
        name: 'Random Video',
        videoUrl: 'https://www.youtube.com/embed/An_DFdNow9o'
      },
      {
        name: 'Random Video',
        videoUrl: 'https://www.youtube.com/embed/An_DFdNow9o'
      },
      {
        name: 'Random Video',
        videoUrl: 'https://www.youtube.com/embed/An_DFdNow9o'
      },
      {
        name: 'Random Video',
        videoUrl: 'https://www.youtube.com/embed/An_DFdNow9o'
      }
    ]
  },
  {
    categoryName: "education",
    data: [
      {
        name: 'Educational Video',
        videoUrl: 'https://www.youtube.com/embed?v=b0IZo2Aho9Y'
      },
      {
        name: 'Educational Video',
        videoUrl: 'https://www.youtube.com/embed?v=b0IZo2Aho9Y'
      },
      {
        name: 'Educational Video',
        videoUrl: 'https://www.youtube.com/embed?v=b0IZo2Aho9Y'
      },
      {
        name: 'Educational Video',
        videoUrl: 'https://www.youtube.com/embed?v=b0IZo2Aho9Y'
      }
    ]
  },
  {
    categoryName: "think",
    data: [
      {
        name: 'Educational Video',
        videoUrl: 'https://www.youtube.com/embed?v=b0IZo2Aho9Y'
      },
      {
        name: 'Educational Video',
        videoUrl: 'https://www.youtube.com/embed?v=b0IZo2Aho9Y'
      },
      {
        name: 'Educational Video',
        videoUrl: 'https://www.youtube.com/embed?v=b0IZo2Aho9Y'
      },
      {
        name: 'Educational Video',
        videoUrl: 'https://www.youtube.com/embed?v=b0IZo2Aho9Y'
      }
    ]
  }
]

const Home = () => {
  return (
    <Layout>
      <Header>
        <span style={{ color: 'whitesmoke', fontSize: '25px', fontWeight: 'bold' }}>Convin</span>
      </Header>
      <Content>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          gap: '15px',
          minHeight: "280px",
          paddingTop: "24px"
        }}>
          {data.map(category =>
            (<Category name={category.categoryName} data={category.data} />)
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2023 Created by Shubham</Footer>
    </Layout>
  )
}

export default Home
