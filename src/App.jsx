import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GallerySection from "./components/GallerySection";
import BookingCard from "./components/BookingCard";
import PhotoModal from "./components/PhotoModal";
import HostSection from "./components/HostSection";
import useToast from "./hooks/useToast";
import {
  gallery,
  amenities,
  nearbyStays,
  infoCards,
  guestOptions,
  testimonials,
  ratingMetrics,
} from "./data/listingData";

function App() {
  const nearbyRef = useRef(null);
  const [saved, setSaved] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Anywhere");
  const [expandedCards, setExpandedCards] = useState({});
  const [amenitiesExpanded, setAmenitiesExpanded] = useState(false);
  const [reviewExpanded, setReviewExpanded] = useState(false);
  const [mapZoom, setMapZoom] = useState(1);
  const [calendarOpen, setCalendarOpen] = useState(true);
  const [checkIn, setCheckIn] = useState(18);
  const [checkOut, setCheckOut] = useState(23);
  const [guestIndex, setGuestIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const { toast, showToast } = useToast();

  const scrollNearby = (direction) => {
    const container = nearbyRef.current;
    if (!container) return;

    const scrollAmount = 320;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const toggleSaved = () => {
    const nextState = !saved;
    setSaved(nextState);
    showToast(nextState ? "Saved" : "Removed");
  };

  const toggleCard = (key) => {
    setExpandedCards((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const handleFilterClick = (value) => {
    setActiveFilter(value);
    showToast(`${value} selected`);
  };

  const openGallery = (index = 0) => {
    setSelectedPhotoIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const handleZoom = (delta) => {
    setMapZoom((current) => Math.min(1.35, Math.max(0.9, Number((current + delta).toFixed(2)))));
  };

  const cycleGuests = () => {
    setGuestIndex((current) => (current + 1) % guestOptions.length);
    showToast("Guests updated");
  };

  const handleDateClick = (dateValue) => {
    if (!checkIn || checkOut) {
      setCheckIn(dateValue);
      setCheckOut(null);
      showToast(`Check-in set for ${formatDay(dateValue)}`);
      return;
    }

    if (dateValue <= checkIn) {
      setCheckIn(dateValue);
      setCheckOut(null);
      showToast(`Check-in set for ${formatDay(dateValue)}`);
      return;
    }

    setCheckOut(dateValue);
    showToast(`Check-out set for ${formatDay(dateValue)}`);
  };

  const formatDay = (dateValue) => {
    if (!dateValue) return "Select date";
    return dateValue <= 31 ? `${dateValue} Oct` : `${dateValue - 31} Nov`;
  };

  return (
    <div className="page-shell">
      <Header
        activeFilter={activeFilter}
        onFilterClick={handleFilterClick}
        onSearch={() => showToast("Search started")}
        onHostClick={() => showToast("Host tools opened")}
        onLanguageClick={() => showToast("Language changed")}
        onProfileClick={() => showToast("Profile menu opened")}
      />

      <main className="listing-page">
        <section className="title-row">
          <h1>Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>
          <div className="title-actions">
            <button type="button" onClick={() => showToast("Share link copied")}>⇅ Share</button>
            <button type="button" onClick={toggleSaved}>{saved ? "♥ Saved" : "♡ Saved"}</button>
          </div>
        </section>

        <GallerySection gallery={gallery} onOpenGallery={openGallery} />

        <section className="booking-layout">
          <BookingCard
            calendarOpen={calendarOpen}
            checkIn={checkIn}
            checkOut={checkOut}
            guestIndex={guestIndex}
            guestOptions={guestOptions}
            onToggleCalendar={() => setCalendarOpen((prev) => !prev)}
            onCycleGuests={cycleGuests}
            onReserve={() => showToast(`Reserved for ${formatDay(checkIn)} - ${formatDay(checkOut)}`)}
            onDateSelect={(day) => {
              if (day === null) {
                showToast("Calendar navigation clicked");
                return;
              }
              handleDateClick(day);
            }}
            onCalendarNav={() => showToast("Calendar navigation clicked")}
            onClearDates={() => {
              setCheckIn(null);
              setCheckOut(null);
              showToast("Dates cleared");
            }}
            formatDay={formatDay}
          />
        </section>

        <section className="meta-row">
          <div className="meta-title">Entire serviced apartment in Candolim, India</div>
          <button type="button" className="review-link" onClick={() => setReviewExpanded((prev) => !prev)}>
            {reviewExpanded ? "Hide reviews" : "Show all 19 reviews"}
          </button>
        </section>

        {reviewExpanded && (
          <section className="review-panel" aria-live="polite">
            <div className="review-item">
              <strong>Priya</strong>
              <span>“The home was spotless and beautifully decorated. We loved the private pool and the easy beach access.”</span>
            </div>
            <div className="review-item">
              <strong>Arjun</strong>
              <span>“Great location and responsive host. The apartment felt premium and the balcony was lovely in the evening.”</span>
            </div>
          </section>
        )}

        <section className="amenities-section" aria-labelledby="amenities-heading">
          <h2 id="amenities-heading">What this place offers</h2>
          <div className="amenities-grid">
            {(amenitiesExpanded ? amenities : amenities.slice(0, 8)).map((amenity) => (
              <div className="amenity-item" key={amenity.label}>
                <span className="amenity-icon" aria-hidden="true">{amenity.icon}</span>
                <span>{amenity.label}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="amenities-toggle"
            onClick={() => setAmenitiesExpanded((current) => !current)}
          >
            {amenitiesExpanded ? "Show fewer amenities" : `Show all ${amenities.length} amenities`}
          </button>
        </section>

        <section className="testimonials-section" aria-label="Guest testimonials">
          <div className="section-heading-row">
            <h2>Guest testimonials</h2>
            <span className="review-score">★ 4.9</span>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                  <strong>{item.name}</strong>
                </div>
                <div className="testimonial-stars">★★★★★</div>
                <p>“{item.quote}”</p>
              </article>
            ))}
          </div>
        </section>

        <section className="guest-favourite" aria-label="Guest favourite rating summary">
          <div className="fav-score-wrap">
            <div className="fav-wreaths" aria-hidden="true">
              <span>✦</span>
              <span>✦</span>
            </div>
            <div className="fav-score">4.95</div>
          </div>

          <div className="fav-content">
            <h2>Guest favourite</h2>
            <p>This home is a guest favourite based on ratings, reviews and reliability</p>
            <button type="button" className="fav-link">How reviews work</button>
          </div>

          <div className="rating-grid">
            {ratingMetrics.map((metric) => (
              <div key={metric.label} className="rating-column">
                <div className="rating-icon" aria-hidden="true">{metric.icon}</div>
                <div className="rating-header">
                  <span>{metric.label}</span>
                </div>
                <div className="rating-score">{metric.score}</div>
                <div className="rating-bar-shell" aria-label={`${metric.label} rating`}>
                  <div className="rating-bar" style={{ width: `${metric.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="location-block">
          <div className="location-header">
            <h2>Where you&apos;ll be</h2>
            <p>Candolim, Goa, India</p>
          </div>

          <div className="map-panel" aria-label="Map location">
            <div className="map-surface" style={{ transform: `scale(${mapZoom})` }}>
              <div className="map-search">⌕</div>
              <div className="map-zoom">
                <button type="button" onClick={() => handleZoom(0.1)}>＋</button>
                <button type="button" onClick={() => handleZoom(-0.1)}>－</button>
              </div>
              <div className="map-pin">
                <span className="pin-home">⌂</span>
              </div>
            </div>
          </div>
        </section>

        <HostSection onMessage={() => showToast("Message host opened")} />

        <section className="details-block">
          <h2>Things to know</h2>

          <div className="info-grid">
            {infoCards.map((card) => {
              const expanded = !!expandedCards[card.key];

              return (
                <article className="info-card" key={card.key}>
                  <div className="info-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <ul>
                    {card.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {expanded && <p className="info-detail">{card.detail}</p>}
                  <button type="button" onClick={() => toggleCard(card.key)}>
                    {expanded ? "Show less" : "Learn more"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="nearby-block">
          <div className="nearby-header">
            <h2>More stays nearby</h2>
            <div className="carousel-controls">
              <button type="button" onClick={() => scrollNearby("left")}>‹</button>
              <button type="button" onClick={() => scrollNearby("right")}>›</button>
            </div>
          </div>

          <div className="nearby-grid" ref={nearbyRef}>
            {nearbyStays.map((stay) => (
              <article key={stay.title} className="nearby-card">
                <img src={stay.image} alt={stay.title} />
                <div className="nearby-copy">
                  <h3>
                    {stay.title}
                    <span>{stay.subtitle}</span>
                  </h3>
                  <div className="nearby-foot">
                    <span>★ {stay.rating}</span>
                    <strong>₹{stay.price}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {galleryOpen && (
        <PhotoModal
          gallery={gallery}
          selectedPhotoIndex={selectedPhotoIndex}
          onClose={closeGallery}
          onSelectPhoto={setSelectedPhotoIndex}
        />
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
