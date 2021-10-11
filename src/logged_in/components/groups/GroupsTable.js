import { Typography } from "@material-ui/core";
import * as React from "react";
import EnhancedTable from "../../../shared/components/EnhancedTable";

export default function GroupsTable({ rows, loading, onEdit, onDelete }) {
  const columns = [
    {
      id: "id",
      label: "Id",
    },
    {
      id: "name",
      label: "Nome",
    },
    {
      id: "created_at",
      label: "Data de criação",
      format: "date",
    },
    {
      id: "actions",
      actions: [
        (row) => (
          <Typography
            style={{ cursor: "pointer" }}
            align="center"
            color="primary"
            onClick={() => onEdit(row)}
            role="button"
          >
            Editar
          </Typography>
        ),
        (row) => (
          <Typography
            style={{ cursor: "pointer" }}
            align="center"
            color="primary"
            onClick={() => onDelete(row)}
            role="button"
          >
            Deletar
          </Typography>
        ),
      ],
    },
  ];

  return (
    <EnhancedTable
      title="Grupos"
      columns={columns}
      rows={rows}
      loading={loading}
    />
  );
}
