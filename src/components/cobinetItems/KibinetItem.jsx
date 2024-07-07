const KibinetItem = () => {
  return (
    <div className="grid grid-cols-1 bg-white rounded-[10px] w-full md:grid-cols-2 px-[25px] pt-[20px] pb-[40px] ">
          <p className=' md:hidden font-semibold pb-[15px] mb-[20px] text-[12px] border-b '>Стандарты оснащения</p>
      <ul className="list-decimal list-inside flex flex-col gap-[10px] text-[10px] lg:text-[12px] ">
        <li>Аппарат искусственной вентиляции лёгких</li>
        <li>Аппарат искусственной вентиляции легких транспортный</li>
        <li>Дыхательный мешок для ручной искусственной вентиляции легких</li>
        <li>Монитор пациента на 5 параметров</li>
        <li>Монитор пациента на 8 параметров</li>
        <li>Шприцевой насос</li>
        <li>Инфузионный насос</li>
        <li>Набор для интубации трахеи</li>
        <li>Дефибриллятор</li>
      </ul>

      <ul className=" list-decimal list-inside flex flex-col gap-[10px] text-[10px] lg:text-[12px] ">
        <li>Матрац термостабилизирующий</li>
        <li>Автоматический анализатор газов крови</li>
        <li>Электрокардиограф</li>
        <li>Транспортируемый рентгеновский аппарат</li>

        <li>Портативный ультразвуковой диагностический аппарат</li>
        <li>Кровать трёхсекционная с ограждением</li>
        <li>Кровать-вес</li>
        <li>Электроэнцефалограф 8-канальный</li>
        <li>Пневмокомпрессорная профилактика тромбоэмболических осложнений и лимфостаза</li>
      </ul>
    </div>
  );
};

export default KibinetItem;
