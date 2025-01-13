import { useState } from "react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [lyrics, setLyrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLyrics = async () => {
    setLoading(true);
    setError("");
    setLyrics(null);

    try {
      const apiKey = import.meta.env.auddApiKey;

      const response = await axios.get("https://api.audd.io/", {
        params: {
          api_token: apiKey,
          q: query, // Song title or artist
        },
      });
      console.log(response.data);

      if (response.data && response.data.result) {
        const result = response.data.result;
        if (result.lyrics) {
          setLyrics({
            text: result.lyrics.lyrics,
            synced: result.lyrics.sync ? result.lyrics.sync : null,
          });
        } else {
          setError("Lyrics not found for the provided query.");
        }
      } else {
        setError("No results found.");
      }
    } catch (err) {
      setError("An error occurred while fetching lyrics.", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>AudD Lyrics Finder</h1>
      <input
        type="text"
        placeholder="Enter song title or artist"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={fetchLyrics} style={{ padding: "10px" }}>
        Fetch Lyrics
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {lyrics && (
        <div style={{ marginTop: "20px" }}>
          <h3>Lyrics:</h3>
          {lyrics.synced ? (
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {lyrics.synced.map((line, index) => (
                <p key={index}>
                  <strong>{line.time}:</strong> {line.lyrics}
                </p>
              ))}
            </pre>
          ) : (
            <pre style={{ whiteSpace: "pre-wrap" }}>{lyrics.text}</pre>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
