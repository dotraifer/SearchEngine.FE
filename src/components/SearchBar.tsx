import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={10}
    >
      <TextField
        variant="outlined"
        placeholder="Search Google or type a URL"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ width: "60%", mb: 2 }}
      />
      <Box>
        <Button variant="contained" onClick={handleSearch} sx={{ mr: 2 }}>
          Google Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;