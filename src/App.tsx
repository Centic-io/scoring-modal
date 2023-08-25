import React from "react";
import "./App.css";
import { Box, Button } from "@mui/material";
import { useScoringContext } from "./context/PublicContext";

function App() {
  const { start } = useScoringContext();
  return (
    <Box>
      <Button variant="contained" onClick={start}>
        Test
      </Button>
    </Box>
  );
}

export default App;
