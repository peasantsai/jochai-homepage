import { setRequestLocale } from 'next-intl/server';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Pillars } from '@/components/sections/pillars';
import { Products } from '@/components/sections/products';
import { Integrations } from '@/components/sections/integrations';
import { UseCases } from '@/components/sections/use-cases';
import { Pricing } from '@/components/sections/pricing';
import { FinalCta } from '@/components/sections/cta';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Pillars />
        <Products />
        <Integrations />
        <UseCases />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
