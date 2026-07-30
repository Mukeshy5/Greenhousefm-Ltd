import { Link } from 'react-router-dom'

const assetModules = import.meta.glob('../assets/*.{webp,png,jpg,jpeg,svg}', { eager: true })

const imageMap = Object.fromEntries(
  Object.entries(assetModules).map(([path, module]) => [
    path.split('/').pop()?.toLowerCase() || '',
    module.default,
  ])
)

const products = [
  { name: 'Premium Cotton Fabric', description: 'Soft, breathable cotton fabric suitable for t-shirts, shirts, dresses, and uniforms. Available in multiple colors for wholesale orders.', image: 'Premium Cotton Fabric.webp' },
  { name: 'Multi-Color Cotton Fabric Roll', description: 'High-quality woven cotton fabric designed for fashion manufacturers and garment production.', image: 'Multi-Color Cotton Fabric Roll.webp' },
  { name: "Women's Wide Leg Jeans", description: 'Premium denim jeans with a relaxed fit, durable stitching, and modern design.', image: "Women's Wide Leg Jeans.webp" },
  { name: "Men's Straight Fit Denim Jeans", description: 'Comfortable straight-fit denim jeans made from high-quality stretch fabric.', image: "Men's Straight Fit Denim Jeans.webp" },
  { name: 'Casual Cargo Trousers', description: 'Lightweight cargo trousers with multiple pockets for everyday comfort.', image: 'Casual Cargo Trousers.webp' },
  { name: "Men's Utility Cargo Pants", description: 'Durable cargo pants designed for casual and outdoor wear.', image: "Men's Utility Cargo Pants.webp" },
  { name: "Women's Casual Shorts", description: 'Soft cotton shorts perfect for summer and casual fashion collections.', image: "Women's Casual Shorts.webp" },
  { name: "Men's Denim Jacket", description: 'Premium denim jacket with a timeless style and comfortable fit.', image: "Men's Denim Jacket.webp" },
  { name: 'Graphic Hoodie', description: 'Warm fleece hoodie featuring a stylish printed design for casual wear.', image: 'Graphic Hoodie.webp' },
  { name: "Men's Formal Shirt", description: 'Elegant long-sleeve formal shirt crafted from premium cotton fabric.', image: "Men's Formal Shirt.webp" },
  { name: "Women's Crop Top", description: 'Fashionable slim-fit crop top made with stretchable soft fabric.', image: "Women's Crop Top.webp" },
  { name: 'Girls Printed T-Shirt', description: 'Comfortable cotton t-shirt with attractive butterfly print for kids.', image: 'Girls Printed T-Shirt.webp' },
  { name: 'Girls Sleeveless Dress', description: 'Stylish sleeveless cotton dress designed for daily and party wear.', image: 'Girls Sleeveless Dress.webp' },
  { name: "Women's Ethnic Dress", description: 'Beautiful ethnic dress featuring elegant prints and premium fabric.', image: "Women's Ethnic Dress.webp" },
  { name: "Women's Designer Saree", description: 'Luxury designer saree crafted with premium fabric and elegant draping.', image: "Women's Designer Saree.webp" },
  { name: "Women's Printed Midi Dress", description: 'Modern printed midi dress suitable for casual and festive occasions.', image: "Women's Printed Midi Dress.webp" },
  { name: "Women's Bodycon Skirt", description: 'Stretchable bodycon skirt designed for a smart and fashionable look.', image: "Women's Bodycon Skirt.webp" },
  { name: "Women's Sports T-Shirt", description: 'Moisture-wicking sports t-shirt ideal for gym and fitness activities.', image: "Women's Sports T-Shirt.webp" },
  { name: "Women's High Heel Sandals", description: 'Elegant high heel sandals with premium finish for party and formal occasions.', image: "Women's High Heel Sandals.webp" },
  { name: "Women's Flat Sandals", description: 'Comfortable flat sandals with modern minimalist styling.', image: "Women's Flat Sandals.webp" },
  { name: "Women's Slip-On Sandals", description: 'Lightweight slip-on sandals suitable for everyday comfort.', image: "Women's Slip-On Sandals.webp" },
  { name: "Women's Leather Boots", description: 'Durable ankle boots made from premium leather with modern design.', image: "Women's Leather Boots.webp" },
  { name: "Men's Leather Ankle Boots", description: 'Stylish leather ankle boots offering comfort and durability.', image: "Men's Leather Ankle Boots.webp" },
  { name: "Men's Running Shoes", description: 'Lightweight running shoes with cushioned sole for sports and daily use.', image: "Men's Running Shoes.webp" },
  { name: "Men's Sports Shoes", description: 'Durable sports shoes providing superior grip and all-day comfort.', image: "Men's Sports Shoes.webp" },
  { name: "Men's Casual Sneakers", description: 'Modern sneakers with breathable mesh upper and lightweight sole.', image: "Men's Casual Sneakers.webp" },
  { name: "Men's Premium Polo T-Shirt", description: 'Soft cotton polo shirt with classic collar for casual and business wear.', image: "Men's Premium Polo T-Shirt.webp" },
  { name: "Men's Classic Polo Shirt", description: 'Elegant polo shirt made with breathable premium cotton fabric.', image: "Men's Classic Polo Shirt.webp" },
  { name: "Men's Luxury Polo T-Shirt", description: 'Premium polo t-shirt featuring modern fit and superior comfort.', image: "Men's Luxury Polo T-Shirt.webp" },
  { name: "Men's Knitted Polo Shirt", description: 'Stylish knitted polo shirt offering a refined casual appearance.', image: "Men's Knitted Polo Shirt.webp" },
  { name: 'Premium Denim Collection', description: 'High-quality denim fabrics and jeans available in multiple shades and fits.', image: 'Premium Denim Collection.webp' },
  { name: "Men's Cotton Trousers Collection", description: 'Comfortable cotton trousers designed for business and casual wear.', image: "Men's Cotton Trousers Collection.webp" },
  { name: "Men's Slim Fit Chinos", description: 'Premium chino trousers offering a modern fit and elegant finish.', image: "Men's Slim Fit Chinos.webp" },
  { name: "Men's Casual Jacket", description: 'Lightweight jacket perfect for daily wear and seasonal fashion.', image: "Men's Casual Jacket.webp" },
  { name: "Men's Zip-Up Hoodie", description: 'Comfortable zip hoodie with premium fleece lining for winter wear.', image: "Men's Zip-Up Hoodie.webp" },
  { name: 'Premium Pullover Hoodie', description: 'Soft cotton hoodie designed for warmth and everyday style.', image: 'Premium Pullover Hoodie.webp' },
  { name: "Men's Casual Cotton Shirt", description: 'Stylish cotton shirt featuring a modern slim-fit design.', image: "Men's Casual Cotton Shirt.webp" },
  { name: "Women's Knit Sweater", description: 'Soft knitted sweater ideal for winter collections and casual fashion.', image: "Women's Knit Sweater.webp" },
  { name: "Women's Printed Kurti", description: 'Elegant printed kurti made with breathable cotton fabric.', image: "Women's Printed Kurti.webp" },
  { name: "Women's Casual Kurti", description: 'Comfortable designer kurti suitable for daily and office wear.', image: "Women's Casual Kurti.webp" },
  { name: "Women's Party Wear Saree", description: 'Elegant party wear saree with luxurious detailing and premium finish.', image: "Women's Party Wear Saree.webp" },
  { name: "Women's Traditional Saree", description: 'Beautiful traditional saree suitable for weddings and festive occasions.', image: "Women's Traditional Saree.webp" },
  { name: "Women's Designer Heels", description: 'Premium high heels designed for comfort and sophisticated style.', image: "Women's Designer Heels.webp" },
  { name: "Women's Fashion Sandals", description: 'Elegant fashion sandals with modern styling and cushioned sole.', image: "Women's Fashion Sandals.webp" },
  { name: "Women's Casual Flats", description: 'Comfortable flat sandals designed for daily wear.', image: "Women's Casual Flats.webp" },
  { name: "Women's Leather Slippers", description: 'Premium leather slippers providing comfort and durability.', image: "Women's Leather Slippers.webp" },
  { name: "Women's Flat Slip-On Sandals", description: 'Minimalist flat sandals with soft cushioned footbed.', image: "Women's Flat Slip-On Sandals.webp" },
  { name: "Women's Knee High Boots", description: 'Stylish knee-high boots crafted for fashion and comfort.', image: "Women's Knee High Boots.webp" },
  { name: "Women's Casual Sneakers", description: 'Lightweight sneakers suitable for casual and active lifestyles.', image: "Women's Casual Sneakers.webp" },
  { name: "Women's Pointed Heel Sandals", description: 'Elegant pointed-toe high heel sandals for formal occasions.', image: "Women's Pointed Heel Sandals.webp" },
]

const Products = () => {
  return (
    <main className="bg-[linear-gradient(180deg,_#f8fff9_0%,_#ffffff_100%)] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Products Catalog</p>
          <h1 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">A wide range of wholesale fashion products</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">Browse the full collection with clear product details, premium visuals and easy-to-read descriptions.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => {
            const imageSrc = imageMap[product.image.toLowerCase()] || ''

            return (
              <div key={product.name} className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={imageSrc} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
                    Wholesale
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-700">Featured Item</p>
                  <h3 className="mt-2 text-base font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-sm font-semibold text-emerald-700">Bulk ready</span>
                    <Link
                      to="/enquire"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-base text-white shadow-md transition hover:bg-emerald-800"
                      aria-label={`Buy ${product.name}`}
                    >
                      🛒
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Products
