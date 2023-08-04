import React from 'react'
import './Footer.css'
import Logo from '../Logo/Logo'

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="row-in">
          <h2>У вас остались вопросы?</h2>
          <button type="button" className="btn">
            Свяжитесь с нами <i className="bi bi-arrow-right" style={{ color: '#fff' }} />
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-3 col-3-top">
          <Logo />
          <p className="copyright-text">
            Copyright &copy;
            <br />
            Все права защищены
            <ul className="social-icons">
              <li>
                <a className="twitter" href="#">
                  <i className="bi bi-youtube" />
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="bi bi-instagram" />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="bi bi-telegram" />
                </a>
              </li>
            </ul>
          </p>
        </div>

        <div className="col-3">
          <h6>Компания</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/category/c-language/" target="_blank" rel="noreferrer">
                О нас
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/front-end-development/" target="_blank" rel="noreferrer">
                Курсы
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/back-end-development/" target="_blank" rel="noreferrer">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h6>Проектный офис</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/category/c-language/" target="_blank" rel="noreferrer">
                Наши проекты
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/front-end-development/" target="_blank" rel="noreferrer">
                Правила оферты
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/back-end-development/" target="_blank" rel="noreferrer">
                Связаться с нами
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
