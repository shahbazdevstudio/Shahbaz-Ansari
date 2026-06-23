/**
 * ServicesProcess.jsx  — Component 3 / 3
 * How I work (process steps) + Pricing tiers + final CTA.
 */

import { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We talk through your goals, timeline, and technical requirements. I ask questions most developers won't.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Proposal & Scope",
    desc: "You receive a clear written scope, timeline with milestones, and a fixed-price quote — no surprises.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Design & Build",
    desc: "I design and develop in iterative builds. You see progress weekly — not just a big reveal at the end.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Review & Revise",
    desc: "Two rounds of revisions are included. Feedback is addressed fast — usually within 24 hours.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Launch & Handoff",
    desc: "Deployed to your hosting, fully documented, with a clean Git repo and 2 weeks of post-launch support.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/>
      </svg>
    ),
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "$499",
    period: "one-time",
    tagline: "Perfect for landing pages",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO setup",
      "2 rounds of revisions",
      "7-day delivery",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$1,299",
    period: "one-time",
    tagline: "Full web app or site",
    features: [
      "Full-stack application",
      "Auth + User accounts",
      "Custom admin panel",
      "API integration",
      "3 rounds of revisions",
      "14-day delivery",
      "2-week post-launch support",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Retainer",
    price: "$799",
    period: "/ month",
    tagline: "Ongoing development",
    features: [
      "40 hrs dev per month",
      "Priority response",
      "Weekly progress calls",
      "Unlimited small tasks",
      "Performance monitoring",
      "Cancel anytime",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

// ─── Floating Shapes ──────────────────────────────────────────────────────────

function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div style={{ position:"absolute", top:"-90px", left:"-120px", width:"500px", height:"500px", borderRadius:"50%",
        background:"radial-gradient(circle,rgba(45,127,255,0.10) 0%,transparent 62%)", filter:"blur(55px)" }}/>
      <div style={{ position:"absolute", bottom:"-70px", right:"-100px", width:"450px", height:"450px", borderRadius:"50%",
        background:"radial-gradient(circle,rgba(96,98,255,0.09) 0%,transparent 62%)", filter:"blur(50px)" }}/>
      <div style={{ position:"absolute", inset:0,
        backgroundImage:`linear-gradient(rgba(45,127,255,0.020) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.020) 1px,transparent 1px)`,
        backgroundSize:"60px 60px" }}/>

      {/* 4-point star — top-right */}
      <svg className="hidden lg:block" style={{ position:"absolute", top:"50px", right:"5.5%", opacity:0.11, animation:"floatA 9s ease-in-out infinite" }}
        width="72" height="72" viewBox="0 0 72 72" fill="none">
        <defs><linearGradient id="spsg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#6062ff" stopOpacity="0.5"/>
        </linearGradient></defs>
        <path d="M36 4 L40 32 L68 36 L40 40 L36 68 L32 40 L4 36 L32 32 Z" fill="url(#spsg)"/>
      </svg>

      {/* Concentric rings — left */}
      <svg className="hidden xl:block" style={{ position:"absolute", top:"30%", left:"-46px", opacity:0.11, animation:"floatA 13s ease-in-out infinite reverse" }}
        width="150" height="150" viewBox="0 0 150 150" fill="none">
        <defs><linearGradient id="sprg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2d7fff"/>
          <stop offset="100%" stopColor="#6062ff"/>
        </linearGradient></defs>
        <circle cx="75" cy="75" r="71" stroke="url(#sprg)" strokeWidth="1.4" strokeDasharray="8 5"/>
        <circle cx="75" cy="75" r="51" stroke="#6062ff" strokeWidth="0.8" strokeOpacity="0.30"/>
        <circle cx="75" cy="75" r="31" stroke="#2d7fff" strokeWidth="0.6" strokeOpacity="0.18"/>
        <circle cx="75" cy="4" r="4" fill="#2d7fff"/>
        <circle cx="146" cy="75" r="4" fill="#6062ff"/>
      </svg>

      {/* Diamond — bottom-left */}
      <svg className="hidden lg:block" style={{ position:"absolute", bottom:"72px", left:"5%", opacity:0.09, animation:"floatB 10s ease-in-out infinite" }}
        width="78" height="78" viewBox="0 0 78 78" fill="none">
        <defs><linearGradient id="spdg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6062ff" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#2d7fff" stopOpacity="0.4"/>
        </linearGradient></defs>
        <rect x="39" y="3" width="52" height="52" rx="5" transform="rotate(45 39 3)" fill="url(#spdg)"/>
        <rect x="39" y="15" width="33" height="33" rx="3" transform="rotate(45 39 15)" fill="none" stroke="#2d7fff" strokeWidth="0.8" strokeOpacity="0.40"/>
      </svg>

      {/* Dot cluster — right */}
      <svg className="hidden xl:block" style={{ position:"absolute", top:"20%", right:"1%", opacity:0.09 }}
        width="68" height="112" viewBox="0 0 68 112" fill="none">
        <defs><linearGradient id="spdtg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d7fff"/>
          <stop offset="100%" stopColor="#6062ff"/>
        </linearGradient></defs>
        {[0,1,2,3,4,5].map(i=>[0,1,2].map(j=>(
          <circle key={`${i}-${j}`} cx={j*22+11} cy={i*22+11} r="2.2" fill="url(#spdtg)" opacity={1-i*0.12}/>
        )))}
      </svg>

      {/* Plus — bottom-right */}
      <svg className="hidden lg:block" style={{ position:"absolute", bottom:"16%", right:"8%", opacity:0.08, animation:"floatB 8s ease-in-out infinite 1s" }}
        width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="12" y="0" width="8" height="32" rx="4" fill="#6062ff"/>
        <rect x="0" y="12" width="32" height="8" rx="4" fill="#2d7fff"/>
      </svg>
    </div>
  );
}

