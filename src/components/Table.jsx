import { useEffect, useState } from "react";
import invoicesData from "../data/invoices.json";
import TopTable from "./TopTable";

const Table = () => {
  const [data, setData] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    // Set data from imported JSON file
    setData(invoicesData);
  }, []);

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
    setSelectedRow(index);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    const newCheckedItems = {};
    data.forEach((_, index) => {
      newCheckedItems[index] = newSelectAll;
    });
    setCheckedItems(newCheckedItems);
  };

  const handleItemCheck = (index) => {
    const newCheckedItems = {
      ...checkedItems,
      [index]: !checkedItems[index],
    };
    setCheckedItems(newCheckedItems);

    // Update select all state
    const allChecked = data.every((_, idx) => newCheckedItems[idx]);
    setSelectAll(allChecked);
  };

  return (
    <div className="p-2 sm:p-4 lg:p-6 max-w-full mx-auto">
      <div className="m-5 rounded-2xl">
        <TopTable />
      </div>
    

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 text-sm font-semibold text-gray-700 w-16">
                  <span className="block text-center mt-1">All</span>
                </th>
                <th className="p-3 text-sm font-semibold text-gray-700">No</th>
                <th className="p-3 text-sm font-semibold text-gray-700">
                  Company
                </th>
                <th className="p-3 text-sm font-semibold text-gray-700">GST</th>
                <th className="p-3 text-sm font-semibold text-gray-700">
                  Order ID
                </th>
                <th className="p-3 text-sm font-semibold text-gray-700">
                  Invoice ID
                </th>
                <th className="p-3 text-sm font-semibold text-gray-700">
                  Issued Date
                </th>
                <th className="p-3 text-sm font-semibold text-gray-700">
                  Amount
                </th>
                <th className="p-3 text-sm font-semibold text-gray-700">
                  Department
                </th>
              </tr>
              <tr>
                <td colSpan="9" className="p-0">
                  <hr className="border-t w-full border-gray-200 my-2" />
                </td>
              </tr>
            </thead>
            <tbody>
              {data.map((invoice, index) => (
                <>
                  <tr
                    key={invoice.id}
                    className={`
                      border-b transition-all duration-200
                      ${
                        selectedRow === index
                          ? "bg-[#13255B] text-white hover:bg-blue-700"
                          : "hover:bg-gray-50"
                      }
                    `}
                  >
                    <td className="p-3 text-sm">
                      <div className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={checkedItems[index] || false}
                          onChange={() => handleItemCheck(index)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                      </div>
                    </td>
                    <td
                      className="p-3 text-sm cursor-pointer"
                      onClick={() => toggleRow(index)}
                    >
                      {invoice.id}
                    </td>
                    <td
                      className="p-3 text-sm font-medium cursor-pointer"
                      onClick={() => toggleRow(index)}
                    >
                      {invoice.company}
                    </td>
                    <td
                      className="p-3 text-sm cursor-pointer"
                      onClick={() => toggleRow(index)}
                    >
                      {invoice.gst}
                    </td>
                    <td
                      className="p-3 text-sm cursor-pointer"
                      onClick={() => toggleRow(index)}
                    >
                      {invoice.orderId}
                    </td>
                    <td
                      className="p-3 text-sm cursor-pointer"
                      onClick={() => toggleRow(index)}
                    >
                      {invoice.invoiceId}
                    </td>
                    <td
                      className="p-3 text-sm cursor-pointer"
                      onClick={() => toggleRow(index)}
                    >
                      {invoice.issuedDate}
                    </td>
                    <td
                      className="p-3 text-sm font-semibold cursor-pointer"
                      onClick={() => toggleRow(index)}
                    >
                      ₹ {invoice.amount}
                    </td>
                    <td
                      className="p-3 text-sm cursor-pointer"
                      onClick={() => toggleRow(index)}
                    >
                      {invoice.department}
                    </td>
                  </tr>
                  {expandedRow === index && (
                    <tr className="bg-[#E4E9F0] border-b">
                      <td colSpan="9" className="p-4 text-gray-700">
                        <div className="space-y-2">
                          <p className="text-sm">
                            📌 <strong>Remark</strong> 
                          </p>
                          <div className="text-sm text-gray-600">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-3">
        {data.map((invoice, index) => (
          <div
            key={invoice.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex items-center p-4 border-b bg-gray-50">
              <input
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => handleItemCheck(index)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mr-3"
              />
              <span className="text-sm font-medium text-gray-700">
                Select Invoice
              </span>
            </div>

            <div
              onClick={() => toggleRow(index)}
              className={`
                p-4 cursor-pointer transition-all duration-200
                ${
                  selectedRow === index
                    ? "bg-[#13255B] text-white"
                    : "hover:bg-gray-50"
                }
              `}
            >
              {/* Mobile Card Header */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3
                    className={`font-semibold text-sm sm:text-base ${
                      selectedRow === index ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {invoice.company}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm ${
                      selectedRow === index ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    Invoice: {invoice.invoiceId}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-bold text-sm sm:text-base ${
                      selectedRow === index ? "text-white" : "text-gray-800"
                    }`}
                  >
                    ₹ {invoice.amount}
                  </p>
                  <p
                    className={`text-xs ${
                      selectedRow === index ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    #{invoice.id}
                  </p>
                </div>
              </div>

              {/* Mobile Card Details Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                <div>
                  <span
                    className={`font-medium ${
                      selectedRow === index ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    GST:
                  </span>
                  <span
                    className={`ml-1 ${
                      selectedRow === index ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {invoice.gst}
                  </span>
                </div>
                <div>
                  <span
                    className={`font-medium ${
                      selectedRow === index ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    Order ID:
                  </span>
                  <span
                    className={`ml-1 ${
                      selectedRow === index ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {invoice.orderId}
                  </span>
                </div>
                <div>
                  <span
                    className={`font-medium ${
                      selectedRow === index ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    Date:
                  </span>
                  <span
                    className={`ml-1 ${
                      selectedRow === index ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {invoice.issuedDate}
                  </span>
                </div>
                <div>
                  <span
                    className={`font-medium ${
                      selectedRow === index ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    Dept:
                  </span>
                  <span
                    className={`ml-1 ${
                      selectedRow === index ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {invoice.department}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Expanded Details */}
            {expandedRow === index && (
              <div className="px-4 pb-4 bg-blue-50 border-t">
                   <div className="space-y-2">
                          <p className="text-sm">
                            📌 <strong>Remark</strong> 
                          </p>
                          <div className="text-sm text-gray-600">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum</p>
                          </div>
                        </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
