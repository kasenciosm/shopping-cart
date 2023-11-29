import { products as initialProducts } from '../service/db.json'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'
import FilterHeader from '../components/filterHeader'
import { useFilters } from '../hooks/UseFilters'



function Shop() {
    const { filterProducts } = useFilters()

    const filteredProducts = filterProducts(initialProducts)

    return (
        <>
            <FilterHeader />
            <section className='xl:px-10 px-2 mb-20'>
                <ProductList heading="Los Socketes" products={filteredProducts} />
            </section>
            <Footer />
        </>

    )
}

export default Shop