import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center section-dark noise-texture">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto space-y-6"
          >
            {/* 404 Number */}
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="font-display text-[8rem] md:text-[12rem] leading-none font-bold gradient-text"
            >
              404
            </motion.h1>

            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Page Not Found
            </h2>

            <p className="text-text-secondary">
              Oops! The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/" className="btn-primary inline-flex items-center gap-2">
                <Home size={18} />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-outline inline-flex items-center gap-2"
              >
                <ArrowLeft size={18} />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
