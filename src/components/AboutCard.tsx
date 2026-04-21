import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Building,
  Stethoscope,
  Award,
} from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const AboutCard = () => {
  return (
    <section className="section-padding bg-medical-surface">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-medical-lg bg-gradient-to-b from-medical-blue-light to-background">
                <img
                  src={doctorPortrait}
                  alt="Dr. Abhishek Chachan - Orthopedic Surgeon"
                  className="w-full h-auto object-contain aspect-[3/4] mx-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-medical-blue-light rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-medical-blue-mid mb-3 block">
              Meet Your Doctor
            </span>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
              Dr. Abhishek Chachan
            </h2>

            <p className="text-sm text-medical-blue-mid font-medium mb-6">
              MBBS, MS (Orthopedics)
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 15 years of clinical experience, Dr. Abhishek Chachan is a distinguished orthopaedic specialist known for delivering advanced, evidence-based care for a wide range of bone and joint conditions. Patients searching for an orthopaedic doctor near them or an experienced orthopaedic surgeon near your area , trust his expertise across Jagatpura, Malviya Nagar, Jaipur.
Widely recognized as a leading orthopaedic doctor in Jagatpura, Malviya Nagar, Jaipur, Dr. Chachan provides comprehensive care as a bone doctor / bone specialist, focusing on accurate diagnosis and effective treatment outcomes. His core expertise lies in joint replacement procedures, where he is regarded as a skilled knee replacement surgeon  and hip replacement surgeon , helping patients restore mobility and improve their quality of life.
He is also an experienced spine surgeon, sports injury surgeon, and ligament surgeon , managing complex orthopaedic and sports-related conditions with precision. As a proficient arthroscopy surgeon, he utilizes minimally invasive techniques to ensure faster recovery and optimal results.
In addition, Dr. Chachan offers specialized care as a foot and ankle specialist and a trusted pediatric orthopaedic doctor near  you, catering to orthopaedic conditions across all age groups.
For those seeking an orthopaedic surgeon near you or a reliable specialist in Jagatpura, Malviya Nagar, Jaipur, Dr. Abhishek Chachan is committed to delivering personalized treatment plans, modern surgical solutions, and compassionate care—enabling patients to return to active, pain-free lives.
            </p>

            {/* Info Pointers */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-medical-blue-light flex items-center justify-center shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    MBBS, MS (Orthopedics)
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Qualified Orthopedic Surgeon
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-medical-blue-light flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    15+ Years of Experience
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Extensive Clinical Experience
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-medical-blue-light flex items-center justify-center shrink-0">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Monilek Hospital & Research Centre, Jaipur
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Senior Consultant
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-medical-blue-light flex items-center justify-center shrink-0">
                  <Stethoscope className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Shyam Poly Clinic, Jagatpura
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Lead Practitioner
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button
                variant="outline"
                className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Full Profile
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
