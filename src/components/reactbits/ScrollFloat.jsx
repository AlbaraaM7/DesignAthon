import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollFloat.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=40%',
  scrollEnd = 'bottom bottom-=20%',
  stagger = 0.02
}) => {
  const containerRef = useRef(null);

  const splitWords = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    // '\n' forces a line break; words never split mid-word — characters inside
    // a word are inline-block spans so GSAP can still animate them.
    return text.split('\n').map((line, li) => (
      <span className="line" key={li}>
        {line.split(' ').filter(Boolean).map((word, wi, words) => (
          <span className="word" key={wi}>
            {word.split('').map((char, ci) => (
              <span className="char" key={ci}>
                {char}
              </span>
            ))}
            {wi < words.length - 1 ? ' ' : null}
          </span>
        ))}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const charElements = el.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charElements,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 100,
          scaleY: 1.8,
          scaleX: 0.8,
          transformOrigin: '50% 0%'
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: 1
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <div ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitWords}</span>
    </div>
  );
};

export default ScrollFloat;
