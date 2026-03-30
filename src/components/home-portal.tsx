"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  blogPosts,
  featureSlides,
  heroChips,
  plans,
  useCases,
} from "@/data/home";
import { primaryNavigation } from "@/data/site-pages";
import { PortalFooter, PortalNav } from "./portal-nav";
import styles from "./home-portal.module.css";

const STORE_URL = "https://erp.tmcsmart.com";
const LOGIN_URL = "https://erp.tmcsmart.com/web/login";
const PARTICLE_COUNT = 56;

type ParticleConfig = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  depth: number;
  cycle: number;
  phase: number;
  amplitudeX: number;
  amplitudeY: number;
  follow: number;
  drift: number;
};

function BrandMark() {
  return (
    <Image
      src="/logo-transparent.png"
      alt="TMC SMART Logo"
      className={styles.brandMark}
      width={1024}
      height={597}
      priority
    />
  );
}

function ArrowLeft() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.arrowIcon}>
      <path d="M14.5 6.5L9 12l5.5 5.5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.arrowIcon}>
      <path d="M9.5 6.5L15 12l-5.5 5.5" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.windowIcon}>
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  );
}

export function HomePortal() {
  const [featureIndex, setFeatureIndex] = useState(0);
  const [cookieVisible, setCookieVisible] = useState(true);
  const [typedCount, setTypedCount] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const [heroActionsVisible, setHeroActionsVisible] = useState(false);
  const [headlineScale, setHeadlineScale] = useState(1);
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const featureRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const firstLineMeasureRef = useRef<HTMLSpanElement>(null);
  const particleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const heroLeadLine = "Take performance to the next-generation with ";
  const heroBrand = "TMC";
  const heroSlogan = "Your Keys for Business";
  const heroTitle = `${heroLeadLine}${heroBrand} ${heroSlogan}`;
  const TYPING_START_DELAY = 140;
  const TARGET_TYPING_TIME_MS = 3600;
  const CURSOR_SETTLE_TIME_MS = 220;
  const CURSOR_EXIT_TIME_MS = 220;

  const firstLineCharacters = useMemo(
    () => [
      ...heroLeadLine.split("").map((value, index) => ({
        key: `lead-${index}`,
        value,
        tone: "default",
      })),
      ...heroBrand.split("").map((value, index) => ({
        key: `brand-${index}`,
        value,
        tone:
          index === heroBrand.length - 1 ? "logoOrange" : "logoBlue",
      })),
    ],
    [heroBrand, heroLeadLine],
  );

  const sloganCharacters = useMemo(
    () =>
      [...heroSlogan.split("").map((value, index) => ({
        key: `slogan-${index}`,
        value,
        tone: "default",
      }))],
    [heroSlogan],
  );

  const allTypingCharacters = useMemo(
    () => [...firstLineCharacters, ...sloganCharacters],
    [firstLineCharacters, sloganCharacters],
  );

  const characterRevealDelays = useMemo(() => {
    if (!allTypingCharacters.length) {
      return [];
    }

    const getCharacterWeight = (value: string, index: number) => {
      let weight = value === " " ? 0.52 : value === "-" ? 0.82 : 1;

      if (index === firstLineCharacters.length - 1) {
        weight += 1.8;
      }

      return weight;
    };

    const totalWeight = allTypingCharacters.reduce(
      (sum, character, index) =>
        sum + getCharacterWeight(character.value, index),
      0,
    );

    const unitDuration = TARGET_TYPING_TIME_MS / totalWeight;
    let elapsed = TYPING_START_DELAY;

    return allTypingCharacters.map((character, index) => {
      elapsed += getCharacterWeight(character.value, index) * unitDuration;
      return Math.round(elapsed);
    });
  }, [
    TARGET_TYPING_TIME_MS,
    TYPING_START_DELAY,
    allTypingCharacters,
    firstLineCharacters.length,
  ]);

  const totalTypingTimeMs =
    (characterRevealDelays.at(-1) ?? TYPING_START_DELAY) + CURSOR_SETTLE_TIME_MS;

  const renderHeadlineCharacters = (
    characters: typeof firstLineCharacters,
    limit = characters.length,
    variantClassName = "",
  ) =>
    characters.slice(0, limit).map((character) => {
      const toneClass =
        character.tone === "logoBlue"
          ? styles.logoBlueLetter
          : character.tone === "logoOrange"
            ? styles.logoOrangeLetter
            : "";
      const className = [styles.typedLetter, variantClassName, toneClass]
        .filter(Boolean)
        .join(" ");

      return (
        <span key={character.key} className={className}>
          {character.value === " " ? "\u00A0" : character.value}
        </span>
      );
    });

  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, index) => {
        const x = ((((index * 17) % 100) / 100) * 0.9) + 0.05;
        const y = ((((index * 29 + 11) % 100) / 100) * 0.86) + 0.07;
        const band = index % 7;

        return {
          id: index,
          x,
          y,
          size: 2.6 + band * 0.42,
          opacity: 0.26 + (index % 5) * 0.07,
          depth: 10 + (index % 6) * 3.5,
          cycle: 1.85 + (index % 6) * 0.12,
          phase: index * 0.72,
          amplitudeX: 4 + (index % 4) * 1.25,
          amplitudeY: 6 + (index % 5) * 1.4,
          follow: 3 + (index % 6) * 0.75,
          drift: 8 + (index % 4) * 2.2,
        } satisfies ParticleConfig;
      }),
    [],
  );

  const activeFeature = featureSlides[featureIndex];

  const goPrev = () =>
    setFeatureIndex((current) =>
      current === 0 ? featureSlides.length - 1 : current - 1,
    );

  const goNext = () =>
    setFeatureIndex((current) =>
      current === featureSlides.length - 1 ? 0 : current + 1,
    );

  useEffect(() => {
    setTypedCount(0);
    setTypingComplete(false);
    setHeroActionsVisible(false);

    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setTypedCount(allTypingCharacters.length);
      setTypingComplete(true);
      setHeroActionsVisible(true);
      return;
    }

    const timers: number[] = [];

    characterRevealDelays.forEach((delay, index) => {
      timers.push(
        window.setTimeout(() => {
          setTypedCount(index + 1);
        }, delay),
      );
    });

    timers.push(
      window.setTimeout(() => {
        setTypingComplete(true);
      }, totalTypingTimeMs),
    );

    timers.push(
      window.setTimeout(() => {
        setHeroActionsVisible(true);
      }, totalTypingTimeMs + CURSOR_EXIT_TIME_MS),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [
    CURSOR_EXIT_TIME_MS,
    allTypingCharacters.length,
    characterRevealDelays,
    totalTypingTimeMs,
  ]);

  useEffect(() => {
    const headline = headlineRef.current;
    const firstLineMeasure = firstLineMeasureRef.current;

    if (!headline || !firstLineMeasure || typeof window === "undefined") {
      return;
    }

    let frame = 0;

    const updateScale = () => {
      frame = 0;

      const availableWidth = headline.clientWidth;
      const measuredWidth = firstLineMeasure.getBoundingClientRect().width;

      if (!availableWidth || !measuredWidth) {
        return;
      }

      const nextScale = Math.max(
        0.76,
        Math.min(1, headlineScale * (availableWidth / measuredWidth)),
      );

      if (Math.abs(nextScale - headlineScale) > 0.01) {
        setHeadlineScale(nextScale);
      }
    };

    const scheduleScale = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateScale);
      }
    };

    const resizeObserver = new ResizeObserver(scheduleScale);
    resizeObserver.observe(headline);
    resizeObserver.observe(firstLineMeasure);
    window.addEventListener("resize", scheduleScale);
    void document.fonts?.ready.then(scheduleScale);
    scheduleScale();

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleScale);
    };
  }, [headlineScale]);

  useEffect(() => {
    const page = pageRef.current;
    const hero = heroRef.current;

    if (!page || !hero) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;
    let particleFrame = 0;
    const sections = page.querySelectorAll("section");
    const particleNodes = particleRefs.current;
    const pointerState = {
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
      targetNormX: 0.5,
      targetNormY: 0.5,
      currentNormX: 0.5,
      currentNormY: 0.5,
    };

    const updateMotion = () => {
      frame = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const height = section.offsetHeight || 1;
        const progress = Math.min(
          Math.max((window.innerHeight - rect.top) / (window.innerHeight + height), 0),
          1
        );
        section.style.setProperty("--scroll-progress", progress.toFixed(3));
      });
    };

    const scheduleMotion = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateMotion);
      }
    };

    const animateParticles = (now: number) => {
      particleFrame = window.requestAnimationFrame(animateParticles);

      const rect = hero.getBoundingClientRect();
      const heroProgress = Math.min(
        Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0),
        1,
      );

      pointerState.currentX += (pointerState.targetX - pointerState.currentX) * 0.08;
      pointerState.currentY += (pointerState.targetY - pointerState.currentY) * 0.08;
      pointerState.currentNormX +=
        (pointerState.targetNormX - pointerState.currentNormX) * 0.08;
      pointerState.currentNormY +=
        (pointerState.targetNormY - pointerState.currentNormY) * 0.08;

      page.style.setProperty("--pointer-x", pointerState.currentX.toFixed(3));
      page.style.setProperty("--pointer-y", pointerState.currentY.toFixed(3));
      page.style.setProperty("--hero-progress", heroProgress.toFixed(3));
      page.style.setProperty(
        "--hero-shift",
        `${((heroProgress - 0.5) * -26 + pointerState.currentY * 10).toFixed(2)}px`,
      );
      page.style.setProperty(
        "--hero-rotate",
        `${(pointerState.currentX * 1.8).toFixed(2)}deg`,
      );

      if (prefersReducedMotion) {
        return;
      }

      const time = now / 1000;

      particles.forEach((particle, index) => {
        const node = particleNodes[index];

        if (!node) {
          return;
        }

        const deltaX = particle.x - pointerState.currentNormX;
        const deltaY = particle.y - pointerState.currentNormY;
        const distance = Math.hypot(deltaX, deltaY) || 0.0001;
        const radius = 0.22 + (particle.depth / 140);
        const influence = Math.max(0, 1 - distance / radius);
        const repel = influence * influence * particle.drift * 2.6;
        const wavePhase = (time * ((Math.PI * 2) / particle.cycle)) + particle.phase;
        const orbitX = Math.sin(wavePhase) * particle.amplitudeX;
        const orbitY = Math.cos(wavePhase * 0.92) * particle.amplitudeY;
        const followX = pointerState.currentX * particle.follow * 7.5;
        const followY = pointerState.currentY * particle.follow * 6.2;
        const repelX = (deltaX / distance) * repel;
        const repelY = (deltaY / distance) * repel;
        const scrollLift = (heroProgress - 0.5) * particle.depth * -1.15;
        const translateX = orbitX + followX + repelX;
        const translateY = orbitY + followY + repelY + scrollLift;
        const scale = 1 + (influence * 0.34) + (Math.sin(wavePhase * 0.8) * 0.08);
        const opacity = Math.min(
          0.92,
          particle.opacity + (influence * 0.2) + ((Math.cos(wavePhase) + 1) * 0.04),
        );

        node.style.transform = `translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
        node.style.opacity = opacity.toFixed(3);
      });
    };

    const handlePointer = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const normalizedX = Math.min(
        Math.max((event.clientX - rect.left) / rect.width, 0),
        1,
      );
      const normalizedY = Math.min(
        Math.max((event.clientY - rect.top) / rect.height, 0),
        1,
      );

      pointerState.targetNormX = normalizedX;
      pointerState.targetNormY = normalizedY;
      pointerState.targetX = (normalizedX - 0.5) * 2;
      pointerState.targetY = (normalizedY - 0.5) * 2;
    };

    const resetPointer = () => {
      pointerState.targetNormX = 0.5;
      pointerState.targetNormY = 0.5;
      pointerState.targetX = 0;
      pointerState.targetY = 0;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );

    const revealElements = page.querySelectorAll(`.${styles.reveal}`);
    revealElements.forEach((el) => observer.observe(el));

    scheduleMotion();
    particleFrame = window.requestAnimationFrame(animateParticles);
    window.addEventListener("scroll", scheduleMotion, { passive: true });
    window.addEventListener("resize", scheduleMotion);
    hero.addEventListener("pointermove", handlePointer);
    hero.addEventListener("pointerleave", resetPointer);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      if (particleFrame) {
        window.cancelAnimationFrame(particleFrame);
      }
      observer.disconnect();
      window.removeEventListener("scroll", scheduleMotion);
      window.removeEventListener("resize", scheduleMotion);
      hero.removeEventListener("pointermove", handlePointer);
      hero.removeEventListener("pointerleave", resetPointer);
    };
  }, [particles]);

  const firstLineTypedCount = Math.min(typedCount, firstLineCharacters.length);
  const sloganTypedCount = Math.max(typedCount - firstLineCharacters.length, 0);
  const cursorOnFirstLine = !typingComplete && typedCount < firstLineCharacters.length;
  const cursorOnSloganLine = !typingComplete && typedCount >= firstLineCharacters.length;

  return (
    <div ref={pageRef} className={styles.pageShell}>
      <PortalNav />

      <main id="top" className={styles.main}>
        <section ref={heroRef} className={`${styles.hero} ${styles.cinematicSection}`}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroNoise} aria-hidden="true">
            {particles.map((particle, index) => (
              <span
                key={particle.id}
                ref={(node) => {
                  particleRefs.current[index] = node;
                }}
                className={styles.heroParticle}
                style={{
                  left: `${(particle.x * 100).toFixed(2)}%`,
                  top: `${(particle.y * 100).toFixed(2)}%`,
                  width: `${particle.size.toFixed(2)}px`,
                  height: `${particle.size.toFixed(2)}px`,
                  opacity: particle.opacity,
                }}
              />
            ))}
          </div>

          <div className={styles.heroCenter}>
            <div className={styles.eyebrow}>
              <BrandMark />
            </div>
            <h1
              ref={headlineRef}
              className={styles.typedHeadline}
              aria-label={heroTitle}
              style={{ "--headline-scale": headlineScale } as CSSProperties}
            >
              <span className={styles.headlineLine} aria-hidden="true">
                <span ref={firstLineMeasureRef} className={styles.headlineMeasure}>
                  {renderHeadlineCharacters(firstLineCharacters)}
                </span>
                <span className={styles.headlineTyped}>
                  {renderHeadlineCharacters(firstLineCharacters, firstLineTypedCount)}
                  {cursorOnFirstLine ? (
                    <span
                      className={`${styles.typedCursor} ${styles.typingActive}`}
                      aria-hidden="true"
                    />
                  ) : null}
                </span>
              </span>
              <span
                className={`${styles.headlineLine} ${styles.sloganLine}`}
                aria-hidden="true"
              >
                <span className={styles.headlineMeasure}>
                  {renderHeadlineCharacters(
                    sloganCharacters,
                    sloganCharacters.length,
                    styles.sloganLetter,
                  )}
                </span>
                <span className={`${styles.headlineTyped} ${styles.sloganTyped}`}>
                  {renderHeadlineCharacters(
                    sloganCharacters,
                    sloganTypedCount,
                    styles.sloganLetter,
                  )}
                  {cursorOnSloganLine || typingComplete ? (
                    <span
                      className={`${styles.typedCursor} ${
                        typingComplete ? styles.cursorComplete : styles.typingActive
                      }`}
                      aria-hidden="true"
                    />
                  ) : null}
                </span>
              </span>
            </h1>
            <div className={`${styles.heroActions} ${heroActionsVisible ? styles.heroActionsVisible : ''}`}>
              <a className={styles.primaryAction} href={LOGIN_URL}>
                <GridIcon />
                <span>Login</span>
              </a>
              <a
                className={styles.secondaryAction}
                href={STORE_URL}
              >
                Explore Products
              </a>
            </div>
          </div>

          <div className={styles.iconOrbit} aria-hidden="true">
            {heroChips.map((chip, index) => (
              <span
                key={chip}
                className={styles.heroChipLayer}
                style={
                  {
                    "--chip-depth": `${12 + index * 2}px`,
                    "--chip-delay": `${index * 0.22}s`,
                  } as CSSProperties
                }
              >
                <span
                  className={`${styles.heroChip} ${styles.symbol} ${styles.bouncer}`}
                >
                  {chip}
                </span>
              </span>
            ))}
          </div>
        </section>

        <section
          ref={featureRef}
          id="features"
          className={`${styles.featureStrip} ${styles.cinematicSection}`}
        >
          <div className={`${styles.featureVisual} ${styles.reveal}`}>
            <div className={styles.featureCore}>
              <div className={styles.featureContent} key={featureIndex}>
                <div className={styles.featureEyebrow}>{activeFeature.eyebrow}</div>
                <h2>{activeFeature.title}</h2>
                <p>{activeFeature.body}</p>
              </div>
            </div>
          </div>

          <div className={`${styles.featureRail} ${styles.reveal}`}>
            <div className={styles.featureRailHeader}>
              <button
                className={styles.railButton}
                type="button"
                onClick={goPrev}
                aria-label="Previous feature"
              >
                <ArrowLeft />
              </button>
              <button
                className={styles.railButton}
                type="button"
                onClick={goNext}
                aria-label="Next feature"
              >
                <ArrowRight />
              </button>
            </div>
            <div className={styles.featureRailGrid}>
              {featureSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  className={`${styles.featureCard} ${
                    index === featureIndex ? styles.featureCardActive : ""
                  } ${styles.reveal}`}
                  type="button"
                  onClick={() => setFeatureIndex(index)}
                  style={
                    {
                      transitionDelay: `${index * 100}ms`,
                    } as CSSProperties
                  }
                >
                  <span>{slide.title}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.statementBlock} ${styles.cinematicSection}`}>
          <div className={`${styles.statementCopy} ${styles.reveal}`}>
            <h2>Built for modern teams in the delivery-first era</h2>
            <p>
              TMC SMART is designed to keep execution visible, premium, and
              trustworthy whether you are shipping a focused product update or
              coordinating a complex enterprise program.
            </p>
          </div>
        </section>

        <section className={`${styles.routeSection} ${styles.cinematicSection}`}>
          <div className={`${styles.sectionIntro} ${styles.reveal}`}>
            <span>Site map</span>
            <h2>Actual pages now replace internal-only navigation</h2>
          </div>
          <div className={styles.routeGrid}>
            {primaryNavigation
              .filter((item) => item.href !== "/")
              .map((item) => (
                <Link
                  key={item.href}
                  className={`${styles.routeCard} ${styles.reveal}`}
                  href={item.href}
                  style={
                    {
                      transitionDelay: `${primaryNavigation.indexOf(item) * 100}ms`,
                    } as CSSProperties
                  }
                >
                  <strong>{item.label}</strong>
                  <small>Open page</small>
                </Link>
              ))}
          </div>
        </section>

        <section id="use-cases" className={`${styles.useCasesSection} ${styles.cinematicSection}`}>
          <div className={`${styles.sectionIntro} ${styles.reveal}`}>
            <span>Watch the flow</span>
            <h2>Use cases shaped for different delivery modes</h2>
          </div>
          <div className={styles.useCaseGrid}>
            {useCases.map((item) => (
              <article
                key={item.title}
                className={`${styles.useCaseCard} ${styles.reveal}`}
                style={
                  {
                    transitionDelay: `${useCases.indexOf(item) * 100}ms`,
                  } as CSSProperties
                }
              >
                <div className={styles.cardPreview}>
                  <div className={styles.previewGlow} />
                  <div className={styles.previewPanel}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className={styles.useCaseContent}>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <Link href="/services">{item.cta}</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="plans" className={`${styles.planSection} ${styles.cinematicSection}`}>
          <div className={styles.planGrid}>
            {plans.map((plan) => (
              <article
                key={plan.title}
                className={`${styles.planCard} ${styles.reveal}`}
                style={
                  {
                    transitionDelay: `${plans.indexOf(plan) * 100}ms`,
                  } as CSSProperties
                }
              >
                <span>{plan.badge}</span>
                <small>{plan.label}</small>
                <h3>{plan.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="blogs" className={`${styles.blogSection} ${styles.cinematicSection}`}>
          <div className={`${styles.sectionIntro} ${styles.reveal}`}>
            <span>Latest notes</span>
            <h2>Fresh thinking from the TMC SMART system</h2>
          </div>
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className={`${styles.blogCard} ${styles.reveal}`}
                style={
                  {
                    transitionDelay: `${blogPosts.indexOf(post) * 100}ms`,
                  } as CSSProperties
                }
              >
                <div className={styles.blogVisual} />
                <div className={styles.blogMeta}>
                  <span>{post.category}</span>
                  <small>{post.date}</small>
                </div>
                <Link href="/about-us">{post.title}</Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <PortalFooter />

      {cookieVisible ? (
        <aside className={styles.cookieBanner}>
          <p>
            TMC SMART uses cookies to improve performance, understand
            traffic patterns, and support a more polished experience.
          </p>
          <button type="button" onClick={() => setCookieVisible(false)}>
            Hide
          </button>
        </aside>
      ) : null}
    </div>
  );
}
