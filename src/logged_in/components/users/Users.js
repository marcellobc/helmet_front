import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Paper, withStyles } from "@material-ui/core";
import GroupsTable from "./UsersTable";
import helmet from "../../../shared/integrations/helmet";
import EditGroupDialog from "./EditGroupDialog";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)",
  },
};

function Users({ selectUsers }) {
  const [tableIsLoading, setTableIsLoading] = useState(false);
  const [editRow, setEditRow] = useState(false);
  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    setTableIsLoading(true);
    const payload = await helmet.auth.users.findAll();
    if (payload?.data) {
      setRows(payload.data);
    }

    setTableIsLoading(true);
  };

  const load = async () => {
    selectUsers();
    fetchData();
  };

  useEffect(() => {
    load();
  }, [selectUsers]);

  return (
    <Paper>
      <GroupsTable
        loading={tableIsLoading}
        rows={rows}
        onEdit={setEditRow}
        onDelete={(row) => console.log("delete", row)}
      />
      <EditGroupDialog
        id={editRow?.id}
        onCancel={() => setEditRow(null)}
        onSubmit={() => {
          setEditRow(null);
          fetchData();
        }}
      />
    </Paper>
  );
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectSubscription: PropTypes.func.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default withStyles(styles)(Users);
