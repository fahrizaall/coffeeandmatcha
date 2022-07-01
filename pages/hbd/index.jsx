import Head from 'next/head';
import React, { useEffect, useState } from 'react'

export default function Index() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideShow, setSlideShow] = useState(null)
  // var slideShow;

  function slides() {
    slideShow.forEach((slide, i) => {
      if (activeSlide === i) {
        slide.classList.add('slide-active')
      } else slide.classList.remove('slide-active')
    });
  }

  function prev() {
    if (activeSlide - 1 < 0) setActiveSlide(slideShow.length - 1)
    else setActiveSlide(activeSlide - 1)
  }

  function next() {
    if (activeSlide + 2 > slideShow.length) setActiveSlide(0)
    else setActiveSlide(activeSlide + 1)
  }

  useEffect(() => {
    setSlideShow(document.querySelectorAll('.slideshow'))
  }, [])

  useEffect(() => {
    if (slideShow) {
      slides()
    }
  }, [slideShow, activeSlide])

  return (
    <div className='relative'>
      <Head>
        <title>Birthday</title>
        <meta name="description" content="Ernia Birthday" />
      </Head>

      <section className='slideshow bg-pink-200 w-full absolute top-0 opacity-0'>
        <div className="container h-screen flex flex-wrap items-center gap-y-4">
          <h1 className='font-bold text-8xl self-center text-slate-700'>Happy Birthday</h1>
        </div>
      </section>

      <section className='slideshow bg-pink-200 w-full absolute top-0 opacity-0'>
        <div className="container h-screen flex">
          <h1 className='font-bold text-8xl self-center text-slate-700'>Happy Birthday Sayang</h1>
        </div>
      </section>

      <section className='slideshow bg-pink-200 w-full absolute top-0 opacity-0'>
        <div className="container h-screen flex">
          <h1 className='font-bold text-8xl self-center text-slate-700'>Happy Birthday Ayy</h1>
        </div>
      </section>
      
      <section className='slideshow bg-pink-200 w-full absolute top-0 opacity-0'>
        <div className="container h-screen flex">
          <h1 className='font-bold text-2xl self-center text-slate-700 md:w-2/3'>Selamat Ulang Tahun Sayang, Semoga apa yang disemogakan segera tersemogakan wkwk. Purane telat poll hadiah e wkwk</h1>
        </div>
      </section>

      <section className='slideshow bg-pink-200 w-full absolute top-0 opacity-0'>
        <div className="container h-screen flex">
          <h1 className='font-bold text-2xl self-center text-slate-700 md:w-2/3'>Semoga selalu diberikan kesehatan, diberikan panjang umur, dilancarkan rezekinya, dapat membahagiakan orang tua, dan keinginannya bisa segera terwujud</h1>
        </div>
      </section>

      <section className='slideshow bg-pink-200 w-full absolute top-0 opacity-0'>
        <div className="container h-screen flex">
          <h1 className='font-bold text-2xl self-center text-slate-700 md:w-2/3'>Semoga semua rangkaian kegiatan kuliahnya diberikan kelancaran, dapat segera menemukan judul skripsi wkwk, dapat menyelesaikan kuliah tepat pada waktunya, dan dapat segera mendapatkan pekerjaan</h1>
        </div>
      </section>

      <section className='slideshow bg-pink-200 w-full absolute top-0 opacity-0'>
        <div className="container h-screen flex">
          <h1 className='font-bold text-2xl self-center text-slate-700 md:w-2/3'>Dan untuk hubungan kita, semoga langgeng sampai tahap selanjutnya, dan bisa selalu bersama sampai kelak kita dipanggil yang maha kuasa</h1>
        </div>
      </section>

      <section className='slideshow bg-pink-200 w-full absolute top-0 opacity-0'>
        <div className="container h-screen flex">
          <h1 className='font-bold text-2xl self-center text-slate-700 md:w-2/3'>Maaf kalau aku belum bisa menjadi pasangan yang sesuai ekspektasimu, aku bukan orang yang romantis, aku juga bukan orang yang peka, aku kadang sangat keras kepala, aku juga mungkin tidak bisa memberikan apa yang bisa diberikan laku-laki lain yang mencintaimu, dan aku mungkin tidak selalu ada saat kamu membutuhkan. Tapi kumohon jangan menyerah padaku, dan selalu sampaikan padaku jika sikapku mengganggumu</h1>
        </div>
      </section>

      <section className='slideshow bg-pink-200 w-full absolute top-0 opacity-0'>
        <div className="container h-screen flex">
          <h1 className='font-bold text-2xl self-center text-slate-700 md:w-2/3'>Warna background e nggarai flashback ya wkwkwkwk</h1>
        </div>
      </section>

      <section className='slideshow bg-pink-200 w-full absolute top-0 opacity-0'>
        <div className="container h-screen flex">
          <h1 className='font-bold text-2xl self-center text-slate-700 md:w-2/3'>Purane talah hadiah e rodok gajelas wkwkwkwk</h1>
        </div>
      </section>

      <nav className='absolute top-0 right-1/2 py-2'>
        <a href="/">Home</a>
      </nav>

      <div
        className="absolute left-0 top-[50vh] px-2 py-4 cursor-pointer bg-slate-300/25"
        onClick={prev}
      >
        <p className='font-semibold text-xl opacity-50 z-50'> &#10094; </p>
      </div>

      <div
        className="absolute right-0 top-[50vh] px-2 py-4 cursor-pointer bg-slate-300/25"
        onClick={next}
      >
        <p className='font-semibold text-xl opacity-50'> &#10095; </p>
      </div>

    </div>
  )
}
