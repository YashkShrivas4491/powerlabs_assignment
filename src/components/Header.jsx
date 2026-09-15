export default function Header({ activeFilter, onFilterClick, onSearch, onHostClick, onLanguageClick, onProfileClick }) {
  return (
    <header className="topbar">
      <div className="brand-mark" aria-label="Airbnb home">
        <span className="brand-icon">airbnb</span>
      </div>

      <div className="search-inline" aria-label="Property filters">
        {[
          "Anywhere",
          "Anytime",
          "Add guests",
        ].map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-pill ${activeFilter === filter ? "active" : ""}`}
            onClick={() => onFilterClick(filter)}
          >
            <span className="filter-icon" aria-hidden="true">
              {filter === "Anywhere" ? "⌖" : filter === "Anytime" ? "◷" : "♙"}
            </span>
            {filter}
          </button>
        ))}
        <button type="button" className="search-mini" aria-label="Search" onClick={onSearch}>
          ⌕
        </button>
      </div>

      <div className="topbar-actions">
        <button type="button" className="host-link" onClick={onHostClick}>
          Become a host
        </button>
        <button type="button" className="icon-btn" aria-label="Language" onClick={onLanguageClick}>
          ◌
        </button>
        <button type="button" className="profile-btn" aria-label="Profile" onClick={onProfileClick}>
          ☰ <span>◉</span>
        </button>
      </div>
    </header>
  );
}
