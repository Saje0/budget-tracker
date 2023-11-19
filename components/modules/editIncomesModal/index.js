import { useState } from "react";
import Modal from "../../common/modal";

function Index({ showModal, setShowModal, setGetData, rowData, setRowdata }) {
  const [ammount, setAmmount] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataLocalstorage = localStorage?.getItem?.("data"); // 👈️ get data from local storage
    const dataArray = JSON?.parse?.(dataLocalstorage)?.filter?.(
      (i) => i?.id != rowData?.id
    ); // 👈️ parse data from local storage
    const data = Array.isArray(dataArray)
      ? [
          // 👈️ spread local storage data and add the new item
          ...dataArray,
          {
            id: rowData.id,
            ammount: ammount ? ammount : rowData?.ammount,
            category: category ? category : rowData?.category,
            date: date ? date : rowData?.date,
            description: description ? description : rowData?.description,
          },
        ]
      : [
          {
            id: rowData.id,
            ammount: ammount ? ammount : rowData?.ammount,
            category: category ? category : rowData?.category,
            date: date ? date : rowData?.date,
            description: description ? description : rowData?.description,
          },
        ];

    localStorage.setItem("data", JSON.stringify(data)); // 👈️ add data to local storage
    console.log("ammount 👉️", ammount);
    console.log("category 👉️", category);
    console.log("date 👉️", date);
    console.log("description 👉️", description);

    // 👇️ clear all input values in the form
    setAmmount("");
    setCategory("");
    setDate("");
    setDescription("");
    // 👇️ get the new data from local storage
    setGetData(true);
    setShowModal(false); // 👈️ close the modal
    setRowdata({});
  };

  return (
    <Modal
      width={"width-[800px]"}
      show={showModal}
      /*  removeData={setRowdata} */
      onClose={setShowModal}
    >
      <span className="text-xl font-bold text-center">Edit Income</span>
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium ">Ammount</label>
            <input
              defaultValue={rowData.ammount ?? ""}
              onChange={(e) => setAmmount(e.target.value)}
              type="number"
              min={0}
              id="ammount"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg fblock w-full p-2.5 "
              placeholder="Ammount"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium ">Category</label>
            <input
              defaultValue={rowData.category ?? ""}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              id="category"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Category"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium ">Date</label>
            <input
              max={"2023/11/30"}
              defaultValue={rowData.date ?? ""}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              id="date"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Flowbite"
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium ">Description</label>
          <textarea
            defaultValue={rowData.description ?? ""}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
            placeholder="description"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white mt-8 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}

export default Index;
