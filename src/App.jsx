import { useState } from "react";
import "./App.css";

const songs = [
  {
    title: "Midnight City",
    artist: "M83",
    album: "Hurry Up, We're Dreaming",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  },
  {
    title: "After Hours",
    artist: "The Weeknd",
    album: "After Hours",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&q=80",
  },
  {
    title: "Neon Dreams",
    artist: "Luna Park",
    album: "Electric Hearts",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80",
  },
  {
    title: "Ocean Eyes",
    artist: "Billie Eilish",
    album: "Don't Smile at Me",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",
  },
  {
    title: "Golden",
    artist: "Harry Styles",
    album: "Fine Line",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
  },
];

const recentSongs = [
  songs[0],
  songs[2],
  songs[1],
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80",
  },
];

const moods = [
  {
    title: "Late Night",
    subtitle: "For 2 AM thoughts",
    icon: "☾",
    className: "mood-purple",
  },
  {
    title: "Feel Good",
    subtitle: "Instant serotonin",
    icon: "✦",
    className: "mood-orange",
  },
  {
    title: "Focus",
    subtitle: "Deep work mode",
    icon: "◉",
    className: "mood-blue",
  },
  {
    title: "Heartbreak",
    subtitle: "Feel it all",
    icon: "♡",
    className: "mood-pink",
  },
];

