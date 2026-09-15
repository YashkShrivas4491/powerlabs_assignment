const coHosts = [
  {
    name: "Sharath",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Aman Dev Pahwa",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Maria Karen Priyanka",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Simran",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Pallavi",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Sanyukta",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
  },
  { name: "Shruti", initial: "S" },
  { name: "Amisha", initial: "A" },
];

export default function HostSection({ onMessage }) {
  return (
    <section className="host-section" aria-labelledby="host-heading">
      <h2 id="host-heading">Meet your host</h2>

      <div className="host-layout">
        <div className="host-profile-column">
          <div className="host-profile-card">
            <div className="host-avatar-wrap">
              <div className="host-avatar">M</div>
              <span className="host-verified" aria-label="Verified host">✓</span>
            </div>
            <div className="host-name-block">
              <h3>Mirashya<br />Homes</h3>
              <span>Host</span>
            </div>
            <dl className="host-stats">
              <div>
                <dt>1,463</dt>
                <dd>Reviews</dd>
              </div>
              <div>
                <dt>4.68★</dt>
                <dd>Rating</dd>
              </div>
              <div>
                <dt>2</dt>
                <dd>Years hosting</dd>
              </div>
            </dl>
          </div>

          <div className="host-facts">
            <p><span aria-hidden="true">♧</span>Born in the 80s</p>
            <p><span aria-hidden="true">⌂</span>Where I went to school: NICMAR GOA</p>
          </div>
        </div>

        <div className="host-details-column">
          <h3>Co-Hosts</h3>
          <div className="co-host-grid">
            {coHosts.map((coHost) => (
              <div className="co-host" key={coHost.name}>
                {coHost.image ? (
                  <img src={coHost.image} alt="" />
                ) : (
                  <span className="co-host-initial">{coHost.initial}</span>
                )}
                <span>{coHost.name}</span>
              </div>
            ))}
          </div>

          <h3 className="host-details-heading">Host details</h3>
          <p className="host-response">Response rate: 100%<br />Responds within an hour</p>
          <button type="button" className="message-host-btn" onClick={onMessage}>Message host</button>

          <p className="payment-note">
            <span aria-hidden="true">♢</span>
            To help protect your payment, always use Airbnb to send money and communicate with hosts.
          </p>
        </div>
      </div>
    </section>
  );
}
