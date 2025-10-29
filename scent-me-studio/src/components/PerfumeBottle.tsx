import { motion, AnimatePresence } from "framer-motion";

interface PerfumeBottleProps {
  topNotes: string[];
  middleNotes: string[];
  baseNotes: string[];
}

const PerfumeBottle = ({ topNotes, middleNotes, baseNotes }: PerfumeBottleProps) => {
  const totalNotes = topNotes.length + middleNotes.length + baseNotes.length;
  
  // Calculate heights as percentages of total selected notes
  const baseHeight = totalNotes > 0 ? (baseNotes.length / totalNotes) * 100 : 0;
  const middleHeight = totalNotes > 0 ? (middleNotes.length / totalNotes) * 100 : 0;
  const topHeight = totalNotes > 0 ? (topNotes.length / totalNotes) * 100 : 0;
  
  return (
    <div className="flex flex-col items-center justify-center p-4 sticky top-8">
      <div className="relative w-56 h-[450px] flex flex-col items-center">
        {/* Bottle Cap - Detailed and Realistic */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 mb-1"
        >
          {/* Top of cap */}
          <div className="w-14 h-6 bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 rounded-t-md border border-zinc-600 shadow-lg relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-700" />
          </div>
          
          {/* Middle ring */}
          <div className="w-16 h-3 bg-gradient-to-b from-zinc-500 to-zinc-600 border-x border-zinc-700 shadow-md" />
          
          {/* Bottom ring */}
          <div className="w-[4.5rem] h-4 bg-gradient-to-b from-zinc-600 to-zinc-700 rounded-b border border-zinc-800 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
          </div>
        </motion.div>
        
        {/* Bottle Neck */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3 }}
          className="relative w-14 h-12 bg-gradient-to-b from-zinc-100/40 via-zinc-50/30 to-transparent border-x-[3px] border-zinc-300/60"
          style={{ originY: 0 }}
        >
          <div className="absolute inset-y-0 left-1 w-2 bg-gradient-to-r from-white/40 to-transparent" />
        </motion.div>
        
        {/* Main Bottle Body - Square/Rectangular */}
        <div className="relative w-48 h-80 bg-gradient-to-br from-zinc-50/20 via-zinc-100/30 to-zinc-50/20 border-[3px] border-zinc-300/60 shadow-2xl overflow-hidden">
          {/* Inner glass reflection */}
          <div className="absolute inset-[3px] border-[2px] border-white/20 pointer-events-none" />
          
          {/* Liquid Container */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col">
            {/* Base Notes (Bottom Layer - Deep/Dark) */}
            <AnimatePresence>
              {baseNotes.length > 0 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${baseHeight}%` }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative bg-gradient-to-t from-amber-900/90 via-amber-800/80 to-amber-700/70"
                  style={{ minHeight: baseNotes.length > 0 ? "30px" : "0" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600/30 to-transparent animate-pulse" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-2">
                    {baseNotes.slice(0, 3).map((note, idx) => (
                      <motion.span
                        key={note}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-[9px] text-amber-50 font-semibold drop-shadow-lg"
                      >
                        {note}
                      </motion.span>
                    ))}
                    {baseNotes.length > 3 && (
                      <span className="text-[9px] text-amber-50 font-semibold">
                        +{baseNotes.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Middle Notes (Heart Layer - Medium) */}
            <AnimatePresence>
              {middleNotes.length > 0 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${middleHeight}%` }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative bg-gradient-to-t from-pink-600/80 via-pink-500/70 to-pink-400/60"
                  style={{ minHeight: middleNotes.length > 0 ? "30px" : "0" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-300/30 to-transparent animate-pulse" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-2">
                    {middleNotes.slice(0, 3).map((note, idx) => (
                      <motion.span
                        key={note}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-[9px] text-white font-semibold drop-shadow-lg"
                      >
                        {note}
                      </motion.span>
                    ))}
                    {middleNotes.length > 3 && (
                      <span className="text-[9px] text-white font-semibold">
                        +{middleNotes.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Top Notes (Top Layer - Light/Fresh) */}
            <AnimatePresence>
              {topNotes.length > 0 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${topHeight}%` }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative bg-gradient-to-t from-yellow-400/70 via-yellow-300/60 to-yellow-200/50"
                  style={{ minHeight: topNotes.length > 0 ? "30px" : "0" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/40 to-transparent animate-pulse" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-2">
                    {topNotes.slice(0, 3).map((note, idx) => (
                      <motion.span
                        key={note}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-[9px] text-amber-900 font-semibold drop-shadow-lg"
                      >
                        {note}
                      </motion.span>
                    ))}
                    {topNotes.length > 3 && (
                      <span className="text-[9px] text-amber-900 font-semibold">
                        +{topNotes.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Glass Shine Effects - Left side light reflection */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white/50 via-white/20 to-transparent pointer-events-none" />
          
          {/* Highlight on top left corner */}
          <div className="absolute top-6 left-6 w-20 h-32 bg-white/30 rounded-full blur-2xl pointer-events-none" />
          
          {/* Right edge shadow */}
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-zinc-900/20 to-transparent pointer-events-none" />
        </div>
        
        {/* Shadow */}
        <div className="absolute -bottom-4 w-40 h-6 bg-black/20 rounded-full blur-lg" />
      </div>
      
      {/* Progress Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-sm text-muted-foreground text-center"
      >
        {totalNotes === 0 ? (
          "Start selecting notes to fill your bottle"
        ) : (
          <span className="text-accent font-medium">
            {totalNotes} note{totalNotes !== 1 ? "s" : ""} selected
          </span>
        )}
      </motion.p>
    </div>
  );
};

export default PerfumeBottle;
