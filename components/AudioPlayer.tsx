import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { pushEvent } from '../lib/cta';

type AudioPlayerProps = {
  src: string;
  title: string;
  pressId: string;
  outlet: string;
};

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title, pressId, outlet }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasTrackedPlay = useRef(false);
  const previousVolume = useRef(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [hasError, setHasError] = useState(false);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const syncDuration = () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };

    setCurrentTime(0);
    setDuration(0);
    setHasError(false);
    syncDuration();
    audio.addEventListener('loadedmetadata', syncDuration);
    audio.addEventListener('durationchange', syncDuration);

    return () => {
      audio.removeEventListener('loadedmetadata', syncDuration);
      audio.removeEventListener('durationchange', syncDuration);
    };
  }, [src]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      setHasError(false);
      try {
        await audio.play();
      } catch {
        setHasError(true);
      }
    } else {
      audio.pause();
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || duration <= 0) return;
    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextVolume = Number(event.target.value);
    audio.volume = nextVolume;
    audio.muted = false;
    setVolume(nextVolume);
    if (nextVolume > 0) previousVolume.current = nextVolume;
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.muted || volume === 0) {
      const restoredVolume = previousVolume.current || 1;
      audio.muted = false;
      audio.volume = restoredVolume;
      setVolume(restoredVolume);
    } else {
      previousVolume.current = volume;
      audio.muted = true;
      setVolume(0);
    }
  };

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[#0D0B10] p-4 sm:p-5">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        controls={false}
        controlsList="nodownload"
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => {
          setIsPlaying(true);
          if (!hasTrackedPlay.current) {
            hasTrackedPlay.current = true;
            pushEvent('press_audio_play', { press_id: pressId, outlet });
          }
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          pushEvent('press_audio_complete', { press_id: pressId, outlet });
        }}
        onError={() => setHasError(true)}
      />

      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={togglePlayback}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#0D090B] transition-transform hover:scale-105 active:scale-95"
          aria-label={isPlaying ? `Pausar ${title}` : `Reproducir ${title}`}
        >
          {isPlaying ? <Pause className="h-5 w-5" fill="currentColor" /> : <Play className="ml-0.5 h-5 w-5" fill="currentColor" />}
        </button>

        <div className="min-w-0 flex-1">
          <label htmlFor={`audio-progress-${pressId}`} className="sr-only">
            Posición de reproducción
          </label>
          <input
            id={`audio-progress-${pressId}`}
            className="press-range block w-full"
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={handleSeek}
            style={{ '--range-progress': `${progress}%` } as React.CSSProperties}
            aria-valuetext={`${formatTime(currentTime)} de ${duration > 0 ? formatTime(duration) : 'duración pendiente'}`}
            disabled={duration <= 0}
          />
          <div className="mt-2 flex items-center justify-between font-mono text-[10px] tabular-nums text-slate-400" aria-live="off">
            <span>{formatTime(currentTime)}</span>
            <span>{duration > 0 ? formatTime(duration) : '–:––'}</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleMute}
            className="rounded-full p-2 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            aria-label={volume === 0 ? 'Activar sonido' : 'Silenciar audio'}
          >
            {volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <label htmlFor={`audio-volume-${pressId}`} className="sr-only">
            Volumen
          </label>
          <input
            id={`audio-volume-${pressId}`}
            className="press-range hidden w-16 sm:block lg:w-20"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolume}
            style={{ '--range-progress': `${volume * 100}%` } as React.CSSProperties}
            aria-valuetext={`${Math.round(volume * 100)} %`}
          />
        </div>
      </div>

      {hasError && (
        <p className="mt-3 text-xs text-amber-200" role="status">
          No se pudo reproducir el audio. Comprueba tu conexión e inténtalo de nuevo.
        </p>
      )}
    </div>
  );
};

export default AudioPlayer;
