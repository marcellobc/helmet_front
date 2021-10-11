import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import { TextField, Button, Typography, withStyles } from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";

const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
});

function EditGroupDialog({ id, onCancel, onSubmit }) {
  const isVisible = !!id;

  return (
    <Fragment>
      <FormDialog
        open={isVisible}
        onClose={onCancel}
        onFormSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        hideBackdrop
        headline="Editar Grupo"
        content={
          <Fragment>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              // inputRef={emailRef}
              autoFocus
              autoComplete="off"
              type="email"
              FormHelperTextProps={{ error: true }}
            />
            <VisibilityPasswordTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Senha"
              // inputRef={passwordRef}
              autoComplete="off"
              FormHelperTextProps={{ error: true }}
              // onVisibilityChange={setIsPasswordVisible}
              // isVisible={isPasswordVisible}
            />
          </Fragment>
        }
        actions={
          <Fragment>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              // disabled={isLoading}
              size="large"
            >
              Entrar
            </Button>
            <Typography
              style={{ cursor: "pointer" }}
              align="center"
              color="primary"
              onClick={onCancel}
              role="button"
            >
              Cancelar
            </Typography>
          </Fragment>
        }
      />
    </Fragment>
  );
}

EditGroupDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
};

export default withRouter(withStyles(styles)(EditGroupDialog));
