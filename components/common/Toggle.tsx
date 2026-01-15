'use client';

import { motion } from 'framer-motion';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  activeColor?: string;
  inactiveColor?: string;
}

export default function Toggle({
  checked,
  onChange,
  label,
  disabled = false,
  activeColor = '#2563eb',
  inactiveColor = '#E5E7EB',
}: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={`flex items-center gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      aria-label={label || 'Toggle'}
    >
      <div
        className="relative h-7 w-12 rounded-full transition-colors"
        style={{ backgroundColor: checked ? activeColor : inactiveColor }}
      >
        <motion.div
          className="absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md"
          animate={{ x: checked ? 20 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        />
      </div>
      {label && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}
    </button>
  );
}
