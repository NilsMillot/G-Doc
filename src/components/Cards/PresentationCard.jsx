import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import DeleteModal from "../Modals/DeleteModal";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function PresentationCard({ presentation, onClickYesDelete }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: "2rem" }}
          color="text.secondary"
          gutterBottom
        >
          {presentation.title}
        </Typography>
        <Typography variant="h5" component="div">
          id{bull}
          {presentation.id}
        </Typography>

        <Typography variant="body2" sx={{ fontSize: "1.2rem" }}>
          <br />
          En bas vos actions possibles
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`presentation/${presentation.id}`}>
          <Button sx={{ fontSize: "1.3rem" }} size="small">
            Voir
          </Button>
        </Link>
        <DeleteModal onClickYes={onClickYesDelete} />
      </CardActions>
    </Card>
  );
}
