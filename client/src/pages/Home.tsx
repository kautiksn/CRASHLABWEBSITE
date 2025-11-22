import { useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Database, 
  Scale, 
  BrainCircuit, 
  Users, 
  ChevronRight, 
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Zap,
  ShieldCheck,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { InteractiveGrid } from "@/components/ui/interactive-grid";

// Assets
import heroImage from "@assets/generated_images/Abstract_organic_3D_shape_with_peach_and_terracotta_gradients_9fa91bfd.png";
import greenBg from "@assets/generated_images/Deep_green_abstract_flowing_landscape_8c161caf.png";
import clinicianImage from "@assets/generated_images/Clinician_scientist_in_modern_lab_f5410dec.png";

const Navbar = () => {
  const links = [
    { name: "Mission", href: "#mission" },
    { name: "Research", href: "#research" },
    { name: "Team", href: "#team" },
    { name: "Publications", href: "#publications" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
             <div className="h-8 w-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold font-serif">C</div>
             <span className="font-sans text-xl font-bold tracking-tight group-hover:opacity-80 transition-opacity">CRASH Lab</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex items-center bg-secondary/50 rounded-full px-2 py-1.5 mr-4 border border-black/5">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white px-4 py-2 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button className="rounded-full px-6 h-10 text-sm font-semibold">Partner With Us</Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                {links.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="w-full rounded-full">Partner With Us</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-40 pb-32 md:pt-52 md:pb-48 overflow-hidden relative bg-background flex items-center justify-center">
      <InteractiveGrid />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-sans font-semibold tracking-tight mb-8 text-foreground max-w-5xl mx-auto leading-[1.1] text-balance"
        >
          Scale your research with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">smart infrastructure</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          The essential ecosystem for deploying secure healthcare AI. From writing your first protocol to governing a national network, build it all on one unified layer.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-foreground text-background hover:bg-foreground/90">
            Start Collaborating <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-semibold border-2 hover:bg-secondary/50 transition-colors">
            View Documentation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const Pillars = () => {
  const pillars = [
    {
      icon: Database,
      title: "Data Commons",
      desc: "Building national-scale, federated platforms for secure healthcare data sharing to solve fragmentation."
    },
    {
      icon: Scale,
      title: "Standards & Benchmarks",
      desc: "Creating robust evaluation frameworks that assess AI systems for fairness, reliability, and clinical utility."
    },
    {
      icon: BrainCircuit,
      title: "AI Models for India",
      desc: "Developing context-aware foundation models tailored to South Asian healthcare with bias mitigation."
    },
    {
      icon: Users,
      title: "Human-Centric Design",
      desc: "Co-creating intuitive AI tools with frontline clinicians to reduce burnout and enhance care quality."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src={greenBg} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-20">
          <Badge variant="outline" className="text-white border-white/30 mb-4">Our Focus Areas</Badge>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">The Four Pillars of Responsible AI</h2>
          <p className="text-lg text-white/80">
            We are building the infrastructure, standards, and models needed for the next generation of healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <pillar.icon className="h-10 w-10 mb-6 text-accent group-hover:text-white transition-colors" />
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {pillar.desc}
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center text-sm font-medium text-accent cursor-pointer group-hover:text-white">
                Learn more <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
    return (
        <section className="py-24 bg-background border-y border-black/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
                        Proven Impact
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Real results, delivered</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <Card className="bg-secondary/20 border-none shadow-none rounded-3xl p-8">
                        <h3 className="text-6xl font-bold tracking-tighter mb-4">6+</h3>
                        <p className="font-semibold text-lg mb-2">RSNA Papers Accepted</p>
                        <p className="text-muted-foreground text-sm">Highest acceptance count from any single Indian lab in 2025.</p>
                     </Card>
                     <Card className="bg-secondary/20 border-none shadow-none rounded-3xl p-8">
                        <h3 className="text-6xl font-bold tracking-tighter mb-4">40+</h3>
                        <p className="font-semibold text-lg mb-2">Affiliated Researchers</p>
                        <p className="text-muted-foreground text-sm">Across India's leading medical and technical institutions.</p>
                     </Card>
                     <Card className="bg-secondary/20 border-none shadow-none rounded-3xl p-8">
                        <h3 className="text-6xl font-bold tracking-tighter mb-4">10+</h3>
                        <p className="font-semibold text-lg mb-2">Industry Partners</p>
                        <p className="text-muted-foreground text-sm">Collaborating with Sarvam AI, Axone Health, and more.</p>
                     </Card>
                </div>
            </div>
        </section>
    )
}

const Milestones = () => {
  const milestones = [
    { date: "Q1 2024", title: "Lab Founded", desc: "Established at Koita Centre" },
    { date: "Q4 2024", title: "6 RSNA Papers", desc: "Record breaking acceptance" },
    { date: "Q1 2025", title: "NeurIPS Cohort", desc: "Research cohort initiated" },
    { date: "Q3 2025", title: "Publication V1.0", desc: "Radiology's Last Exam" }
  ];

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Journey</h2>
            <p className="text-white/60 text-lg">Milestones in redefining healthcare AI.</p>
          </div>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white rounded-full mt-6 md:mt-0">
             View Full Timeline
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/10 -z-10" />
          
          {milestones.map((m, idx) => (
            <div key={idx} className="group">
              <div className="h-4 w-4 rounded-full bg-white ring-4 ring-black mb-8 group-hover:scale-125 transition-transform duration-300" />
              <div className="text-sm font-mono text-white/40 mb-2">{m.date}</div>
              <h3 className="text-xl font-bold mb-2">{m.title}</h3>
              <p className="text-white/60 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    { name: "Dr. Suvrankar Datta", role: "Group Lead, CRASH Lab", initials: "SD" },
    { name: "Dr. Hakikat Bir Singh Bhatti", role: "Clinical Researcher", initials: "HB" },
    { name: "Dr. Lakshmi Venella", role: "Clinical Researcher", initials: "LV" },
    { name: "Dr. Mrudula Bhalke", role: "Clinical Researcher", initials: "MB" },
    { name: "Kautik Singh", role: "Technical Lead", initials: "KS" },
    { name: "Siddharth Reddy", role: "Research Fellow", initials: "SR" },
  ];

  return (
    <section id="team" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif mb-6">Meet the Researchers</h2>
            <p className="text-muted-foreground text-lg">
              Our interdisciplinary team combines deep clinical expertise with cutting-edge AI research to solve India's most pressing healthcare challenges.
            </p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            {/* Carousel controls could go here if external */}
          </div>
        </div>

        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {members.map((member, idx) => (
              <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group relative overflow-hidden rounded-2xl bg-white p-1 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="aspect-[3/4] bg-muted rounded-xl mb-4 overflow-hidden relative">
                     <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-primary font-serif text-4xl opacity-20">
                       {member.initials}
                     </div>
                     {/* Use placeholder avatar logic or images if we had them */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                           <p className="font-medium">View Profile</p>
                        </div>
                     </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold leading-tight mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8">
             <CarouselPrevious className="static translate-y-0" />
             <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="rounded-full px-8">Join Our Team</Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-20 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 max-w-md">
            <div className="flex items-center gap-2 mb-6">
                 <div className="h-8 w-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold font-serif">C</div>
                 <span className="font-sans text-xl font-bold tracking-tight">CRASH Lab</span>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Pioneering responsible AI for India's healthcare future. We are an experimental research studio at the Koita Centre for Digital Health.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {['About', 'Research', 'Publications', 'Collaborate', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-4 font-medium">
              <p>Koita Centre for Digital Health<br/>Ashoka University</p>
              <p>crash.lab@ashoka.edu.in</p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 CRASH Lab. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Pillars />
      <Stats />
      <Milestones />
      <Team />
      <Footer />
    </div>
  );
}
