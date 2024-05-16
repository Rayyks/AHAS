import {
  IconHistory,
  IconHome2,
  IconListCheck,
  IconListDetails,
  IconUserCircle,
} from "@tabler/icons-react";
import Icons from "./Icons";

export const navs = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Service",
    href: "/service",
  },
  {
    name: "Careers",
    href: "/careers",
  },
];

export const sidebar_nav = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <IconHome2 />,
  },
  {
    name: "Daftar Service",
    href: "/dashboard/daftar-service",
    icon: <IconListDetails />,
  },
  {
    name: "Lihat Daftar",
    href: "/dashboard/lihat-daftar",
    icon: <IconListCheck />,
  },
  {
    name: "Riwayat Service",
    href: "/dashboard/riwayat-service",
    icon: <IconHistory />,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: <IconUserCircle />,
  },
];

export const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export const faq = [
  {
    q: "Apakah perlu data pribadi ? seperti ktp atau sejenisnya",
    a: "Tidak, kami tidak perlu takut karena proses pendaftaran tidak akan menggunakan data pribadi yang bersisat sensitif, cukup nama lengkap, email, lokasi, dan nomor hp",
  },
  {
    q: "Kenapa harus daftar sehari sebelum service motor ?",
    a: "Karena untuk menghindari bentrok pada antrian dan antrian yang panjang, karena itu proses pendaftaran harus di lakukan sehari sebelum.",
  },
  {
    q: " Bagaimana kita tau total harga service nya ?",
    a: " Setelah kamu sudah daftar servicenya kamu akan bisa melihat total harga di halaman daftar-order namun, jika kamu memiliki service perbaikan harga akan bisa berubah setelah motor selesai diperbaiki.",
  },
  {
    q: "Bagaimana dengan proses pembayarannya ?",
    a: "Proses pembayaran masih menggunakan metode tradisional, yaitu bayar melalui kasir setelah adminisitrasi sudah memberikan penjelasan apa yang sudah di perbaiki di motor kamu.",
  },
];

export const socials = [
  {
    name: "Github",
    href: "https://github.com/Rayyks",
    icon: <Icons.IconsGithub />,
  },
  {
    name: "Twitter",
    href: "https://x.com/",
    icon: <Icons.IconsTwitter />,
  },
  {
    name: "Email",
    href: "https://mailto:rayydna14@gmail.com",
    icon: <Icons.IconsEmail />,
  },
];
