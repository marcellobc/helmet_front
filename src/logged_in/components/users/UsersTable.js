import * as React from "react";
import EnhancedTable from "../../../shared/components/EnhancedTable";

export default function UsersTable({ rows, loading, onEdit, onDelete }) {
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
      id: "email",
      label: "Email",
    },
    {
      label: "Grupo de acesso",
      render: (row, _) => row?.roles?.[0]?.name,
    },
    {
      id: "created_at",
      label: "Data de criação",
      format: "date",
    },
  ];

  return (
    <EnhancedTable
      title="Usuários"
      columns={columns}
      rows={rows}
      loading={loading}
    />
  );
}
