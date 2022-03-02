import {
  FC,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import s from './style.module.css';

export const Background: FC = () => {
  const [isRevealEnded, setIsRevealEnded] = useState<boolean>(false);
  const [isVerticalVideo, setIsVerticalVideo] = useState<boolean>(false);
  const revealVideoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const handleVideoEnded = () => {
      setIsRevealEnded(true);
    };
    revealVideoRef.current?.addEventListener('ended', handleVideoEnded);

    return () => {
      revealVideoRef.current?.removeEventListener('ended', handleVideoEnded);
    };
  }, [revealVideoRef.current]);

  useLayoutEffect(() => {
    const handleResize = (event: Event) => {
      const window = event.target as Window;

      if (window.innerWidth >= window.innerHeight) {
        setIsVerticalVideo(false);
        return;
      }

      setIsVerticalVideo(true);
    };
    window.addEventListener('resize', handleResize);

    if (window.innerWidth < window.innerHeight) {
      setIsVerticalVideo(true);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getVideoDist = (fileName: string) => {
    if (isVerticalVideo) {
      return `${fileName}_vert`;
    }

    return fileName;
  };

  return (
    <div className={`${s.container} ${isRevealEnded ? s.static : ''}`}>
      <video
        src={`/assets/${getVideoDist('background-static')}.mp4`}
        loop
        autoPlay
        playsInline
        muted
        className={s.video}
      />
      <video
        src={`/assets/${getVideoDist('background-reveal')}.mp4`}
        autoPlay
        playsInline
        muted
        ref={revealVideoRef}
        className={s.video}
      />
    </div>
  );
};
