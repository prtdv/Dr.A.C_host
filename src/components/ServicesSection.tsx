import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import serviceJointReplacement from "@/assets/service-joint-replacement.jpg";
import serviceSpineSurgery from "@/assets/service-spine-surgery.jpeg";
import serviceTrauma from "@/assets/service-trauma.jpg";
import serviceArthritis from "@/assets/service-arthritis.jpg";
import serviceKeyholeSurgery from "@/assets/Keyhole-Surgery.jpg";
import serviceMinimallyInvasive from "@/assets/service-minimally-invasive.jpg";
import serviceNerveRootBlock from "@/assets/Selective-Nerve-Root-Block.jpg";
import servicePlaster from "@/assets/plaster.jpg";

const services = [
  {
    image: serviceJointReplacement,
    title: "Joint Replacement Surgery",
    subtitle: "Knee & Hip Replacement",
    description:
      "Advanced knee and hip replacement procedures designed to relieve chronic pain, restore joint function, and improve mobility using modern implants and proven surgical techniques.",
  },
  {
    image: serviceSpineSurgery,
    title: "Spine Surgery",
    subtitle: "Minimally Invasive & Complex Spine Care",
    description:
      "Comprehensive treatment for spine conditions such as slipped disc, spinal stenosis, scoliosis, and degenerative spine disorders using both minimally invasive and advanced surgical approaches.",
  },
  {
    image: serviceTrauma,
    title: "Trauma & Fracture Management",
    subtitle: "Emergency & Planned Orthopedic Care",
    description:
      "Expert management of fractures, dislocations, and traumatic injuries with precise surgical fixation, prompt intervention, and structured rehabilitation for optimal recovery.",
  },
  {
    image: serviceArthritis,
    title: "Arthritis & Joint Pain Treatment",
    subtitle: "Non-Surgical & Surgical Solutions",
    description:
      "Personalized treatment plans for osteoarthritis, rheumatoid arthritis, and chronic joint pain, ranging from conservative management to surgical intervention when required.",
  },
  {
    image: serviceKeyholeSurgery, // Arthroscopic surgery (keyhole surgery)
    title: "Arthroscopic (Keyhole) Surgery",
    subtitle: "Sports Injuries & Joint Problems",
    description:
      "Minimally invasive arthroscopic procedures for knee, shoulder, and other joints, allowing accurate diagnosis and treatment with smaller incisions, less pain, and faster recovery.",
  },
  {
    image: serviceMinimallyInvasive, // Minimally invasive spine surgery
    title: "Minimally Invasive Spine Surgery",
    subtitle: "Smaller Incisions, Faster Healing",
    description:
      "Advanced minimally invasive spine procedures that reduce tissue damage, blood loss, and hospital stay while promoting quicker recovery and long-term spine stability.",
  },
  {
    image: serviceNerveRootBlock, // Nerve root blocks
    title: "Nerve Root Block & Pain Management",
    subtitle: "Targeted Pain Relief",
    description:
      "Image-guided nerve root blocks and pain management procedures to reduce inflammation and relieve radiating back or neck pain without the need for surgery.",
  },
  {
    image: servicePlaster, // Plaster facility for fractures
    title: "Plaster & Cast Services",
    subtitle: "Fracture Stabilization & Healing",
    description:
      "On-site plaster and cast application for fractures and soft tissue injuries, ensuring proper immobilization, comfort, and optimal bone healing.",
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
