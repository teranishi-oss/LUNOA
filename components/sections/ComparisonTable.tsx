import React from 'react';
import { FadeIn } from '../FadeIn';
import comparisonImage from '../../assets/comparison-table.png';

export function ComparisonTable() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <img
            src={comparisonImage}
            alt="普通の整体と卒業型美容整体LUNOAの比較"
            className="w-full h-auto"
          />
        </FadeIn>
      </div>
    </section>
  );
}
