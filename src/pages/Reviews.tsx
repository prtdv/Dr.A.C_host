import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Star, Quote, ThumbsUp } from "lucide-react";

const allReviews = [
  {
    name: "Rajesh Sharma",
    rating: 5,
    text: "Dr. Chachan performed my knee replacement surgery. The entire experience was exceptional — from consultation to recovery. I'm walking pain-free now. Highly recommended!",
    time: "3 months ago",
    treatment: "Knee Replacement",
  },
  {
    name: "Sunita Agarwal",
    rating: 5,
    text: "After years of back pain, Dr. Chachan's spine treatment gave me my life back. He explains everything clearly and cares genuinely about his patients.",
    time: "2 months ago",
    treatment: "Spine Surgery",
  },
  {
    name: "Mohan Verma",
    rating: 5,
    text: "I had a complex fracture from an accident. Dr. Chachan handled it with great skill and precision. The recovery was smoother than I expected. Very grateful!",
    time: "1 month ago",
    treatment: "Fracture Management",
  },
  {
    name: "Priya Meena",
    rating: 4,
    text: "Very professional and patient doctor. He took time to understand my arthritis problem and suggested a treatment plan that really worked. The clinic is also very clean and well-maintained.",
    time: "5 months ago",
    treatment: "Arthritis Treatment",
  },
  {
    name: "Anil Gupta",
    rating: 5,
    text: "My mother had a hip replacement done by Dr. Chachan. She was walking within days after surgery. The care and attention we received was outstanding.",
    time: "4 months ago",
    treatment: "Hip Replacement",
  },
  {
    name: "Kavita Jain",
    rating: 5,
    text: "Excellent doctor with great expertise. I visited for my shoulder pain issue and he diagnosed the problem quickly. Non-surgical treatment worked perfectly for me.",
    time: "6 months ago",
    treatment: "Joint Pain Treatment",
  },
  {
    name: "Deepak Rathore",
    rating: 5,
    text: "Dr. Chachan performed a minimally invasive spine surgery on me. I was amazed at how quickly I recovered. His surgical skills are truly exceptional.",
    time: "2 months ago",
    treatment: "Spine Surgery",
  },
  {
    name: "Meera Kumari",
    rating: 5,
    text: "One of the best orthopedic doctors in Jaipur. He is very experienced and explains everything in detail. I felt very comfortable throughout my treatment.",
    time: "3 months ago",
    treatment: "General Consultation",
  },
];

const Reviews = () => {
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
              Patient Reviews
            </motion.h1>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-medical-gold text-medical-gold" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.8</span>
            </div>
            <p className="text-primary-foreground/80">Based on 140+ Google Reviews</p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {allReviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-medical"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-medical-blue-light flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{review.name}</div>
                        <div className="text-xs text-muted-foreground">{review.time}</div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-medical-gold text-medical-gold" />
                      ))}
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-medical-blue-light mb-2" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-3.5 w-3.5 text-medical-green" />
                    <span className="text-xs font-medium text-medical-blue-mid">{review.treatment}</span>
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

export default Reviews;
