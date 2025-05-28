import { useEffect, useState } from "react";
import { Heart, Smile, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const messages = [
    "Hai pacar mas, yang paling gemesin!",
    "Semangat yaa, hari ini pasti bisa! 💪",
    "Jangan lupa senyum, karena senyummu menular 😊",
    "Kamu itu kuat dan luar biasa!",
    "Aku selalu dukung kamu ❤️"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center p-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <Sun className="w-16 h-16 text-yellow-500 animate-bounce" />
      </motion.div>

      <motion.h1
        key={currentMessage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-bold text-pink-700"
      >
        {messages[currentMessage]}
      </motion.h1>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-10"
      >
        <Heart className="w-12 h-12 text-red-500 animate-ping" />
      </motion.div>

      <p className="mt-8 text-sm text-gray-600 max-w-sm">
        Kalau lagi capek, ingat bahwa kamu nggak sendiri. Ada aku yang selalu dukung kamu 🥰 Love You Rinda ❤
      </p>

      <Smile className="mt-6 w-8 h-8 text-green-600" />
    </div>
  );
}
