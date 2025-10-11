"use client";

import { motion } from "framer-motion";
import { FaBirthdayCake, FaHeart, FaGift, FaSmileBeam } from "react-icons/fa";
import Image from "next/image";

export default function CamilaPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-purple-100 p-6 text-center">
            {/* 🎉 Cabeçalho animado */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-extrabold text-purple-700 drop-shadow-lg mb-4"
            >
                🎂 Feliz Aniversário, Camila Rafaela! 🎉
            </motion.h1>

            {/* 💬 Mensagem principal */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg md:text-xl text-purple-700 font-medium max-w-2xl leading-relaxed"
            >
                É... eu sei 😅, tô uns diazinhos atrasado, mas o carinho é o mesmo!
                Que Deus continue abençoando tua vida com alegria, saúde, amor e muitas bênçãos 💖
                Tu merece o melhor do mundo, Camila! 🙌✨
            </motion.p>

            {/* 🎁 Ícones animados */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
                className="flex gap-6 text-5xl text-pink-600 mt-8"
            >
                <FaBirthdayCake />
                <FaHeart />
                <FaGift />
                <FaSmileBeam />
            </motion.div>

            {/* 📸 Foto com Camila */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-10"
            >
                <Image
                    src="/camila.jpg"
                    alt="Robson e Camila"
                    width={320}
                    height={320}
                    className="rounded-3xl shadow-2xl border-4 border-pink-200"
                />
            </motion.div>

            {/* ✨ Mensagem final */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-10 text-lg text-purple-800 font-semibold"
            >
                💌 Parabéns atrasado, mas cheio de carinho!
                Que venham muitos momentos incríveis como esse da foto.
                Você é especial demais, Camila! 💜🎉
            </motion.p>
        </main>
    );
}
