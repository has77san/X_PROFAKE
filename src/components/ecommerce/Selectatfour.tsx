import React from "react";
import PageMeta from "../../components/common/PageMeta";
function Selectatfour() {
  return (
    <>
      <PageMeta
        title="Identification Card | TailAdmin Dashboard"
        description="ID Card creation form with dark/light mode support"
      />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500 p-6">
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-3xl transition-colors duration-500">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
            بطاقة تعريف
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* نوع التشغيل */}
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                نوع التشغيل
              </label>
              <select className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500">
                <option value="">اختر النوع</option>
                <option value="person">شخص</option>
                <option value="company">شركة</option>
              </select>
            </div>

            {/* الاسم الكامل */}
            <Input label="الاسم الكامل" type="text" />
            {/* مكان الولادة */}
            <Input label="مكان الولادة" type="text" />
            {/* صادرة عن */}
            <Input label="صادرة عن" type="text" />
            {/* تاريخ الولادة */}
            <Input label="تاريخ الولادة" type="date" />
            {/* الجنس */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                الجنس
              </label>
              <select className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500">
                <option value="">اختر الجنس</option>
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
              </select>
            </div>

            {/* تاريخ الفتح */}
            <Input label="تاريخ الفتح" type="date" />
            {/* رقم الهاتف */}
            <Input label="رقم الهاتف" type="tel" />
            {/* البريد الإلكتروني */}
            <Input label="البريد الإلكتروني" type="email" />
            {/* رقم بطاقة السكن */}
            <Input label="رقم بطاقة السكن" type="text" />
            {/* رقم الهوية */}
            <Input label="رقم الهوية" type="text" />
            {/* تاريخ الإصدار */}
            <Input label="تاريخ الإصدار" type="date" />
            {/* اسم الأم */}
            <Input label="اسم الأم" type="text" />
            {/* رقم التعريف */}
            <Input label="رقم التعريف" type="text" />
            {/* تاريخ الانتهاء */}
            <Input label="تاريخ الانتهاء" type="date" />
            {/* رقم الهاتف مرة ثانية */}
            <Input label="رقم الهاتف الثانوي" type="tel" />
            {/* جهة الإصدار */}
            <Input label="جهة الإصدار" type="text" />
            {/* البلد */}
            <Input label="البلد" type="text" />
            {/* المحافظة */}
            <Input label="المحافظة" type="text" />
            {/* الشارع */}
            <Input label="الشارع" type="text" />
            {/* العنوان */}
            <div className="col-span-2">
              <Input label="العنوان الكامل" type="text" />
            </div>

            <div className="col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                حفظ البيانات
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

// مكون صغير لتسهيل إدخال الحقول
function Input({ label, type }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        required
        className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}


export default Selectatfour
