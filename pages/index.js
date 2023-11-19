import Table from "../components/common/table";
import { IoMdAdd } from "react-icons/io";
import Button from "../components/common/button";
import { useState } from "react";
import AddIncomesModal from "../components/modules/addIncomesModal";
import { useEffect } from "react";
import DeleteModal from "../components/modules/deleteModal";
import EditIncomesModal from "../components/modules/editIncomesModal";
import AddExpensesModal from "../components/modules/addExpensesModal";
import EditExpensesModal from "../components/modules/editExpensesModal";
export default function Home() {
  const [getData, setGetData] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddExpensesModal, setShowAddExpensesModal] = useState(false);
  const [showEditExpensesModal, setEditExpensesModal] = useState(false);
  const [expensesData, setExpensesData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteExpensesModal, setShowDeleteExpensesModal] = useState(false);
  const [rowData, setRowdata] = useState({});
  const [incomesData, setIncomesData] = useState([]);

  useEffect(() => {
    const item = localStorage.getItem("data");
    setIncomesData(JSON?.parse?.(item));
    setGetData(false);
    const ExpensesData = localStorage.getItem("expensesData");
    setExpensesData(JSON?.parse?.(ExpensesData));
  }, [getData]);

  let totalIncomes = incomesData?.reduce?.((accumulator, object) => {
    return accumulator + Number(object.ammount);
  }, 0);

  let totalExpenses = expensesData?.reduce?.((accumulator, object) => {
    return accumulator + Number(object.ammount);
  }, 0);

  let remaining = totalIncomes - totalExpenses;

  return (
    <main>
      <h1 className="my-6 text-xl font-bold text-center">Budget Tracker</h1>
      <Button
        click={() => setShowAddModal(true)}
        title="Add Income"
        img={<IoMdAdd />}
      />

      <Table
        data={incomesData ?? []}
        setShowDeleteModal={setShowDeleteModal}
        setRowdata={setRowdata}
        setShowEditModal={setShowEditModal}
      />
      <Button
        click={() => setShowAddExpensesModal(true)}
        title="Add Expenses"
        img={<IoMdAdd />}
      />
      <Table
        data={expensesData ?? []}
        setShowDeleteModal={setShowDeleteExpensesModal}
        setRowdata={setRowdata}
        setShowEditModal={setEditExpensesModal}
      />
      <div className="mt-10">
        <h1 className="flex justify-center text-2xl font-bold">Summary</h1>
        <div className="flex items-center justify-center gap-4 mt-10 text-[22px]">
          <div className="p-4 text-white rounded-lg bg-[#3CB371]">
            Total incomes {totalIncomes}
          </div>
          <div className="p-4 text-white rounded-lg bg-[#DC143C]">
            Total Expenses {totalExpenses}
          </div>
          <div className="p-4 text-white rounded-lg bg-[#778899]">
            Remaining {remaining}
          </div>
        </div>
      </div>

      <AddIncomesModal
        setGetData={setGetData}
        showModal={showAddModal}
        setShowModal={setShowAddModal}
      />
      <EditIncomesModal
        setRowdata={setRowdata}
        rowData={rowData}
        setGetData={setGetData}
        showModal={showEditModal}
        setShowModal={setShowEditModal}
      />
      <AddExpensesModal
        setGetData={setGetData}
        showModal={showAddExpensesModal}
        setShowModal={setShowAddExpensesModal}
      />
      <EditExpensesModal
        setRowdata={setRowdata}
        rowData={rowData}
        setGetData={setGetData}
        showModal={showEditExpensesModal}
        setShowModal={setEditExpensesModal}
      />
      <DeleteModal
        localStorageName={"data"}
        data={incomesData}
        rowData={rowData}
        setGetData={setGetData}
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        setRowdata={setRowdata}
      />
      <DeleteModal
        setRowdata={setRowdata}
        localStorageName={"expensesData"}
        data={expensesData}
        rowData={rowData}
        setGetData={setGetData}
        showModal={showDeleteExpensesModal}
        setShowModal={setShowDeleteExpensesModal}
      />
    </main>
  );
}
