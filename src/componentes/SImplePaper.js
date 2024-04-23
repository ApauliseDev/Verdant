import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#f50057",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: "Dokdo",
    fontSize: 25,
  },
});

function SImplePaper() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "flex-end",
          position: "relative",
          "& > :not(style)": {
            m: 1,
            width: 328,
            height: 184,
          },
        }}
      >
        <Paper

          elevation={3}
          sx={{
            borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <img
            src="/Imagenes/Uncharted.jpg"
            alt="Imagen 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
          <Typography
            color="primary"
            variant="h6"
            sx={{
              position: "absolute",
            }}
          >
            Aventura
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <img
            src="/Imagenes/Annabelle.jpg"
            alt="Imagen 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
          <Typography
            color="primary"
            variant="h6"
            sx={{
              position: "absolute",
            }}
          >
            Terror
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <img
            src="/Imagenes/LaLaLand.jpg"
            alt="Imagen 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
          <Typography
            color="primary"
            variant="h6"
            sx={{
              position: "absolute",
            }}
          >
            Romance
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <img
            src="/Imagenes/comediaa.jpg"
            alt="Imagen 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
          <Typography
            color="primary"
            variant="h6"
            sx={{
              position: "absolute",
            }}
          >
            Comedia
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <img
            src="/Imagenes/guerra4.jpg"
            alt="Imagen 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
          <Typography
            color="primary"
            variant="h6"
            sx={{
              position: "absolute",
            }}
          >
            Guerra
          </Typography>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default SImplePaper;
