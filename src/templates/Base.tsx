import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { WhyUs } from './WhyUs';
import { ServicesAndPricing } from './Service_and_prices';
import { Reservations } from './reservations';
import { Map } from './Map';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <ServicesAndPricing />
    <Reservations />
    <Map />
    <WhyUs />
    <Footer />
  </div>
);

export { Base };
