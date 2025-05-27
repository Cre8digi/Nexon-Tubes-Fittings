const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <h1 className="text-xl md:text-2xl font-semibold text-orange-600 mb-4 text-center px-4">
        Leading Stainless Steel Tube & Pipe<br className="md:hidden" />
        <span className="font-bold text-orange-700"> Manufacturer in Mumbai</span>
      </h1>
      <div className="animate-spin h-12 w-12 border-4 border-orange-500 border-t-transparent rounded-full"></div>
    </div>
  )
}

export default Loader

