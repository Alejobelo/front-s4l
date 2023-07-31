"use client";
import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // Utilizamos los estados locales `email` y `price` para enviarlos a la función `post` cuando se haga clic en el botón
    const data = {
      firstName: email,
      lastName: "sanchez",
      phone: price,
    };

    try {
      const response = await fetch("http://localhost:3001/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      // Aquí puedes manejar la respuesta del servidor si es necesario
      const responseData = await response.json();
      console.log(responseData); // Aquí verás la respuesta del servidor en formato JSON
      setEmail("");
      setPrice("");
      return responseData;
    } catch (error) {
      console.error(error);
      throw error; // Lanza el error para que el componente `Form` pueda manejarlo
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center mb-8 mt-4">
        <h2 className="font-semibold">Nuevo Producto</h2>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="inline-block m-2 bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block mb-2 p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="Producto"
        ></input>

        <input
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          className="inline-block m-2 bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block mb-2 p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="Precio"
        ></input>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
