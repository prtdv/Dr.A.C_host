import { motion } from "framer-motion";
import { Shield, Heart, Zap, TrendingUp, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted Orthopedic Expertise",
    description: "Over a decade of specialized experience in orthopedic surgery with proven outcomes.",
  },
  {
    icon: Heart,
    title: "Personalized Patient Care",
    description: "Every treatment plan is customized to your unique condition, lifestyle, and recovery goals.",
  },
  {
    icon: Zap,
    title: "Modern Surgical Techniques",
    description: "Utilizing the latest minimally invasive procedures for faster recovery and less discomfort.",
  },
  {
    icon: TrendingUp,
    title: "High Success & Recovery Rates",
    description: "Consistently high surgical success rates with structured rehabilitation programs.",
  },
  {
    icon: Users,
    title: "Trusted by Patients Across Jaipur",
    description: "15,000+ patients and a 4.8★ Google rating reflect deep trust in our care quality.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-medical-blue-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-medical-blue-mid mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Why Choose Dr. Abhishek Chachan
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-card shadow-medical flex items-center justify-center shrink-0">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
