import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Paper, withStyles } from "@material-ui/core";
import TeamsTable from "./TeamsTable";
import helmet from "../../../shared/integrations/helmet";
import EditGroupDialog from "./EditGroupDialog";
import session from "../../../shared/functions/session";
import games from "../../shared/functions/games";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)",
  },
};

function Teams({ selectGroups }) {
  const [tableIsLoading, setTableIsLoading] = useState(false);
  const [editRow, setEditRow] = useState(false);
  const [rows, setRows] = useState([]);
  const [userGames, setUsersGames] = useState([]);

  const loggedUserId = session.getData().loggedUser._id;

  const fetchData = async () => {
    setTableIsLoading(true);

    const data = await helmet.auth.teams.findAllByUserId(loggedUserId);

    setRows(data);
    setTableIsLoading(true);
  };

  const load = async () => {
    helmet.auth.users.findById(loggedUserId).then(data => data && set);
    selectGroups();
    fetchData();
  };

  useEffect(() => {
    load();
  }, [selectGroups]);

  return (
    <Paper>
      <TeamsTable
        addNew={addNew}
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

Teams.propTypes = {
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectSubscription: PropTypes.func.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default withStyles(styles)(Teams);
