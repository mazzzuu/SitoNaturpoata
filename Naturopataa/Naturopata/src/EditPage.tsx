import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { z } from "zod";
import { naturopatiaEvents } from "../constants/index";

const EventoPropsSchema = z.object({
  id: z.number(),
  title: z.string().nonempty("Il titolo è obbligatorio"),
  description: z.string().optional(),
  imageUrl: z.string().url("Inserisci un URL valido").optional(),
});

type EventoProps = z.infer<typeof EventoPropsSchema>;

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<EventoProps | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof EventoProps, string>>>({});

  useEffect(() => {
  const eventId = Number(id);
  console.log("eventId:", eventId);
  const evento = naturopatiaEvents.find((e) => e.id === eventId);
  if (!evento) {
    alert("Evento non trovato");
    navigate("/eventi");
  } else {
    setFormData(evento);
  }
}, [id, navigate]);


  const handleChange = (field: keyof EventoProps, value: string) => {
    setFormData((prev) => prev ? { ...prev, [field]: value } : prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    const parsed = EventoPropsSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof EventoProps, string>> = {};
      parsed.error.errors.forEach((err) => {
        const path = err.path[0] as keyof EventoProps;
        fieldErrors[path] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      console.log("Evento aggiornato:", formData);
      // Qui andrebbe la logica di salvataggio (API, localStorage, ecc.)
      alert("Evento salvato con successo");
      navigate("/eventi");
    }
  };

  if (!formData) return <div className="p-4">Caricamento...</div>;

  return (
    <div className="max-w-2xl mx-auto mt-44 mb-40 p-6 bg-gray-100 shadow-lg rounded">
      <h2 className="text-2xl font-semibold mb-6">Modifica Evento</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Titolo</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div>
          <label className="block font-medium">Descrizione</label>
          <textarea
            value={formData.description || ""}
            onChange={(e) => handleChange("description", e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
          />
        </div>
        <div>
          <label className="block font-medium">URL Immagine</label>
          <input
            type="text"
            value={formData.imageUrl || ""}
            onChange={(e) => handleChange("imageUrl", e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl}</p>}
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate("/eventi")}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Annulla
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
          >
            Salva
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPage;
