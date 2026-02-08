import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Building, Stethoscope, Award, Target, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const About = () => {
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
              About Dr. Abhishek Chachan
            </motion.h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              A dedicated orthopedic surgeon committed to excellence in bone, joint, and spine care.
            </p>
          </div>
        </section>

        {/* Profile Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-medical-lg sticky top-28">
                  <img
                    src={doctorPortrait}
                    alt="Dr. Abhishek Chachan"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-serif font-bold text-primary mb-2">Dr. Abhishek Chachan</h2>
                <p className="text-medical-blue-mid font-medium mb-6">MBBS, MS (Orthopedics)</p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Abhishek Chachan is a highly skilled orthopedic, spine, and trauma surgeon based in Jaipur, Rajasthan. With over a decade of experience in treating complex bone and joint conditions, he has earned the trust of thousands of patients across the region.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  His expertise lies in joint replacement surgery (knee and hip), spine surgery including minimally invasive procedures, trauma and fracture management, and the treatment of arthritis and chronic joint pain. He is known for his patient-first approach, clear communication, and commitment to achieving the best possible outcomes for every individual.
                </p>

                {/* Credentials */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-medical-blue-light">
                    <GraduationCap className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">MBBS, MS (Orthopedics)</div>
                      <div className="text-sm text-muted-foreground">Qualified Orthopedic Surgeon</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-medical-blue-light">
                    <Building className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Monilek Hospital, Jaipur</div>
                      <div className="text-sm text-muted-foreground">Senior Consultant – Orthopedics</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-medical-blue-light">
                    <Stethoscope className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Shyam Poly Clinic, Jagatpura</div>
                      <div className="text-sm text-muted-foreground">Lead Practitioner</div>
                    </div>
                  </div>
                </div>

                {/* Values */}
                <h3 className="text-xl font-serif font-bold text-primary mb-4">What Guides His Practice</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Target, label: "Precision in Diagnosis & Surgery" },
                    { icon: Heart, label: "Patient-First Care Philosophy" },
                    { icon: Award, label: "Commitment to Excellence" },
                    { icon: CheckCircle, label: "Evidence-Based Treatment" },
                  ].map((val, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <val.icon className="h-5 w-5 text-medical-green shrink-0" />
                      <span className="text-sm text-foreground font-medium">{val.label}</span>
                    </div>
                  ))}
                </div>

                <a href="tel:+919829885908">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                    Book a Consultation
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
