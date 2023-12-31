import { Box, Button, Link, Typography } from "@mui/material";
import { CenticLogo } from "../../../../icon";
import ScoreDisplay from "../../../ScoreDisplay";
import { useScoringContext } from "../../../../context/PublicContext";
import { useAccount } from "wagmi";

export default function Result() {
  const { score, close } = useScoringContext();
  const { address } = useAccount();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CenticLogo
        sx={{
          width: "60px",
          height: "60px",
          mb: 3,
        }}
      />
      {score !== 0 && (
        <>
          <Typography variant="h1" color={"text.primary"}>
            Your Credit score
          </Typography>
          <ScoreDisplay score={score || 0} />
          <Typography
            variant="body1"
            color={"text.info"}
            textAlign={"center"}
            my={3}
          >
            Your credit score has been successfully calculated and shared to the
            third party app.
          </Typography>

          <Typography variant="body1" color={"text.secondary"}>
            Wanna improve your credit score? Let's try out{" "}
            <Link
              href={`https://centic.io/dashboard?entity=${address}&type=wallet`}
              target="_blank"
              rel="noreferrer"
              sx={(theme) => ({
                display: "inline-block",
                fontWeight: 600,
                textDecoration: "none",
                color: theme.palette.text.link,
              })}
            >
              centic.io
            </Link>
          </Typography>
        </>
      )}
      {score === 0 && (
        <Box>
          <Typography variant="h1" color={"red"} my={3} textAlign={"center"}>
            There was an error happened calculating your score
          </Typography>
        </Box>
      )}
      <Button
        color="primary"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={close}
      >
        Close
      </Button>
    </Box>
  );
}
