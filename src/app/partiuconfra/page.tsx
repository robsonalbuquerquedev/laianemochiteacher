"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PartiuConfraPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 text-center p-6">
            {/* Título animado */}
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="text-5xl md:text-6xl font-extrabold text-indigo-800 drop-shadow-lg"
            >
                🎉 JÁ FEZ A TUA INSCRIÇÃO PRA NOSSA CONFRA??? 🎉
            </motion.h1>

            {/* Subtítulo divertido */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl mt-6 text-indigo-700 font-semibold"
            >
                CORREEEEE!!! CUIDAAAA!!!! SIMBORA MEU POVO!!! 🕺💃
            </motion.p>

            {/* Imagem do meme */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-10"
            >
                <Image
                    src="/meme.png"
                    alt="Meme engraçado da Confra"
                    width={400}
                    height={400}
                />
            </motion.div>

            {/* Mensagem divertida final */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-12 text-lg md:text-xl text-indigo-900"
            >
                Quem deixar pra última hora vai ficar sem o bolo 🍰😂
            </motion.p>
        </div>
    );
}
