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
  Twitter
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
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="font-serif text-2xl font-semibold tracking-tight">CRASH Lab</a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="rounded-full px-6">Partner With Us</Button>
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

import { InteractiveGrid } from "@/components/ui/interactive-grid";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative bg-background">
      <InteractiveGrid />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 text-foreground">
              Building India's Future of Responsible Healthcare AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              CRASH Lab brings together clinicians, engineers, and data scientists to develop trustworthy AI solutions that work for India's diverse healthcare landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-xl transition-shadow">
                Join as Researcher
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base bg-white/50 backdrop-blur-sm hover:bg-white/80">
                Partner With Us
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/50 to-transparent rounded-full blur-3xl -z-10" />
            <img 
              src={heroImage} 
              alt="Abstract Responsible AI" 
              className="w-full h-auto object-cover rounded-3xl shadow-2xl transform md:scale-110 hover:scale-105 transition-transform duration-700 ease-out relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  return (
    <section id="mission" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-serif mb-6">Mission & Vision</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          <div className="md:col-span-8 grid gap-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Our Mission</h3>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground">
                We empower Indian clinicians and scientists to conduct world-class AI research by developing next-generation tools that are safe, equitable, and built for real-world clinical practice.
              </p>
            </div>
            <div className="pt-8 border-t border-black/5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Our Vision</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To establish CRASH Lab as the leading model for responsible healthcare AI research in India, setting global standards for safety, transparency, and inclusive innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const differentiators = [
    { title: "Clinician-Led", desc: "Flexible research environment tailored for busy clinicians." },
    { title: "India-Specific", desc: "Focus on problems unique to Indian healthcare infrastructure." },
    { title: "Ethical Core", desc: "Ethics and equity embedded at the foundation, not an afterthought." },
    { title: "Real World", desc: "Validation in diverse, resource-limited settings." }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <img 
              src={clinicianImage} 
              alt="Clinician Scientist" 
              className="rounded-2xl shadow-xl aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-lg max-w-xs hidden md:block">
              <p className="font-serif text-xl italic">
                "Inventing, not just inheriting, how AI is developed."
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Why CRASH Lab?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              India's healthcare needs demand that we invent, not just inherit, how AI is developed and deployed. We're built to enable busy clinicians to pioneer new frameworks.
            </p>
            
            <div className="grid gap-6">
              {differentiators.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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

const Milestones = () => {
  const milestones = [
    { date: "Q1 2024", title: "CRASH Lab Founded", desc: "Established at Koita Centre for Digital Health" },
    { date: "Q4 2024", title: "6 RSNA Papers", desc: "Highest acceptance from any Indian lab" },
    { date: "Q1 2025", title: "NeurIPS Cohort", desc: "Research cohort initiated" },
    { date: "Q3 2025", title: "Radiology's Last Exam", desc: "v1.0 Publication Launch" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-serif mb-2">Our Journey</h2>
            <p className="text-muted-foreground">Milestones in redefining healthcare AI</p>
          </div>
          <Button variant="link" className="text-primary p-0">View Full Timeline <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-3 left-0 w-full h-px bg-border -z-10" />
          
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-white">
              <div className="h-6 w-6 rounded-full bg-primary border-4 border-white shadow-sm mb-6 relative z-10" />
              <div className="text-sm font-bold text-primary mb-2">{m.date}</div>
              <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
              <p className="text-muted-foreground text-sm">{m.desc}</p>
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

const Publications = () => {
  const papers = [
    {
      category: "RSNA 2025",
      title: "Stress-Test and Radiologist Blinded Validation of Multimodal Foundation Models",
      authors: "Datta S, et al."
    },
    {
      category: "Accepted",
      title: "Validation of RADAR and TRUST Metrics for AI Reports",
      authors: "Bhatti H, et al."
    },
    {
      category: "Grant",
      title: "AI-Driven Risk Stratification for Coronary Artery Disease",
      authors: "Mishra D, et al."
    }
  ];

  return (
    <section id="publications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif mb-6">Latest Research & Insights</h2>
            <p className="text-muted-foreground text-lg">
              Stay updated with our latest publications, research findings, and thought leadership in healthcare AI.
            </p>
          </div>
          <Button className="rounded-full px-8">View All Publications</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {papers.map((paper, idx) => (
            <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white group cursor-pointer">
              <CardContent className="p-8 flex flex-col h-full">
                <Badge variant="secondary" className="w-fit mb-4">{paper.category}</Badge>
                <h3 className="text-xl font-medium mb-4 group-hover:text-primary transition-colors leading-snug">
                  {paper.title}
                </h3>
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-border">
                  <span className="text-sm text-muted-foreground">{paper.authors}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 max-w-md">
            <h2 className="text-3xl font-serif mb-6">CRASH Lab</h2>
            <p className="text-background/70 text-lg leading-relaxed mb-8">
              Pioneering responsible AI for India's healthcare future. We are an experimental research studio at the Koita Centre for Digital Health.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-background/50 hover:text-background hover:bg-white/10 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/50 hover:text-background hover:bg-white/10 rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/50 hover:text-background hover:bg-white/10 rounded-full">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {['About', 'Research', 'Publications', 'Collaborate', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Contact</h3>
            <address className="not-italic text-background/70 space-y-4">
              <p>Koita Centre for Digital Health<br/>Ashoka University</p>
              <p>crash.lab@ashoka.edu.in</p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>&copy; 2025 CRASH Lab. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
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
      <MissionVision />
      <WhyUs />
      <Pillars />
      <Milestones />
      <Team />
      <Publications />
      <Footer />
    </div>
  );
}
