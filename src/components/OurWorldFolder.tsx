import { ArrowRight } from 'lucide-react'

const NAVY  = '#1A2B3C'
const GREEN = '#3CB98C'
const MUTED = 'rgba(26,43,60,0.50)'

const SILVER  = 'linear-gradient(145deg, #FFFFFF 0%, #E9F0EC 42%, #C8D6CF 100%)'
const NAVY_G  = `linear-gradient(145deg, #2E465B 0%, ${NAVY} 100%)`
const GREEN_G = 'linear-gradient(145deg, #5BCBA3 0%, #2A9B74 100%)'

/* Folder palette — royal blue like the reference */
const F_FRONT = '#3B4EFF'
const F_BACK  = '#2232CC'
const F_DEEP  = '#1A28B0'

/* Arrow button */
const ARROW_CLR = '#FF9F43'

export function OurWorldFolder() {
  const goToBusinesses = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('our-businesses')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="owf-root">
      {/* Ambient 3D shapes — same visual language as OurWorld hero */}
      <div className="owf-fsbg" aria-hidden>
        <span className="owf-fs owf-fs-1" />
        <span className="owf-fs owf-fs-2" />
        <span className="owf-fs owf-fs-3" />
        <span className="owf-fs owf-fs-4" />
        <span className="owf-fs owf-fs-5" />
      </div>

      {/* Background watermark text */}
      <div className="owf-bgtext" aria-hidden>GROUP</div>

      <div className="owf-wrap">
        {/* Editorial heading */}
        <div className="owf-heading" aria-label="Eloma Group">
          <span className="owf-h-line owf-h-plain">ELOMA</span>
          <span className="owf-h-line owf-h-boxed">GROUP</span>
        </div>

        {/* ── Folder ── */}
        <a
          href="#our-businesses"
          onClick={goToBusinesses}
          className="owf-folder-link"
          aria-label="Open our businesses"
        >
          <div className="owf-folder">

            {/* Back wall + tab */}
            <div className="owf-back">
              <div className="owf-tab" />
            </div>

            {/* Colorful file thumbnails peeking above the front flap */}
            <div className="owf-files" aria-hidden>
              {/* File 4 — furthest back, orange */}
              <div className="owf-file owf-file-4">
                <div className="owf-file-bar" style={{ background: '#FF6B35' }} />
                <div className="owf-file-body">
                  <div className="owf-file-line" style={{ width: '72%', background: '#FF6B3533' }} />
                  <div className="owf-file-line" style={{ width: '55%', background: '#FF6B3322' }} />
                  <div className="owf-file-thumb" style={{ background: 'linear-gradient(135deg,#FF9F43,#FF6B35)' }} />
                </div>
              </div>
              {/* File 3 — purple */}
              <div className="owf-file owf-file-3">
                <div className="owf-file-bar" style={{ background: '#7B68EE' }} />
                <div className="owf-file-body">
                  <div className="owf-file-line" style={{ width: '65%', background: '#7B68EE33' }} />
                  <div className="owf-file-line" style={{ width: '48%', background: '#7B68EE22' }} />
                  <div className="owf-file-thumb" style={{ background: 'linear-gradient(135deg,#A78BFA,#7B68EE)' }} />
                </div>
              </div>
              {/* File 2 — coral/red */}
              <div className="owf-file owf-file-2">
                <div className="owf-file-bar" style={{ background: '#FF4757' }} />
                <div className="owf-file-body">
                  <div className="owf-file-line" style={{ width: '80%', background: '#FF475733' }} />
                  <div className="owf-file-line" style={{ width: '60%', background: '#FF475722' }} />
                  <div className="owf-file-thumb" style={{ background: 'linear-gradient(135deg,#FF6B81,#FF4757)' }} />
                </div>
              </div>
              {/* File 1 — front-most, green */}
              <div className="owf-file owf-file-1">
                <div className="owf-file-bar" style={{ background: GREEN }} />
                <div className="owf-file-body">
                  <div className="owf-file-line" style={{ width: '68%', background: '#3CB98C33' }} />
                  <div className="owf-file-line" style={{ width: '50%', background: '#3CB98C22' }} />
                  <div className="owf-file-thumb" style={{ background: 'linear-gradient(135deg,#5BCBA3,#2A9B74)' }} />
                </div>
              </div>
            </div>

            {/* Front face */}
            <div className="owf-front">
              {/* Highlight sheen */}
              <div className="owf-sheen" aria-hidden />
              {/* ELOMA badge */}
              <span className="owf-label">ELOMA</span>
              {/* Watermark */}
              <span className="owf-watermark" aria-hidden>eloma</span>
              {/* Arrow button */}
              <span className="owf-arrow">
                <ArrowRight size={22} color={NAVY} strokeWidth={2.4} />
              </span>
            </div>

          </div>
        </a>

        <p className="owf-hint">Click to explore our businesses</p>
      </div>

      <style>{`
        .owf-root {
          position: relative;
          z-index: 2;
          overflow: hidden;
          background: #EEF3F0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(56px, 7vh, 100px) clamp(24px, 4vw, 64px) clamp(80px, 11vw, 150px);
          /* Pull up so folder enters viewport exactly as the sticky exits.
             Sticky exits at: scroll past stage_height − sticky_height = 50vh after unpin.
             -50vh aligns folder top with that moment. */
          margin-top: -50vh;
        }

        /* Ambient 3D shapes */
        .owf-fsbg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .owf-fs   { position: absolute; display: block; will-change: transform; }
        .owf-fs-1 {
          width: clamp(300px, 42vw, 660px); aspect-ratio: 1; border-radius: 50%;
          top: -16%; left: -10%; background: ${SILVER}; opacity: 0.90;
          box-shadow: 0 34px 70px rgba(26,43,60,0.16), inset 0 3px 4px rgba(255,255,255,0.9), inset 0 -12px 24px rgba(26,43,60,0.07);
          animation: owf-float-a 18s ease-in-out infinite;
        }
        .owf-fs-2 {
          width: clamp(260px, 36vw, 580px); aspect-ratio: 1.8 / 1; border-radius: 999px;
          bottom: -12%; right: -7%; background: ${SILVER}; opacity: 0.85;
          box-shadow: 0 34px 70px rgba(26,43,60,0.16), inset 0 3px 4px rgba(255,255,255,0.9), inset 0 -12px 24px rgba(26,43,60,0.07);
          animation: owf-float-b 22s ease-in-out infinite;
        }
        .owf-fs-3 {
          width: clamp(72px, 8.5vw, 132px); aspect-ratio: 1; border-radius: 50%;
          top: 13%; right: 10%; background: ${GREEN_G}; opacity: 1;
          box-shadow: 0 22px 48px rgba(60,185,140,0.30);
          animation: owf-float-a 12s ease-in-out infinite;
        }
        .owf-fs-4 {
          width: clamp(104px, 13vw, 200px); aspect-ratio: 2.3 / 1; border-radius: 999px;
          bottom: 15%; left: 7%; background: ${NAVY_G}; opacity: 0.90;
          box-shadow: 0 22px 48px rgba(26,43,60,0.30);
          animation: owf-float-b 16s ease-in-out infinite;
        }
        .owf-fs-5 {
          width: clamp(140px, 17vw, 270px); aspect-ratio: 1; border-radius: 50%;
          top: 34%; left: 4%; background: ${SILVER}; opacity: 0.62;
          box-shadow: 0 34px 70px rgba(26,43,60,0.13), inset 0 3px 4px rgba(255,255,255,0.80);
          animation: owf-float-a 26s ease-in-out infinite;
        }
        @keyframes owf-float-a {
          0%, 100% { transform: translateY(0)    rotate(0deg); }
          50%      { transform: translateY(-24px) rotate(4deg); }
        }
        @keyframes owf-float-b {
          0%, 100% { transform: translateY(0)   rotate(0deg);  }
          50%      { transform: translateY(20px) rotate(-3deg); }
        }

        /* Center content */
        .owf-wrap {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; align-items: center;
          gap: clamp(18px, 2vw, 28px);
        }
        /* Background watermark text */
        .owf-bgtext {
          position: absolute;
          bottom: -6%;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(140px, 24vw, 400px);
          font-weight: 900;
          letter-spacing: -0.05em;
          text-transform: uppercase;
          color: rgba(26,43,60,0.07);
          white-space: nowrap;
          user-select: none;
          pointer-events: none;
          z-index: 0;
          font-family: "Helvetica Neue","Arial Black",Arial,sans-serif;
          line-height: 1;
        }

        /* Editorial heading */
        .owf-heading {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          line-height: 1;
        }
        .owf-h-line {
          display: block;
          font-size: clamp(36px, 5.5vw, 74px);
          font-weight: 900;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          font-family: "Helvetica Neue","Arial Black",Arial,sans-serif;
          line-height: 1.05;
        }
        .owf-h-plain {
          color: ${MUTED};
        }
        .owf-h-boxed {
          color: ${NAVY};
          border: 2.5px solid ${NAVY};
          padding: 2px 22px 5px;
          border-radius: 7px;
        }

        .owf-hint {
          font-size: clamp(12px, 0.95vw, 14px);
          font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: ${GREEN}; margin: 0;
        }

        /* ── Folder container ── */
        .owf-folder-link {
          text-decoration: none;
          display: block;
          perspective: 1400px;
        }
        .owf-folder {
          position: relative;
          width: clamp(300px, 38vw, 500px);
          height: clamp(240px, 30vw, 400px);
          transform-style: preserve-3d;
          cursor: pointer;
        }

        /* Back wall */
        .owf-back {
          position: absolute; inset: 0;
          border-radius: 22px;
          background: linear-gradient(160deg, ${F_BACK} 0%, ${F_DEEP} 100%);
          box-shadow: 0 48px 96px rgba(26,43,60,0.35);
          transform: translateZ(0);
        }
        /* Tab notch on back */
        .owf-tab {
          position: absolute;
          top: -9%; left: 8%;
          width: 30%; height: 20%;
          border-radius: 14px 14px 0 0;
          background: linear-gradient(160deg, ${F_BACK} 0%, ${F_DEEP} 100%);
        }

        /* Files strip — sits above back, below front */
        .owf-files {
          position: absolute;
          left: 4%; right: 4%;
          top: 3%;
          height: 48%;
          transform: translateZ(18px);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 0;
        }

        /* Individual file card */
        .owf-file {
          position: absolute; left: 0; right: 0;
          height: 88%;
          border-radius: 10px 10px 0 0;
          overflow: hidden;
          box-shadow: 0 -4px 14px rgba(26,43,60,0.18);
          transform-origin: bottom center;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
          background: #fff;
        }
        .owf-file-4 { top: 0%;  z-index: 1; transform: translateY(0) rotate(-2.5deg); }
        .owf-file-3 { top: 2%;  z-index: 2; transform: translateY(0) rotate(1.5deg);  }
        .owf-file-2 { top: 4%;  z-index: 3; transform: translateY(0) rotate(-1deg);   }
        .owf-file-1 { top: 6%;  z-index: 4; transform: translateY(0) rotate(0.5deg);  }

        /* Fan out on hover */
        .owf-folder-link:hover .owf-file-4 { transform: translateY(-28px) rotate(-5deg); }
        .owf-folder-link:hover .owf-file-3 { transform: translateY(-18px) rotate(4deg);  }
        .owf-folder-link:hover .owf-file-2 { transform: translateY(-32px) rotate(-2deg); }
        .owf-folder-link:hover .owf-file-1 { transform: translateY(-22px) rotate(2deg);  }

        /* File internals */
        .owf-file-bar {
          height: 22%;
          width: 100%;
        }
        .owf-file-body {
          padding: 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          position: relative;
        }
        .owf-file-line {
          height: 7px;
          border-radius: 4px;
        }
        .owf-file-thumb {
          position: absolute;
          right: 10px; top: 6px;
          width: 28px; height: 28px;
          border-radius: 6px;
          opacity: 0.85;
        }

        /* Front flap */
        .owf-front {
          position: absolute; left: 0; right: 0; bottom: 0;
          height: 78%;
          border-radius: 20px; overflow: hidden;
          background: linear-gradient(160deg, #5468FF 0%, ${F_FRONT} 45%, ${F_BACK} 100%);
          transform: translateZ(36px); transform-origin: bottom center;
          box-shadow: inset 0 2px 0 rgba(255,255,255,0.22),
                      0 32px 60px rgba(59,78,255,0.40);
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .owf-folder-link:hover .owf-front {
          transform: translateZ(36px) rotateX(-28deg);
        }

        /* Sheen highlight */
        .owf-sheen {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 45% at 50% 0%, rgba(255,255,255,0.22) 0%, transparent 60%);
          pointer-events: none;
        }

        /* ELOMA badge */
        .owf-label {
          position: absolute;
          top: clamp(14px, 1.8vw, 22px); left: clamp(14px, 1.8vw, 22px);
          padding: 6px 16px; border-radius: 999px;
          background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.32);
          backdrop-filter: blur(8px);
          color: #fff; font-size: clamp(11px, 0.9vw, 13px);
          font-weight: 800; letter-spacing: 2px; text-transform: uppercase;
        }

        /* Watermark */
        .owf-watermark {
          position: absolute; left: 50%; top: 54%;
          transform: translate(-50%, -50%);
          font-size: clamp(42px, 6vw, 88px);
          font-weight: 900; letter-spacing: -0.05em;
          color: rgba(255,255,255,0.12);
          user-select: none; text-transform: uppercase;
          font-family: "Helvetica Neue","Arial Black",Arial,sans-serif;
        }

        /* Orange arrow button */
        .owf-arrow {
          position: absolute;
          right: clamp(16px, 1.8vw, 24px); bottom: clamp(16px, 1.8vw, 24px);
          width: clamp(48px, 4.2vw, 62px); height: clamp(48px, 4.2vw, 62px);
          border-radius: 50%;
          background: ${ARROW_CLR};
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 28px rgba(255,159,67,0.50);
          transform: scale(0.92);
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.45s ease;
        }
        .owf-folder-link:hover .owf-arrow {
          transform: scale(1) translateX(3px);
          box-shadow: 0 14px 36px rgba(255,159,67,0.65);
        }

        @media (max-width: 680px) {
          .owf-folder { width: clamp(240px, 80vw, 380px); height: clamp(200px, 66vw, 310px); }
          .owf-file-4 { transform: translateY(-14px) rotate(-5deg); }
          .owf-file-3 { transform: translateY(-10px) rotate(4deg);  }
          .owf-file-2 { transform: translateY(-18px) rotate(-2deg); }
          .owf-file-1 { transform: translateY(-12px) rotate(2deg);  }
        }
      `}</style>
    </section>
  )
}
