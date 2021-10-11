import React, { useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  withStyles,
} from "@material-ui/core";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import helmet from "../../../shared/integrations/helmet";
import toast from "../../../shared/functions/toast";

const styles = (theme) => ({
  dialogContent: {
    paddingTop: theme.spacing(2),
  },
  dialogActions: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
});

function ChangePassword(props) {
  const { onClose, classes } = props;
  const [isLoading, setIsLoading] = useState(false);

  const email = useRef();

  const sendPasswordEmail = useCallback(() => {
    setIsLoading(true);
    helmet.unauthorized.forgotPassword(email.current.value).then((data) => {
      setIsLoading(false);
      if (data) {
        toast.success(
          "Operação realizada com sucesso. Favor checar seu email."
        );
        onClose();
      }
    });
  }, [setIsLoading, onClose]);

  return (
    <Dialog
      open
      hideBackdrop
      onClose={onClose}
      disableBackdropClick={isLoading}
      disableEscapeKeyDown={isLoading}
      maxWidth="xs"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendPasswordEmail();
        }}
      >
        <DialogContent className={classes.dialogContent}>
          <Typography paragraph>
            Informe seu email abaixo e enviaremos instruções de como recuperar
            seu acesso.
          </Typography>
          <TextField
            inputRef={email}
            variant="outlined"
            margin="dense"
            required
            fullWidth
            label="Email"
            autoFocus
            type="email"
            autoComplete="off"
          />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={onClose} disabled={isLoading}>
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            disabled={isLoading}
          >
            Resetar senha
            {isLoading && <ButtonCircularProgress />}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

ChangePassword.propTypes = {
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ChangePassword);
