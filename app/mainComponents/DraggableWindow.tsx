'use client';

import React, { useState, useRef, useEffect } from 'react';

interface DraggableWindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  zIndex: number;
  onFocus: () => void;
}

export default function DraggableWindow({ 
  title, 
  children, 
  onClose, 
  zIndex, 
  onFocus 
}: DraggableWindowProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    setIsDragging(true);
    onFocus();
    const rect = windowRef.current!.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={windowRef}
      className="absolute bg-black-200 rounded shadow-lg border-2 border-gray-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: zIndex,
        width: '600px',
        maxWidth: '90vw'
        
      }}
      onMouseDown={onFocus}
    >
      <div
        className="bg-gradient-to-r from-orange-900 to-orange-800 px-3 py-2 flex justify-between items-center cursor-move"
        onMouseDown={handleMouseDown}
      >
        <span className="text-white font-bold">{title}</span>
        <div className="window-controls flex gap-1">
          <button
            onClick={onClose}
            className="w-5 h-5 bg-red-500 hover:bg-red-600 border border-gray-500 flex items-center justify-center text-white text-xs font-bold"
          >
            ×
          </button>
        </div>
      </div>
      <div className="p-6 bg-white rounded-b max-h-150 overflow-y-auto ">
        {children}
      </div>
    </div>
  );
}