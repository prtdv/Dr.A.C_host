import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Understanding Knee Replacement Surgery: What Patients Should Know",
    excerpt: "A comprehensive guide to knee replacement surgery, including who needs it, what to expect during the procedure, and tips for a smoother recovery.",
    date: "January 15, 2026",
    category: "Joint Replacement",
    readTime: "5 min read",
  },
  {
    title: "5 Signs You Should See a Spine Specialist",
    excerpt: "Persistent back pain, numbness, or weakness can be signs of a serious spine condition. Learn when it's time to consult a specialist for proper diagnosis and treatment.",
    date: "December 28, 2025",
    category: "Spine Care",
    readTime: "4 min read",
  },
  {
    title: "How Minimally Invasive Surgery Is Changing Orthopedics",
    excerpt: "Modern minimally invasive techniques offer patients smaller incisions, less pain, and faster recovery. Here's how these advances are transforming orthopedic care.",
    date: "December 10, 2025",
    category: "Surgical Techniques",
    readTime: "6 min read",
  },
  {
    title: "Managing Arthritis: A Patient's Guide to Living Pain-Free",
    excerpt: "Arthritis doesn't have to limit your life. Learn about the latest treatment options, lifestyle modifications, and exercises that can help manage joint pain effectively.",
    date: "November 20, 2025",
    category: "Arthritis",
    readTime: "5 min read",
  },
  {
    title: "First Aid for Fractures: What to Do Before Reaching the Doctor",
    excerpt: "Quick and proper first aid for fractures can prevent further injury. Learn the essential steps to take immediately after a bone fracture occurs.",
    date: "November 5, 2025",
    category: "Trauma Care",
    readTime: "3 min read",
  },
];

const Blog = () => {
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
              Health Blog
            </motion.h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Expert insights on orthopedic health, surgical advances, and patient care from Dr. Abhishek Chachan.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-medical hover:shadow-medical-lg transition-shadow cursor-pointer group"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-medical-blue-light text-primary">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <span className="text-xs text-muted-foreground">· {post.readTime}</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
