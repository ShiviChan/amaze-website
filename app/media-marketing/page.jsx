import Image from "next/image";
import { ArrowUpRight, Play, Youtube, Facebook, Instagram, Twitter, MapPin, Phone, Mail, Globe } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeIn from "@/components/FadeIn";
import ViewfinderHero from "@/components/media/ViewfinderHero";
import EventGallery from "@/components/media/EventGallery";
import { CAMPAIGN_HREF } from "@/components/media/links";

const reach = [
  { label: "Newspath Bharat on YouTube", value: 200000, shown: "2,00,000+", color: "bg-brand" },
  { label: "Coach Digvijay on Facebook", value: 200000, shown: "2,00,000+", color: "bg-brand-300" },
  { label: "Coach Digvijay on Instagram", value: 155000, shown: "1,55,000+", color: "bg-cream" },
  { label: "Newspath Bharat on Facebook", value: 50000, shown: "50,000+", color: "bg-brand-700" },
];
const reachTotal = reach.reduce((s, r) => s + r.value, 0);

const featured = { name: "A. P. Singh", role: "Senior Advocate, Supreme Court of India", id: "Xi246X5dvUI" };
const episodes = [
  { name: "Dr. T. D. Dogra", role: "Former Director, AIIMS, and forensic expert", id: "jzjzHhJxqp4" },
  { name: "IPS Jitendra Mani Tripathi", role: "Leadership, policing and public service", id: "lbnu7FzW_Qs" },
  { name: "N. N. D. Dubey", role: "Former DIG", id: "Jxz3UizPQDc" },
  { name: "Surrender Singh", role: "Former NSG commando", id: "fBJxT1k-AiM" },
  { name: "S. S. Laur", role: "Retired DSP", id: "F0VMcFlo-IE" },
  { name: "Sher Singh Rana", role: "His life, experiences and views on society", id: "inxNR6ECdSI" },
  { name: "Shambhu Shikhar", role: "Poet and performer", id: "uR9RFWXarM8" },
  { name: "Seema Midha", role: "Tarot reader and spiritual guide", id: "ZdXBdpH7_cI" },
];

