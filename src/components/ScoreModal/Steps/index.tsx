import { Box, Typography, SxProps, Theme } from "@mui/material";
const stepIconStyle: SxProps<Theme> = {
  borderRadius: "50%",
  border: "2px solid #009FDB",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 600,
};
export default function Steps({ active }: { active: 1 | 2 }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          ...stepIconStyle,
          color: active === 1 ? "#009FDB" : "#6D8198",
          borderColor: active === 1 ? "#009FDB" : "#6D8198",
        }}
      >
        1
      </Box>
      <Box
        sx={{
          border: "1px dashed #97A8BC",
          minWidth: "150px",
          mx: 1,
        }}
      />
      <Box
        sx={{
          ...stepIconStyle,
          color: active === 2 ? "#009FDB" : "#6D8198",
          borderColor: active === 2 ? "#009FDB" : "#6D8198",
        }}
      >
        <Typography>2</Typography>
      </Box>
    </Box>
  );
}
