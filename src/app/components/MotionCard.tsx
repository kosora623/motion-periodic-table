import React from 'react';

type Props = {
  videoSrc: string;
  col: number;
  row: number;
  onClick: () => void;
};

export default function MotionCard({ videoSrc, col, row, onClick }: Props) {
  return (
    <div 
      className="element-card"
      style={{
        gridColumn: col,
        gridRow: row,
      }}
      onClick={onClick}
    >
      {/* 動画のみを表示 */}
      <div className="video-full-frame">
        {videoSrc && (
          <video
            className="element-video"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </div>
    </div>
  );
}