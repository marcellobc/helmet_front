import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { TextField, Button, Typography, withStyles } from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import PermissionsList from "./PermissionsList";
import helmet from "../../../shared/integrations/helmet";

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

function EditGroupDialog({ data, onCancel, onSubmit }) {
  const [name, setName] = useState();
  const [permissions, setPermissions] = useState();

  useEffect(() => {
    if (data) {
      setName(data.name);
      setPermissions(data.permissions.map((p) => p.id));
    }
  }, [data]);

  const handleSubmit = async () => {
    const body = { name, permissionsIds: permissions };
    return helmet.auth.roles
      .edit(data.id, body)
      .then((payload) => !!payload && onSubmit());
  };

  return (
    <Fragment>
      <FormDialog
        open={!!data}
        onClose={onCancel}
        onFormSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        hideBackdrop
        headline="Editar Grupo"
        content={
          <Fragment>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              autoFocus
              autoComplete="off"
              FormHelperTextProps={{ error: true }}
            />
            <PermissionsList
              selected={permissions}
              setSelected={setPermissions}
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
              size="large"
            >
              Salvar
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
