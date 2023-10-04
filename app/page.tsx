import AyahaOfTheDay from "@/components/AyahaOfTheDay";
import Community from "@/components/Community";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";



export default function Home() {
  return (
    <main className="h-[calc(100%-70px) mx-auto]">   
<div className="bg-cover bg-center h-screen w-screen bg-no-repeat "
    style={{
      backgroundImage: `url('/vector.svg')`,
    }}>
<Navbar/>
      
      <Hero/>
</div>

<Features/>
<AyahaOfTheDay/>
<Community/>
<Footer/>
    
    </main>
  )
}
