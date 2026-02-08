import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-doctor.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dr. Abhishek Chachan - Orthopedic Surgeon in Jaipur"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary-foreground/10 text-primary-foreground/90 border border-primary-foreground/20 backdrop-blur-sm">
            Orthopedic, Spine & Trauma Specialist
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
            Trusted Orthopedic, Spine & Trauma Specialist in Jaipur
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-10 max-w-xl">
            Restoring movement, relieving pain, and helping patients return to an active life with modern orthopedic care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+919829885908" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 py-6 text-base font-semibold shadow-medical-lg gap-2">
                <Phone className="h-5 w-5" />
                Book Appointment
              </Button>
            </a>
            <a href="tel:+919829885908" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-transparent border-2 border-white/60 text-white hover:bg-white/15 hover:border-white/80 rounded-full px-8 py-6 text-base font-semibold gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
