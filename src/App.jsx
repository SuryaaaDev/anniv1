import "./App.css";
import Home from "./Home";
import TypingEffect from "./TypingEffect";
import Timeline from "./Timeline";
import CircularGallery from "./CircularGallery";
import CountUp from "./CountUp";
import RomanticCounter from "./RomanticCounter";
import RomanticFooter from "./RomanticFooter";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Home />

        <section
          className="w-full min-h-screen bg-gray-50 flex justify-center px-4 py-20"
          id="typing"
        >
          <div className="max-w-screen-lg px-8 md:px-0 text-xl flex justify-center items-center">
            <TypingEffect
              text="haiii sayangggg, happyy 1st anniversary, akuuu gaa nyangkaa kitaa bisaa selamaa inii, kitaa bisaa bertahan selamaa iniii, walapunn banyak hal yang bisaa bikinn kitaa pisahh tapii kitaa tetap selaluu bersamaa, akuu sangatt berterimakasihh kepadamuu karnaa kamuu sudahh sabarr menghadapi cowoo yang ribet inii, maaffinn akuu yaa kalauu akuu sering bikin masalahh selama inii, gaaa mudahh lohhh mempertahankan hubungan yang tentunyaa tidak selalu muluss, banyakkk sekali badaiii yang kitaa lewatii bersamaa selamaa 1 tahun iniii, terkadangg kitaaa saling menyakitii tapii kitaa sama-sama salingg menjagaa hubungan inii, akuuu sangattt berterimakasihh padamuu, terimakasihh sudahh memberikan rasa bahagiaa, terimakasihh sudah mauu bersamaa kuu selamaa inii, kamuu adalahh pemenang hatikuu, akuu gaa akan ninggalinn kamuuu, terimakasihh udahh nerimaa akuu apa adanyaa walaupun kadangg akuu kurang effort dan akuu gabisaa memberimuu inii ituu seperti cowo-cowo di luarr sanaa, akuu mintaa maafff yaaa sayangggg, akuu gaa ingin imbalan apapunn, kamuu bersamakuu disinii, kamuu support akuu disinii ituu sudahh cukupp, maaffinn akuu yaa kalauu selamaa inii samaa akuu banyakkk sedihh nyaa, maafff kalauu kamuu belum akuu ratukan sepertii cewe-cewe di luarr sanaa yang selaluu di ratukan oleh cowo nyaa, tetapii akuu akann selaluu berusahaa agarr kamuu bahagia, akuu jugaa ikutt sedih jikaa kamuu lagii sedihh karnaa inii ituu, jadinyaa kalauu akuu bahagia sekecil apapun kamuu jugaa harus bahagiaa, akuu senangg bangettt jikaa liat kamuu tersenyumm, kamuu sangatt berartii bagikuu, semogaa kitaaa bisaa bersamaa selamanyaa yaaa sayangggg?? Aamiin, I LOVEE YOUUUU MOREEE❤️❤️"
              speed={50}
            />
          </div>
        </section>

        <Timeline />
        <div className="bg-white pb-24">
          <h2 className="text-3xl font-bold text-center pt-20 -mb-3 text-pink-600 z-50">
            Galeri Kita 💞
          </h2>
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
          <p className="text-center text-xl text-pink-700">
            geserr sayanggg💋💋
          </p>
        </div>
        <div className="">
          <RomanticCounter />
        </div>
        <div className="-mt-20">
          <RomanticFooter />
        </div>
      </div>
    </>
  );
}

export default App;
