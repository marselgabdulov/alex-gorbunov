import React from "react"
import "./styles/celebrations.scss"

function Celebration(props) {
  return (
    <div className="page">
      <section className="celebration__section" id="weddings">
        Свадьбы
      </section>
      <section className="celebration__section" id="corporate-parties">
        Корпоративы
      </section>
      <section className="celebration__section" id="birthdays">
        Дни рождения
      </section>
      <section className="celebration__section" id="private-parties">
        Частные праздниики
      </section>
      <section className="celebration__section" id="children-parties">
        Детские праздники
      </section>
      <section className="celebration__section" id="city-parties">
        Городские праздники
      </section>
      <section className="celebration__section" id="promo-actions">
        Промоакции
      </section>
    </div>
  )
}

export default Celebration
