import React from "react";
import Box from "@mui/material/Box";

import logo1 from "../components/icons/logo-price.png";
import Footer from "../components/Footer";

const PriceList = () => {
  return (
    <>
      <Box>
        <Box>
          <Box className="price-list">
            <div className="price-list-title">
              <img
                style={{
                  zIndex: "3",
                  position: "absolute",
                }}
                className="logo3"
                src={logo1}
                alt="logo"
              />
              <h1
                style={{
                  zIndex: "3",
                  position: "absolute",
                }}
                className="price-title"
              >
                Прайс Лист
              </h1>
            </div>
          </Box>

          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Терапевт</strong>
            </div>
            <ul className="uslugi">
              <li>
                Первичный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">700 с</span>
              </li>
              <br />
              <li>
                Повторный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">500 с</span>
              </li>
              <br />
              <li>
                Назначение курса лечения _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">300 с</span>
              </li>
              <br />
              <li>
                Снятие ЭКГ с расшифровкой _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price"> 300 с</span>
              </li>
            </ul>
          </Box>
        </Box>

        <Box>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Отоларинголог</strong>
            </div>
            <ul className="uslugi">
              <li>
                Первичный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _{" "}
                <span className="price">700 с</span>
              </li>
              <br />
              <li>
                Повторный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _{" "}
                <span className="price">700 с</span>
              </li>
              <br />
              <li>
                Анестезия (носа, уха, зева)_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">150 с</span>
              </li>
              <br />
              <li>
                Процедура_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">300 с</span>
              </li>
              <br />
              <li>
                Промывание уха, лакун,гайморовых пазух _ _ _ _ _ _
                <span className="price"> 350 с</span>
              </li>
              <br />
              <li>
                Удаление аденоид _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price"> 2 500 с</span>
              </li>
            </ul>
          </Box>
        </Box>

        <Box>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Гинеколог</strong>
            </div>
            <ul className="uslugi">
              <li>
                Первичный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _{" "}
                <span className="price">700 с</span>
              </li>
              <br />
              <li>
                Повторный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _{" "}
                <span className="price">700 с</span>
              </li>
              <br />
              <li>
                Прием беременной _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">700 с</span>
              </li>
              <br />
              <li>
                ДЭК _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">500-1000 с</span>
              </li>
              <br />
              <li>
                Введение спирали (без стоимости спирали) _ _ _ _ _
                <span className="price"> 500 с</span>
              </li>
              <br />
              <li>
                Удаление спирали _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _{" "}
                <span className="price">350 с</span>
              </li>
            </ul>
          </Box>
        </Box>

        <Box>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Дерматолог</strong>
            </div>
            <ul className="uslugi">
              <li>
                Первичный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">700 с</span>
              </li>
              <br />
              <li>
                Повторный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">500 с</span>
              </li>
              <br />
              <li>
                Трихоскопия (исследования волос и кожи головы) _ _ _
                <span className="price">700 с</span>
              </li>
              <br />
              <li>
                Дерматоскопия (исследование состояния кожи)_ _ _ _ _
                <span className="price">500 с</span>
              </li>
            </ul>
          </Box>
        </Box>

        <Box>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Травматолог</strong>
            </div>
            <ul className="uslugi">
              <li>
                Первичный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">700 с</span>
              </li>
              <br />
              <li>
                Повторный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">500 с</span>
              </li>
              <br />
              <li>
                Наложение пластиковой повязки _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">500 с</span>
              </li>
              <br />
              <li>
                Репозиция_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">1000=2000 с</span>
              </li>
              <br />
              <li>
                Пункция сустава_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">1000=500 с</span>
              </li>
              <br />
              <li>
                Внутрисуставное введение препарата_ _ _ _ _ _ _
                <span className="price">500=1500 с</span>
              </li>
              <br />
              <li>
                Паравертебральные инъекции_ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">250=500 с</span>
              </li>
            </ul>
          </Box>
        </Box>

        <Box>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Кардиолог</strong>
            </div>
            <ul className="uslugi">
              <li>
                Первичный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">700 с</span>
              </li>
              <br />
              <li>
                Повторный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">500 с</span>
              </li>
              <br />
              <li>
                Снятие ЭКГ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">300 с</span>
              </li>
              <br />
              <li>
                Суточное мониторирование ЭКГ_ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">1100 с</span>
              </li>
            </ul>
          </Box>
        </Box>

        <Box>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Невропатолог</strong>
            </div>
            <ul className="uslugi">
              <li>
                Первичный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">700 с</span>
              </li>
              <br />
              <li>
                Повторный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                <span className="price">500 с</span>
              </li>
            </ul>
          </Box>
        </Box>

        <Box>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Невролог</strong>
            </div>
            <ul className="uslugi">
              <li>
                Первичный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 600 с
              </li>
              <br />
              <li>
                Повторный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 500 с
              </li>
            </ul>
          </Box>
        </Box>

        <Box>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Массаж</strong>
            </div>
            <ul className="uslugi">
              <li>
                Массаж спины _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 600-800
                с
              </li>
              <br />
              <li>
                Массаж пояснично-крестцовой области _ _ _ _ _ _ _ _ _ 400 с
              </li>
              <br />
              <li>
                Массаж ног и ступней _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                400 с
              </li>
              <br />
              <li>
                Массаж ног и ягодиц_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                500 с
              </li>
              <br />
              <li>
                Массаж воротниковой области_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 400 с
              </li>
              <br />
              <li>
                Массаж рук до предплечья_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _400
                с
              </li>
              <br />
              <li>
                Массаж рук, лопаток, плечей_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _500 с
              </li>
              <br />
              <li>
                Массаж общий_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _от
                900 с
              </li>
            </ul>
          </Box>
        </Box>

        <Box>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Гастроэнтеролог</strong>
            </div>
            <ul className="uslugi">
              <li>
                Первичный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 700 с
              </li>
              <br />
              <li>
                Повторный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 500 с
              </li>
              <br />
              <li>
                Проведение гастроскопии _ _ _ _ _ _ _ _ _ _ _ _ _ _ _1000 с
              </li>
              <br />
              <li>
                Проведение колоноскопии_ _ _ _ _ _ _ _ _ _ _ _ _ _ _2500 с
              </li>
            </ul>
          </Box>
        </Box>

        <Box>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Проктолог</strong>
            </div>
            <ul className="uslugi">
              <li>
                Первичный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 600 с
              </li>
              <br />
              <li>
                Повторный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 500 с
              </li>
            </ul>
          </Box>
        </Box>

        <Box style={{ marginBottom: 50 }}>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Уролог</strong>
            </div>
            <ul className="uslugi">
              <li>
                Первичный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 700 с
              </li>
              <br />
              <li>
                Повторный прием врача _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 500 с
              </li>
            </ul>
          </Box>
        </Box>

        {/* <Box style={{ marginBottom: 50 }}>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Ультразвуковое исследование</strong>
            </div>
            <ul className="uslugi">
              <li>
                УЗИ брюшной полости (печени, желчного пузыря, поджелудочной
                железы, селезенки) _ _ 1000 с
              </li>
              <br />
              <li>
                УЗИ почек _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ 500 с
              </li>
              <br />
              <li>
                УЗИ почек с мочеточниками _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ 650 с
              </li>
              <br />
              <li>
                УЗИ надпочечников _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 400 с
              </li>
              <br />
              <li>
                УЗИ печени, ж/пузыря _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ 500 с
              </li>
              <br />
              <li>
                УЗИ молочных желез _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ 700 с
              </li>
              <br />
              <li>
                УЗИ щитовидной железы _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _500 с
              </li>
              <br />
              <li>
                УЗИ предстательной железы (абд.) _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _500 с
              </li>
              <br />
              <li>
                УЗИ щитовидной железы + регионарных лимфатических узлов _ _ _ _
                700 с
              </li>
              <br />
              <li>
                УЗИ предстательной железы (абд.) _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ 600 с
              </li>
              <br />
              <li>
                УЗИ предстательной железы (рект.) _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ 800 с
              </li>
              <br />
              <li>
                Доплер мошонки _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 600 с
              </li>
              <br />
              <li>
                УЗИ мошонки _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ 600 с
              </li>
              <br />
              <li>
                УЗИ мочевого пузыря _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 350 с
              </li>
              <br />
              <li>
                УЗИ мочевого пузыря + остаточный объем мочи _ _ _ _ _ _ _ _ _ _
                _ _ _ _ 500 с
              </li>
              <br />
              <li>
                УЗИ плода до 12 недель _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 600 с
              </li>
              <br />
              <li>
                УЗИ плода с 12 недель и выше _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ 800 с
              </li>
              <br />
              <li>
                УЗИ плода — двойня _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 900 с
              </li>
              <br />
              <li>
                УЗИ органов малого таза (абд.) _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 600 с
              </li>
              <br />
              <li>
                УЗИ органов малого таза (вагинальным датчиком) _ _ _ _ _ _ _ _ _
                _ _ _ _ 650 с
              </li>
              <br />
              <li>
                Доплер плода _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ 1000 с
              </li>
              <br />
              <li>
                Доплер плода-двойня _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 1500 с
              </li>
              <br />
              <li>
                УЗИ головного мозга у детей _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 500 с
              </li>
              <br />
              <li>
                УЗИ глаза (1 глаз) _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ 300 с
              </li>
              <br />
              <li>
                УЗИ мягких тканей (1 обл) _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ 500 с
              </li>
              <br />
              <li>
                УЗИ плевральных полостей _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _500 с
              </li>
              <br />
              <li>
                УЗИ околоушных, подчелюстных, слюнных желез _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _500 с
              </li>
              <br />
              <li>
                УЗИ слезных желез _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ 400 с
              </li>
              <br />
              <li>
                Женский проф. комплекс_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 3000 с
              </li>
              <br />
              <li>
                Мужской проф. комплекс_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 2500 с
              </li>
              <br />
              <li>
                Лимфоузлы (1 группа)_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ 500 с
              </li>
              <br />
              <li>
                УЗИ забрюшинного пространства_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ 900 с
              </li>
              <br />
              <li>
                УЗИ коленного сустава_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ 800 с
              </li>
              <br />
              <li>
                УЗИ голеностопного сустава_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _800 с
              </li>
              <br />
              <li>
                УЗИ локтевого сустава_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _800 с
              </li>
              <br />
              <li>
                УЗИ лучепястного сустава_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _800 с
              </li>
              <br />
              <li>
                УЗИ тазобедренного сустава_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ 800 с
              </li>
              <br />
              <li>
                УЗИ плечевого сустава_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ 800 с
              </li>
              <br />
              <li>
                Транскраниальное триплексное исследование артериальных сосудов
                головы_ _1200 с
              </li>
              <br />
              <li>
                Триплексное УЗИ сосудов шеи_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 1000 с
              </li>
              <br />
              <li>
                Триплексное УЗИ вен верхних конечностей_ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ 1000 с
              </li>
              <br />
              <li>
                Триплексное УЗИ артерий верхних конечностей _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _1000 с
              </li>
              <br />
              <li>
                Триплексное УЗИ вен нижних конечностей _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ 1000 с
              </li>
              <br />
              <li>
                Триплексное УЗИ артерий нижних конечностей _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ 1000 с
              </li>
              <br />
              <li>
                Триплексное УЗИ брюшного отдела аорты + ветви (чревный ствол и
                верхне-брыжеечная артерия) _ _ 1200 с
              </li>
              <br />
              <li>
                Триплексное УЗИ сосудов печени _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ 1000 с
              </li>
              <br />
              <li>
                Триплексное УЗИ артериальных сосудов почек _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _1000 с
              </li>
            </ul>
          </Box>
        </Box>
        <Box style={{ marginBottom: 50 }}>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>Процедурный кабинет</strong>
            </div>
            <ul className="uslugi">
              <li>
                Внутримышечная инъекция _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 50 с
              </li>
              <br />
              <li>
                Внутривенная инъекция _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _100 с
              </li>
              <br />
              <li>
                Внутривенная капельница _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 250 с
              </li>
            </ul>
          </Box>
        </Box> */}
        <Box style={{ marginLeft: 70, marginBottom: 50 }}>
          <Box className="terapevt">
            <div className="title-terapevt">
              <strong>
                Перечень малых хирургических вмешательств и манипуляций
              </strong>
            </div>
            <ul className="uslugi">
              <li>
                Удаление доброкачественных опухолей и кист мягких тканей
                подкожно-жировой клетчатки (липома, гигрома, фиброма, атерома и
                т.д.) до 5,0 см. _ 3000 с
              </li>
              <br />
              <li>
                Свыше 5,0 см _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ 5000 с
              </li>
              <br />
              <li>
                Биопсия поверхностных лимфоузлов (шейных, надключичных,
                подмышечных, паховых) _ _ _ _ _ _ _ _ _ _ _ _ _ 3000 с
              </li>
              <br />
              <li>
                Глубоких лимфоузлов _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                5000 с
              </li>
              <br />
              <li>
                Удаление узловых образований молочной железы (секторальная
                резекция) _ _ _ _ _ _ _ _ _ _10000 + 1000 в/в наркоз
              </li>
              <br />
              <li>
                Удаление невусов и папиллом кожи _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 500-1000 с
              </li>
              <br />
              <li>
                Вскрытие поверхностных абсцессов и флегмон, натечников
                подкожно-жировой клетчатки _ _ _ _ _ _ _ _ _ _ _ 3000 с
              </li>
              <br />
              <li>
                Глубоких флегмон _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _6000 + 1000 в/в
                наркоз
              </li>
              <br />
              <li>
                Лечение гнойных и трофических ран _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 2000 с
                наркоз
              </li>
              <br />
              <li>
                Пункция плевральной полости (удаление жидкости) _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _2000 с наркоз
              </li>
              <br />
              <li>
                Торакоцентез (дренирование плевральной полости) _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _3000 с наркоз
              </li>
              <br />
              <li>
                Лапароцентез (дренирование брюшной полости) _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _3000 с наркоз
              </li>
              <br />
              <li>
                Обрезание крайней плоти _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 3000 + 1000
                в/внаркоз
              </li>
              <br />
              <li>
                Операции на кисти и стопах _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                3000 с
              </li>
              <br />
              <li>
                Иссечение послеоперационного рубца с наложением косметического
                шва _ _ _ _ _ _ _ _ _ _ _ _ 6000 + 1000 в/в наркоз
              </li>
              <br />
              <li>
                Перевязки чистые _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ от 200 с
              </li>
              <br />
              <li>
                Гнойные перевязки _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ 300 с
              </li>
              <br />
              <li>
                В/в наркоз_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                _ _ _ от 1000 с
              </li>
              <br />
              <br />
              <br />
              <br />
              <li>
                Для граждан СНГ и зарубежных стран стоимость приема врачей
                увеличивается на 150 сом
              </li>
            </ul>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default PriceList;
