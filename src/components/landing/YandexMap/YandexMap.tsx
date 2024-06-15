import './YandexMap.css';

export default function YandexMap() {
  return (
    <section className="yandexmap__general">
      <iframe
        className="yandexmap__map"
        title="jn"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A10d57730c23f316c15527d5d433b1da991dbbf2983f41f76b5e16365323640d9&amp;source=constructor"
        frameBorder="0"
      ></iframe>
    </section>
  );
}
