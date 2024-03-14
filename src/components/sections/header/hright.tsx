import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function HeaderRight() {
  return (
    <>
      <div className="md:px-8">
        <Card className="shadow-custom">
          <Image
            src="/images/hero-image.png"
            width={500}
            height={500}
            className="w-full"
            alt="Hero Images"
          />
          <div className="p-5">
            <form action="" className="flex flex-col gap-4">
              <Input
                type="text"
                className="text-sm"
                placeholder="Nama Lengkap"
              />
              <Input
                type="text"
                className="text-sm"
                placeholder="youremail@example.com"
              />
              <Button type="submit">Daftar Gratis</Button>
            </form>
            <p className="text-xs text-slate-500 mt-4">
              Atau sudah mempunyai akun? Login disini
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}
