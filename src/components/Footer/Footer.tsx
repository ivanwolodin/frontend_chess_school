import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer__general">
      <div className="footer__info">
        <div>
          <p>КОНТАКТЫ</p>
          <ul className="footer__official">
            <li>ООО Шахматная Школа,</li>
            <li> 614016 г.Пермь, </li>
            <li> ул. Куйбышева 54, </li>
            <li> ИНН: 5905026580, </li>
            <li> ОГРН: 1155958015421, </li>
            <li> Тел: 239-30-06 , 8(902)632-42-93, </li>
            <li> E-mail: chessperm@yandex.ru </li>
          </ul>
        </div>
        <div>
          <p>ВРЕМЯ РАБОТЫ </p>
          <ul className="footer__working_time">
            <li>Вторник-Воскресенье </li>
            <li> 9:00 - 20:00 </li>
          </ul>
        </div>
        <div>
          <p>СОЦИАЛЬНЫЕ СЕТИ </p>

          <ul className="footer__icons">
            <img
              className="footer__icon"
              src={require('../../assets/icons/vk.png')}
              alt="vk"
            />
            <img
              className="footer__icon"
              src={require('../../assets/icons/y.png')}
              alt="y"
            />
            <img
              className="footer__icon"
              src={require('../../assets/icons/taplink.jpg')}
              alt="taplink"
            />
          </ul>
        </div>
      </div>
      <hr></hr>
    </footer>
  );
}
