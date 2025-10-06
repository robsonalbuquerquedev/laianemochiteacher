"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 🧩 Card principal com fundo igual ao da página e layout horizontal
function CardBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-4xl w-full shadow-xl bg-gradient-to-b from-blue-50 to-indigo-100 backdrop-blur-md border border-indigo-200 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
            {children}
        </div>
    );
}

// 💌 Seção da mensagem especial
function SpecialMessage() {
    return (
        <div className="text-gray-800 space-y-3 mb-4">
            <p>Ola, tudo bem? 👋</p>
            <p>
                Estamos chegando ao final do ano e estamos organizando um último momento com nossos jovens,
                por isso, poderíamos contar com sua ajuda nos doando qualquer valor no PIX:
                <strong className="text-indigo-700"> pixmissaocm@gmail.com </strong>
            </p>
            <p>
                Que Nossa Senhora abençoe você e sua família e que tenham um lindo final de ano de muita paz,
                amor, união e bênçãos do Céu, que em 2026 você continue sendo luz para tantas pessoas.
                Obrigado por todo apoio e carinho neste 2025 🙏🏻💙
            </p>
        </div>
    );
}

// 🌟 Página principal - Mensagem especial
export default function MensagemEspecialPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 px-4 py-12">
            <CardBox>
                {/* 🎉 Texto à esquerda */}
                <div className="flex-1">
                    {/* Logo */}
                    <Image
                        src="/logocm.png"
                        alt="Logo Confra CM"
                        width={100}
                        height={100}
                        className="mb-4 mx-auto md:mx-0"
                    />

                    {/* Título animado */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl font-bold text-indigo-700 mb-3"
                    >
                        É, estamos chegando ao final do ano...
                    </motion.h1>

                    {/* Mensagem detalhada */}
                    <SpecialMessage />

                    <p className="text-indigo-600 font-medium mt-2">
                        #ConfraCM #Ano3 #Gratidão #FimDeAno
                    </p>
                </div>

                {/* 🌅 Imagem horizontal à direita */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center md:justify-end"
                >
                    <Image
                        src="/nossasenhora.png"
                        alt="Nossa Senhora"
                        width={260}
                        height={160}
                    />
                </motion.div>
            </CardBox>
        </main>
    );
}
