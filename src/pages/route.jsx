import { supabase } from "../../notes/page";
import React, { useEffect, useState } from "react";


function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("notes")
        .select("id, title");

      if (!error) {
        setNotes(data);
      } else {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Notes</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>{note.id}</td>
              <td>{note.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Notes;