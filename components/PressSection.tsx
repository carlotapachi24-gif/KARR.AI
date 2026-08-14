import React from 'react';
import { pressItems } from '../lib/press';
import PressCard from './PressCard';

const PressSection: React.FC = () => {
  return (
    <section className="px-4 pb-28 sm:px-6 lg:pb-36" aria-label="Apariciones en medios">
      <div className="mx-auto max-w-7xl space-y-6">
        {pressItems.map((item, index) => (
          <PressCard key={item.id} item={item} featured={index === 0} />
        ))}
      </div>
    </section>
  );
};

export default PressSection;
