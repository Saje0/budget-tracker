import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function Table({ data, setShowDeleteModal, setRowdata, setShowEditModal }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-400 uppercase bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              ammount
            </th>
            <th scope="col" className="px-6 py-3">
              category
            </th>
            <th scope="col" className="px-6 py-3">
              date
            </th>
            <th scope="col" className="px-6 py-3">
              description
            </th>
            <th scope="col" className="px-6 py-3">
              actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map?.((row) => (
            <tr className="bg-gray-800">
              <td className="px-6 py-4">{row.ammount}</td>
              <td className="px-6 py-4">{row.category}</td>
              <td className="px-6 py-4">{row.date}</td>
              <td className="px-6 py-4">{row.description}</td>
              <td className="flex items-center gap-4 px-6 py-4">
                <MdDelete
                  size={18}
                  onClick={() => {
                    setRowdata(row);
                    setShowDeleteModal(true);
                  }}
                  className="text-red-500 cursor-pointer"
                />
                <FiEdit
                  size={18}
                  onClick={() => {
                    setRowdata({});
                    setRowdata(row);
                    setShowEditModal(true);
                  }}
                  className="cursor-pointer text-white/70"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
