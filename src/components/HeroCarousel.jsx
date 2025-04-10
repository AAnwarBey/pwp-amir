import React from 'react';
import { Carousel } from 'flowbite-react';

function HeroCarousel() {
  return (
    <section className="relative w-full bg-light-gray" aria-label="Hero Section">
      <div className="h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[550px]">

<Carousel slideInterval={5000} indicators={false}>
                  <div className="relative flex h-full items-center justify-start bg-cover bg-center p-8"
                       style={{ backgroundImage: "url('Collections-Placeholder/black-collection.jpg')", backgroundSize: "30%", backgroundRepeat: "no-repeat" }}>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="z-10 max-w-xl text-left">
                      <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl pl-8 md:pl-12">Built for style</h1>
                      <p className="mb-8 text-lg text-white md:text-xl pl-8 md:pl-12">Introducing our best crystal designs</p>
                      <a href="#new-releases"
                         className="inline-block rounded-md bg-sapphire px-8 py-3 text-white transition-colors hover:bg-amethyst ml-8 md:ml-12">
                        Shop
                      </a>
                    </div>
                  </div>

                  <div className="relative flex h-full items-center justify-start bg-cover bg-center p-8"
                       style={{ backgroundImage: "url('Collections-Placeholder/clear-collection.jpg')", backgroundSize: "30%", backgroundRepeat: "no-repeat" }}>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="z-10 max-w-xl text-left">
                      <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl pl-8 md:pl-12">Elegance defined</h1>
                      <p className="mb-8 text-lg text-white md:text-xl pl-8 md:pl-12">Discover our premium collection</p>
                      <a href="#featured"
                         className="inline-block rounded-md bg-sapphire px-8 py-3 text-white transition-colors hover:bg-amethyst ml-8 md:ml-12">
                        Explore
                      </a>
                    </div>
                  </div>

                  <div className="relative flex h-full items-center justify-start bg-cover bg-center p-8"
                       style={{ backgroundImage: "url('Collections-Placeholder/green-collection.jpg')", backgroundSize: "30%", backgroundRepeat: "no-repeat" }}>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="z-10 max-w-xl text-left">
                      <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl pl-8 md:pl-12">Ocean inspired</h1>
                      <p className="mb-8 text-lg text-white md:text-xl pl-8 md:pl-12">Designs that capture the essence of the sea</p>
                      <a href="#crystals"
                         className="inline-block rounded-md bg-sapphire px-8 py-3 text-white transition-colors hover:bg-amethyst ml-8 md:ml-12">
                        Discover
                      </a>
                    </div>
                  </div>

                  <div className="relative flex h-full items-center justify-start bg-cover bg-center p-8"
                       style={{ backgroundImage: "url('Collections-Placeholder/red-collection.jpg')", backgroundSize: "30%", backgroundRepeat: "no-repeat" }}>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="z-10 max-w-xl text-left">
                      <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl pl-8 md:pl-12">Bold & vibrant</h1>
                      <p className="mb-8 text-lg text-white md:text-xl pl-8 md:pl-12">Make a statement with our most striking pieces</p>
                      <a href="#new-releases"
                         className="inline-block rounded-md bg-sapphire px-8 py-3 text-white transition-colors hover:bg-amethyst ml-8 md:ml-12">
                        View collection
                      </a>
                    </div>
                  </div>

                  <div className="relative flex h-full items-center justify-start bg-cover bg-center p-8"
                       style={{ backgroundImage: "url('Collections-Placeholder/grey-collection.jpg')", backgroundSize: "30%", backgroundRepeat: "no-repeat" }}>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="z-10 max-w-xl text-left">
                      <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl pl-8 md:pl-12">Earth elements</h1>
                      <p className="mb-8 text-lg text-white md:text-xl pl-8 md:pl-12">Grounding crystals designed for everyday wear</p>
                      <a href="#featured"
                         className="inline-block rounded-md bg-sapphire px-8 py-3 text-white transition-colors hover:bg-amethyst ml-8 md:ml-12">
                        Browse now
                      </a>
                    </div>
                  </div>
                </Carousel>
      </div>
    </section>
  );
}

export default HeroCarousel;