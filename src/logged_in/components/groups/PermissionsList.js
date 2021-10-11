import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import helmet from "../../../shared/integrations/helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup({ selected = [], setSelected }) {
  const [allPermissions, setAllPermissions] = useState([]);

  useEffect(() => {
    helmet.auth.permissions.findAll().then((payload) => {
      setAllPermissions(payload?.data ?? []);
    });
  }, []);

  const classes = useStyles();

  const handleChange = (event) => {
    const permissionId = +event.target.name;
    const wasSelected = selected.some((s) => s === permissionId);

    if (wasSelected) {
      setSelected(selected.filter((p) => p !== permissionId));
    } else {
      const newValue = [...new Set([...selected, permissionId])];
      setSelected(newValue);
    }
  };

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Permissões</FormLabel>
      <FormGroup>
        {allPermissions.map((p) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={selected.some((s) => s === p.id)}
                onChange={handleChange}
                name={p.id}
              />
            }
            label={p.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
