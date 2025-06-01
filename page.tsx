// Instructions: Wrap the app with LanguageProvider to enable translations

"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BestPracticesSection from "@/components/BestPracticesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhyTrustUsSection from "@/components/WhyTrustUsSection";
import SupportOptionsSection from "@/components/SupportOptionsSection";
import PartnersSection from "@/components/PartnersSection";
import PaymentMethodsSection from "@/components/PaymentMethodsSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <main className="min-h-screen">
          <Header />

          <AnimatedSection id="hero">
            <HeroSection />
          </AnimatedSection>

          <AnimatedSection id="best-practices" stagger>
            <BestPracticesSection />
          </AnimatedSection>

          <AnimatedSection id="how-we-work">
            <HowWeWorkSection />
          </AnimatedSection>

          <AnimatedSection id="why-trust-us">
            <WhyTrustUsSection />
          </AnimatedSection>

          <AnimatedSection id="support-options">
            <SupportOptionsSection />
          </AnimatedSection>

          <AnimatedSection id="partners" stagger>
            <PartnersSection />
          </AnimatedSection>

          <AnimatedSection id="payment-methods">
            <PaymentMethodsSection />
          </AnimatedSection>

          <AnimatedSection id="faq">
            <FAQSection />
          </AnimatedSection>

          <AnimatedSection id="contact">
            <ContactFormSection />
          </AnimatedSection>

          <Footer />

          {/* WhatsApp Widget */}
          <WhatsAppWidget />
        </main>
      </SmoothScrollProvider>
    </LanguageProvider>
  );
}