// ─── Step Card ────────────────────────────────────────────────────────────────

function StepCard({ step, index, visible, isLast }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ display:"flex", gap:"20px",
      opacity:visible?1:0, transform:visible?"translateX(0)":"translateX(-22px)",
      transition:`opacity 0.65s ease ${0.12+index*0.09}s, transform 0.65s ease ${0.12+index*0.09}s` }}>

      {/* Left: icon + line */}
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
        <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
          style={{ width:"44px", height:"44px", borderRadius:"12px", flexShrink:0,
            background:hov?"rgba(45,127,255,0.14)":"rgba(45,127,255,0.07)",
            border:`1px solid ${hov?"rgba(45,127,255,0.42)":"rgba(45,127,255,0.18)"}`,
            display:"flex", alignItems:"center", justifyContent:"center",
            color:"#2d7fff", transition:"all 0.3s" }}>
          {step.icon}
        </div>
        {!isLast && <div style={{ width:"1px", flex:1, minHeight:"28px", marginTop:"6px",
          background:"linear-gradient(to bottom,rgba(45,127,255,0.22),transparent)" }}/>}
      </div>

      {/* Right: text */}
      <div style={{ paddingBottom:isLast?"0":"28px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginTop:"10px", marginBottom:"5px" }}>
          <span style={{ fontFamily:"'Roboto Mono',monospace", fontSize:"10px",
            color:"rgba(45,127,255,0.55)", letterSpacing:"0.12em" }}>{step.num}</span>
          <p style={{ fontFamily:"'Oswald',sans-serif", fontSize:"15px", fontWeight:500,
            letterSpacing:"0.04em", color:"#fff", margin:0 }}>{step.title}</p>
        </div>
        <p style={{ fontFamily:"'Roboto Mono',monospace", fontSize:"11.5px",
          lineHeight:1.8, color:"rgba(255,255,255,0.36)", margin:0 }}>{step.desc}</p>
      </div>
    </div>
  );
}

// ─── Pricing Card ─────────────────────────────────────────────────────────────

