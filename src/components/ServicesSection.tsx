import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import serviceJointReplacement from "@/assets/service-joint-replacement.jpg";
import serviceSpineSurgery from "@/assets/service-spine-surgery.jpeg";
import serviceTrauma from "@/assets/service-trauma.jpg";
import serviceArthritis from "@/assets/service-arthritis.jpg";
import serviceMinimallyInvasive from "@/assets/service-minimally-invasive.jpg";

const services = [
  {
    image: serviceJointReplacement,
    title: "Joint Replacement Surgery",
    subtitle: "Knee & Hip",
    description: "Advanced knee and hip joint replacement procedures to restore mobility, reduce pain, and improve quality of life using modern implants and techniques.",
  },
  {
    image: serviceSpineSurgery,
    title: "Spine Surgery",
    subtitle: "Minimally Invasive & Complex",
    description: "Expert treatment for herniated discs, spinal stenosis, scoliosis, and other spine conditions using minimally invasive and advanced surgical approaches.",
  },
  {
    image: serviceTrauma,
    title: "Trauma & Fracture Management",
    subtitle: "Emergency & Scheduled Care",
    description: "Comprehensive management of fractures, dislocations, and traumatic injuries with precision surgical fixation and structured rehabilitation.",
  },
  {
    image: serviceArthritis,
    title: "Arthritis & Joint Pain Treatment",
    subtitle: "Non-Surgical & Surgical",
    description: "Personalized treatment plans for osteoarthritis, rheumatoid arthritis, and chronic joint pain, from conservative care to surgical intervention.",
  },
  {
    image: serviceMinimallyInvasive,
    title: "Minimally Invasive Orthopedic Surgery",
    subtitle: "Faster Recovery",
    description: "State-of-the-art minimally invasive techniques that offer smaller incisions, less pain, reduced hospital stays, and faster recovery times.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-medical-blue-mid mb-3 block">
            Orthopedic Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Comprehensive Orthopedic Care
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert treatment for all bone, joint, and spine conditions with modern surgical techniques and personalized care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-medical-lg hover:border-medical-blue-mid/20 transition-all duration-300"
            >
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-foreground mb-1">{service.title}</h3>
                <p className="text-xs font-medium text-medical-blue-mid mb-3">{service.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                <Link to="/contact">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-medical-blue-light px-0 font-semibold">
                    Book Appointment →
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
