import { useState } from "react";
import Modal from "../../common/modal";

function Index({ showModal, setShowModal, setGetData }) {
  const [ammount, setAmmount] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataLocalstorage = localStorage?.getItem?.("data"); //  get data from local storage
    const dataArray = JSON?.parse?.(dataLocalstorage); //  parse data from local storage
    const data = Array.isArray(dataArray)
      ? [
          ...dataArray, //  spread local storage data and add the new item
          {
            id: dataArray.length + 2,
            ammount: ammount,
            category: category,
            date: date,
            description: description,
          },
        ]
      : [
          {
            id: 1,
            ammount: ammount,
            category: category,
            date: date,
            description: description,
          },
        ];

    localStorage.setItem("data", JSON.stringify(data)); //  add data to local storage
    console.log("ammount", ammount);
    console.log("category", category);
    console.log("date", date);
    console.log("description", description);

    //  clear all input values in the form
    setAmmount("");
    setCategory("");
    setDate("");
    setDescription("");

    setGetData(true); //  get the new data from local storage
    setShowModal(false); //  close the modal
  };

  return (
    <Modal width={"width-[800px]"} show={showModal} onClose={setShowModal}>
      <span className="text-xl font-bold text-center">Add Income</span>
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium">Ammount</label>
            <input
              value={ammount}
              onChange={(e) => setAmmount(e.target.value)}
              type="number"
              min={0}
              id="ammount"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full p-2.5"
              placeholder="Ammount"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              id="category"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full p-2.5"
              placeholder="Category"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Date</label>
            <input
              max={"2023/11/30"}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              id="date"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full p-2.5"
              placeholder="Flowbite"
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            placeholder="description"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white mt-8 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-auto"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}

export default Index;
