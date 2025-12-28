import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Smartphone, Laptop, Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FooterRu from '@/components/landing/ru/FooterRu';
import CircuitPattern from '@/components/landing/CircuitPattern';
import logo from '@/assets/logo.png';

interface PriceItem {
  service: string;
  priceOri?: string;
  priceKopi?: string;
  price?: string;
}

interface PhoneModel {
  name: string;
  prices: PriceItem[];
  warranty: string;
}

interface LaptopService {
  name: string;
  price: string;
  description: string;
  badge?: string;
}

const iphoneModels: PhoneModel[] = [
  {
    name: "iPhone 16 Pro Max",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "550 €", priceKopi: "220 €" },
      { service: "Замена батареи", priceOri: "140 €", priceKopi: "120 €" },
      { service: "Замена заднего стекла", price: "129 €" },
      { service: "Замена заднего стекла и рамки", price: "270 €" },
      { service: "Замена микрофона", price: "76 €" },
      { service: "Замена динамика", price: "85 €" },
      { service: "Замена камеры", price: "180 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 16 Pro",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "450 €", priceKopi: "220 €" },
      { service: "Замена батареи", priceOri: "140 €", priceKopi: "110 €" },
      { service: "Замена заднего стекла", price: "115 €" },
      { service: "Замена заднего стекла и рамки", price: "178 €" },
      { service: "Замена микрофона", price: "76 €" },
      { service: "Замена динамика", price: "85 €" },
      { service: "Замена камеры", price: "180 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 16",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "420 €", priceKopi: "220 €" },
      { service: "Замена батареи", priceOri: "130 €", priceKopi: "110 €" },
      { service: "Замена заднего стекла", price: "115 €" },
      { service: "Замена заднего стекла и рамки", price: "178 €" },
      { service: "Замена микрофона", price: "76 €" },
      { service: "Замена динамика", price: "85 €" },
      { service: "Замена камеры", price: "180 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 15 Pro Max",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "340 €", priceKopi: "300 €" },
      { service: "Замена батареи", priceOri: "115 €", priceKopi: "88 €" },
      { service: "Замена заднего стекла", price: "95 €" },
      { service: "Замена заднего стекла и рамки", price: "240 €" },
      { service: "Замена микрофона", price: "68 €" },
      { service: "Замена динамика", price: "70 €" },
      { service: "Замена камеры", price: "132 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 15 Pro",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "310 €", priceKopi: "270 €" },
      { service: "Замена батареи", priceOri: "110 €", priceKopi: "88 €" },
      { service: "Замена заднего стекла", price: "95 €" },
      { service: "Замена заднего стекла и рамки", price: "190 €" },
      { service: "Замена микрофона", price: "68 €" },
      { service: "Замена динамика", price: "70 €" },
      { service: "Замена камеры", price: "132 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 15",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "220 €", priceKopi: "180 €" },
      { service: "Замена батареи", priceOri: "105 €", priceKopi: "83 €" },
      { service: "Замена заднего стекла", price: "90 €" },
      { service: "Замена заднего стекла и рамки", price: "174 €" },
      { service: "Замена микрофона", price: "50 €" },
      { service: "Замена динамика", price: "70 €" },
      { service: "Замена камеры", price: "132 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 14 Pro Max",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "285 €", priceKopi: "220 €" },
      { service: "Замена батареи", priceOri: "110 €", priceKopi: "78 €" },
      { service: "Замена заднего стекла", price: "90 €" },
      { service: "Замена заднего стекла и рамки", price: "150 €" },
      { service: "Замена микрофона", price: "50 €" },
      { service: "Замена динамика", price: "55 €" },
      { service: "Замена камеры", price: "134 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 14 Pro",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "225 €", priceKopi: "180 €" },
      { service: "Замена батареи", priceOri: "110 €", priceKopi: "78 €" },
      { service: "Замена заднего стекла", price: "90 €" },
      { service: "Замена заднего стекла и рамки", price: "150 €" },
      { service: "Замена микрофона", price: "50 €" },
      { service: "Замена динамика", price: "55 €" },
      { service: "Замена камеры", price: "134 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 14",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "180 €", priceKopi: "140 €" },
      { service: "Замена батареи", priceOri: "105 €", priceKopi: "78 €" },
      { service: "Замена заднего стекла", price: "90 €" },
      { service: "Замена заднего стекла и рамки", price: "140 €" },
      { service: "Замена микрофона", price: "50 €" },
      { service: "Замена динамика", price: "55 €" },
      { service: "Замена камеры", price: "96 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 13 Pro Max",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "210 €", priceKopi: "164 €" },
      { service: "Замена батареи", priceOri: "110 €", priceKopi: "70 €" },
      { service: "Замена заднего стекла", price: "85 €" },
      { service: "Замена заднего стекла и рамки", price: "126 €" },
      { service: "Замена микрофона", price: "50 €" },
      { service: "Замена динамика", price: "55 €" },
      { service: "Замена камеры", price: "116 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 13 Pro",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "185 €", priceKopi: "148 €" },
      { service: "Замена батареи", priceOri: "110 €", priceKopi: "58 €" },
      { service: "Замена заднего стекла", price: "85 €" },
      { service: "Замена заднего стекла и рамки", price: "126 €" },
      { service: "Замена микрофона", price: "45 €" },
      { service: "Замена динамика", price: "45 €" },
      { service: "Замена камеры", price: "116 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 13",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "165 €", priceKopi: "125 €" },
      { service: "Замена батареи", priceOri: "100 €", priceKopi: "58 €" },
      { service: "Замена заднего стекла", price: "85 €" },
      { service: "Замена заднего стекла и рамки", price: "126 €" },
      { service: "Замена микрофона", price: "38 €" },
      { service: "Замена динамика", price: "38 €" },
      { service: "Замена камеры", price: "95 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 13 mini",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "165 €", priceKopi: "125 €" },
      { service: "Замена батареи", priceOri: "100 €", priceKopi: "58 €" },
      { service: "Замена заднего стекла", price: "85 €" },
      { service: "Замена заднего стекла и рамки", price: "126 €" },
      { service: "Замена микрофона", price: "38 €" },
      { service: "Замена динамика", price: "38 €" },
      { service: "Замена камеры", price: "95 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 12 Pro Max",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "160 €", priceKopi: "120 €" },
      { service: "Замена батареи", priceOri: "105 €", priceKopi: "55 €" },
      { service: "Замена заднего стекла", price: "90 €" },
      { service: "Замена заднего стекла и рамки", price: "125 €" },
      { service: "Замена микрофона", price: "38 €" },
      { service: "Замена динамика", price: "38 €" },
      { service: "Замена камеры", price: "110 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 12 Pro",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "120 €", priceKopi: "98 €" },
      { service: "Замена батареи", priceOri: "100 €", priceKopi: "50 €" },
      { service: "Замена заднего стекла", price: "85 €" },
      { service: "Замена заднего стекла и рамки", price: "115 €" },
      { service: "Замена микрофона", price: "38 €" },
      { service: "Замена динамика", price: "38 €" },
      { service: "Замена камеры", price: "110 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 12",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "120 €", priceKopi: "98 €" },
      { service: "Замена батареи", priceOri: "100 €", priceKopi: "50 €" },
      { service: "Замена заднего стекла", price: "85 €" },
      { service: "Замена заднего стекла и рамки", price: "115 €" },
      { service: "Замена микрофона", price: "38 €" },
      { service: "Замена динамика", price: "38 €" },
      { service: "Замена камеры", price: "95 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 12 mini",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "110 €", priceKopi: "88 €" },
      { service: "Замена батареи", priceOri: "100 €", priceKopi: "50 €" },
      { service: "Замена заднего стекла", price: "85 €" },
      { service: "Замена заднего стекла и рамки", price: "105 €" },
      { service: "Замена микрофона", price: "38 €" },
      { service: "Замена динамика", price: "38 €" },
      { service: "Замена камеры", price: "95 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 11 Pro Max",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "125 €", priceKopi: "110 €" },
      { service: "Замена батареи", priceOri: "67 €", priceKopi: "47 €" },
      { service: "Замена заднего стекла", price: "70 €" },
      { service: "Замена заднего стекла и рамки", price: "110 €" },
      { service: "Замена микрофона", price: "38 €" },
      { service: "Замена динамика", price: "38 €" },
      { service: "Замена камеры", price: "85 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 11 Pro",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "110 €", priceKopi: "85 €" },
      { service: "Замена батареи", priceOri: "63 €", priceKopi: "47 €" },
      { service: "Замена заднего стекла", price: "65 €" },
      { service: "Замена заднего стекла и рамки", price: "105 €" },
      { service: "Замена микрофона", price: "38 €" },
      { service: "Замена динамика", price: "38 €" },
      { service: "Замена камеры", price: "85 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
  {
    name: "iPhone 11",
    warranty: "Гарантия на все ремонты от 6 до 12 месяцев",
    prices: [
      { service: "Замена дисплея", priceOri: "75 €", priceKopi: "55 €" },
      { service: "Замена батареи", priceOri: "60 €", priceKopi: "45 €" },
      { service: "Замена заднего стекла", price: "60 €" },
      { service: "Замена заднего стекла и рамки", price: "75 €" },
      { service: "Замена микрофона", price: "35 €" },
      { service: "Замена динамика", price: "35 €" },
      { service: "Замена камеры", price: "55 €" },
      { service: "Ремонт зарядки", price: "От 10 €" },
      { service: "Ремонт материнской платы", price: "От 70 €" },
    ]
  },
];

const laptopServices: LaptopService[] = [
  {
    name: "Базовая",
    price: "48 €",
    description: "Подходит для офисных ноутбуков. Используется термопаста Noctua.",
  },
  {
    name: "Стандарт",
    price: "63 €",
    description: "Игровые ноутбуки – чистка системы охлаждения, замена термопасты (Thermal Grizzly) и термопрокладок.",
    badge: "ЛУЧШИЙ ВЫБОР",
  },
  {
    name: "Премиум",
    price: "79 €",
    description: "Игровые ноутбуки – Intel Core i7, Ryzen 7 и выше. Чистка и замена жидкого металла / PTM 9750, замена термопрокладок премиум-класса.",
  },
];

function PriceAccordion({ model }: { model: PhoneModel }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <span className="font-semibold text-lg text-slate-900">{model.name}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 space-y-3">
          {model.prices.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-slate-100 last:border-0"
            >
              <span className="text-slate-700 font-medium">{item.service}</span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 sm:mt-0">
                {item.priceOri && item.priceKopi ? (
                  <>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                      <span className="text-xs text-blue-500">ОРИГ</span>
                      {item.priceOri}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                      <span className="text-xs text-slate-500">КОПИЯ</span>
                      {item.priceKopi}
                    </span>
                  </>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold">
                    {item.price}
                  </span>
                )}
              </div>
            </div>
          ))}

          <div className="flex items-center gap-2 pt-3 text-green-600">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">{model.warranty}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CenaPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Global Circuit Pattern */}
      <CircuitPattern opacity={0.3} className="fixed" />
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="fixed top-3/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-20 pointer-events-none" />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/ru" className="flex items-center gap-2">
              <img src={logo} alt="Iršava tech логотип" className="h-9 w-auto" />
              <span className="font-oswald text-lg tracking-wide">
                <span className="text-slate-900">IRŠAVA</span>{' '}
                <span className="text-blue-700">TECH</span>
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                to="/ru"
                className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
              >
                Главная
              </Link>
              <a href="tel:+421952240671">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-5 py-2.5 rounded-full shadow-lg shadow-orange-600/20">
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6"
          >
            Прайс-лист ремонтов
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Прозрачные цены для всех моделей iPhone и ноутбуков
          </motion.p>
        </div>
      </section>

      {/* iPhone Section */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Ремонт iPhone</h2>

          <div className="space-y-4">
            {iphoneModels.map((model) => (
              <PriceAccordion key={model.name} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* Laptop Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Laptop className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Чистка и замена термопасты
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {laptopServices.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative p-6 rounded-2xl border-2 ${
                  service.badge
                    ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-white'
                    : 'border-slate-200 bg-white'
                } hover:shadow-lg transition-shadow`}
              >
                {service.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    {service.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-3xl font-bold text-blue-700 mb-4">
                  {service.price}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Нужен ремонт?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Позвоните нам и запишитесь на прием уже сегодня
          </p>
          <a href="tel:+421952240671">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 text-lg rounded-full shadow-xl">
              <Phone className="w-5 h-5 mr-2" />
              +421 952 240 671
            </Button>
          </a>
        </div>
      </section>

      <FooterRu />
    </div>
  );
}
