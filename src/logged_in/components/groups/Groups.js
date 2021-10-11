import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Paper, withStyles } from "@material-ui/core";
import GroupsTable from "./GroupsTable";
import helmet from "../../../shared/integrations/helmet";
import EditGroupDialog from "./EditGroupDialog";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)",
  },
};

function Groups({ selectGroups }) {
  const [tableIsLoading, setTableIsLoading] = useState(false);
  const [editRow, setEditRow] = useState(false);
  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    setTableIsLoading(true);
    const { data } = await helmet.auth.roles.findAll();
    setRows(data);
    setTableIsLoading(true);
  };

  const load = async () => {
    selectGroups();
    fetchData();
  };

  useEffect(() => {
    load();
  }, [selectGroups]);

  return (
    <Paper>
      <GroupsTable
        loading={tableIsLoading}
        rows={rows}
        onEdit={setEditRow}
        onDelete={async (row) => {
          await helmet.auth.roles.remove(row.id);
          fetchData();
        }}
      />
      <EditGroupDialog
        data={editRow}
        onCancel={() => setEditRow(null)}
        onSubmit={() => {
          setEditRow(null);
          fetchData();
        }}
      />
    </Paper>
  );
}

Groups.propTypes = {
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectSubscription: PropTypes.func.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default withStyles(styles)(Groups);
