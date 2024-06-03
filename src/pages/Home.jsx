import Featured from "../components/Featured"
import FeaturedPosts from "../components/FeaturedPosts"
import HeroSection from "../components/HeroSection"
import Gallery from "../components/Gallery"
import CTA from "../components/CTA"
import Product from "../components/Product"


export default function Home() {
  return (
    <main>
      <HeroSection />
      <Product />
      <Featured />
      <FeaturedPosts />
      <Gallery />
      <CTA />
    </main>
  )
}
