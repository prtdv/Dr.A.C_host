import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const treatments = [
  "Joint Replacement Surgery",
  "Spine Surgery",
  "Trauma & Fracture Management",
  "Arthritis & Joint Pain Treatment",
  "Minimally Invasive Surgery",
  "General Consultation",
];

const AppointmentSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Sent!",
      description: "We'll get back to you shortly to confirm your appointment.",
    });
    setFormData({ name: "", email: "", phone: "", treatment: "", message: "" });
  };

  return (
    <section className="section-padding bg-medical-surface" id="appointment">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-medical-blue-mid mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Book an Appointment
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Schedule your consultation with Dr. Abhishek Chachan for expert orthopedic care.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-xl font-serif font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <a href="tel:+919829885908" className="flex items-start gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold">Phone</div>
                    <div className="text-sm">+91 98298 85908</div>
                  </div>
                </a>
                <a href="mailto:drabhishekchachan@gmail.com" className="flex items-start gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-sm">drabhishekchachan@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-start gap-4 text-primary-foreground/90">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold">Address</div>
                    <div className="text-sm">Shyam Poly Clinic, Near Jagatpura Railway Phatak, Jagatpura, Jaipur – 302017</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-primary-foreground/90">
                  <Clock className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold">Clinic Hours</div>
                    <div className="text-sm">Mon – Sat: 10 AM – 7 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-medical">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <Input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Select Treatment</label>
                  <Select
                    value={formData.treatment}
                    onValueChange={(val) => setFormData({ ...formData, treatment: val })}
                  >
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Choose treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      {treatments.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <Textarea
                  placeholder="Describe your condition or any specific concerns..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="rounded-xl resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base font-semibold gap-2">
                <Send className="h-4 w-4" />
                Request Appointment
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
