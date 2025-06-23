import DataTable, { TableColumn } from "react-data-table-component";
import { z } from "zod";
import { naturopatiaEvents } from "../constants/index";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EventoPropsSchema = z.object({
  id: z.number(),
  title: z.string().nonempty(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
});

type EventoProps = z.infer<typeof EventoPropsSchema>;

const ExpandedComponent = ({ data }: { data: EventoProps }) => (
  <pre className="text-xl py-4 pl-14">
    {JSON.stringify(data.description, null, 2).slice(1, -1)}
  </pre>
);

function Eventi() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  naturopatiaEvents.forEach((event) => {
    EventoPropsSchema.parse(event);
  });

  const columns: TableColumn<EventoProps>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
      width: "80px",
      sortable: true,
    },
    {
      name: "Titolo",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Descrizione",
      selector: (row) => row.description || "",
      cell: (row) => (
        <div className="whitespace-normal max-w-[800px]">
          {row.description || ""}
        </div>
      ),
      sortable: true,
    },

    {
      name: "Immagine",
      selector: (row) => row.imageUrl || "immagine non presente",
    },
    {
      name: "Azioni",
      cell: (row) => (
        <>
          <button
            onClick={() => navigate(`/edit-event/${row.id}`)}
            className="bg-primary text-black hover:bg-primary-dark rounded p-2"
          >
            <MdModeEdit size={20} color="blue" className="cursor-pointer" />
          </button>
          <button
            onClick={() => console.log("ciao")}//elimiana
            className="bg-primary text-red-600 hover:bg-primary-dark rounded p-2"
          >
            <MdDelete size={20} color="red" className="cursor-pointer" />
          </button>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      center: true,
    },
  ];

  return (
    <>
      <DataTable
        className="mt-32"
        columns={columns}
        data={naturopatiaEvents}
        pagination
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </>
  );
}

export default Eventi;
