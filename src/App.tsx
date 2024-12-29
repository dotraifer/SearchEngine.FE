import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Footer from "./components/footer";
import SpinningAvatar from "./components/SpinningAvatar";
import { Container, CircularProgress } from "@mui/material";
import icon from "./assets/react.svg";
import axios from "axios";
import './App.css';

interface SearchResult {
  title: string;
  url: string;
  clicks: string;
}

const App: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5202/api/Search/?q=${query}&pagesToReturn=10`);
      const data = response.data;
      const searchResults: SearchResult[] = data.map((result: any) => ({
        title: result.title,
        url: result.url,
        clicks: result.clicks
      }));
      setResults(searchResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h1>
        H<SpinningAvatar size={50} />lly
      </h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="loading-container">
          <CircularProgress />
          <p className="loading-text">Loading<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></p>
        </div>
      ) : (
        <SearchResults results={results} />
      )}
      <Footer />
    </Container>
  );
};

export default App;