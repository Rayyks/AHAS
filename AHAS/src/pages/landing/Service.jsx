import React from "react";

const Service = () => {
  return (
    <section className="flex relative bg-[#f5f5f5] items-center justify-center">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 lg:py-32 max-w-7xl md:px-12">
        <div>
          <div className="text-center">
            <span className="w-auto">
              <span className="font-semibold text-[#4354ff] text-sm uppercase">
                Jenis Service
              </span>
            </span>
            <p className="mt-8 text-3xl font-extrabold tracking-tight text-black md:text-5xl">
              Tentukan jenis service yang anda butuhkan
              <br />
              untuk motor anda.
            </p>
            <p className="max-w-xl mx-auto mt-4 text-base lg:text-xl text-slate-500">
              Kami menyediakan berbagai jenis service untuk motor anda, mulai
              dari ganti oli, service ringan, service lengkap, hingga service
              perbaikan motor.
            </p>
          </div>
        </div>
        <div className="max-w-lg mx-auto mt-24">
          <ul className="space-y-3" role="list">
            <li>
              <div className="relative flex items-start p-4 space-x-3 bg-white shadow group rounded-2xl">
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-medium text-gray-900">
                    <a className="flex justify-between w-full">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>{" "}
                      Ganti Oli
                      <span className="font-medium bg-gray-100 inline-flex items-center px-2.5 py-0.5 rounded-full text-gray-800 text-xs">
                        Oli
                      </span>
                    </a>
                  </div>
                  <p className="mt-3 text-gray-500">
                    Ganti oli mesin motor Anda secara berkala agar performa
                    mesin tetap terjaga.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="relative flex items-start p-4 space-x-3 bg-white shadow group rounded-2xl">
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-medium text-gray-900">
                    <a className="flex justify-between w-full">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Service Ringan
                      <span className="font-medium bg-gray-100 inline-flex items-center px-2.5 py-0.5 rounded-full text-gray-800 text-xs">
                        Service
                      </span>
                    </a>
                  </div>
                  <p className="mt-3 text-gray-500">
                    Motor Anda butuh perawatan rutin agar tetap nyaman dan aman
                    di jalan.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="relative flex items-start p-4 space-x-3 bg-white shadow group rounded-2xl">
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-medium text-gray-900">
                    <a className="flex justify-between w-full">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Service Lengap
                      <span className="font-medium bg-gray-100 inline-flex items-center px-2.5 py-0.5 rounded-full text-gray-800 text-xs">
                        Service
                      </span>
                    </a>
                  </div>
                  <p className="mt-3 text-gray-500">
                    Jika motor sudah lama tidak di service dan muncul masalah
                    ringan anda bisa memilih serive lengkap untuk membuat motor
                    anda kembali prima.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="relative flex items-start p-4 space-x-3 bg-white shadow group rounded-2xl">
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-medium text-gray-900">
                    <a className="flex justify-between w-full">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Service Perbaikan Motor
                      <span className="font-medium bg-gray-100 inline-flex items-center px-2.5 py-0.5 rounded-full text-gray-800 text-xs">
                        Service
                      </span>
                    </a>
                  </div>
                  <p className="mt-3 text-gray-500">
                    Jika motor memiliki kendala untuk dijalankan atau ada suara
                    yang tidak biasa, anda bisa memilih service perbaikan motor.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
