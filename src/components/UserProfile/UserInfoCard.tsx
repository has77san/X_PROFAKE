

export default function UserInfoCard() {
  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="p-4 font-sans rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-end items-center mb-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-2 bg-blue-600 text-white border border-gray-400 rounded px-2 py-0.5">
              <label htmlFor="show">إظهار</label>
              <input type="radio" id="show" name="visibility" defaultChecked />
              <label htmlFor="hide">إخفاء</label>
              <input type="radio" id="hide" name="visibility" />
            </div>
                        <button className="bg-gray-100 px-3 py-1 rounded">Close</button>

          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Left Column - Form Fields */}
          <div className="p-4">
            <form className="space-y-3">
              <div className="grid grid-cols-3 items-center">
                <label className="font-bold w-[100px] h-[30px] flex items-center justify-center bg-blue-800 rounded-[3px] text-white">
                  <span>القيد</span>
                </label>
                <input
                  type="text"
                  className="col-span-2 border border-gray-400 p-1 rounded"
                />
              </div>

              <div className="grid grid-cols-3 items-center">
                <label className="font-bold w-[100px] h-[30px] flex items-center justify-center bg-blue-800 rounded-[3px] text-white">
                  <span>التاريخ</span>
                </label>
                <input
                  type="text"
                  defaultValue="2019-01-26"
                  className="col-span-2 border border-gray-400 p-1 rounded"
                />
              </div>

              <div className="grid grid-cols-3 items-center">
                <label className="font-bold w-[100px] h-[30px] flex items-center justify-center bg-blue-800 rounded-[3px] text-white">
                  <span>نوع الحركة</span>
                </label>
                <select className="col-span-2 border border-gray-400 p-1 rounded bg-white">
                  <option></option>
                  <option>بيع دولار</option>
                  <option>شراء دولار</option>
                </select>
              </div>

              <div className="grid grid-cols-3 items-center">
                <label className="font-bold w-[100px] h-[30px] flex items-center justify-center bg-blue-800 rounded-[3px] text-white">
                  <span>نوع الدفع</span>
                </label>
                <select className="col-span-2 border border-gray-400 p-1 rounded bg-white">
                  <option></option>
                  <option>ذمم</option>
                  <option>نقدي</option>
                </select>
              </div>

              <div className="grid grid-cols-3 items-center">
                <label className="font-bold w-[100px] h-[30px] flex items-center justify-center bg-blue-800 rounded-[3px] text-white">
                  <span>اسم الحساب</span>
                </label>
                <select className="col-span-2 border border-gray-400 p-1 rounded bg-white">
                  <option></option>
                  <option>العملاء</option>
                  <option>الموردين</option>
                  <option>البنك</option>
                  <option>الحرير</option>
                </select>
              </div>

              <div className="grid grid-cols-3 items-center">
                <label className="font-bold w-[100px] h-[30px] flex items-center justify-center bg-blue-800 rounded-[3px] text-white">
                  <span>دولار</span>
                </label>
                <input
                  type="text"
                  className="col-span-2 border border-gray-400 p-1 rounded"
                />
              </div>

              <div className="grid grid-cols-3 items-center">
                <label className="font-bold w-[100px] h-[30px] flex items-center justify-center bg-blue-800 rounded-[3px] text-white">
                  <span>دينار</span>
                </label>
                <input
                  type="text"
                  className="col-span-2 border border-gray-400 p-1 rounded"
                />
              </div>
            </form>
          </div>
          
          {/* Right Column - Prices & Balances */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-1">
                <div className="bg-blue-800 text-white text-center py-1 rounded-t font-bold">
                  سعر الشراء
                </div>
                <div className="flex items-center justify-between p-2 gap-2 border border-gray-300">
                  <input
                    type="text"
                    defaultValue="1,200.00"
                    className="w-full text-xl font-bold text-center p-1"
                  />
                </div>
              </div>

              <div className="p-1">
                <div className="bg-blue-800 text-white text-center py-1 rounded-t font-bold">
                  سعر البيع
                </div>
                <div className="flex items-center justify-between p-2 gap-2 border border-gray-300">
                  <input
                    type="text"
                    defaultValue="1,90.00"
                    className="w-full text-xl font-bold text-center p-1"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-2">
                <div className="bg-green-600 text-white text-center py-1 rounded-t font-bold">
                  رصيد سابق
                </div>
                <input
                  type="text"
                  className="w-full h-[35px] text-center font-bold text-lg p-2 mt-2 rounded border border-gray-400"
                />
                <input
                  type="text"
                  className="w-full h-[35px] text-center font-bold text-lg p-2 mt-2 rounded border border-gray-400"
                />
              </div>

              <div className="p-2">
                <div className="bg-green-600 text-white text-center py-1 rounded-t font-bold">
                  رصيد حالي
                </div>
                <input
                  type="text"
                  className="w-full h-[35px] text-center font-bold text-lg p-2 mt-2 rounded border border-gray-400"
                />
                <input
                  type="text"
                  className="w-full h-[35px] text-center font-bold text-lg p-2 mt-2 rounded border border-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notes Section - Full Width */}
        <div className="mt-4 px-4 flex" >
          <label className="font-bold ml-[9px] w-[120px] h-[30px] flex items-center justify-center bg-blue-800 rounded-[3px] text-white mb-2 ">
            <span>الملاحظات</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-400 p-1 rounded"
          />
        </div>

        {/* Buttons Section - Aligned to the end */}
       <div className="flex justify-between items-center mt-6 px-4">
  {/* الزر الأول في الكود يظهر على اليمين */}
  <button
    type="submit"
    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded"
  >
    حفظ
  </button>
  
  {/* الزر الثاني في الكود يظهر على اليسار */}
  <button className="bg-red-300 text-black font-bold py-2 px-6 rounded border border-gray-400">
    تفريغ الحقول
  </button>
</div>
      </div>
    </div>
  );
}