import Modal from "../../common/modal";

function DeleteModal({
  showModal,
  setShowModal,
  setGetData,
  rowData,
  data,
  localStorageName,
  setRowdata,
}) {
  const deleteRow = () => {
    const removeItem = data?.filter?.((i) => i.id != rowData.id);
    localStorage.setItem(localStorageName, JSON.stringify(removeItem));
    setGetData(true);
    setRowdata({});
    setShowModal(false);
  };

  return (
    <Modal width={"width-[800px]"} show={showModal} onClose={setShowModal}>
      <div className="mt-5">Are you sure you want to delete </div>
      <button
        onClick={() => deleteRow()}
        type="submit"
        className="text-white mt-8 bg-red-600 hover:bg-red-800  font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center "
      >
        Submit
      </button>
    </Modal>
  );
}

export default DeleteModal;
