import React from 'react';
import Banner from '../../components/Banner/index';
import Features from '../../components/Features/index';
import { features } from '../../datas/dataFeatures';

import './Home.scss';



const Home = () => {
  return (
      <main>
      <Banner />

      <section className="features">
				{features.map((feature, index) => (
					<Features
						key={index}
						img={feature.img}
						alt={feature.alt}
						title={feature.title}
						text={feature.text}
					/>
				))}
			</section>

      </main>
  
  );
};
export default Home;
