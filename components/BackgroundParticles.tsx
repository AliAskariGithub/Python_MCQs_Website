"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundParticles = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const positions = [
    {
      left: "30.51992152906563%",
      top: "62.11496313178678%",
      width: "7.207764283057668px",
      height: "13.583133799208683px",
    },
    {
      left: "85.1378920694847%",
      top: "37.43214393208807%",
      width: "6.382044131194241px",
      height: "14.143193469539138px",
    },
    {
      left: "63.39914758913922%",
      top: "84.9934712077251%",
      width: "8.833360792968694px",
      height: "13.063233447545269px",
    },
    {
      left: "99.93383906598473%",
      top: "37.24880920137097%",
      width: "7.740790725904299px",
      height: "5.6783283137355305px",
    },
    {
      left: "22.107499811443056%",
      top: "59.814820807883876%",
      width: "13.674806950930739px",
      height: "13.716194145697202px",
    },
    {
      left: "42.44301057331607%",
      top: "55.03286727266281%",
      width: "11.749058126078188px",
      height: "14.29852820085573px",
    },
    {
      left: "63.1407466707008%",
      top: "82.92167699511657%",
      width: "7.294975887708116px",
      height: "11.576687427502428px",
    },
    {
      left: "88.76938312888828%",
      top: "12.916742367842303%",
      width: "9.888907368466171px",
      height: "9.816606228575818px",
    },
    {
      left: "34.11070466190059%",
      top: "28.89656481294345%",
      width: "10.903589173879157px",
      height: "14.926805649744992px",
    },
    {
      left: "97.74314721244973%",
      top: "41.80866604571034%",
      width: "8.197500411845613px",
      height: "10.505828513678042px",
    },
    {
      left: "90.68401545551524%",
      top: "64.9309309750649%",
      width: "12.372265991967412px",
      height: "10.467241487746373px",
    },
    {
      left: "43.51190658760768%",
      top: "13.564588341186546%",
      width: "9.558463363941335px",
      height: "12.725389692038647px",
    },
    {
      left: "84.3514799287218%",
      top: "31.048536393349814%",
      width: "5.430384369386768px",
      height: "10.68939070149488px",
    },
    {
      left: "58.12414994246716%",
      top: "82.67504607363577%",
      width: "10.315165293732296px",
      height: "11.106892562867252px",
    },
    {
      left: "36.952854771018785%",
      top: "61.03563644013169%",
      width: "11.515784729645397px",
      height: "7.236716765020872px",
    },
    {
      left: "5.404244734425334%",
      top: "54.42774793388614%",
      width: "9.007261842885137px",
      height: "12.382021328569358px",
    },
    {
      left: "70.01411668123086%",
      top: "41.748021311813%",
      width: "7.581817810166843px",
      height: "7.9994289765968px",
    },
    {
      left: "33.65613778681402%",
      top: "0.54930748157761%",
      width: "5.593724662835447px",
      height: "10.817023044191968px",
    },
    {
      left: "97.71320938808663%",
      top: "92.8406684647183%",
      width: "7.94860287079516px",
      height: "7.256599213350477px",
    },
    {
      left: "63.18310600482844%",
      top: "35.08485767257699%",
      width: "9.896551990913121px",
      height: "13.013125554025383px",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => {
        const position = positions[i % positions.length];

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500"
            style={position}
            animate={{
              y: [0, i % 2 === 0 ? 30 : -30],
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundParticles;
