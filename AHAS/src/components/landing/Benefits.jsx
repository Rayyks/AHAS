import React from "react";

const Benefits = () => {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
            Benefit tentu ada dong <br />
            <span className="text-gray-600">dari kemudahan dan kepuasan</span>
          </h1>

          <p className="w-1/2 mx-auto mt-4 text-base font-medium text-gray-500 text-balance">
            Kami memberikan kemudahan dan kepuasan dalam menggunakan layanan
            kami.
          </p>

          <div className="grid gap-2 mt-12 text-center md:grid-cols-3">
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://static.thenounproject.com/png/5024802-200.png"
                  alt="#_"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="mt-4">
                <p className="font-medium text-gray-900">Simple To Use</p>
                <p className="mt-2 text-sm text-gray-500">
                  Cukup dengan mengisi form yang tersedia, maka anda sudah bisa
                  mendapatkan layanan yang anda butuhkan.
                </p>
              </div>
            </div>
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1693/1693056.png"
                  alt="#_"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                  Order Anywhere, Anytime
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Kamu bisa mendaftar dan memesan layanan kami dimanapun dan
                  kapan pun.
                </p>
              </div>
            </div>
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/leadership-and-management/64/Management-skills-CEO-company-ability-resources-512.png"
                  alt="#_"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">Organize</p>
                <p className="mt-2 text-sm text-gray-500">
                  Semuanya sudah tersusun dengan rapih tidak perlu khawatir
                  untuk ga tau lah abang dek capek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
