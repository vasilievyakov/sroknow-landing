import './App.css';
import { Hero } from './features/landing/Hero';
import { Problem } from './features/landing/Problem';
import { Solution } from './features/landing/Solution';
import { HowItWorks } from './features/landing/HowItWorks';
import { Security } from './features/landing/Security';
import { Proof } from './features/landing/Proof';
import { WhyNow } from './features/landing/WhyNow';
import { FinalCTA } from './features/landing/FinalCTA';
import { FAQ } from './features/landing/FAQ';
import { PageShell } from './components/layout/PageShell';

function App() {
  return (
    <PageShell>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Security />
      <Proof />
      <WhyNow />
      <FinalCTA />
      <FAQ />
    </PageShell>
  );
}

export default App;
