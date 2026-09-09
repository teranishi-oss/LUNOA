import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getStoreBySlug } from '../data/stores';
import { LuxuryHero } from '../components/sections/LuxuryHero';
import { Features } from '../components/Features';
import { Problems } from '../components/Problems';
import { Menu } from '../components/Menu';
import { Results } from '../components/Results';
import { Testimonials } from '../components/Testimonials';
import { StoreAccess } from '../components/StoreAccess';
import { FAQ } from '../components/FAQ';

export function StorePage() {
  const { storeSlug } = useParams<{ storeSlug: string }>();
  const store = storeSlug ? getStoreBySlug(storeSlug) : undefined;

  useEffect(() => {
    if (store) {
      document.title = store.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', store.meta.description);
    }
    return () => {
      document.title = '美容整体LUNOA | 高級美容整体サロン';
    };
  }, [store]);

  if (!store) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <LuxuryHero store={store} />
      <Features />
      <Problems />
      <Menu />
      <Results store={store} />
      <Testimonials storeSlug={store.slug} />
      <StoreAccess store={store} />
      <FAQ />
    </>
  );
}
