import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      mt={10}
      py={3}
      bgcolor="grey.200"
      textAlign="center"
      position="relative"
      bottom={0}
      width="100%"
    >
      <Typography variant="body2">Financial Search Engine - Dotan Raifer © 2024</Typography>
    </Box>
  );
};

export default Footer;