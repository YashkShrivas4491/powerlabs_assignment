export default function BookingCard({
  calendarOpen,
  checkIn,
  checkOut,
  guestIndex,
  guestOptions,
  onToggleCalendar,
  onCycleGuests,
  onReserve,
  onDateSelect,
  onCalendarNav,
  onClearDates,
  formatDay,
}) {
  const octoberDays = Array.from({ length: 31 }, (_, index) => index + 1);
  const novemberDays = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <div className="booking-shell">
      {calendarOpen && (
        <div className="date-picker-panel" aria-label="Date selector">
          <div className="date-picker-header">
            <h3>{checkOut && checkIn ? `${checkOut - checkIn} nights in Candolim` : "Select dates"}</h3>
            <div className="date-range-text">
              {checkIn ? `${formatDay(checkIn)}` : "Start date"} - {checkOut ? `${formatDay(checkOut)}` : "End date"}
            </div>
          </div>

          <div className="month-grid-wrap">
            <div className="month-panel">
              <div className="month-header">
                <button type="button" aria-label="Previous month" onClick={onCalendarNav}>‹</button>
                <span>October 2026</span>
                <div />
              </div>
              <div className="calendar-weekdays">
                {['S','M','T','W','T','F','S'].map((day, index) => <span key={`oct-weekday-${index}`}>{day}</span>)}
              </div>
              <div className="calendar-grid large-grid">
                {octoberDays.map((day) => {
                  const dateValue = day;
                  const selected = dateValue === checkIn || dateValue === checkOut;
                  const inRange = checkIn && checkOut && dateValue > checkIn && dateValue < checkOut;
                  return (
                    <button
                      key={`oct-${day}`}
                      type="button"
                      className={`calendar-day ${selected ? "selected" : ""} ${inRange ? "in-range" : ""}`}
                      onClick={() => onDateSelect(dateValue)}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="month-panel">
              <div className="month-header">
                <div />
                <span>November 2026</span>
                <button type="button" aria-label="Next month" onClick={onCalendarNav}>›</button>
              </div>
              <div className="calendar-weekdays">
                {['S','M','T','W','T','F','S'].map((day, index) => <span key={`nov-weekday-${index}`}>{day}</span>)}
              </div>
              <div className="calendar-grid large-grid">
                {novemberDays.map((day) => {
                  const dateValue = 31 + day;
                  const selected = dateValue === checkIn || dateValue === checkOut;
                  const inRange = checkIn && checkOut && dateValue > checkIn && dateValue < checkOut;
                  return (
                    <button
                      key={`nov-${day}`}
                      type="button"
                      className={`calendar-day ${selected ? "selected" : ""} ${inRange ? "in-range" : ""}`}
                      onClick={() => onDateSelect(dateValue)}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="calendar-footer">
            <button type="button" className="clear-dates-btn" onClick={onClearDates}>Clear dates</button>
          </div>
        </div>
      )}

      <aside className="booking-card">
        <div className="booking-head">
          <div className="price-stack">
            <span className="price-value">₹28,499</span>
            <small>for 5 nights</small>
          </div>
        </div>

        <div className="booking-fields summary-fields">
          <button type="button" className="date-field" onClick={onToggleCalendar}>
            <span>Check-in</span>
            <strong>{formatDay(checkIn)}</strong>
          </button>
          <button type="button" className="date-field" onClick={onToggleCalendar}>
            <span>Check-out</span>
            <strong>{formatDay(checkOut)}</strong>
          </button>
        </div>

        <div className="guest-picker summary-picker">
          <span>Guests</span>
          <button type="button" onClick={onCycleGuests}>{guestOptions[guestIndex]}</button>
        </div>

        <div className="info-banner">Free cancellation before 17 October</div>

        <button type="button" className="reserve-btn" onClick={onReserve} disabled={!checkIn || !checkOut}>
          Reserve
        </button>
        <p className="booking-note">You won&apos;t be charged yet</p>
      </aside>
    </div>
  );
}
