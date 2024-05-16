import React from "react";

const Steps = () => {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div>
          <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-6xl text-balance">
            Step by step, <br />
            <span className="text-gray-600">
              how to step with your own steps to stepping out
            </span>
          </h1>
          <p className="mt-4 text-base font-medium text-gray-500 text-balance">
            Ini caranya agar kamu bisa mendapatkan apa yang kamu inginkan.
            Jangan gak baca ya dek biar gak salah langkah.
          </p>
        </div>
        <div className="space-y-2">
          <div className="grid gap-2 mt-12 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3">
            <div className="max-w-lg min-w-full mx-auto">
              <div className="flex h-full">
                <div className="flex flex-col justify-center p-8 border bg-gray-50 rounded-3xl max-w-none">
                  <h2 className="font-medium text-gray-900">
                    Buat akun / login dulu
                  </h2>
                  <p className="mt-4 text-sm font-medium text-gray-500 text-pretty">
                    Buat akun jika belum punya akun, kalau sudah ada akun login.
                    Jangan lupa untuk melengkapi data profil mu untuk
                    mempermudah dalam proses pendaftaran untuk melakukan service
                    motor.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div>
                <div className="relative h-full p-2 overflow-hidden border rounded-3xl">
                  <img
                    src="https://windstatic.com/images/placeholders/rectangle1.svg"
                    className="object-cover h-full border shadow-2xl rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3">
            <div className="max-w-lg min-w-full mx-auto lg:col-start-3">
              <div className="flex h-full">
                <div className="flex flex-col justify-center p-8 border bg-gray-50 rounded-3xl max-w-none">
                  <h2 className="font-medium text-gray-900">
                    Daftar service motor
                  </h2>
                  <p className="mt-4 text-sm font-medium text-gray-500 text-pretty">
                    Setelah melengkapi profile dan verifikasi. Kamu bisa
                    langsung daftar nih buat service motor kamu, tapi jangan
                    lupa ya kalau kita harus daftar 1 hari sebelum service motor
                    kamu. contohnya saya ingin service besok nah saya harus
                    daftar hari ini. Supaya antrian tidak terlalu panjang dan
                    bakal cepat selesai.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-start-1 lg:col-span-2">
              <div>
                <div className="relative h-full p-2 overflow-hidden border rounded-3xl">
                  <img
                    src="https://windstatic.com/images/placeholders/rectangle1.svg"
                    className="object-cover h-full border shadow-2xl rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3">
            <div className="max-w-lg min-w-full mx-auto">
              <div className="flex h-full">
                <div className="flex flex-col justify-center p-8 border bg-gray-50 rounded-3xl max-w-none">
                  <h2 className="font-medium text-gray-900">
                    Setelah daftar service motor
                  </h2>
                  <p className="mt-4 text-sm font-medium text-gray-500 text-pretty">
                    Setelah kamu daftar service motor, kamu harus pergi ke
                    tempat dealer motor untuk mengantar motor kamu, lalu tunggu
                    sampai motor kamu selesai di service. Jangan lupa untuk
                    membawa bukti daftar service motor kamu. Supaya kita bisa
                    mengecek data kamu. Setelah service selesai kamu akan di
                    panggil oleh bagian administrasi untuk di jelaskan total
                    bayar dan akan di arahkan untuk membayar ke kasir.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div>
                <div className="relative h-full p-2 overflow-hidden border rounded-3xl">
                  <img
                    src="https://windstatic.com/images/placeholders/rectangle1.svg"
                    className="object-cover h-full border shadow-2xl rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
