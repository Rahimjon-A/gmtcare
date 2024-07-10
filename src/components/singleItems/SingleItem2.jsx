const tabData = [
  {
    name: 'Вес оборудования',
    value: '90 кг',
  },
  {
    name: 'Детектор ',
    value: 'CsI - на основе аморфного кремния',
  },
  {
    name: 'Время сканирования ',
    value: 'CPAN стандарт - 12 сек',
  },
  {
    name: 'Размер фокусного пятна  ',
    value: '0.6',
  },
  {
    name: 'Динамический диапазон  ',
    value: '16 бит (65 536 градации серого)',
  },
  {
    name: 'Рабочее напряжение  ',
    value: '90 кг',
  },
  {
    name: 'Максимальный ток  ',
    value: 'CsI - на основе аморфного кремния',
  },
  {
    name: 'Гарантия   ',
    value: 'PAN стандарт - 12 сек',
  },
];

const SingleItem2 = () => {
  return (
    <div className="px-[25px] py-[30px] bg-white rounded-[10px]">
      <p className="text-[12px] md:text-[16px] lg:text-[18px] font-semibold pb-[20px] border-b md:border-b-0  ">
        Описание оборудования
      </p>
      <div className="grid grid-cols-1 w-full md:w-[50%] lg:w-full lg:grid-cols-2 ">
        {tabData.map((tab, index) => (
          <div key={index} className="grid grid-cols-2  ">
            <p className="text-[10px] lg:text-[12px] text-[--text] mb-[10px] ">
              {tab.name} . . . . . . . . . . .
            </p>
            <p className="text-[10px] lg:text-[12px] font-medium text-[--second] ">{tab.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleItem2;
