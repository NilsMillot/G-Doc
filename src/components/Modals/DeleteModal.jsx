import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteModal({ onClickYes }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{ fontSize: "1.3rem" }}
        size="small"
        onClick={handleClickOpen}
      >
        Supprimer
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontSize: "2.2rem" }}>
          Etes vous sûr de vouloir supprimer cette présentation ?
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontSize: "1.6rem" }}
          >
            Vous êtes sûr le point de supprimer une présentation, le retour en
            arrière ne sera pas possible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ fontSize: "1.4rem" }}>
            Annuler
          </Button>
          <Button
            onClick={handleClose && onClickYes}
            autoFocus
            sx={{ fontSize: "1.4rem", color: "red" }}
          >
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
