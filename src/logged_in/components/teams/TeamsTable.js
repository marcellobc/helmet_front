import { Typography } from "@material-ui/core";
import * as React from "react";
import EnhancedTable from "../../../shared/components/EnhancedTable";
import session from "../../../shared/functions/session";
import TableAction from "../../shared/components/TableAction";

export default function GroupsTable({
  addNew,
  rows,
  loading,
  onVisualize,
  onEdit,
  onDelete,
}) {
  const loggedUser = session.getData().loggedUser;

  const columns = [
    {
      id: "_id",
      label: "Id",
    },
    {
      id: "name",
      label: "Nome",
    },
    {
      id: "game",
      label: "Jogo",
      format: "game",
    },
    {
      id: "createdAt",
      label: "Data de criação",
      format: "date",
    },
    {
      id: "owner",
      label: "Cargo",
      render: (_, owner) => (owner === loggedUser._id ? "Dono" : "Membro"),
    },
    {
      id: "helmetStats",
      label: "Pontuação",
      render: (_, score) => score.toString().replace(".", ","),
    },
    {
      id: "actions",
      actions: [
        (row) => (
          <TableAction
            condition={true}
            onClick={() => onVisualize(row)}
            content="Visualizar"
          />
        ),
        (row) => (
          <TableAction
            condition={loggedUser._id === row.owner}
            onClick={() => onEdit(row)}
            content="Editar"
          />
        ),
        (row) => (
          <TableAction
            condition={loggedUser._id === row.owner}
            onClick={() => onDelete(row)}
            content="Deletar"
          />
        ),
      ],
    },
  ];

  return (
    <EnhancedTable
      addNew={addNew}
      title="Equipes"
      columns={columns}
      rows={rows}
      loading={loading}
    />
  );
}
