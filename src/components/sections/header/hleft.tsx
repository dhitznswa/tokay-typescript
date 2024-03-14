import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function HeaderLeft() {
  return (
    <>
      <div className="mb-4 w-2/3 md:w-1/2">
        <Card className="flex items-center gap-3">
          <div className="icon">
            <i className="fa-sharp fa-light fa-medal text-2xl text-yellow-600"></i>
          </div>
          <div className="text-slate-600">
            <p className="text-xs">Service awards</p>
            <p className="text-sm font-bold">#1 Cheapest service</p>
          </div>
        </Card>
      </div>
      <div>
        <h1 className="text-3xl leading-normal font-bold">
          Mentransformasikan ide menjadi{" "}
          <span className="text-blue-600">hasil yang nyata</span>.
        </h1>
      </div>
      <div className="my-6 ">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600  to-yellow-400">
          The #1 Service Platform
        </h2>
      </div>
      <div>
        <p className="text-slate-700 text-base/5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          commodi animi eveniet eos optio recusandae mollitia voluptatem
          voluptatum, dolores id.
        </p>
        <div className="flex flex-col gap-1 text-sm mt-5">
          <div className="flex gap-2 items-center">
            <i className="fa-regular fa-check text-green-700"></i>
            <p className="text-slate-600 text-xs">Biaya terjangkau</p>
          </div>
          <div className="flex gap-2 items-center">
            <i className="fa-regular fa-check text-green-700"></i>
            <p className="text-slate-600 text-xs">200+ Project selesai</p>
          </div>
          <div className="flex gap-2 items-center">
            <i className="fa-regular fa-check text-green-700"></i>
            <p className="text-slate-600 text-xs">Pengerjaan cepat</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <Button className="w-full">
          <i className="fa-sharp fa-solid fa-arrow-right text-sm"></i> Pesan
          Layanan <i className="fa-solid fa-plus text-sm"></i>
        </Button>
        <Button className="w-full" variant="secondary">
          Hubungi Kita
        </Button>
      </div>
    </>
  );
}
