import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee And Matcha</title>
        <meta name="description" content="coffee and matcha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Hero Section   */}
      <section className="h-screen relative bg-slate-200">
        <div className="container h-screen flex ">
          <h1 className="font-bold text-8xl text-slate-800 leading-tight self-center"><span className="text-amber-800">Coffee</span> And <span className="text-green-700">Matcha</span></h1>
        </div>
      </section>

      {/* Remainder Section */}
      <section className="h-screen py-14">
        <div className="container h-full flex">
          <div className="self-center block">
            <h1 className="mb-4 font-bold text-3xl text-slate-700 text-center">Reminder</h1>
            <p className="w-2/3 mx-auto self-center text-center text-base sm:text-xl font-medium">
              Apa yang kita maksud mungkin <span className="inti">tidak</span> selalu sama, jadi <span className="inti">gausah</span> pake sandi-sandi segala.
              Kalau ada apa-apa ya <span className="inti">cerita</span>, kalau ada hal yang aku lakuin dan kamu <span className="inti">ga suka</span> ya <span className="inti">ngomong</span>. 
              Hubungan yang <span className="inti">sehat</span> bukan berarti <span className="inti">selalu mengerti</span>, ada kalanya <span className="inti">kecemburuan</span> juga bisa menjadi
              <span className="inti"> pengingat</span> betapa besar rasa cinta kita kepada pasangan.
              Pasangan bersikap <span className="inti">posesif</span> bukan berarti hubungan itu <span className="inti">tidak sehat</span>,
              itu hanya cara kita mengingatkan <span className="inti">batasan-batasan yang harus dijaga</span>.
              Bukan berarti kita <span className="inti">tidak percaya</span> dengan pasangan kita,
              tapi kita tidak bisa memberikan <span className="inti">celah</span> untuk orang ketiga.
            </p>
          </div>
        </div>
      </section>

      {/* Wishlish Section */}
      <div className="min-h-screen bg-slate-200 py-14">
        <div className="container w-3/4">
          <h1 className="mb-4 font-bold text-3xl text-slate-700 text-center">Wishlist</h1>

          <div className="w-full flex flex-wrap gap-y-4 md:gap-0">
            <div className="md:w-1/3">
              <div className="m-2 bg-slate-100 rounded-xl relative">
                <img src="https://source.unsplash.com/360x200?bianglala" alt="Programming" className="w-full rounded-t-xl" />
                <p className='p-2'>Bianglala Batu</p>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="m-2 bg-slate-100 rounded-xl relative">
                <img src="https://source.unsplash.com/360x200?roller-coster" alt="Programming" className="w-full rounded-t-xl" />
                <p className='p-2'>Jawa Timur Park 1</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
