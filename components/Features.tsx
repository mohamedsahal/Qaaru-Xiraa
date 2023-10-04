import { Container } from "postcss"


const Features = () => {
  return (
    <div>
    <h1 className="mt-10 text-center text-4xl font-bold font-CinzelDecorative text-primary">Features</h1>
    <div className="container justify-items-center px-10  mt-20 mx-auto cursor-pointer grid  sm:grid-cols-3 grid-cols-2 gap-10">
         <img
          alt=""
          src="/Quran.svg"
          width={300}
          height={300}
        />
        <img
          alt=""
          src="/Listening.svg"
          width={300}
          height={300}
        />
        <img
          alt=""
          src="/Translation.svg"
          width={300}
          height={300}
        />
        <img
          alt=""
          src="/Quiz.svg"
          width={300}
          height={300}
        />

<img
          alt=""
          src="/Adkar.svg"
          width={300}
          height={300}
        />

<img
          alt=""
          src="/Dua.svg"
          width={300}
          height={300}
        />


        </div>
        </div>
        
        
  )
}

export default Features