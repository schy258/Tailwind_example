import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function App() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
  //   <div className="bg-teal-100 hover:bg-pink-300 transition">
  //   <div className="pt-6">
  //     <nav aria-label="Breadcrumb">
  //       <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
  //         {product.breadcrumbs.map((breadcrumb) => (
  //           <li key={breadcrumb.id}>
  //             <div className="flex items-center">
  //               <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
  //                 {breadcrumb.name}
  //               </a>
  //               <svg
  //                 width={16}
  //                 height={20}
  //                 viewBox="0 0 16 20"
  //                 fill="currentColor"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 aria-hidden="true"
  //                 className="h-5 w-4 text-gray-300"
  //               >
  //                 <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
  //               </svg>
  //             </div>
  //           </li>
  //         ))}
  //         <li className="text-sm">
  //           <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
  //             {product.name}
  //           </a>
  //         </li>
  //       </ol>
  //     </nav>

  //     {/* Image gallery */}
  //     <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
  //       <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
  //         <img
  //           src={product.images[0].src}
  //           alt={product.images[0].alt}
  //           className="h-full w-full object-cover object-center"
  //         />
  //       </div>
  //       <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
  //         <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
  //           <img
  //             src={product.images[1].src}
  //             alt={product.images[1].alt}
  //             className="h-full w-full object-cover object-center"
  //           />
  //         </div>
  //         <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
  //           <img
  //             src={product.images[2].src}
  //             alt={product.images[2].alt}
  //             className="h-full w-full object-cover object-center"
  //           />
  //         </div>
  //       </div>
  //       <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
  //         <img
  //           src={product.images[3].src}
  //           alt={product.images[3].alt}
  //           className="h-full w-full object-cover object-center"
  //         />
  //       </div>
  //     </div>

  //     {/* Product info */}
  //     <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
  //       <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
  //         <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
  //       </div>

  //       {/* Options */}
  //       <div className="mt-4 lg:row-span-3 lg:mt-0">
  //         <h2 className="sr-only">Product information</h2>
  //         <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

  //         {/* Reviews */}
  //         <div className="mt-6">
  //           <h3 className="sr-only">Reviews</h3>
  //           <div className="flex items-center">
  //             <div className="flex items-center">
  //               {[0, 1, 2, 3, 4].map((rating) => (
  //                 <StarIcon
  //                   key={rating}
  //                   className={classNames(
  //                     reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
  //                     'h-5 w-5 flex-shrink-0'
  //                   )}
  //                   aria-hidden="true"
  //                 />
  //               ))}
  //             </div>
  //             <p className="sr-only">{reviews.average} out of 5 stars</p>
  //             <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
  //               {reviews.totalCount} reviews
  //             </a>
  //           </div>
  //         </div>

  //         <form className="mt-10">
  //           {/* Colors */}
  //           <div>
  //             <h3 className="text-sm font-medium text-gray-900">Color</h3>

  //             <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
  //               <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
  //               <div className="flex items-center space-x-3">
  //                 {product.colors.map((color) => (
  //                   <RadioGroup.Option
  //                     key={color.name}
  //                     value={color}
  //                     className={({ active, checked }) =>
  //                       classNames(
  //                         color.selectedClass,
  //                         active && checked ? 'ring ring-offset-1' : '',
  //                         !active && checked ? 'ring-2' : '',
  //                         '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
  //                       )
  //                     }
  //                   >
  //                     <RadioGroup.Label as="span" className="sr-only">
  //                       {' '}
  //                       {color.name}{' '}
  //                     </RadioGroup.Label>
  //                     <span
  //                       aria-hidden="true"
  //                       className={classNames(
  //                         color.class,
  //                         'h-8 w-8 border border-black border-opacity-10 rounded-full'
  //                       )}
  //                     />
  //                   </RadioGroup.Option>
  //                 ))}
  //               </div>
  //             </RadioGroup>
  //           </div>

  //           {/* Sizes */}
  //           <div className="mt-10">
  //             <div className="flex items-center justify-between">
  //               <h3 className="text-sm font-medium text-gray-900">Size</h3>
  //               <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
  //                 Size guide
  //               </a>
  //             </div>

  //             <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
  //               <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
  //               <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
  //                 {product.sizes.map((size) => (
  //                   <RadioGroup.Option
  //                     key={size.name}
  //                     value={size}
  //                     disabled={!size.inStock}
  //                     className={({ active }) =>
  //                       classNames(
  //                         size.inStock
  //                           ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
  //                           : 'bg-gray-50 text-gray-200 cursor-not-allowed',
  //                         active ? 'ring-2 ring-indigo-500' : '',
  //                         'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
  //                       )
  //                     }
  //                   >
  //                     {({ active, checked }) => (
  //                       <>
  //                         <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
  //                         {size.inStock ? (
  //                           <span
  //                             className={classNames(
  //                               active ? 'border' : 'border-2',
  //                               checked ? 'border-indigo-500' : 'border-transparent',
  //                               'pointer-events-none absolute -inset-px rounded-md'
  //                             )}
  //                             aria-hidden="true"
  //                           />
  //                         ) : (
  //                           <span
  //                             aria-hidden="true"
  //                             className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
  //                           >
  //                             <svg
  //                               className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
  //                               viewBox="0 0 100 100"
  //                               preserveAspectRatio="none"
  //                               stroke="currentColor"
  //                             >
  //                               <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
  //                             </svg>
  //                           </span>
  //                         )}
  //                       </>
  //                     )}
  //                   </RadioGroup.Option>
  //                 ))}
  //               </div>
  //             </RadioGroup>
  //           </div>

  //           <button
  //             type="submit"
  //             className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  //           >
  //             Add to bag
  //           </button>
  //         </form>
  //       </div>

  //       <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
  //         {/* Description and details */}
  //         <div>
  //           <h3 className="sr-only">Description</h3>

  //           <div className="space-y-6">
  //             <p className="text-base text-gray-900">{product.description}</p>
  //           </div>
  //         </div>

  //         <div className="mt-10">
  //           <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

  //           <div className="mt-4">
  //             <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
  //               {product.highlights.map((highlight) => (
  //                 <li key={highlight} className="text-gray-400">
  //                   <span className="text-gray-600">{highlight}</span>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
  //         </div>

  //         <div className="mt-10">
  //           <h2 className="text-sm font-medium text-gray-900">Details</h2>

  //           <div className="mt-4 space-y-6">
  //             <p className="text-sm text-gray-600">{product.details}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>

<main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 bg-pink-70 ">
  <div class=" max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2  p-9 shadow-xl shadow-zinc-500 rounded-xl">
    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
      <h1 class="mt-1 text-lg font-semibold text-pink-900 border-t-[10px] border-rose-400">Beach House in Collingwood</h1>
      <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Entire house</p>
    </div>
    <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="saturate-200 w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full " loading="lazy"/>
      <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
      <img src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class=" saturate-200 hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
    </div>
    <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
      <dt class="sr-only">Reviews</dt>
      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-" >
          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>4.89 <span class="text-slate-400 font-normal">(128)</span></span>
      </dd>
      <dt class="sr-only">Location</dt>
      <dd class="flex items-center">
        <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
          <circle cx="1" cy="1" r="1" />
        </svg>
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
        Collingwood, Ontario
      </dd>
    </dl>
    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg hover:bg-red-400 focus:ring-0 ring-teal-500 shadow-lg shadow-indigo-500/50 hover:shadow-rose-500/50	opacity-100 hover:opacity-90">Check availability</button>
    </div>
    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
      This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.
    </p>
  </div>
 
</main>
  );
}

export default App;
