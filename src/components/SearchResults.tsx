import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import axios from "axios";

interface SearchResult {
  title: string;
  url: string;
  clicks: string;
}

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (!results.length) {
    return null;
  }

  return (
    <Box mt={5} mx={10}>
      <Typography variant="h6" gutterBottom>
        Search Results
      </Typography>
      {results.map((result, index) => (
        <Box key={index} mb={2} display="flex" alignItems="center">
          <IconButton>
            <BookIcon />
          </IconButton>
          <Box ml={2}>
            <Typography
              onClick={() => handleClick(result.url)}
              variant="h6"
              color="primary"
              style={{ cursor: "pointer" }}
            >
              {result.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {result.url}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {result.clicks} views
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

function handleClick(url: string) {
  axios.put(`http://localhost:5202/api/Clicks/?url=${encodeURIComponent(url)}`);
  window.open(url, "_blank");
}

export default SearchResults;