const channels = [
  { name: "Newspath Bharat", hi: "न्यूज़ पथ", logo: "/media/newspath-logo.jpg", wide: true, topic: "Main channel", body: "Current affairs, public-interest stories, interviews and ground reports.",
    links: [
      { icon: Youtube, label: "YouTube", href: "https://youtube.com/@newspathbharat" },
      { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/14Wg6myaXLo/" },
      { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/newspathbharat" },
    ] },
  { name: "Crime Path Bharat", logo: "/media/crimepath.jpg", topic: "Crime and investigation", body: "Major cases, investigations, public safety and how stories develop.",
    links: [
      { icon: Youtube, label: "YouTube", href: "https://youtube.com/@crimepathbharat" },
      { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61593609381182" },
      { icon: Twitter, label: "X", href: "https://x.com/CrimePathBharat" },
    ] },
  { name: "Kisanpath Bharat", logo: "/media/kisanpath.jpg", topic: "Agriculture and rural India", body: "Farming practice, mandi prices, government schemes and farmers' voices.",
    links: [{ icon: Youtube, label: "YouTube", href: "https://youtube.com/@kisanpath.bharat" }] },
  { name: "Dharmpath Bharat", logo: "/media/dharmpath.jpg", topic: "Faith, culture and spirituality", body: "धर्म, संस्कृति, festivals and the traditions behind everyday faith.",
    links: [{ icon: Youtube, label: "YouTube", href: "https://youtube.com/@dharmpath.bharat" }] },
  { name: "Carpath Bharat", logo: "/media/carpath.jpg", topic: "Automotive", body: "Cars, mobility, launches, reviews and automobile news.",
    links: [{ icon: Youtube, label: "YouTube", href: "https://youtube.com/@carpathbharat" }] },
];

const offers = [
  { t: "Sponsored campaigns", b: "Brand stories made for a Hindi audience and published across all our pages." },
  { t: "Podcast partnerships", b: "Long-form, multi-camera studio episodes with guests from public life." },
  { t: "Ground reports", b: "Field coverage from Tier-2 and Tier-3 cities, shot by our own camera team." },
  { t: "Election and opinion coverage", b: "Public-opinion pieces and on-ground election reporting." },
  { t: "Multi-platform distribution", b: "One brief, published on YouTube, Facebook and Instagram together." },
  { t: "Event coverage", b: "Felicitations, cultural evenings and launches, filmed and edited end to end." },
];

const directors = [
  { name: "Ritesh Sharan Shrivastava", note: "Founding director. Also founder of Amaze Solutions." },
  { name: "Meera Nigam", note: "Guides editorial philosophy and governance." },
  { name: "Piyush Srivastava", note: "Known for a warm, people-first approach to the team." },
];

const yt = (id) => `https://youtu.be/${id}`;
const thumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export default function MediaMarketingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Media and Marketing", href: "/media-marketing" }]} />
      <ViewfinderHero />

      {/* Reach */}
      <section className="py-24 border-y border-white/10 bg-ink-800/50">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-5">
              <div className="font-display text-7xl md:text-8xl text-white tracking-tight tabular-nums">6,00,000+</div>
              <p className="mt-3 text-lg text-white/65">people follow Newspath Bharat and its editor, Coach Digvijay, across three platforms.</p>
            </div>
            <div className="lg:col-span-7">
              <div className="flex h-4 w-full overflow-hidden rounded-full bg-white/10" role="img"
                aria-label="Audience split: 2,00,000 YouTube, 2,00,000 Facebook, 1,55,000 Instagram, 50,000 Facebook">
                {reach.map((r) => (
                  <div key={r.label} className={`${r.color} h-full border-r-2 border-ink-800 last:border-r-0`}
                    style={{ width: `${(r.value / reachTotal) * 100}%` }} />
                ))}
              </div>
              <dl className="mt-6 grid gap-y-3">
                {reach.map((r) => (
                  <div key={r.label} className="flex items-baseline gap-3">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${r.color} translate-y-[-1px]`} aria-hidden="true" />
                    <dt className="text-white/60 text-sm flex-1">{r.label}</dt>
                    <dd className="text-white font-medium tabular-nums">{r.shown}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Event photos */}
      <section className="py-24 md:py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-6 items-end mb-12">
            <h2 className="md:col-span-7 font-display text-5xl md:text-6xl tracking-tight leading-[0.95] text-balance">
              On stage, with the community
            </h2>
            <p className="md:col-span-5 text-white/60 leading-relaxed">
              From Amaze Solutions' 11th foundation day in Noida: awards for employees and partners, the lamp lighting with chief guests, and a classical dance performance. Tap any photo to see it full size.
            </p>
          </div>
          <EventGallery />
        </div>
      </section>

      {/* In the news */}
      <section className="pb-24 md:pb-28">
        <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <a href="/media/navodaya-times-clipping.jpg" target="_blank" rel="noopener noreferrer"
            className="lg:col-span-5 block group" aria-label="Open the Navodaya Times clipping full size">
            <div className="relative mx-auto max-w-sm rotate-[-1.5deg] group-hover:rotate-0 transition-transform duration-500 bg-white p-2 shadow-[0_30px_80px_-20px_rgba(229,9,20,0.45)]">
              <Image src="/media/navodaya-times-clipping.jpg" alt="Navodaya Times clipping: Amaze Solutions honours employees on its 11th foundation day"
                width={460} height={818} sizes="(max-width: 1024px) 90vw, 384px" className="w-full h-auto" />
            </div>
          </a>
          <div className="lg:col-span-7">
            <p className="text-sm text-brand">In the news</p>
            <h2 className="mt-4 font-deva font-bold text-4xl md:text-5xl leading-[1.35] text-white text-balance">
              कर्मचारियों को 11वें स्थापना दिवस पर किया सम्मानित
            </h2>
            <p className="mt-4 text-white/50">Navodaya Times, Noida edition, page 1, 5 October 2026</p>
            <p className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">
              Amaze Solutions honoured its employees, leadership team and partners on its 11th foundation day. The chief guests were Dr. Rajeev Narayan Mishra, Additional Commissioner of the Gautam Buddh Nagar Police Commissionerate, DCP Traffic Dr. Praveen Ranjan, and Anand Prakash Gupta, Director of Home and Urban Affairs at the Ministry of Home Affairs.
            </p>
            <p className="mt-4 max-w-2xl text-white/55 leading-relaxed">
              Founder and director Ritesh Srivastava, director Meera Nigam, co-founder Piyush Srivastava, CEO Ravi Kaul and Newspath editor-in-chief Digvijay Singh attended with the company's leadership team.
            </p>
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="py-24 md:py-28 border-y border-white/10">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95] text-balance">The Newspath Bharat Podcast</h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              Long conversations with people from policing, defence, law, medicine, literature and public life.
            </p>
          </div>

          <FadeIn>
            <a href={yt(featured.id)} target="_blank" rel="noopener noreferrer"
              className="group mt-12 grid lg:grid-cols-12 gap-0 rounded-sm overflow-hidden ring-1 ring-white/10 hover:ring-brand/60 transition">
              <div className="relative lg:col-span-8 aspect-video bg-ink-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumb(featured.id)} alt={`Podcast episode with ${featured.name}`} loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute bottom-5 left-5 md:bottom-6 md:left-6">
                  <span className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-brand grid place-items-center text-white shadow-[0_0_60px_-5px_rgba(229,9,20,0.8)] group-hover:scale-110 transition-transform">
                    <Play size={28} className="ml-1" fill="currentColor" />
                  </span>
                </span>
              </div>
              <div className="lg:col-span-4 p-8 md:p-10 flex flex-col justify-end bg-ink-800/60">
                <span className="text-sm text-brand">Latest episode</span>
                <h3 className="mt-3 font-display text-4xl md:text-5xl text-white leading-tight">{featured.name}</h3>
                <p className="mt-3 text-white/65">{featured.role}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm text-white group-hover:text-brand transition">
                  Watch on YouTube <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          </FadeIn>

          <ul className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {episodes.map((e) => (
              <li key={e.id}>
                <a href={yt(e.id)} target="_blank" rel="noopener noreferrer" className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand">
                  <div className="relative aspect-video overflow-hidden rounded-sm bg-ink-800 ring-1 ring-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={thumb(e.id)} alt={`Podcast episode with ${e.name}`} loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-black/70 grid place-items-center text-white group-hover:bg-brand transition">
                      <Play size={14} className="ml-0.5" fill="currentColor" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-white group-hover:text-brand transition">{e.name}</h3>
                  <p className="mt-1 text-sm text-white/55">{e.role}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Channel network */}
      <section className="py-24 md:py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-6 items-end mb-14">
            <h2 className="md:col-span-7 font-display text-5xl md:text-6xl tracking-tight leading-[0.95] text-balance">
              Five channels, one network
            </h2>
            <p className="md:col-span-5 text-white/60 leading-relaxed">
              Each channel has its own audience, so a campaign can go to farmers, car buyers or crime-news viewers without paying for everyone else.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {channels.map((c) => (
              <div key={c.name} className="grid grid-cols-[64px_1fr] md:grid-cols-[96px_1fr_auto] gap-x-5 md:gap-x-8 gap-y-4 items-center py-7">
                <div className={`relative overflow-hidden bg-white ${c.wide ? "h-12 w-16 md:h-16 md:w-24 rounded-md" : "h-16 w-16 md:h-24 md:w-24 rounded-full ring-1 ring-white/15"}`}>
                  <Image src={c.logo} alt={`${c.name} logo`} fill sizes="96px" className={c.wide ? "object-contain p-1" : "object-cover"} />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-display text-3xl md:text-4xl text-white">{c.name}</h3>
                    <span className="text-sm text-brand">{c.topic}</span>
                  </div>
                  <p className="mt-1.5 text-white/60 max-w-xl">{c.body}</p>
                </div>
                <div className="col-span-2 md:col-span-1 flex gap-2 md:justify-end">
                  {c.links.map((l) => {
                    const Icon = l.icon;
                    return (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                        aria-label={`${c.name} on ${l.label}`}
                        className="h-11 w-11 rounded-full border border-white/15 grid place-items-center text-white/75 hover:bg-brand hover:border-brand hover:text-white transition">
                        <Icon size={17} />
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editor */}
      <section className="py-24 md:py-28 border-t border-white/10">
        <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-black ring-1 ring-white/10">
              <Image src="/media/coach-digvijay.jpg" alt="Coach Digvijay, Editor-in-Chief of Newspath Bharat"
                fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[50%_30%]" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm text-brand">Editor-in-Chief, Newspath Bharat</p>
            <h2 className="mt-4 font-display text-6xl md:text-7xl tracking-tight leading-[0.95] text-white">Coach Digvijay</h2>
            <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
              Media strategist, entrepreneur and communication professional with long experience in digital media leadership and content strategy. He hosts the Newspath Bharat Podcast, and his own pages take Newspath stories to people who follow leadership, motivation and current affairs.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div className="flex flex-col-reverse border-t border-brand/50 pt-4">
                <dt className="mt-1 text-sm text-white/55">followers on Facebook</dt>
                <dd className="font-display text-4xl text-white tabular-nums">2,00,000+</dd>
              </div>
              <div className="flex flex-col-reverse border-t border-brand/50 pt-4">
                <dt className="mt-1 text-sm text-white/55">followers on Instagram</dt>
                <dd className="font-display text-4xl text-white tabular-nums">1,55,000+</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* For brands + people */}
      <section className="py-24 md:py-28 border-y border-white/10 bg-ink-800/50">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95] text-balance">What brands can do with us</h2>
            <dl className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {offers.map((o) => (
                <div key={o.t} className="border-t border-brand/50 pt-4">
                  <dt className="text-lg font-medium text-white">{o.t}</dt>
                  <dd className="mt-1.5 text-white/60 leading-relaxed">{o.b}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl tracking-tight">Directors</h2>
            <ul className="mt-8 space-y-5">
              {directors.map((d) => (
                <li key={d.name} className="border-t border-white/10 pt-5">
                  <div className="text-white font-medium">{d.name}</div>
                  <div className="mt-1 text-sm text-white/50">{d.note}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-sm ring-1 ring-white/10 grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-full">
              <Image src="/media/hosts-on-stage.jpg" alt="Two hosts in white suits on stage" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[60%_30%]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/80 hidden lg:block" />
            </div>
            <div className="p-8 md:p-14 bg-ink-800">
              <p className="font-deva text-2xl md:text-3xl leading-[1.6] text-white">
                हमने अपनी बात रख दी है — अब अगला कदम आपकी ओर से है।
              </p>
              <p className="mt-3 text-white/60">We've said our piece. The next step is yours.</p>

              <ul className="mt-10 space-y-4 text-white/80">
                <li className="flex gap-3"><MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                  B-807, i-Thum Tower, near Noida Electronic City Metro (Gate 3), Sector 62, Noida</li>
                <li className="flex gap-3"><Phone size={18} className="text-brand shrink-0 mt-0.5" />
                  <span><a href="tel:+919990976501" className="hover:text-brand transition">+91 99909 76501</a>
                    <span className="text-white/30 mx-2">/</span>
                    <a href="tel:+919582415452" className="hover:text-brand transition">+91 95824 15452</a></span></li>
                <li className="flex gap-3"><Mail size={18} className="text-brand shrink-0 mt-0.5" />
                  <a href="mailto:newspathh@gmail.com" className="hover:text-brand transition">newspathh@gmail.com</a></li>
                <li className="flex gap-3"><Globe size={18} className="text-brand shrink-0 mt-0.5" />
                  <a href="https://www.newspathh.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition">www.newspathh.com</a></li>
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href={CAMPAIGN_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Plan a campaign <ArrowUpRight size={18} />
                </a>
                <a href="tel:+919990976501" className="btn-ghost"><Phone size={15} /> Call the team</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
