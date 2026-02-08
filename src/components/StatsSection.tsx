import { motion } from "framer-motion";
import { Users, Award, Star, Building } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience", delay: 0 },
  { icon: Users, value: "15,000+", label: "Patients Treated", delay: 0.1 },
  { icon: Star, value: "4.8★", label: "Google Rating", sublabel: "140+ Reviews", delay: 0.2 },
  { icon: Building, value: "Senior", label: "Consultant", sublabel: "Monilek Hospital", delay: 0.3 },
];

const StatsSection = () => {
  return (
    <section className="relative -mt-16 z-20 section-padding !pt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-medical-lg text-center border border-border"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-medical-blue-mid" />
              <div className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
              {stat.sublabel && (
                <div className="text-xs text-muted-foreground mt-0.5">{stat.sublabel}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
