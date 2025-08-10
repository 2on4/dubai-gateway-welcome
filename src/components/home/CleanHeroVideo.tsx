import { useEffect, useRef, useState, useCallback } from 'react';
import { siteConfig } from '@/data/siteConfig';

const CleanHeroVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = siteConfig.hero.videos;

  const switchToNextVideo = useCallback(() => {
    const nextIndex = (currentIndex + 1) % videos.length;
    const currentVideo = videoRefs.current[currentIndex];
    const nextVideo = videoRefs.current[nextIndex];

    if (currentVideo) currentVideo.pause();
    setCurrentIndex(nextIndex);
    setTimeout(() => {
      nextVideo?.play().catch(() => {/* ignore */});
    }, 150);
  }, [currentIndex, videos.length]);

  const handleEnded = useCallback((idx: number) => {
    if (idx === currentIndex) switchToNextVideo();
  }, [currentIndex, switchToNextVideo]);

  useEffect(() => {
    const first = videoRefs.current[0];
    first?.play().catch(() => {/* ignore */});
  }, []);

  if (!videos.length || hasError) {
    return (
      <img src={siteConfig.hero.fallback.globalFallbackImage} alt="Hero fallback" className="absolute inset-0 w-full h-full object-cover" />
    );
  }

  return (
    <div className="absolute inset-0">
      {videos.map((v, i) => (
        <video
          key={v.url + i}
          ref={(el) => (videoRefs.current[i] = el)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          src={v.url}
          onError={() => setHasError(true)}
          onEnded={() => handleEnded(i)}
          muted
          loop={false}
          playsInline
          preload="metadata"
          autoPlay={i === 0}
        />
      ))}
    </div>
  );
};

export default CleanHeroVideo;
