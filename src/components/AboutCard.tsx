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
              With over 15+ years of experience in the orthopedic field,
              Dr. Abhishek Chachan is dedicated to providing precise,
              patient-first treatment for bone and joint conditions.
              His expertise spans joint replacement, spine surgery,
              sports injuries, and trauma management—helping thousands
              of patients return to active, pain-free lives.
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
