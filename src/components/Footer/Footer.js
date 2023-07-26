import React from 'react'
import './Footer.css'

const Footer = () => (
  <footer className="site-footer">
    <div className="container text-center">
      <div className="row">
        <div className="row-in">
          <h1>У вас остались вопросы?</h1>
          <button className="btn">
            Свяжитесь с нами <i className="bi bi-arrow-right" style={{ color: '#fff' }} />
          </button>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-4" style={{ paddingLeft: '100px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="134" height="22" fill="none">
          <path
            fill="#fff"
            d="m17.018 12.164-4.639 7.945-4.64-7.946h9.28Zm1.243-.71H6.492l5.887 10.06 5.882-10.06ZM25.084 2.281l4.64 7.946h-9.279l4.64-7.946Zm0-1.42-5.887 10.06h11.774L25.084.862Z"
          />
          <path
            fill="#4CAF4F"
            d="m.851.86 4.937 8.9 5.394-8.676L.852.861ZM12.38 1.64l5.177 8.85H7.192l5.187-8.85ZM18.89 12.422l5.183 9.093H13.46l5.268-9.093h.161ZM20.012 11.87l5.072 8.954 5.143-8.953H20.012Z"
          />
          <path
            fill="#fff"
            d="M52.514 2.297v17.525h-3.2l-7.625-11.03h-.128v11.03h-3.705V2.297h3.251l7.565 11.021h.154V2.299h3.688ZM61.496 20.078c-1.352 0-2.516-.273-3.491-.821a5.626 5.626 0 0 1-2.242-2.345c-.525-1.015-.787-2.216-.787-3.602 0-1.352.262-2.539.787-3.56a5.82 5.82 0 0 1 2.216-2.387c.959-.57 2.082-.856 3.372-.856.867 0 1.674.14 2.421.42a5.372 5.372 0 0 1 1.968 1.24c.565.554 1.004 1.25 1.318 2.088.314.833.47 1.808.47 2.927v1H56.43v-2.258h7.667c0-.525-.114-.99-.342-1.395a2.45 2.45 0 0 0-.95-.95c-.4-.234-.864-.35-1.395-.35-.553 0-1.043.128-1.471.384a2.7 2.7 0 0 0-.993 1.019c-.24.422-.362.892-.368 1.412v2.147c0 .65.12 1.212.36 1.686.245.473.59.838 1.035 1.095.445.257.973.385 1.583.385.405 0 .776-.057 1.112-.17.337-.115.625-.286.865-.514.24-.228.422-.508.547-.839l3.372.223a4.604 4.604 0 0 1-1.053 2.122c-.525.599-1.204 1.067-2.036 1.403-.828.33-1.783.496-2.867.496ZM72.718 6.678l2.413 4.595 2.473-4.595h3.74l-3.808 6.572 3.91 6.572h-3.722l-2.593-4.544-2.55 4.544h-3.765l3.902-6.572-3.765-6.572h3.765ZM88.976 20.078c-1.346 0-2.504-.285-3.474-.855a5.784 5.784 0 0 1-2.225-2.396c-.513-1.021-.77-2.197-.77-3.526 0-1.346.26-2.527.779-3.542a5.784 5.784 0 0 1 2.233-2.387c.964-.577 2.11-.865 3.44-.865 1.147 0 2.15.209 3.012.625.861.416 1.543 1.001 2.045 1.754.502.753.779 1.637.83 2.653h-3.44c-.097-.656-.353-1.184-.77-1.583-.41-.405-.95-.608-1.617-.608-.565 0-1.058.154-1.48.462-.417.303-.742.745-.976 1.326-.234.582-.35 1.287-.35 2.114 0 .839.113 1.552.342 2.14.233.587.561 1.035.984 1.343.422.308.915.462 1.48.462.416 0 .79-.086 1.12-.257.337-.171.614-.42.83-.744a2.85 2.85 0 0 0 .437-1.19h3.44c-.057 1.004-.33 1.888-.821 2.653-.485.759-1.156 1.352-2.011 1.78-.856.427-1.868.641-3.038.641ZM103.17 20.078c-1.352 0-2.516-.273-3.492-.821a5.626 5.626 0 0 1-2.241-2.345c-.525-1.015-.788-2.216-.788-3.602 0-1.352.263-2.539.788-3.56a5.82 5.82 0 0 1 2.216-2.387c.958-.57 2.082-.856 3.371-.856.867 0 1.674.14 2.422.42a5.371 5.371 0 0 1 1.968 1.24c.565.554 1.004 1.25 1.318 2.088.313.833.47 1.808.47 2.927v1H98.104v-2.258h7.667c0-.525-.114-.99-.342-1.395a2.458 2.458 0 0 0-.95-.95c-.399-.234-.864-.35-1.395-.35-.553 0-1.044.128-1.472.384-.422.251-.753.59-.992 1.019-.24.422-.363.892-.368 1.412v2.147c0 .65.12 1.212.359 1.686a2.63 2.63 0 0 0 1.036 1.095c.444.257.972.385 1.583.385.405 0 .775-.057 1.112-.17.336-.115.625-.286.864-.514.24-.228.422-.508.548-.839l3.371.223a4.606 4.606 0 0 1-1.052 2.122c-.525.599-1.204 1.067-2.037 1.403-.827.33-1.782.496-2.866.496ZM115.226 12.223v7.599h-3.645V6.678h3.474v2.32h.154a3.67 3.67 0 0 1 1.463-1.815c.685-.45 1.515-.676 2.49-.676.913 0 1.709.2 2.388.6.678.399 1.206.969 1.583 1.71.376.736.564 1.615.564 2.636v8.369h-3.645v-7.719c.006-.804-.199-1.431-.616-1.882-.416-.456-.99-.685-1.72-.685-.49 0-.924.106-1.3.317-.371.211-.662.52-.873.924-.206.4-.311.882-.317 1.446ZM133.561 6.678v2.739h-7.915V6.678h7.915Zm-6.118-3.148h3.645v12.253c0 .336.052.599.154.787.103.183.246.311.428.385.188.074.405.111.65.111.172 0 .343-.014.514-.042.171-.035.302-.06.393-.077l.574 2.712c-.183.057-.44.123-.77.197a6.18 6.18 0 0 1-1.207.145c-.878.034-1.648-.082-2.31-.35a3.225 3.225 0 0 1-1.532-1.25c-.365-.564-.545-1.278-.539-2.139V3.53Z"
          />
        </svg>
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

      <div className="col-2" style={{ paddingRight: '40px' }}>
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
      <div className="col-2">
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
      <div className="col-2">
        <h6>Укажите ваш номер для связи:</h6>
        <div className="form-group">
          <input type="tel" className="form-control" placeholder="Введите ваш номер телефона" />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
