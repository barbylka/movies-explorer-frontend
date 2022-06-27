import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about'>
      <h2 className='about__title'>О проекте</h2>
      <div className='about__desc'>
        <p className='about__text'>
          <span className='about__span'>Дипломный проект включал 5 этапов</span>
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
        <p className='about__text'>
          <span className='about__span'>На выполнение диплома ушло 5 недель</span>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className='about__table'>
        <p className='about__cell'>1 неделя</p>
        <p className='about__cell'>4 недели</p>
        <p className='about__cell'>Back-end</p>
        <p className='about__cell'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
