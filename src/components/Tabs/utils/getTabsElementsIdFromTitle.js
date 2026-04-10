import getIdFromTitle from "@/utils/getIdFromTitle";

const  getTabsElementsIdFromTitle = (title) => {
  const titleFormatter = getIdFromTitle(title)
  const buttonId = `${titleFormatter}-tab`
  const  contentId = `${titleFormatter}-tabpanel`

  return {
    buttonId: `${titleFormatter}-tab`,
    contentId: `${contentId}-tabpanel`,
  }

}

export default getTabsElementsIdFromTitle