import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import './Reviews.css'

const reviews = [
  {
    author: 'John Smith',
    comment:
      '"We have been working with Positivus for the past year and have seen a significant increase in website ' +
      'traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the ' +
      'success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    author: 'Tom Smith',
    comment:
      '"We have been working with Positivus for the past year and have seen a significant increase in website ' +
      'traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about ' +
      'the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    author: 'Sam Smith',
    comment:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic ' +
      'and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success ' +
      'and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success ' +
      'and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success ' +
      'of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
]

const Reviews = () => (
  <div className="reviews">
    <div className="container reviews_con">
      <h3 className="section-title">Отзывы наших клиентов</h3>
      <div className="reviews_block">
        <Swiper
          grabCursor
          slidesPerView={1}
          spaceBetween={30}
          freeMode
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {reviews?.map(item => (
            <SwiperSlide key={item.comment}>
              <div className="review">
                <div className="review-comment">
                  <p>{item.comment}</p>
                </div>
                <p className="review-author">{item.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
)

export default Reviews
