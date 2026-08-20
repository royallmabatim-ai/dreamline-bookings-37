import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Bus,
  ShieldCheck,
  Headphones,
  Wifi,
  Armchair,
  Timer,
  Ticket,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import heroBus from "@/assets/hero-bus.jpg";
import busInterior from "@/assets/bus-interior.jpg";
import bookingOffice from "@/assets/booking-office.jpg";
import wifiImg from "@/assets/wifi.jpg";

const PHONE = "+254 782539202";
const PHONE_TEL = "+254782539202";
const WA = (text: string) =>
  `https://wa.me/254782539202?text=${encodeURIComponent(text)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dreamline Express | Bus Booking Across East Africa" },
      {
        name: "description",
        content:
          "Book comfortable Dreamline Express bus tickets across Kenya, Uganda and Tanzania. Daily departures, safe travel, free WiFi and 24/7 support.",
      },
      { property: "og:title", content: "Dreamline Express | Bus Booking Across East Africa" },
      {
        property: "og:description",
        content:
          "Reliable and comfortable bus travel across Kenya, Uganda & Tanzania. Book your seat with Dreamline Express today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Timer, title: "On-Time Departure", text: "We value your time with punctual departures and arrivals", img: heroBus },
  { icon: ShieldCheck, title: "Safe Travel", text: "Your safety is our priority with well-maintained buses" },
  { icon: Headphones, title: "24/7 Support", text: "Round-the-clock customer support for your queries" },
  { icon: Ticket, title: "Easy Booking", text: "Book your tickets online in just a few clicks", img: bookingOffice },
  { icon: Wifi, title: "Free WiFi", text: "Stay connected throughout your journey", img: wifiImg },
  { icon: Armchair, title: "Comfortable Seats", text: "Spacious and comfortable seating for long journeys", img: busInterior },
];

const routes = [
  { from: "Nairobi", to: "Kampala", freq: "Daily", time: "12 hours", price: "KSH 2,500" },
  { from: "Mombasa", to: "Dar es Salaam", freq: "Daily", time: "8 hours", price: "KSH 1,800" },
  { from: "Nairobi", to: "Mombasa", freq: "Multiple Daily", time: "7 hours", price: "KSH 1,200" },
  { from: "Kampala", to: "Dar es Salaam", freq: "3x Weekly", time: "14 hours", price: "KSH 3,200" },
  { from: "Nairobi", to: "Kisumu", freq: "Daily", time: "6 hours", price: "KSH 1,000" },
  { from: "Nairobi", to: "Arusha", freq: "Daily", time: "5 hours", price: "KSH 1,500" },
];

const stats = [
  { value: "150+", label: "Modern Buses" },
  { value: "50+", label: "Destinations" },
  { value: "1M+", label: "Happy Customers" },
  { value: "19+", label: "Years of Service" },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#routes", label: "Routes" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState({ from: "", to: "", date: "", passengers: "1" });

  const book = (from: string, to: string) => {
    window.open(
      WA(
        `Hello Dreamline Express! I'd like to book a trip from ${from || "..."} to ${to || "..."}${
          search.date ? ` on ${search.date}` : ""
        } for ${search.passengers} passenger(s).`,
      ),
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="bg-brand-soft/60 py-2 text-center text-sm font-medium text-secondary-foreground">
        <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2">
          <Phone className="h-4 w-4" />
          Call now to book: <span className="font-bold">{PHONE}</span>
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Bus className="h-6 w-6 text-primary-foreground" />
            </span>
            <span>
              <span className="block text-xl font-bold leading-tight">Dreamline Express</span>
              <span className="block text-xs text-muted-foreground">Travel with Comfort</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <a href={WA("Hello Dreamline Express! I'd like to inquire about your bus services.")} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
            <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t bg-card px-4 py-3 md:hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <img
          src={heroBus}
          alt="Dreamline Express coach bus at the depot"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay relative px-4 py-20 text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-primary-foreground md:text-6xl">
            Book Your Journey with Dreamline Express
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Reliable and comfortable bus travel across Kenya, Uganda &amp; Tanzania
          </p>

          <div className="card-elevated mx-auto mt-10 max-w-4xl rounded-xl bg-card p-6 text-left">
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <Label className="mb-2 flex items-center gap-2 text-xs"><MapPin className="h-4 w-4 text-primary" /> From</Label>
                <Input placeholder="Departure City" value={search.from} onChange={(e) => setSearch({ ...search, from: e.target.value })} />
              </div>
              <div>
                <Label className="mb-2 flex items-center gap-2 text-xs"><MapPin className="h-4 w-4 text-primary" /> To</Label>
                <Input placeholder="Destination City" value={search.to} onChange={(e) => setSearch({ ...search, to: e.target.value })} />
              </div>
              <div>
                <Label className="mb-2 flex items-center gap-2 text-xs"><Clock className="h-4 w-4 text-primary" /> Travel Date</Label>
                <Input type="date" value={search.date} onChange={(e) => setSearch({ ...search, date: e.target.value })} />
              </div>
              <div>
                <Label className="mb-2 flex items-center gap-2 text-xs"><Ticket className="h-4 w-4 text-primary" /> Passengers</Label>
                <Input type="number" min={1} value={search.passengers} onChange={(e) => setSearch({ ...search, passengers: e.target.value })} />
              </div>
            </div>
            <Button className="mt-5 w-full" size="lg" onClick={() => book(search.from, search.to)}>
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Why Choose Dreamline Express?</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Experience the best in class bus travel with our premium services
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card-elevated overflow-hidden rounded-xl border bg-card">
                {f.img && (
                  <img src={f.img} alt={f.title} loading="lazy" width={1200} height={800} className="h-44 w-full object-cover" />
                )}
                <div className="p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent">
                    <f.icon className="h-5 w-5 text-accent-foreground" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes */}
      <section id="routes" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Popular Routes</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Explore our most traveled destinations across East Africa
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {routes.map((r) => (
              <div key={`${r.from}-${r.to}`} className="card-elevated rounded-xl border bg-card p-6">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>{r.from}</span>
                  <Bus className="h-5 w-5 text-primary" />
                  <span>{r.to}</span>
                </div>
                <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                  <span>{r.freq}</span>
                  <span>{r.time}</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-primary">{r.price}</p>
                <Button className="mt-4 w-full" onClick={() => book(r.from, r.to)}>
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">About Dreamline Express</h2>
            <p className="mt-5 text-muted-foreground">
              Since 2006, Dreamline Express has been a leading bus company in East Africa, offering reliable and
              comfortable transportation across Kenya, Uganda, and Tanzania. With a commitment to quality service,
              safety, and customer satisfaction, we have become the preferred choice for thousands of travelers.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our modern fleet of buses is equipped with comfortable seating, air conditioning, and entertainment
              systems to ensure a pleasant journey. We take pride in our punctuality, professional staff, and
              dedication to making every trip memorable.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-primary">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={busInterior}
            alt="Comfortable Dreamline Express bus interior"
            loading="lazy"
            width={1200}
            height={800}
            className="card-elevated rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Have questions? We're here to help you plan your journey
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Phone, title: "Phone", lines: [PHONE] },
                { icon: Mail, title: "Email", lines: ["info@dreamlineexpress.com", "support@dreamlineexpress.com"] },
                { icon: MapPin, title: "Main Office", lines: ["Nairobi CBD, Kenya", "Opposite Bus Station"] },
                { icon: Clock, title: "Working Hours", lines: ["Monday - Sunday", "24/7 Customer Support"] },
              ].map((c) => (
                <div key={c.title} className="card-elevated rounded-xl border bg-card p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                    <c.icon className="h-5 w-5 text-accent-foreground" />
                  </span>
                  <h3 className="mt-3 font-semibold">{c.title}</h3>
                  {c.lines.map((l) =>
                    c.title === "Phone" ? (
                      <a key={l} href={`tel:${PHONE_TEL}`} className="mt-1 block text-sm text-primary">
                        {l}
                      </a>
                    ) : (
                      <p key={l} className="mt-1 text-sm text-muted-foreground">{l}</p>
                    ),
                  )}
                </div>
              ))}
            </div>

            <form
              className="card-elevated rounded-xl border bg-card p-6"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message sent! We'll get back to you shortly.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <h3 className="text-lg font-semibold">Send us a Message</h3>
              <div className="mt-4 grid gap-4">
                <div>
                  <Label htmlFor="name" className="mb-2">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2">Email</Label>
                  <Input id="email" type="email" required placeholder="you@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2">Phone Number</Label>
                  <Input id="phone" placeholder={PHONE} />
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2">Message</Label>
                  <Textarea id="message" required rows={4} placeholder="How can we help?" />
                </div>
                <Button type="submit" size="lg">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t bg-card py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Dreamline Express</p>
          <p className="mt-1">Travel with comfort across Kenya, Uganda &amp; Tanzania</p>
          <a href={`tel:${PHONE_TEL}`} className="mt-2 inline-block text-primary">{PHONE}</a>
          <p className="mt-3">© {new Date().getFullYear()} Dreamline Express. All rights reserved.</p>
        </div>
      </footer>

      <a
        href={WA("Hello Dreamline Express! I'd like to inquire about your bus services.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
        className="card-elevated fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
      </a>
    </div>
  );
}
