import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      "Advanced total and partial knee and hip replacement surgeries using modern implants and refined surgical techniques. The focus is on restoring mobility, reducing pain, and improving long-term quality of life for patients with severe joint degeneration.",
    benefits: [
      "Long-lasting pain relief",
      "Improved joint mobility",
      "Modern implant technology",
      "Personalized rehabilitation plans",
    ],
  },
  {
    image: serviceSpineSurgery,
    title: "Spine Surgery",
    subtitle: "Minimally Invasive & Complex Spine Conditions",
    description:
      "Comprehensive surgical care for spine conditions including slipped disc, spinal stenosis, scoliosis, degenerative disc disease, and spinal fractures. Minimally invasive techniques are preferred whenever suitable to reduce recovery time and post-operative discomfort.",
    benefits: [
      "Minimally invasive spine options",
      "Complex deformity correction",
      "Reduced hospital stay",
      "Structured post-surgical care",
    ],
  },
  {
    image: serviceTrauma,
    title: "Trauma & Fracture Management",
    subtitle: "Emergency & Planned Orthopedic Care",
    description:
      "Expert management of fractures, dislocations, and traumatic orthopedic injuries. Care ranges from emergency stabilization to definitive surgical fixation, with emphasis on proper bone healing and functional recovery.",
    benefits: [
      "Emergency trauma care",
      "Complex fracture fixation",
      "Internal & external fixation",
      "Guided rehabilitation support",
    ],
  },
  {
    image: serviceArthritis,
    title: "Arthritis & Joint Pain Treatment",
    subtitle: "Non-Surgical & Surgical Options",
    description:
      "Individualized treatment for osteoarthritis, rheumatoid arthritis, and chronic joint pain. Treatment plans include medications, physiotherapy, lifestyle guidance, injections, and surgical intervention when conservative methods are insufficient.",
    benefits: [
      "Accurate clinical diagnosis",
      "Conservative treatment first",
      "Joint-preserving approaches",
      "Long-term pain management",
    ],
  },
  {
    image: serviceKeyholeSurgery,
    title: "Arthroscopic (Keyhole) Surgery",
    subtitle: "Sports Injuries & Joint Conditions",
    description:
      "Minimally invasive arthroscopic procedures for knee, shoulder, and other joints. These procedures allow precise treatment of ligament injuries, cartilage damage, and meniscus tears with minimal scarring and faster recovery.",
    benefits: [
      "Small incisions",
      "Less post-operative pain",
      "Faster recovery time",
      "Early return to daily activities",
    ],
  },
  {
    image: serviceMinimallyInvasive,
    title: "Minimally Invasive Spine Surgery",
    subtitle: "Smaller Incisions, Faster Healing",
    description:
      "Advanced minimally invasive spine procedures designed to treat selected spine conditions while minimizing muscle damage, blood loss, and hospital stay compared to traditional open surgery.",
    benefits: [
      "Reduced tissue damage",
      "Shorter hospital stay",
      "Lower post-surgical pain",
      "Quicker functional recovery",
    ],
  },
  {
    image: serviceNerveRootBlock,
    title: "Nerve Root Block & Pain Management",
    subtitle: "Targeted Non-Surgical Pain Relief",
    description:
      "Image-guided nerve root block injections used to reduce inflammation and relieve radiating back, neck, or limb pain. These procedures can improve mobility and may help avoid or delay surgical intervention.",
    benefits: [
      "Targeted pain relief",
      "Non-surgical procedure",
      "Image-guided precision",
      "Improved daily comfort",
    ],
  },
  {
    image: servicePlaster,
    title: "Plaster & Cast Services",
    subtitle: "Fracture Immobilization & Healing",
    description:
      "On-site plaster and cast application for fractures and soft tissue injuries. Proper immobilization ensures correct alignment, promotes healing, and reduces the risk of long-term complications.",
    benefits: [
      "Immediate immobilization",
      "Proper fracture alignment",
      "Comfort-focused casting",
      "Regular healing assessment",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground section-padding !py-16 md:!py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-serif font-bold mb-4"
            >
              Orthopedic Services
            </motion.h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Comprehensive orthopedic, spine, and trauma care with modern
              surgical techniques and personalized treatment plans.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="space-y-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border shadow-medical hover:shadow-medical-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row group">
                    {/* Image */}
                    <div className="w-full md:w-72 lg:w-80 shrink-0 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-56 md:h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 md:p-10">
                      <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-1">
                        {service.title}
                      </h2>
                      <p className="text-sm font-medium text-medical-blue-mid mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-2 mb-6">
                        {service.benefits.map((benefit, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-foreground"
                          >
                            <ArrowRight className="h-3.5 w-3.5 text-medical-green shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>

                      <a href="tel:+919829885908">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                          Book Appointment
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
