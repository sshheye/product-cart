function ProductFilter(){
  return(
    <div className="space-y-1 pt-16 pb-8 px-6 md:px-28 bg-secondary-light md:flex md:items-center md:py-20">

      <div className="flex-1 md:space-y-4">
        <h1 className="text-2xl font-heading md:text-5xl md:font-thin">All Products</h1>
        <p className="text-sm md:text-base font-normal">A 360&#176; look at Lumin</p>
      </div>

      <div className=" md:flex flex-1">
        <form  className="ml-52 md:w-96 ">
          <label htmlFor="cars" className="sr-only">Choose a car:</label>

          <select name="cars" id="cars" className="border w-full py-4 px-4 pr-4border-gray-600">
            <option value="">Filter by</option>
            <option value="">New Products</option>
            <option value="">Sets</option>
            <option value="">Skincare</option>
            <option value="">Hair & Body Care</option>
            <option value="">Accessories</option>
          </select> 

        </form>
      </div>
      
    </div>
  )
}

export default ProductFilter;