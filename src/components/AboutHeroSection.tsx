export default function AboutHeroSection() {
  return (
    <div className="relative h-[60vh] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url("https://www.elkem.com/globalassets/03---markets/advanced-manufacturing-industrial/ferrosilicon-for-steel.png?preset=HeroBlock")`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Left-aligned Text */}
      <div className="absolute inset-0 flex items-center z-20 px-6 md:px-20">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <div className="h-1 w-20 bg-orange-500 my-4" />
          <p className="text-lg md:text-xl">We have used the latest technology</p>
        </div>
      </div>
    </div>
  )
}
