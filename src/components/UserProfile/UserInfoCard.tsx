import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function CurrencyExchange() {
  const [paymentType, setPaymentType] = useState("");
  const [previousBalance, setPreviousBalance] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [dollarAmount, setDollarAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  // بيانات العميل KYC
  const [customerName, setCustomerName] = useState("");
  const [idType, setIdType] = useState("");
  const [, setIdFile] = useState<File | null>(null);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [job, setJob] = useState("");

  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPaymentType(value);

    if (value === "نقدي") {
      setPreviousBalance(5000);
      setCurrentBalance(5000);
    } else {
      setPreviousBalance(0);
      setCurrentBalance(0);
    }
  };

  const handleDollarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDollarAmount(value);

    const num = parseFloat(value) || 0;
    setCurrentBalance(previousBalance - num);
  };

  const handleClear = () => {
    setPaymentType("");
    setPreviousBalance(0);
    setCurrentBalance(0);
    setDollarAmount("");
    setTransactionType("");

    // مسح بيانات العميل
    setCustomerName("");
    setIdType("");
    setIdFile(null);
    setPhone("");
    setAddress("");
    setJob("");
  };

  // الحسابات المالية
  const dollarValue = parseFloat(dollarAmount) || 0;
  const buyPrice = 1320;
  const sellPrice = 1320;
  const buyFee = dollarValue ? (dollarValue * buyPrice) / 400 : 0;
  const sellFee = dollarValue ? (dollarValue * sellPrice) / 200 : 0;
  const buyTotal = dollarValue ? dollarValue * buyPrice - buyFee : 0;
  const sellTotal = dollarValue ? dollarValue * sellPrice + sellFee : 0;

  return (
    <>
      <PageMeta
        title="صفحة الصيرفة"
        description="إدارة عمليات بيع وشراء الدولار وحساب الرصيد والعمولات"
      />
      <PageBreadcrumb pageTitle="" />

      <div className="space-y-6 p-6 max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
          عمليات الصيرفة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Form Inputs */}
          <div className="space-y-4">
            {/* بيانات العميل KYC */}

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                الاسم الرباعي
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="col-span-2 border border-gray-400 p-1 rounded"
              />
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                المستمسك
              </label>
              <select
                className="col-span-1 border border-gray-400 p-1 rounded"
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
              >
                <option value=""></option>
                <option value="بطاقة وطنية">بطاقة وطنية</option>
                <option value="هوية أحوال">هوية أحوال</option>
              </select>
              <input
                type="file"
                accept=".jpg,.png,.pdf"
                onChange={(e) => setIdFile(e.target.files ? e.target.files[0] : null)}
                className="col-span-1 border border-gray-400 p-1 rounded ml-2"
              />
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                الهاتف
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-2 border border-gray-400 p-1 rounded"
              />
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                العنوان
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="col-span-2 border border-gray-400 p-1 rounded"
              />
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                المهنة
              </label>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="col-span-2 border border-gray-400 p-1 rounded"
              />
            </div>

            {/* باقي الحقول الأصلية */}
            <div className="grid grid-cols-3 items-center mt-4">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                نوع الحركة
              </label>
              <select
                className="col-span-2 border border-gray-400 p-1 rounded bg-white"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option></option>
                <option>شراء دولار</option>
                <option>بيع دولار</option>
              </select>
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                نوع الدفع
              </label>
              <select
                className="col-span-2 border border-gray-400 p-1 rounded bg-white"
                value={paymentType}
                onChange={handlePaymentChange}
              >
                <option></option>
                <option>ذمم</option>
                <option>نقدي</option>
              </select>
            </div>

            {paymentType === "ذمم" && (
              <div className="grid grid-cols-3 items-center">
                <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                  اسم الحساب
                </label>
                <select className="col-span-2 border border-gray-400 p-1 rounded bg-white">
                  <option></option>
                  <option>العملاء</option>
                  <option>الموردين</option>
                  <option>البنك</option>
                  <option>الحرير</option>
                </select>
              </div>
            )}

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                دولار
              </label>
              <div className="col-span-2 flex items-center border border-gray-400 rounded px-2">
                <span className="text-gray-600 font-bold mr-1">$</span>
                <input
                  type="number"
                  value={dollarAmount}
                  onChange={handleDollarChange}
                  className="w-full p-1 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column: الرصيد والحسابات */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-2">
                <div className="bg-green-600 text-white text-center py-1 rounded-t font-bold">
                  رصيد سابق
                </div>
                <div className="flex items-center border border-gray-400 rounded px-2 mt-2">
                  <span className="text-gray-600 font-bold mr-1">$</span>
                  <input
                    type="text"
                    readOnly
                    value={previousBalance.toLocaleString()}
                    className="w-full text-center font-bold text-lg p-2 outline-none"
                  />
                </div>
              </div>

              <div className="p-2">
                <div className="bg-green-600 text-white text-center py-1 rounded-t font-bold">
                  رصيد حالي
                </div>
                <div className="flex items-center border border-gray-400 rounded px-2 mt-2">
                  <span className="text-gray-600 font-bold mr-1">$</span>
                  <input
                    type="text"
                    readOnly
                    value={currentBalance.toLocaleString()}
                    className="w-full text-center font-bold text-lg p-2 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* المعلومات المالية حسب نوع العملية */}
            {transactionType && (
              <div className="mt-4 p-3 border-t border-gray-300">
                {transactionType === "شراء دولار" ? (
                  <div>
                    <p>سعر الشراء: {buyPrice.toLocaleString()} دينار</p>
                    <p>عمولة الشراء: {buyFee.toLocaleString()} دينار</p>
                    <p>
                      المبلغ الإجمالي المدفوع للعميل:{" "}
                      <strong>{buyTotal.toLocaleString()} دينار</strong>
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>سعر البيع: {sellPrice.toLocaleString()} دينار</p>
                    <p>عمولة البيع: {sellFee.toLocaleString()} دينار</p>
                    <p>
                      المبلغ الإجمالي المستلم من العميل:{" "}
                      <strong>{sellTotal.toLocaleString()} دينار</strong>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* أزرار الحفظ والتفريغ */}
        <div className="flex justify-between items-center mt-6">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded"
          >
            حفظ
          </button>

          <button
            onClick={handleClear}
            className="bg-red-300 text-black font-bold py-2 px-6 rounded border border-gray-400"
          >
            تفريغ الحقول
          </button>
        </div>
      </div>
    </>
  );
}