function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState(38);

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase())
  );

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setLiked(false);
  };

  const togglePlay = () => {
    setIsPlaying((value) => !value);
  };

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-mark">P</div>
          <span>PULSE</span>
        </div>

        <nav>
          <p className="nav-label">DISCOVER</p>

          {[
            ["Home", "⌂"],
            ["Explore", "⌕"],
            ["Radio", "◉"],
          ].map(([name, icon]) => (
            <button
              key={name}
              className={`nav-item ${
                activeNav === name ? "active" : ""
              }`}
              onClick={() => setActiveNav(name)}
            >
              <span>{icon}</span>
              {name}
            </button>
          ))}

          <p className="nav-label playlist-label">YOUR LIBRARY</p>

          {[
            ["Liked Songs", "♡"],
            ["Recently Played", "↻"],
            ["Albums", "▣"],
            ["Artists", "♢"],
          ].map(([name, icon]) => (
            <button
              key={name}
              className={`nav-item ${
                activeNav === name ? "active" : ""
              }`}
              onClick={() => setActiveNav(name)}
            >
              <span>{icon}</span>
              {name}
            </button>
          ))}

          <div className="playlist-heading">
            <p className="nav-label">PLAYLISTS</p>
            <button className="plus">+</button>
          </div>

          {["Night Drive", "Main Character", "Study Session"].map(
            (playlist) => (
              <button
                className="nav-item playlist"
                key={playlist}
                onClick={() => setActiveNav(playlist)}
              >
                <span className="playlist-dot">•</span>
                {playlist}
              </button>
            )
          )}
        </nav>

        <div className="sidebar-bottom">
          <div className="profile">
            <div className="avatar">N</div>
            <div>
              <strong>Nikita</strong>
              <span>Free account</span>
            </div>
            <span className="dots">•••</span>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        <header className="topbar">
          <div className="mobile-logo">PULSE</div>

          <div className="top-navigation">
            <button>‹</button>
            <button>›</button>
          </div>

          <div className="search">
            <span>⌕</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search songs, artists, albums..."
            />
            <kbd>⌘ K</kbd>
          </div>

          <div className="top-actions">
            <button className="icon-btn">♧</button>
            <button className="icon-btn">♢</button>
            <button className="upgrade">Upgrade</button>
          </div>
        </header>

        <div className="content">
          {/* HERO */}
          <section className="hero">
            <div className="hero-content">
              <span className="eyebrow">YOUR DAILY SOUNDTRACK</span>

              <h1>
                Music for
                <br />
                <em>every moment.</em>
              </h1>

              <p>
                Discover new sounds, revisit old favorites, and find
                something that feels exactly like you.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() => playSong(songs[0])}
                >
                  ▶ Play something
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => setActiveNav("Explore")}
                >
                  Explore music
                </button>
              </div>
            </div>

            <div className="hero-art">
              <div className="glow"></div>

              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=85"
                alt="Music"
              />

              <div className="floating-card">
                <span>NOW TRENDING</span>
                <strong>Midnight City</strong>
                <small>M83 · 4.2M plays</small>
              </div>
            </div>
          </section>

          {/* SEARCH RESULTS */}
          {search && (
            <section className="section">
              <div className="section-header">
                <div>
                  <span className="section-kicker">SEARCH</span>
                  <h2>Results for "{search}"</h2>
                </div>
              </div>

              <div className="song-grid">
                {filteredSongs.length > 0 ? (
                  filteredSongs.map((song) => (
                    <SongCard
                      key={song.title}
                      song={song}
                      currentSong={currentSong}
                      isPlaying={isPlaying}
                      onPlay={playSong}
                    />
                  ))
                ) : (
                  <p className="no-results">No music found.</p>
                )}
              </div>
            </section>
          )}

          {/* RECENTLY PLAYED */}
          {!search && (
            <>
              <section className="section">
                <div className="section-header">
                  <div>
                    <span className="section-kicker">
                      MADE FOR YOU
                    </span>
                    <h2>Recently played</h2>
                  </div>

                  <button className="see-all">See all →</button>
                </div>

                <div className="song-grid">
                  {songs.map((song) => (
                    <SongCard
                      key={song.title}
                      song={song}
                      currentSong={currentSong}
                      isPlaying={isPlaying}
                      onPlay={playSong}
                    />
                  ))}
                </div>
              </section>

              {/* MOODS */}
              <section className="section">
                <div className="section-header">
                  <div>
                    <span className="section-kicker">CHOOSE YOUR VIBE</span>
                    <h2>What's your mood?</h2>
                  </div>
                </div>

                <div className="moods">
                  {moods.map((mood) => (
                    <button
                      key={mood.title}
                      className={`mood ${mood.className}`}
                      onClick={() => setActiveNav(mood.title)}
                    >
                      <span>{mood.icon}</span>
                      <strong>{mood.title}</strong>
                      <small>{mood.subtitle}</small>
                    </button>
                  ))}
                </div>
              </section>

              {/* RECENT */}
              <section className="section">
                <div className="section-header">
                  <div>
                    <span className="section-kicker">YOUR HISTORY</span>
                    <h2>Recently played</h2>
                  </div>

                  <button className="see-all">Clear history</button>
                </div>

                <div className="recent-list">
                  {recentSongs.map((song, index) => (
                    <div
                      className="recent-item"
                      key={`${song.title}-${index}`}
                      onClick={() => playSong(song)}
                    >
                      <span className="track-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <img src={song.image} alt={song.title} />

                      <div className="track-info">
                        <strong>{song.title}</strong>
                        <span>{song.artist}</span>
                      </div>

                      <span className="album-name">{song.album}</span>

                      <button
                        className="mini-heart"
                        onClick={(e) => e.stopPropagation()}
                      >
                        ♡
                      </button>

                      <span className="duration">
                        {["3:46", "4:12", "3:28", "3:20", "3:23"][index]}
                      </span>

                      <button className="more">•••</button>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          <footer>
            <span>© 2026 PULSE MUSIC</span>
            <span>MADE FOR THE MOMENTS BETWEEN</span>
          </footer>
        </div>
      </main>

      {/* PLAYER */}
      <div className="player">
        <div className="player-song">
          <img src={currentSong.image} alt={currentSong.title} />

          <div>
            <strong>{currentSong.title}</strong>
            <span>{currentSong.artist}</span>
          </div>

          <button
            className={`player-heart ${liked ? "liked" : ""}`}
            onClick={() => setLiked((value) => !value)}
          >
            {liked ? "♥" : "♡"}
          </button>
        </div>

        <div className="player-center">
          <div className="controls">
            <button>↶</button>
            <button>◀</button>

            <button className="play-main" onClick={togglePlay}>
              {isPlaying ? "Ⅱ" : "▶"}
            </button>

            <button>▶</button>
            <button>↷</button>
          </div>

          <div className="progress">
            <span>1:24</span>

            <div
              className="progress-bar"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const value =
                  ((e.clientX - rect.left) / rect.width) * 100;
                setProgress(Math.max(0, Math.min(100, value)));
              }}
            >
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <span>3:46</span>
          </div>
        </div>

        <div className="player-right">
          <button>☷</button>
          <button>▣</button>

          <div className="volume">
            <span>⌕</span>
            <div className="volume-bar">
              <div></div>
            </div>
          </div>

          <button>⛶</button>
        </div>
      </div>
    </div>
  );
}

function SongCard({ song, currentSong, isPlaying, onPlay }) {
  const selected = currentSong.title === song.title;

  return (
    <div className={`song-card ${selected ? "selected" : ""}`}>
      <div className="cover-wrapper">
        <img src={song.image} alt={song.title} />

        <button className="heart">♡</button>

        <button
          className="play-overlay"
          onClick={() => onPlay(song)}
        >
          {selected && isPlaying ? "Ⅱ" : "▶"}
        </button>
      </div>

      <h3>{song.title}</h3>
      <p>{song.artist}</p>
    </div>
  );
}

export default App;