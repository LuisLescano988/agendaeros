import erosbg from "../assets/backgroundEros.jpg"

function Landing() {
    return (
      <div className="min-h-screen w-full relative">
        {/* <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/backgroundEros.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        /> */}
        <img className=" absolute inset-0 w-full h-full" src={erosbg} alt="" />
        <div className="relative z-10">
        </div>
      </div>
    )
  }
  
  export default Landing