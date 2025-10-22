import { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

function Selectatthree() {
  const cards = [{ title: "بيع البطائق" }];

  const [fromForms, setFromForms] = useState(cards.map(() => [{ amount: "" }]));
  const [toForms, setToForms] = useState(cards.map(() => [{ amount: "" }]));

  // ✅ إضافة صف جديد
  const addNewForm = (cardIndex, formIndex, type) => {
    if (type === "from") {
      setFromForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex].splice(formIndex + 1, 0, { amount: "" });
        return copy;
      });
    } else if (type === "to") {
      setToForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex].splice(formIndex + 1, 0, { amount: "" });
        return copy;
      });
    }
  };

  // ✅ تعديل المبلغ
  const handleAmountChange = (cardIndex, formIndex, type, value) => {
    if (type === "from") {
      setFromForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex][formIndex].amount = value;
        return copy;
      });
    } else {
      setToForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex][formIndex].amount = value;
        return copy;
      });
    }
  };

  // ✅ حذف صف
  const handleDeleteForm = (cardIndex, formIndex, type) => {
    if (type === "from") {
      setFromForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex] = copy[cardIndex].filter((_, i) => i !== formIndex);
        return copy;
      });
    } else {
      setToForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex] = copy[cardIndex].filter((_, i) => i !== formIndex);
        return copy;
      });
    }
  };

  return (
    <>
      <PageMeta
        title="عمولة بيع البطائق"
        description="صفحة لإدارة بيع البطائق"
      />
      <PageBreadcrumb pageTitle="عمولة بيع البطائق" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, cardIndex) => (
          <ComponentCard
            key={cardIndex}
            title={card.title}
            titletow="إنشاء جديد"
          >
            <div dir="rtl" className="space-y-5 max-w-xl mx-auto">
              {/* من حساب */}
              <div>
                {fromForms[cardIndex].map((form, formIndex) => (
                  <form
                    key={`from-${cardIndex}-${formIndex}`}
                    className="flex items-center gap-3 mb-3"
                  >
                    <input
                      type="number"
                      placeholder="ادخل المبلغ"
                      value={form.amount}
                      onChange={(e) =>
                        handleAmountChange(
                          cardIndex,
                          formIndex,
                          "from",
                          e.target.value
                        )
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <h4 className="font-semibold w-[15%] text-gray-800 dark:text-gray-200 mb-3">
                      من ح /
                    </h4>
                    <select
                      dir="rtl"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">اختر النوع</option>
                      <option value="مدينون">مدينون</option>
                      <option value="نقدية">نقدية بالصندوق</option>
                      <option value="عمولة">عمولة المزاد</option>
                      <option value="نقدية">نقدية لدى المصارف</option>
                      <option value="ايرادات">ايرادات متنوعة</option>
                    </select>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => addNewForm(cardIndex, formIndex, "from")}
                        className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteForm(cardIndex, formIndex, "from")
                        }
                        className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                      >
                        X
                      </button>
                    </div>
                  </form>
                ))}
              </div>

              {/* إلى حساب */}
              <div>
                {toForms[cardIndex].map((form, formIndex) => (
                  <form
                    key={`to-${cardIndex}-${formIndex}`}
                    className="flex items-center gap-3 mb-3"
                  >
                    <input
                      type="number"
                      placeholder="ادخل المبلغ"
                      value={form.amount}
                      onChange={(e) =>
                        handleAmountChange(
                          cardIndex,
                          formIndex,
                          "to",
                          e.target.value
                        )
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <h4 className="font-semibold w-[15%] text-gray-800 dark:text-gray-200 mb-3">
                      إلى ح /
                    </h4>
                    <select
                      dir="rtl"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">اختر النوع</option>
                      <option value="مدينون">مدينون</option>
                      <option value="نقدية">نقدية بالصندوق</option>
                      <option value="عمولة">عمولة المزاد</option>
                      <option value="نقدية">نقدية لدى المصارف</option>
                      <option value="ايرادات">ايرادات متنوعة</option>
                    </select>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => addNewForm(cardIndex, formIndex, "to")}
                        className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteForm(cardIndex, formIndex, "to")
                        }
                        className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                      >
                        X
                      </button>
                    </div>
                  </form>
                ))}
              </div>
            </div>
          </ComponentCard>
        ))}
      </div>
    </>
  );
}

export default Selectatthree;
