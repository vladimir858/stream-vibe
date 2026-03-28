import Hero from "@/pages/sections/Hero";
import Categories from "@/pages/sections/Categories";

export const metadata = {
  title: 'Home',
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
     <Hero />
      <Categories />
    </>
  )
}
