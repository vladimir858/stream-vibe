import './Seasons.scss'
import AccordionGroup from '@/components/AccordionGroup'
import seasonItems from '@/components/Seasons/seasonItems'
import Accordion from '@/components/Accordion'

const Seasons = () => {
  return (
    <AccordionGroup
      className = "seasons"
      mode="dark"
      isOrderedList={false}
    >
      {seasonItems.map(({ title, subtitle, episodes }, index) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          isArrowButton
        >

        <ul className=" seasons">
          {episodes.map((episode, index) => (
            <li key={index} className='seasons__item'>
              {episode.title}
            </li>
          ))}
        </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons