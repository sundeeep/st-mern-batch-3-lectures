function TrustedBrands(props){
    
    return(
        <div className="flex-col items-start">
            <h1 className="font-semibold text-xl">Trusted Brands</h1>
            <div className="p-8 flex items-center gap-6">
                { 
                    props.trustedBrands.map((brand) => (   
                        <h1 className="font-bold text-4xl text-black" 
                            key={brand.id}>
                            {brand.logo}
                        </h1>
                    ))
                }
            </div>
        </div>
    )
}

export default TrustedBrands;