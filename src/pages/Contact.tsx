import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
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
              Contact Us
            </motion.h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Get in touch with Dr. Abhishek Chachan&apos;s clinic. We&apos;re here
              to help you with expert orthopedic care.
            </p>
          </div>
        </section>

        {/* Contact CTA & Info */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Call CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-medical text-center mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                  Book an Appointment
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Call us directly to schedule your consultation with
                  Dr. Abhishek Chachan.
                </p>

                <a href="tel:+919829885908">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-lg font-semibold gap-3"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now: +91 98298 85908
                  </Button>
                </a>
              </motion.div>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-medical"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-medical-blue-light flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">
                        Email
                      </div>
                      <a
                        href="mailto:vktheone.abhishek@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        vktheone.abhishek@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-medical"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-medical-blue-light flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">
                        Clinic Hours
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Mon – Sat: 10 AM – 7 PM
                        <br />
                        Sun – Appointment on call
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="sm:col-span-2 bg-card rounded-2xl p-6 border border-border shadow-medical"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-medical-blue-light flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">
                        Address
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Shyam Poly Clinic, Near Jagatpura Railway Phatak,
                        Jagatpura, Jaipur, Rajasthan – 302017
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-0">
          <div className="w-full h-[300px] md:h-[400px] bg-muted rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.08452302018!2d75.8315322!3d26.8349012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db79a3e2d4199:0x231ac9009de01545!2sDr.%20Abhishek%20Chachan%20(Best%20Orthopedic%20Surgeon%20in%20Jaipur)!5e0!3m2!1sen!2sin!4v1707310000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Abhishek Chachan Clinic Location"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
