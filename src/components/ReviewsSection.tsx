import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Sharma",
    rating: 5,
    text: "Dr. Chachan performed my knee replacement surgery. The entire experience was exceptional — from consultation to recovery. I'm walking pain-free now. Highly recommended!",
    time: "3 months ago",
  },
  {
    name: "Sunita Agarwal",
    rating: 5,
    text: "After years of back pain, Dr. Chachan's spine treatment gave me my life back. He explains everything clearly and cares genuinely about his patients.",
    time: "2 months ago",
  },
  {
    name: "Mohan Verma",
    rating: 5,
    text: "I had a complex fracture from an accident. Dr. Chachan handled it with great skill and precision. The recovery was smoother than I expected. Very grateful!",
    time: "1 month ago",
  },
  {
    name: "Priya Meena",
    rating: 4,
    text: "Very professional and patient doctor. He took time to understand my arthritis problem and suggested a treatment plan that really worked. The clinic is also very clean and well-maintained.",
    time: "5 months ago",
  },
];

const ReviewsSection = () => {
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
            Patient Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-medical-gold text-medical-gold" />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">4.8</span>
            <span className="text-sm text-muted-foreground">based on 140+ Google Reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-medical"
            >
              <Quote className="h-8 w-8 text-medical-blue-light mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.time}</div>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-medical-gold text-medical-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/reviews">
            <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Reviews
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
