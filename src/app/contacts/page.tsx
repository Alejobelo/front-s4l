import Form from "../components/form";
async function getData() {
  const res = await fetch("http://localhost:3001/contacts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function Contacts() {
  const data = (await getData()) || [];

  return (
    <div className="relative overflow-x-auto">
      <Form />
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              producto
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data.map((product) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.firstName}
                </th>
                <td className="px-6 py-4">{product.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
