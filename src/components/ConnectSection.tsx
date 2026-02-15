import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Dumbbell, Heart, TrendingUp } from "lucide-react";

const ConnectSection = () => {
  return (
    <section id="connect" className="relative section-padding bg-charcoal">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <span className="floating-word top-1/4 left-[-5%] animate-slide-right text-primary/[0.02]">
          CONNECT
        </span>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bebas text-foreground mb-4">
            CONNECT WITH <span className="text-gradient-gold">SARAVANA CHAMPION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Train. Transform. Triumph.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay connected for daily fitness motivation, real transformation stories, powerful workout routines, and exclusive coaching updates.
          </p>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-card border border-border p-8 md:p-12 mb-12"
        >
          <h3 className="text-3xl font-bebas text-primary mb-8 text-center">CONTACT DETAILS</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 border-2 border-primary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Phone className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-oswald text-lg text-foreground mb-2">PHONE</h4>
              <a href="tel:+919535698197" className="text-muted-foreground hover:text-primary transition-colors">
                +91 95356 98197
              </a>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 border-2 border-primary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Instagram className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-oswald text-lg text-foreground mb-2">INSTAGRAM</h4>
              <a 
                href="https://www.instagram.com/saravanachampion369" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                @Saravanachampion369
              </a>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 border-2 border-primary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Mail className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-oswald text-lg text-foreground mb-2">EMAIL</h4>
              <a href="mailto:saravanachamp369@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                saravanachamp369@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Follow & Join Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Instagram Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-card border border-border p-8 hover:border-primary transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <Instagram className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bebas text-foreground">INSTAGRAM</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Follow @Saravanachampion369 for:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>Daily workout reels</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>Client transformation videos</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>Fat loss and muscle gain tips</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>Diet and nutrition guidance</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>Motivation and mindset content</span>
              </li>
            </ul>
            <p className="text-sm text-primary font-oswald">
              Turn on notifications and never miss a transformation update.
            </p>
          </motion.div>

          {/* Email & Call Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Email Support */}
            <div className="bg-card border border-border p-8 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-bebas text-foreground">EMAIL SUPPORT</h3>
              </div>
              <p className="text-muted-foreground">
                For personal training, online coaching, brand collaborations, and clothing brand orders (hoodies and T-shirts), reach out via email.
              </p>
            </div>

            {/* Direct Call */}
            <div className="bg-card border border-border p-8 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-bebas text-foreground">DIRECT CALL</h3>
              </div>
              <p className="text-muted-foreground">
                Serious about transforming your body? Call now and start your fitness journey today.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary p-12"
        >
          <h3 className="text-4xl md:text-5xl font-bebas text-foreground mb-4">
            READY TO BECOME YOUR <span className="text-gradient-gold">STRONGEST VERSION?</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Follow. Connect. Transform.
          </p>
          <p className="text-2xl font-bebas text-primary mb-8">
            Your transformation starts with one decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/saravanachampion369"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground font-oswald text-lg tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.5)] inline-flex items-center justify-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              FOLLOW ON INSTAGRAM
            </a>
            <a
              href="tel:+919535698197"
              className="px-8 py-4 border-2 border-primary text-primary font-oswald text-lg tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              CALL NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectSection;
