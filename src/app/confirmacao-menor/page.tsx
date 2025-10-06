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

// 📅 Seção de informações
function InfoSection() {
    return (
        <div className="text-gray-700 space-y-1 mb-4">
            <p>📅 <strong>Dia:</strong> 07 de dezembro de 2025</p>
            <p>🕘 <strong>Horário:</strong> 09h às 16h</p>
            <p>💰 <strong>Valor:</strong> R$ 30,00</p>
            <p>📍 <strong>Local:</strong> Toledo Recepções - Cohab</p>
        </div>
    );
}

// ⚠️ Aviso para menores
function MinorNotice() {
    return (
        <p className="text-gray-800 mb-3">
            ⚠️ Como você é <strong>menor de idade</strong>, é necessário que seu
            Pai/Mãe/Responsável envie um <strong>áudio confirmando sua participação</strong>.
        </p>
    );
}

// 🌟 Página principal
export default function ConfirmacaoMenorPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 px-4 py-12">
            <CardBox>
                {/* 🎉 Texto à esquerda */}
                <div className="flex-1">
                    <Image
                        src="/logocm.png"
                        alt="Logo Confra CM"
                        width={100}
                        height={100}
                        className="mb-4 mx-auto md:mx-0"
                    />

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl font-bold text-indigo-700 mb-3"
                    >
                        🎉 Sua presença foi confirmada!
                    </motion.h1>

                    <p className="text-gray-800 text-lg mb-4">
                        Obrigado por se inscrever na <br />
                        <strong>Confra CM - Ano 3 🙌</strong>
                    </p>

                    <InfoSection />
                    <MinorNotice />

                    <p className="text-gray-800 mb-3">
                        💖 Esperamos por você para viver esse dia incrível de fé e comunhão!
                    </p>

                    <p className="text-indigo-600 font-medium">
                        #ConfraCM #Ano3 #JuntosEmCristo
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
