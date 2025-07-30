import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-08-15T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("Offre expirée");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}j ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    alert(`Recherche de vols de ${from} à ${to} le ${date}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Direkt Prishtina</h1>
      <p>Vols directs entre la Suisse et le Kosovo</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>🎉 Offre de lancement : billets dès 35 CHF ! 🎉</p>
      <p style={{ fontSize: '0.9rem' }}>Temps restant : {countdown}</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Réservez votre vol</h2>
        <input placeholder="Départ (ex: Zurich)" value={from} onChange={(e) => setFrom(e.target.value)} />
        <input placeholder="Destination (ex: Prishtina)" value={to} onChange={(e) => setTo(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button onClick={handleSearch}>Rechercher</button>
      </div>

      <footer style={{ marginTop: '4rem', fontSize: '0.8rem', color: '#666' }}>
        © 2025 Direkt Prishtina. Tous droits réservés.
      </footer>
    </div>
  );
}