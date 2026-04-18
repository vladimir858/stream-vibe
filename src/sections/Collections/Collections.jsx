import './Collections.scss'
import Tabs from "@/components/Tabs";
import collectionsGroups from "@/sections/Collections/collectionsGroups";
import getIdFromTitle from "@/utils/getIdFromTitle";
import Section from "@/layouts/Section";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import CategoryCard from "@/components/CategoryCard";

const Collections = (props) => {
  const {} = props

  return (
    <Tabs
      className="Collections container"
      title="collections"
      isEnableOnlyOnMobile
      items={collectionsGroups.map((collectionGroup, index) => ({

        isActive: collectionGroup.isActive,
        title: collectionGroup.title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {
                collectionGroup.title}
            </p>
            {
              collectionGroup.items.map((collectionItem, index) => {
                const {
                  title,
                  categoryItems,
                  sliderParams,
                } = collectionItem
                const titleFormated = `${getIdFromTitle(
                  collectionGroup.title,
                )}-${getIdFromTitle(title)}`
                const titleId = `${titleFormated}-title`
                const sliderNavigationId =  `${titleFormated}-slider-navigation`
                return (
                  <Section
                  className="collections__section"
                    title={title}
                    titleId={titleId}
                    actions={(
                      <SliderNavigation
                      id={sliderNavigationId}
                      mode="tile"

                      />
                  )}
                    isActionsHiddenOnMobile
                    key={index}
                  >

                    <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementId={sliderNavigationId}
                    isBeyondTheViewportOnMobileS
                    >
                      {categoryItems.map((categoryItem, index) => (
                        <CategoryCard
                          {...categoryItem}
                          key={index}
                        />
                      ))}


                    </Slider>
                    </ Section>
                )


              }
            )}
          </div>
        ),

      }))}
    />

  )
}
export default Collections;