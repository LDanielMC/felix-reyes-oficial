import { useState, useRef, useEffect } from 'react';

/**
 * Custom hook for managing services carousel state and scroll logic.
 * Handles scroll position, navigation buttons state, and scroll functions.
 */
export const useServicios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const isAtStart = scrollLeft < 10;
      const isAtEnd = scrollLeft > scrollWidth - clientWidth - 10;

      setCanScrollLeft(!isAtStart);
      setCanScrollRight(!isAtEnd);

      // Update current slide based on scroll position
      if (scrollRef.current.children.length > 0) {
        const scrollContainer = scrollRef.current;
        // Adjusting for the removed padding divs at start/end
        const cards = Array.from(scrollContainer.children) as HTMLElement[];

        if (cards.length > 0) {
          const scrollPosition = scrollLeft + scrollContainer.offsetWidth / 2;
          let closestCardIndex = 0;
          let minDistance = Infinity;

          cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();
            const cardCenter = cardRect.left - containerRect.left + cardRect.width / 2;
            const distance = Math.abs(scrollPosition - cardCenter);

            if (distance < minDistance) {
              minDistance = distance;
              closestCardIndex = index;
            }
          });

          setCurrentSlide(closestCardIndex);
        }
      }
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      // Recalcular al redimensionar la ventana
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.clientWidth;
      const scrollAmount = containerWidth * 0.8; // Scroll 80% of container width

      const targetScroll = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });

      // Update scroll state after animation
      setTimeout(() => {
        checkScrollButtons();
      }, 300);
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      if (card) {
        const container = scrollRef.current;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const containerWidth = container.clientWidth;
        const scrollLeft = cardLeft - (containerWidth - cardWidth) / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  return {
    currentSlide,
    scrollRef,
    canScrollLeft,
    canScrollRight,
    scrollTo,
    scrollToCard,
    checkScrollButtons
  };
};