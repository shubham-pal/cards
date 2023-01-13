import React from 'react'
import Category from './Category'

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
    <>
      <h1>Convin</h1>
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        gap: '15px'
      }}>
        {data.map(category => 
          (<Category name={category.categoryName} data={category.data} />)
        )}
      </div>
    </>
  )
}

export default Home
