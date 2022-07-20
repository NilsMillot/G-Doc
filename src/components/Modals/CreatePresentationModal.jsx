import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function CreatePresentationModal({ setNewTitle, onClickYes }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <IconButton
        sx={{ width: "max-content", margin: "20px auto 0 auto" }}
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddCircleOutlineIcon
          sx={{ height: "40px", width: "40px" }}
        ></AddCircleOutlineIcon>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontSize: "2.2rem" }}>
          Nouvelle Présentation
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: "1.6rem" }}>
            Donnez un titre à votre présentation ensuite vous pourrez l'éditer
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="titre"
            label="Titre"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ fontSize: "1.3rem" }}>
            Annuler
          </Button>
          <Button
            onClick={handleClose && onClickYes}
            sx={{ fontSize: "1.3rem" }}
          >
            Créer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
