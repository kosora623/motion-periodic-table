"use client";

import { useState } from "react";
import MotionCard from "./components/MotionCard";
import { motions, type MotionElement } from "./data/motions";

export default function Home() {
  const [selectedMotion, setSelectedMotion] = useState<MotionElement | null>(null);
  const [activeTab, setActiveTab] = useState<"ae" | "aviutl">("ae");

  return (
    <main className="main-container" style={{ padding: '20px', minHeight: '100vh', background: '#222', position: 'relative' }}>
      
      <div className="periodic-grid">
        <div className="table-title">
          <h1 style={{ fontSize: '3.5vw', fontFamily: 'serif', margin: 0, letterSpacing: '0.1em' }}>
            MOTION<br/>PERIODIC TABLE
          </h1>
          <p style={{ fontSize: '0.8rem', color: '#888' }}>モーション周期表</p>
        </div>

        {motions.map((motion) => (
          <MotionCard
            key={motion.id}
            col={motion.col}
            row={motion.row}
            number={motion.id} 
            symbol={motion.symbol}
            name={motion.name}
            videoSrc={motion.videoSrc}
            onClick={() => {
              setSelectedMotion(motion);
              setActiveTab("ae");
            }}
          />
        ))}
      </div>

      {/* 詳細モーダル */}
      {selectedMotion && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            padding: '40px'
          }}
          onClick={() => setSelectedMotion(null)}
        >
          <div 
            style={{
              width: '100%', maxWidth: '1000px',
              maxHeight: '90vh',
              backgroundColor: '#111', 
              border: '1px solid #333', 
              borderRadius: '0',
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'row',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 左側：動画エリア */}
            <div style={{ 
              flex: '1.2',
              maxHeight: '90vh',
              backgroundColor: '#000', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRight: '1px solid #222' 
            }}>
              <video
                src={selectedMotion.videoSrc}
                autoPlay loop muted playsInline
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain' 
                }}
              />
            </div>

            {/* 右側：詳細情報エリア */}
            <div style={{ 
              flex: '1', 
              maxHeight: '90vh',
              display: 'flex', flexDirection: 'column',
              backgroundColor: '#111',
              overflowY: 'auto', 
              padding: '40px'
            }}>
              
              {/* タイトル */}
              <h2 style={{ 
                fontSize: '2.2rem', fontFamily: 'serif', margin: '0 0 30px 0',
                color: '#fff', letterSpacing: '0.05em', lineHeight: 1.2,
                borderBottom: '1px solid #333', paddingBottom: '20px',
                flexShrink: 0 
              }}>
                {selectedMotion.name}
              </h2>

              {/* 説明文エリア */}
              <div style={{ marginBottom: '40px' }}>
                <p style={{ 
                  fontSize: '1rem', color: '#ddd', lineHeight: '1.8', 
                  whiteSpace: 'pre-wrap', margin: 0 
                }}>
                  {selectedMotion.description}
                </p>
              </div>

              {/* タブと解説ボックス */}
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '0', position: 'relative', top: '1px', zIndex: 1 }}>
                  <button 
                    onClick={() => setActiveTab("ae")}
                    style={{
                      background: activeTab === "ae" ? '#1a1a1a' : 'transparent',
                      border: '1px solid #333', 
                      borderBottom: activeTab === "ae" ? '1px solid #1a1a1a' : '1px solid #333',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer', padding: '10px 20px',
                      fontSize: '0.9rem', fontFamily: 'serif', letterSpacing: '0.1em',
                      color: activeTab === "ae" ? '#00ffff' : '#666',
                      transition: 'all 0.2s'
                    }}
                  >
                    After Effects
                  </button>
                  <button 
                    onClick={() => setActiveTab("aviutl")}
                    style={{
                      background: activeTab === "aviutl" ? '#1a1a1a' : 'transparent',
                      border: '1px solid #333',
                      borderBottom: activeTab === "aviutl" ? '1px solid #1a1a1a' : '1px solid #333',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer', padding: '10px 20px',
                      fontSize: '0.9rem', fontFamily: 'serif', letterSpacing: '0.1em',
                      color: activeTab === "aviutl" ? '#ff00ff' : '#666',
                      transition: 'all 0.2s'
                    }}
                  >
                    AviUtl
                  </button>
                </div>

                {/* 解説ボックス */}
                <div style={{ 
                  backgroundColor: '#1a1a1a', 
                  padding: '25px', 
                  border: '1px solid #333',
                  borderRadius: '0 4px 4px 4px',
                  minHeight: '150px', 
                  fontSize: '0.95rem', 
                  color: '#eee', 
                  lineHeight: '1.8', 
                  whiteSpace: 'pre-wrap',
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)'
                }}>
                  {activeTab === "ae" ? selectedMotion.text_ae : selectedMotion.text_aviutl}
                </div>
              </div>

              {/* CLOSEボタン */}
              <button 
                onClick={() => setSelectedMotion(null)}
                style={{
                  marginTop: '40px', padding: '15px 0', width: '100%',
                  backgroundColor: 'transparent', color: '#666', 
                  border: '1px solid #444', borderRadius: '0',
                  cursor: 'pointer', fontFamily: 'serif', letterSpacing: '0.2em',
                  transition: 'all 0.3s',
                  flexShrink: 0
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.color = '#666'; }}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}