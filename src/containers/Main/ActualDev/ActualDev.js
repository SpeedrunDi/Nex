import React from 'react'
import './ActualDev.css'

const cards = [
  {
    title: 'Введение в проект',
    description: 'Изучение ниши и определение что нужно для клиента и как закрыть вашу потребность',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<path opacity="0.2" d="M18 31.5C25.4558 31.5 31.5 25.4558 31.5 18C31.5 10.5442 25.4558 4.5 18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4558 10.5442 31.5 18 31.5Z" fill="#27AE60"/>
<path d="M18 31.5C25.4558 31.5 31.5 25.4558 31.5 18C31.5 10.5442 25.4558 4.5 18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4558 10.5442 31.5 18 31.5Z" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.875 16.875H18V24.75H19.125" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.4375 11.8125C18.4375 12.0541 18.2416 12.25 18 12.25C17.7584 12.25 17.5625 12.0541 17.5625 11.8125C17.5625 11.5709 17.7584 11.375 18 11.375C18.2416 11.375 18.4375 11.5709 18.4375 11.8125Z" fill="#27AE60" stroke="#27AE60" stroke-width="2.5"/>
</svg>`,
  },
  {
    title: 'Дизайн и разработки',
    description: 'Наша команда работает над тем чтобы максимально улучшить и развить IT решение для вашего бизнеса',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path opacity="0.2" d="M4.5 11.25L18 19.125L31.5 11.25L18 3.375L4.5 11.25Z" fill="#27AE60"/>
  <path d="M4.5 24.75L18 32.625L31.5 24.75" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.5 18L18 25.875L31.5 18" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.5 11.25L18 19.125L31.5 11.25L18 3.375L4.5 11.25Z" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  },
  {
    title: 'Доставка и отзывы клиентов',
    description: 'Вы получаучаете продукт и оставляется обратную связь',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path opacity="0.2" d="M4.65579 10.493C4.55376 10.6661 4.49996 10.8633 4.5 11.0642V24.9358C4.5 25.1354 4.55311 25.3315 4.65389 25.5038C4.75467 25.6761 4.89947 25.8185 5.07346 25.9163L17.4485 32.8773C17.6168 32.972 17.8068 33.0218 18 33.0218L18.0015 33.0218L18.1335 18L4.65581 10.4931L4.65579 10.493Z" fill="#27AE60"/>
  <path d="M31.5 24.9358V11.0642C31.5 10.8646 31.4469 10.6686 31.3461 10.4963C31.2453 10.3239 31.1005 10.1816 30.9265 10.0837L18.5515 3.12275C18.3832 3.02803 18.1932 2.97827 18 2.97827C17.8068 2.97827 17.6168 3.02803 17.4485 3.12275L5.07346 10.0837C4.89947 10.1816 4.75467 10.3239 4.65389 10.4963C4.55311 10.6686 4.5 10.8646 4.5 11.0642V24.9358C4.5 25.1354 4.55311 25.3314 4.65389 25.5038C4.75467 25.6761 4.89947 25.8185 5.07346 25.9163L17.4485 32.8773C17.6168 32.972 17.8068 33.0217 18 33.0217C18.1932 33.0217 18.3832 32.972 18.5515 32.8773L30.9265 25.9163C31.1005 25.8185 31.2453 25.6761 31.3461 25.5038C31.4469 25.3314 31.5 25.1354 31.5 24.9358Z" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.8937 21.4469V14.1344L11.25 6.60938" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M31.3448 10.4944L18.1334 18L4.65576 10.493" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.1335 18L18.0015 33.0217" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  },
]

const ActualDev = () => (
  <div className="actual-dev">
    <div className="container actual-dev-con">
      <h2>Актуальный набор инструментов для развития вашего бизнеса</h2>
      <div className="actual-dev-cards">
        {cards.map(card => (
          <div key={card.title} className="actual-dev-card">
            <div className="actual-dev-card-svg" dangerouslySetInnerHTML={{ __html: card.icon }} />
            <div>
              <h5 className="actual-dev-card-title">{card.title}</h5>
              <p className="actual-dev-card-description">{card.description}</p>
              <p className="actual-dev-card-btn">
                Узнать больше{' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M11.5686 11.6622L13.8607 9.3701C14.1325 9.09827 14.1325 8.65754 13.8607 8.38571L11.5686 6.09363M13.6568 8.87791L3.9118 8.87791"
                    stroke="#4CAF4F"
                    strokeWidth="1.0441"
                    strokeLinecap="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default ActualDev
