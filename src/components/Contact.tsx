import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Send, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm ${formData.name}. ${formData.message} (Email: ${formData.email}${formData.phone ? `, Phone: ${formData.phone}` : ""})`;
    const whatsappUrl = `https://l.instagram.com/?u=http%3A%2F%2Fwa.me%2F97455758964%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn3wjNlUyouh87qeUPpsZteKLZvO81lH4dFPLQm_BABx_tMy5Sm7F_ffQg3Kk_aem_ZI_BE-xrFQ6AalLoDfJh8Q&e=AT3AA-YoDUHrHdP7p3LSvpVPF_RgcUlPjUECjMw82Xpfo3ZOcsOSGOxyR473FXY7H8bLYMEdQW4KSKv_nByYKG0xOSdabgv13-IyR_q5m6aesuW54o_eEYxRFw&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Opening WhatsApp",
      description: "Complete your message on WhatsApp to reach us directly.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, title: "Location", content: "Doha, Qatar" },
    { icon: Phone, title: "Phone", content: "+974 5575 8964", href: "tel:+97455758964" },
    { icon: Mail, title: "Email", content: "info@bpt.com.qa", href: "mailto:info@bpt.com.qa" },
    { icon: Clock, title: "Hours", content: "Sun-Thu & Sat" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-8 sm:mb-12">
          <p className="font-body text-primary font-semibold tracking-[0.2em] uppercase mb-2 text-sm sm:text-base">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
            START YOUR <span className="text-gradient">JOURNEY</span>
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Ready to transform your life? Contact us for a free trial class.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Info */}
          <AnimateOnScroll animation="fade-up">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href || "#"}
                  className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 lg:p-4 bg-card rounded-lg border border-border smooth-transition touch-manipulation ${item.href ? "hover:border-primary active:border-primary cursor-pointer" : ""}`}
                >
                  <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-[10px] sm:text-xs text-muted-foreground uppercase">{item.title}</p>
                    <p className="font-body text-xs sm:text-sm text-foreground font-semibold truncate">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-3 sm:p-4 lg:p-6 bg-card rounded-lg border border-border">
              <h3 className="font-heading text-base sm:text-lg lg:text-xl text-foreground mb-2 sm:mb-3">FOLLOW US</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <a
                  href="https://www.instagram.com/bpt_qatar_bjj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground smooth-transition touch-manipulation flex items-center gap-1.5 sm:gap-2"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-body font-semibold text-xs sm:text-sm">Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@reforcad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground smooth-transition touch-manipulation flex items-center gap-1.5 sm:gap-2"
                >
                  <Music2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-body font-semibold text-xs sm:text-sm">TikTok</span>
                </a>
                <a
                  href="https://l.instagram.com/?u=http%3A%2F%2Fwa.me%2F97455758964%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn3wjNlUyouh87qeUPpsZteKLZvO81lH4dFPLQm_BABx_tMy5Sm7F_ffQg3Kk_aem_ZI_BE-xrFQ6AalLoDfJh8Q&e=AT3AA-YoDUHrHdP7p3LSvpVPF_RgcUlPjUECjMw82Xpfo3ZOcsOSGOxyR473FXY7H8bLYMEdQW4KSKv_nByYKG0xOSdabgv13-IyR_q5m6aesuW54o_eEYxRFw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground smooth-transition touch-manipulation flex items-center gap-1.5 sm:gap-2"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-body font-semibold text-xs sm:text-sm">WhatsApp</span>
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-lg border border-border">
              <h3 className="font-heading text-lg sm:text-xl lg:text-2xl text-foreground mb-4 sm:mb-6">SEND US A MESSAGE</h3>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary border-border focus:border-primary h-11 sm:h-12 text-sm sm:text-base touch-manipulation"
                  required
                />
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary border-border focus:border-primary h-11 sm:h-12 text-sm sm:text-base touch-manipulation"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-secondary border-border focus:border-primary h-11 sm:h-12 text-sm sm:text-base touch-manipulation"
                  />
                </div>
                <Textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary border-border focus:border-primary min-h-24 sm:min-h-28 text-sm sm:text-base touch-manipulation"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-base sm:text-lg lg:text-xl tracking-wider h-11 sm:h-12 lg:h-14 touch-manipulation"
                >
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  SEND VIA WHATSAPP
                </Button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
