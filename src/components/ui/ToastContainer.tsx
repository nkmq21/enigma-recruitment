// src/components/ui/ToastContainer.tsx
"use client";
import React from 'react';
import { useToast } from 'enigma/context/ToastContext';

export default function ToastContainer() {
    const { toasts, removeToast } = useToast();

    if (toasts.length === 0) return null;

    return (
        <div className="fixed top-4 right-4 z-50 space-y-2">
            {toasts.map(toast => (
                <div
                    key={toast.id}
                    className={`
                        max-w-sm p-4 rounded-lg shadow-lg transform transition-all duration-300
                        ${toast.type === 'error' ? 'bg-red-500 text-white' : ''}
                        ${toast.type === 'success' ? 'bg-green-500 text-white' : ''}
                        ${toast.type === 'warning' ? 'bg-yellow-500 text-white' : ''}
                        ${toast.type === 'info' ? 'bg-blue-500 text-white' : ''}
                    `}
                >
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{toast.message}</p>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="ml-2 text-white hover:text-gray-200"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}