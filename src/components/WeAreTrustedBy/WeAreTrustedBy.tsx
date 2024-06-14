import { partnersData } from '../../utils/constants';

import './WeAreTrustedBy.css';

function WeAreTrustedBy() {
  return (
    <section className="wearetrustedby__general">
      <h2 className="wearetrustedby__title">Наши партнеры</h2>
      <div className="wearetrustedby__logos">
        {partnersData.map((company, index) => (
          <div key={index} className="wearetrustedby__logo_elem">
            <img
              src={company.src}
              alt={company.name}
              title={company.text}
              className="wearetrustedby__logo_icon"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeAreTrustedBy;
