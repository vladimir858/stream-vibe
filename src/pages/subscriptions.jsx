import Plans from "@/sections/Plans";
import Banner from "@/sections/Banner";
import PlansComparison from "@/pages/sections/PlansComparison";


export const metadata = {
  title: 'Subscriptions',
}

export default function () {
  return (
    <>
    <Plans />
      <PlansComparison />
    </>
  )
}