function PricingCard({ plan, index, visible }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        borderRadius:"20px", overflow:"hidden", position:"relative",
        border:`1px solid ${plan.highlight?"rgba(45,127,255,0.40)":hov?"rgba(45,127,255,0.22)":"rgba(255,255,255,0.07)"}`,
        background:plan.highlight?"rgba(45,127,255,0.07)":hov?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.02)",
        padding:"clamp(24px,4%,32px)",
        display:"flex", flexDirection:"column",
        opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(24px)",
        transition:`opacity 0.65s ease ${0.2+index*0.10}s, transform 0.4s ease ${0.2+index*0.10}s, border-color 0.3s, background 0.3s`,
        boxShadow:plan.highlight?"0 0 60px rgba(45,127,255,0.10)":"none",
      }}
    >
      {/* Top shimmer */}
      <div style={{ position:"absolute", top:0, left:"18px", right:"18px", height:"1px",
        background:plan.highlight
          ?"linear-gradient(90deg,transparent,rgba(45,127,255,0.60),transparent)"
          :"linear-gradient(90deg,transparent,rgba(45,127,255,0.22),transparent)" }}/>

      {/* Popular badge */}
      {plan.highlight && (
        <div style={{ position:"absolute", top:"16px", right:"16px",
          padding:"4px 12px", borderRadius:"100px",
          background:"linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
          fontFamily:"'Roboto Mono',monospace", fontSize:"9px",
          letterSpacing:"0.10em", textTransform:"uppercase", color:"#fff" }}>
          Popular
        </div>
      )}

      <p style={{ fontFamily:"'Roboto Mono',monospace", fontSize:"10px",
        letterSpacing:"0.22em", textTransform:"uppercase",
        color:plan.highlight?"#2d7fff":"rgba(255,255,255,0.30)", margin:"0 0 10px 0" }}>
        {plan.name}
      </p>

      <div style={{ display:"flex", alignItems:"baseline", gap:"4px", marginBottom:"6px" }}>
        <span style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(32px,4vw,46px)", fontWeight:600,
          background:plan.highlight
            ?"linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)"
            :"linear-gradient(135deg,rgba(255,255,255,0.85) 0%,rgba(255,255,255,0.55) 100%)",
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
          {plan.price}
        </span>
        <span style={{ fontFamily:"'Roboto Mono',monospace", fontSize:"11px",
          color:"rgba(255,255,255,0.28)", letterSpacing:"0.06em" }}>{plan.period}</span>
      </div>

      <p style={{ fontFamily:"'Oswald',sans-serif", fontSize:"13px", fontWeight:300,
        color:"rgba(255,255,255,0.38)", letterSpacing:"0.04em", margin:"0 0 22px 0" }}>
        {plan.tagline}
      </p>

      <div style={{ height:"1px", marginBottom:"22px",
        background:"linear-gradient(90deg,rgba(45,127,255,0.25),rgba(96,98,255,0.10),transparent)" }}/>

      {/* Features */}
      <ul style={{ listStyle:"none", margin:"0 0 28px 0", padding:0, display:"flex", flexDirection:"column", gap:"10px", flex:1 }}>
        {plan.features.map(f=>(
          <li key={f} style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke={plan.highlight?"#2d7fff":"rgba(45,127,255,0.55)"}
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span style={{ fontFamily:"'Roboto Mono',monospace", fontSize:"11px",
              color:"rgba(255,255,255,0.45)", letterSpacing:"0.03em" }}>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact"
        style={{
          display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
          padding:"13px 24px", borderRadius:"100px", textDecoration:"none",
          background:plan.highlight
            ?"linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)"
            :"rgba(255,255,255,0.04)",
          border:plan.highlight?"none":`1px solid ${hov?"rgba(45,127,255,0.35)":"rgba(255,255,255,0.10)"}`,
          color:plan.highlight?"#fff":hov?"#fff":"rgba(255,255,255,0.60)",
          fontFamily:"'Oswald',sans-serif", fontSize:"12px", fontWeight:500,
          letterSpacing:"0.10em", textTransform:"uppercase",
          boxShadow:plan.highlight?"0 4px 22px rgba(45,127,255,0.28)":"none",
          transition:"all 0.25s" }}
        onMouseEnter={e=>{ if(plan.highlight){ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 30px rgba(45,127,255,0.42)"; }}}
        onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; if(plan.highlight) e.currentTarget.style.boxShadow="0 4px 22px rgba(45,127,255,0.28)"; }}>
        {plan.cta}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesProcess() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    const obs = new IntersectionObserver(([e])=>{ if(e.isIntersecting) setVisible(true); },{ threshold:0.06 });
    if(ref.current) obs.observe(ref.current);
    return ()=>obs.disconnect();
  },[]);

  return (
    <section ref={ref} id="services-process"
      style={{ position:"relative", overflow:"hidden", background:"#000",
        padding:"clamp(80px,10vw,120px) clamp(20px,5%,60px)" }}>
      <FloatingShapes/>

      <div style={{ position:"relative", maxWidth:"1140px", margin:"0 auto" }}>

        {/* ── Process section ── */}
        <div style={{ marginBottom:"clamp(72px,9vw,110px)" }}>
          <div style={{ textAlign:"center", marginBottom:"clamp(40px,5vw,60px)",
            opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(20px)",
            transition:"all 0.7s ease 0.05s" }}>
            <p style={{ fontFamily:"'Roboto Mono',monospace", fontSize:"11px",
              letterSpacing:"0.38em", textTransform:"uppercase", color:"#2d7fff", margin:"0 0 10px 0" }}>
              // how i work
            </p>
            <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(30px,4vw,48px)",
              fontWeight:400, color:"#fff", margin:"0 0 14px 0", lineHeight:1.15, letterSpacing:"-0.01em" }}>
              The{" "}
              <span style={{ background:"linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Process
              </span>
            </h2>
            <p style={{ fontFamily:"'Roboto Mono',monospace", fontSize:"13px",
              color:"rgba(255,255,255,0.28)", maxWidth:"380px", margin:"0 auto",
              lineHeight:1.8, letterSpacing:"0.02em" }}>
              A simple, proven five-step flow from first conversation to live product.
            </p>
          </div>

          {/* Steps — two-column on desktop */}
          <div className="sp-steps-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"0 60px" }}>
            {STEPS.map((step,i)=>(
              <StepCard key={i} step={step} index={i} visible={visible} isLast={i===STEPS.length-1}/>
            ))}
          </div>
        </div>

        {/* ── Pricing section ── */}
        <div>
          <div style={{ textAlign:"center", marginBottom:"clamp(40px,5vw,60px)",
            opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(20px)",
            transition:"all 0.7s ease 0.25s" }}>
            <p style={{ fontFamily:"'Roboto Mono',monospace", fontSize:"11px",
              letterSpacing:"0.38em", textTransform:"uppercase", color:"#2d7fff", margin:"0 0 10px 0" }}>
              // pricing
            </p>
            <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(30px,4vw,48px)",
              fontWeight:400, color:"#fff", margin:"0 0 14px 0", lineHeight:1.15, letterSpacing:"-0.01em" }}>
              Clear,{" "}
              <span style={{ background:"linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Transparent
              </span>{" "}Pricing
            </h2>
            <p style={{ fontFamily:"'Roboto Mono',monospace", fontSize:"13px",
              color:"rgba(255,255,255,0.28)", maxWidth:"380px", margin:"0 auto",
              lineHeight:1.8, letterSpacing:"0.02em" }}>
              No hidden fees. Every project starts with a written quote you approve before work begins.
            </p>
          </div>

          {/* Pricing grid */}
          <div className="sp-price-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"12px", marginBottom:"clamp(48px,6vw,72px)" }}>
            {PLANS.map((plan,i)=>(
              <PricingCard key={i} plan={plan} index={i} visible={visible}/>
            ))}
          </div>

          {/* Final CTA banner */}
          <div style={{
            borderRadius:"20px", overflow:"hidden", position:"relative",
            border:"1px solid rgba(45,127,255,0.22)",
            background:"rgba(45,127,255,0.04)",
            padding:"clamp(32px,5%,52px) clamp(24px,4%,48px)",
            textAlign:"center",
            opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(20px)",
            transition:"all 0.7s ease 0.55s" }}>
            <div style={{ position:"absolute", top:0, left:"20%", right:"20%", height:"1px",
              background:"linear-gradient(90deg,transparent,rgba(45,127,255,0.50),transparent)" }}/>
            {/* Glow */}
            <div style={{ position:"absolute", inset:0, pointerEvents:"none",
              background:"radial-gradient(ellipse at 50% 0%, rgba(45,127,255,0.08) 0%, transparent 60%)" }}/>

            <p style={{ fontFamily:"'Roboto Mono',monospace", fontSize:"11px",
              letterSpacing:"0.30em", textTransform:"uppercase", color:"#2d7fff",
              margin:"0 0 12px 0", position:"relative" }}>
              // not sure which plan fits?
            </p>
            <h3 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(22px,3vw,36px)",
              fontWeight:400, color:"#fff", margin:"0 0 12px 0",
              lineHeight:1.2, position:"relative" }}>
              Let's figure it out{" "}
              <span style={{ background:"linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                together.
              </span>
            </h3>
            <p style={{ fontFamily:"'Roboto Mono',monospace", fontSize:"12px",
              color:"rgba(255,255,255,0.30)", maxWidth:"400px", margin:"0 auto 28px",
              lineHeight:1.8, position:"relative" }}>
              A 20-minute call costs nothing. Most projects are scoped and quoted within 48 hours.
            </p>
            <a href="#contact"
              style={{ display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"14px 36px", borderRadius:"100px",
                background:"linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                color:"#fff", textDecoration:"none",
                fontFamily:"'Oswald',sans-serif", fontSize:"12px", fontWeight:500,
                letterSpacing:"0.10em", textTransform:"uppercase",
                boxShadow:"0 4px 24px rgba(45,127,255,0.28)",
                position:"relative", transition:"transform 0.25s, box-shadow 0.25s" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 32px rgba(45,127,255,0.42)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 24px rgba(45,127,255,0.28)"; }}>
              Book a Free Call
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:768px){
          .sp-steps-grid{ grid-template-columns:1fr 1fr !important; }
          .sp-price-grid{ grid-template-columns:repeat(3,1fr) !important; }
        }
        @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(-5deg)}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `}</style>
    </section>
  );
}