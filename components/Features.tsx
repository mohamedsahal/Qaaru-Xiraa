import Link from "next/link"


const Features = () => {
  return (
    <div>
    <h1 className="sm:mt-10 mt-5  text-center text-2xl sm:text-4xl font-bold font-CinzelDecorative text-primary">Features</h1>
    <div className="container justify-items-center px-10  mt-10 mx-auto  grid  sm:grid-cols-3 grid-cols-2 gap-10">
       <Link href="/quran">
         <img
          alt=""
          src="/Quran.svg"
          width={300}
          height={300}
          className="cursor-pointer"
       
        />
         </Link>
         <Link href="/listening">
        <img
          alt=""
          src="/Listening.svg"
          width={300}
          height={300}
          className="cursor-pointer"
        />
         </Link>
         <Link href="/translation">
        <img
          alt=""
          src="/Translation.svg"
          width={300}
          height={300}
          className="cursor-pointer"
        />
         </Link>
         <Link href="/quiz">
        <img
          alt=""
          src="/Quiz.svg"
          width={300}
          height={300}
          className="cursor-pointer"
        />
</Link>
         <Link href="/adkar">

<img
          alt=""
          src="/Adkar.svg"
          width={300}
          height={300}
          className="cursor-pointer"
        />
        </Link>
 <Link href="/dua">
<img
          alt=""
          src="/Dua.svg"
          width={300}
          height={300}
          className="cursor-pointer"
        />

</Link>
        </div>
        </div>
        
        
  )
}

export default Features