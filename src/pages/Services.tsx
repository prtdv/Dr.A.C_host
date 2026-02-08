import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import serviceJointReplacement from "@/assets/service-joint-replacement.jpg";
import serviceSpineSurgery from "@/assets/service-spine-surgery.jpeg";
import serviceTrauma from "@/assets/service-trauma.jpg";
import serviceArthritis from "@/assets/service-arthritis.jpg";
import serviceMinimallyInvasive from "@/assets/service-minimally-invasive.jpg";

const services = [
  {
    image: serviceJointReplacement,
    title: "Joint Replacement Surgery",
    subtitle: "Knee & Hip Replacement",
    description: "Advanced total and partial knee and hip replacement surgeries using modern implants. Dr. Chachan specializes in restoring mobility for patients suffering from severe joint damage, arthritis, or degenerative conditions. Each procedure is tailored to the patient's anatomy and lifestyle for optimal recovery.",
    benefits: ["Long-lasting pain relief", "Restored mobility & function", "Modern implant technology", "Personalized rehabilitation plan"],
  },
  {
    image: serviceSpineSurgery,
    title: "Spine Surgery",
    subtitle: "Minimally Invasive & Complex Spine Conditions",
    description: "Expert surgical treatment for herniated discs, spinal stenosis, scoliosis, spinal fractures, and degenerative disc disease. Dr. Chachan utilizes minimally invasive techniques wherever possible to ensure less tissue damage, shorter hospital stays, and faster return to normal activities.",
    benefits: ["Minimally invasive options", "Complex deformity correction", "Rapid recovery protocols", "Comprehensive post-surgical care"],
  },
  {
    image: serviceTrauma,
    title: "Trauma & Fracture Management",
    subtitle: "Emergency & Scheduled Orthopedic Care",
    description: "Comprehensive management of all types of fractures, dislocations, and musculoskeletal injuries. From emergency stabilization to complex fracture reconstruction, Dr. Chachan provides expert surgical fixation and structured rehabilitation to ensure optimal bone healing and functional recovery.",
    benefits: ["Emergency fracture care", "Complex fracture reconstruction", "Internal & external fixation", "Guided rehabilitation"],
  },
  {
    image: serviceArthritis,
    title: "Arthritis & Joint Pain Treatment",
    subtitle: "Non-Surgical & Surgical Options",
    description: "Personalized treatment for osteoarthritis, rheumatoid arthritis, and chronic joint pain. Dr. Chachan offers a full spectrum of care from conservative management including medications and physiotherapy, to advanced surgical interventions when necessary.",
    benefits: ["Accurate diagnosis", "Conservative care first", "Joint-preserving procedures", "Long-term management plans"],
  },
  {
    image: serviceMinimallyInvasive,
    title: "Minimally Invasive Orthopedic Surgery",
    subtitle: "Faster Recovery, Less Pain",
    description: "State-of-the-art minimally invasive surgical techniques for various orthopedic conditions. These procedures use smaller incisions, resulting in less tissue damage, reduced post-operative pain, shorter hospital stays, and significantly faster recovery compared to traditional open surgery.",
    benefits: ["Smaller incisions", "Less post-operative pain", "Shorter hospital stay", "Faster return to normal life"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
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
              Comprehensive orthopedic, spine, and trauma care with modern surgical techniques and personalized treatment plans.
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
                      <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-1">{service.title}</h2>
                      <p className="text-sm font-medium text-medical-blue-mid mb-4">{service.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      <div className="grid sm:grid-cols-2 gap-2 mb-6">
                        {service.benefits.map((b, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <ArrowRight className="h-3.5 w-3.5 text-medical-green shrink-0" />
                            {b}
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
