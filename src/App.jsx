import { useEffect } from "react";

const MAGNET_PHOTOS = [
  {
    id: "couple",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
    alt: "Couple silhouette at sunset magnet",
    style: {
      top: "7%",
      left: "21%",
      transform: "rotate(-6deg)",
    },
  },
  {
    id: "child",
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80",
    alt: "Smiling child photo magnet",
    style: {
      top: "10%",
      right: "7%",
      transform: "rotate(7deg)",
    },
  },
  {
    id: "dog",
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80",
    alt: "Golden retriever photo magnet",
    style: {
      bottom: "25%",
      left: "16%",
      transform: "rotate(-4deg)",
    },
  },
  {
    id: "temple",
    src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80",
    alt: "Historic temple architecture magnet",
    style: {
      bottom: "10%",
      right: "8%",
      transform: "rotate(5deg)",
    },
  },
];

export default function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const whatsappUrl =
    "https://wa.me/917789923079?text=" +
    encodeURIComponent(
      "Hi StickOnStories! I'd like to place an order while your website is launching.",
    );

  return (
    <div style={styles.pageWrapper}>
      <main style={styles.posterCard}>
        {/* Top Decorative Heart Trail */}
        <svg
          viewBox="0 0 130 60"
          style={styles.topLeftHeartTrail}
          aria-hidden="true"
        >
          <path
            d="M4 12 Q 36 6, 56 26 T 92 40"
            fill="none"
            stroke="#3B2F2F"
            strokeWidth="1.6"
            strokeDasharray="4 4"
          />
          <path
            d="M100 33 C96 28, 89 31, 90 37 C91 42, 99 46, 101 49 C103 46, 111 41, 111 35 C111 30, 104 28, 100 33 Z"
            fill="none"
            stroke="#3B2F2F"
            strokeWidth="1.7"
          />
        </svg>

        {/* Top Sparkles */}
        <svg
          viewBox="0 0 60 50"
          style={styles.topRightSparkles}
          aria-hidden="true"
        >
          <line
            x1="12"
            y1="34"
            x2="22"
            y2="24"
            stroke="#D99B26"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="25"
            y1="38"
            x2="38"
            y2="32"
            stroke="#D99B26"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="8"
            y1="18"
            x2="14"
            y2="10"
            stroke="#D99B26"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Header Brand */}
        <header style={styles.header}>
          <h1 style={styles.brandTitle}>StickOnStories</h1>
          <p style={styles.tagline}>Your Memories. Made Magnetic.</p>
        </header>

        {/* Hero Section: Left Copy + Right Fridge Magnets */}
        <section style={styles.heroGrid}>
          <div style={styles.heroCopyCol}>
            <h2 style={styles.scriptHeadline}>
              Something
              <br />
              special is
              <br />
              on its way!
            </h2>

            {/* Underline Swoosh & Heart */}
            <svg
              viewBox="0 0 190 34"
              style={styles.headlineUnderline}
              aria-hidden="true"
            >
              <path
                d="M8 14 Q 68 8, 126 16"
                fill="none"
                stroke="#C98A2E"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M142 12 C137 6, 129 10, 130 17 C131 23, 141 28, 143 31 C145 27, 154 22, 154 15 C154 9, 146 7, 142 12 Z"
                fill="none"
                stroke="#3B2F2F"
                strokeWidth="2"
              />
            </svg>

            <p style={styles.bodyText}>
              We&apos;re working behind the scenes to bring you a brand-new
              shopping experience. Our website will be live soon, but you
              don&apos;t have to wait to turn your favourite memories into
              something special.
            </p>
          </div>

          {/* Fridge Surface & Magnets */}
          <div style={styles.fridgeContainer}>
            {/* Small accent lines near top-right magnet */}
            <svg
              viewBox="0 0 44 44"
              style={styles.magnetSparkles}
              aria-hidden="true"
            >
              <line
                x1="10"
                y1="28"
                x2="20"
                y2="20"
                stroke="#D99B26"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="22"
                y1="34"
                x2="34"
                y2="30"
                stroke="#D99B26"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="8"
                y1="14"
                x2="14"
                y2="6"
                stroke="#D99B26"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <div style={styles.fridgeDoor}>
              <div style={styles.fridgeHandle} />
              {MAGNET_PHOTOS.map((magnet) => (
                <div
                  key={magnet.id}
                  style={{ ...styles.magnetTile, ...magnet.style }}
                >
                  <img
                    src={magnet.src}
                    alt={magnet.alt}
                    style={styles.magnetImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Announcement Banner */}
        <section
          style={styles.announcementBox}
          aria-label="Launch announcement"
        >
          <div style={styles.megaphoneWrap}>
            <MegaphoneIcon />
          </div>
          <div style={styles.dividerVertical} />
          <div style={styles.announcementTextWrap}>
            <div style={styles.announcementTitleRow}>
              <span style={styles.announcementTitle}>
                OUR WEBSITE IS GOING LIVE SOON!
              </span>
              <span style={styles.miniBurst} aria-hidden="true">
                ✦
              </span>
            </div>
            <p style={styles.announcementSubtext}>
              Until then, place your orders directly on WhatsApp.
            </p>
          </div>
        </section>

        {/* WhatsApp CTA Button */}
        <div style={styles.ctaSection}>
          <span style={styles.ctaAccentLeft} aria-hidden="true">
            <SideRays flipped />
          </span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappButton}
          >
            <span style={styles.whatsappIconCircle}>
              <WhatsAppIcon />
            </span>
            <span style={styles.whatsappDivider} />
            <span style={styles.whatsappTextGroup}>
              <span style={styles.whatsappLabel}>Order on WhatsApp</span>
              <span style={styles.whatsappPhone}>+91 77899 23079</span>
            </span>
          </a>

          <span style={styles.ctaAccentRight} aria-hidden="true">
            <SideRays />
          </span>
        </div>

        {/* Three Feature Pillars */}
        <section style={styles.featuresRow} aria-label="Offerings">
          <div style={styles.featureItem}>
            <PhotoMagnetIcon />
            <span style={styles.featureLabel}>
              Customized
              <br />
              Photo Magnets
            </span>
          </div>

          <div style={styles.featureDivider} />

          <div style={styles.featureItem}>
            <GiftBoxIcon />
            <span style={styles.featureLabel}>
              Personalized
              <br />
              Gifts
            </span>
          </div>

          <div style={styles.featureDivider} />

          <div style={styles.featureItem}>
            <HandshakeIcon />
            <span style={styles.featureLabel}>
              Event &amp;
              <br />
              Corporate Orders
            </span>
          </div>
        </section>

        {/* Bottom Tagline + Curved Wave Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerScript}>
            Every memory deserves a place.{" "}
            <span style={styles.footerHeart}>♡</span>
          </p>

          <svg
            viewBox="0 0 600 95"
            preserveAspectRatio="none"
            style={styles.waveSvg}
            aria-hidden="true"
          >
            <path
              d="M0 32 Q 150 0, 310 38 T 600 22 L 600 95 L 0 95 Z"
              fill="#E5C58B"
            />
            <path
              d="M0 48 Q 170 22, 330 56 T 600 42 L 600 95 L 0 95 Z"
              fill="#1E4D2B"
            />
          </svg>
        </footer>
      </main>
    </div>
  );
}

function MegaphoneIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1F2924"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 11v2a2 2 0 0 0 2 2h2l5 4V5L7 9H5a2 2 0 0 0-2 2z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 6a8.5 8.5 0 0 1 0 12" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFFFFF">
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.77 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.43zm-8.45 18.33h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.85 9.85 0 0 1-1.51-5.23c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.89-9.89 9.89zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.11 4.52.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>
  );
}

function SideRays({ flipped = false }) {
  return (
    <svg
      width="32"
      height="42"
      viewBox="0 0 32 42"
      style={{ transform: flipped ? "scaleX(-1)" : "none" }}
    >
      <line
        x1="4"
        y1="8"
        x2="18"
        y2="14"
        stroke="#DFAC4A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="21"
        x2="24"
        y2="21"
        stroke="#DFAC4A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="34"
        x2="18"
        y2="28"
        stroke="#DFAC4A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhotoMagnetIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 48 48"
      fill="none"
      stroke="#1A472A"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="10" width="28" height="24" rx="3" />
      <circle cx="15.5" cy="17.5" r="2.2" />
      <path d="M11 30l7-7 5 5 4-4 6 6" />
      <path d="M36 28c-2.5-3-7-1-7 3.5 0 3.8 7 8.5 7 8.5s7-4.7 7-8.5c0-4.5-4.5-6.5-7-3.5z" />
    </svg>
  );
}

function GiftBoxIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 48 48"
      fill="none"
      stroke="#1A472A"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="10" y="19" width="28" height="20" rx="2" />
      <rect x="8" y="14" width="32" height="5" rx="1.5" />
      <line x1="24" y1="14" x2="24" y2="39" />
      <path d="M24 14c-2-5-9-6-9-2s6 3 9 2z" />
      <path d="M24 14c2-5 9-6 9-2s-6 3-9 2z" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      width="44"
      height="42"
      viewBox="0 0 48 48"
      fill="none"
      stroke="#1A472A"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 22l7-6 7 4 6-4 7 6" />
      <path d="M12 20l8 9c1.5 1.5 3.8 1.5 5.2 0l1.8-1.8" />
      <path d="M22 25l5 5c1.3 1.3 3.4 1.3 4.7 0l4.3-4.3" />
      <path d="M7 22l-3 5 6 4 4-4" />
      <path d="M34 22l4 5-5 5-4-4" />
    </svg>
  );
}

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    backgroundColor: "#EFECE6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 12px",
    fontFamily:
      "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  posterCard: {
    position: "relative",
    width: "100%",
    maxWidth: "560px",
    backgroundColor: "#FBF7EE",
    borderRadius: "12px",
    boxShadow: "0 18px 45px rgba(24, 39, 28, 0.12)",
    overflow: "hidden",
    paddingTop: "32px",
  },
  topLeftHeartTrail: {
    position: "absolute",
    top: "14px",
    left: "8px",
    width: "115px",
    height: "54px",
    pointerEvents: "none",
  },
  topRightSparkles: {
    position: "absolute",
    top: "14px",
    right: "14px",
    width: "54px",
    height: "46px",
    pointerEvents: "none",
  },
  header: {
    textAlign: "center",
    padding: "0 20px",
  },
  brandTitle: {
    margin: 0,
    fontSize: "clamp(2rem, 6.5vw, 2.85rem)",
    fontWeight: 800,
    color: "#1B2420",
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
  },
  tagline: {
    margin: "4px 0 0",
    fontSize: "clamp(0.9rem, 2.6vw, 1.08rem)",
    fontWeight: 500,
    color: "#3F4A44",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.08fr 0.92fr",
    gap: "12px",
    alignItems: "center",
    marginTop: "18px",
    paddingLeft: "24px",
  },
  heroCopyCol: {
    paddingBottom: "10px",
  },
  scriptHeadline: {
    margin: 0,
    fontFamily: "'Caveat', cursive",
    fontSize: "clamp(2.5rem, 8vw, 3.6rem)",
    fontWeight: 700,
    lineHeight: 0.95,
    color: "#232524",
  },
  headlineUnderline: {
    width: "165px",
    height: "30px",
    marginTop: "4px",
    display: "block",
  },
  bodyText: {
    margin: "8px 0 0",
    fontSize: "clamp(0.84rem, 2.3vw, 0.96rem)",
    lineHeight: 1.45,
    color: "#2B302D",
    fontWeight: 500,
  },
  fridgeContainer: {
    position: "relative",
    height: "285px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  magnetSparkles: {
    position: "absolute",
    top: "-8px",
    right: "10px",
    width: "40px",
    height: "40px",
    zIndex: 4,
  },
  fridgeDoor: {
    position: "relative",
    width: "92%",
    height: "100%",
    background:
      "linear-gradient(135deg, #D5D9DC 0%, #B8BEC3 55%, #9FA6AC 100%)",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    boxShadow: "-6px 8px 18px rgba(0, 0, 0, 0.14)",
    borderLeft: "2px solid rgba(255,255,255,0.65)",
  },
  fridgeHandle: {
    position: "absolute",
    left: "9px",
    top: "12%",
    width: "10px",
    height: "68px",
    borderRadius: "6px",
    background: "linear-gradient(90deg, #8E959B 0%, #E7EBEE 50%, #7B8288 100%)",
    boxShadow: "2px 2px 6px rgba(0,0,0,0.22)",
  },
  magnetTile: {
    position: "absolute",
    width: "92px",
    height: "92px",
    backgroundColor: "#FFFFFF",
    padding: "3px",
    borderRadius: "4px",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.28)",
    zIndex: 2,
  },
  magnetImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "2px",
    display: "block",
  },
  announcementBox: {
    margin: "18px 22px 0",
    backgroundColor: "#F6E3C2",
    border: "1.5px solid #2B2A29",
    borderRadius: "12px",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  megaphoneWrap: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dividerVertical: {
    width: "1.5px",
    height: "42px",
    backgroundColor: "#8E826E",
    flexShrink: 0,
  },
  announcementTextWrap: {
    flex: 1,
  },
  announcementTitleRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  announcementTitle: {
    fontSize: "clamp(0.84rem, 2.5vw, 1.02rem)",
    fontWeight: 800,
    color: "#1B211E",
    letterSpacing: "0.01em",
  },
  miniBurst: {
    color: "#2B2A29",
    fontSize: "0.85rem",
  },
  announcementSubtext: {
    margin: "3px 0 0",
    fontSize: "clamp(0.78rem, 2.2vw, 0.9rem)",
    color: "#2D322F",
    fontWeight: 500,
  },
  ctaSection: {
    marginTop: "20px",
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  ctaAccentLeft: {
    flexShrink: 0,
  },
  ctaAccentRight: {
    flexShrink: 0,
  },
  whatsappButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "14px",
    backgroundColor: "#1D6F3A",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "11px 24px",
    borderRadius: "999px",
    boxShadow: "0 8px 18px rgba(29, 111, 58, 0.28)",
  },
  whatsappIconCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  whatsappDivider: {
    width: "1px",
    height: "34px",
    backgroundColor: "rgba(255, 255, 255, 0.35)",
  },
  whatsappTextGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  whatsappLabel: {
    fontSize: "0.82rem",
    fontWeight: 500,
    opacity: 0.95,
    lineHeight: 1.15,
  },
  whatsappPhone: {
    fontSize: "clamp(1rem, 3vw, 1.22rem)",
    fontWeight: 800,
    letterSpacing: "0.02em",
    lineHeight: 1.2,
    marginTop: "2px",
  },
  featuresRow: {
    marginTop: "24px",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
  },
  featureItem: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "8px",
  },
  featureDivider: {
    width: "1px",
    height: "62px",
    backgroundColor: "#CFC4B0",
  },
  featureLabel: {
    fontSize: "clamp(0.76rem, 2.1vw, 0.88rem)",
    fontWeight: 600,
    color: "#1F2623",
    lineHeight: 1.25,
  },
  footer: {
    position: "relative",
    marginTop: "20px",
    paddingBottom: "56px",
    textAlign: "center",
  },
  footerScript: {
    position: "relative",
    zIndex: 2,
    margin: 0,
    fontFamily: "'Caveat', cursive",
    fontSize: "clamp(1.65rem, 5vw, 2.2rem)",
    fontWeight: 700,
    color: "#1F2421",
  },
  footerHeart: {
    fontSize: "1.6rem",
    verticalAlign: "middle",
  },
  waveSvg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "76px",
    zIndex: 1,
    pointerEvents: "none",
  },
};
