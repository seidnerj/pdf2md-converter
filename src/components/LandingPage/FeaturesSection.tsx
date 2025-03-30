// src/components/LandingPage/FeaturesSection.tsx
import React from 'react';
import { CheckCircleIcon, BoltIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
    { name: 'Fast Conversion', description: 'Get your Markdown file in seconds.', icon: BoltIcon },
    { name: 'Accurate Output', description: 'Maintains formatting and structure.', icon: CheckCircleIcon },
    { name: 'Secure Upload', description: 'Your files are processed securely.', icon: LockClosedIcon },
]

function FeaturesSection() {
  return (
    <div className="w-full bg-white py-12 mt-10">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose PDF2MD?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature) => (
                    <div key={feature.name} className="text-center p-6 border rounded-lg shadow-sm">
                        <feature.icon className="w-10 h-10 mx-auto text-primary mb-4" aria-hidden="true" />
                        <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-base text-secondary">{feature.description}</p>
                    </div>
                ))}
            </div>
            {/* Optional Links */}
            <div className="text-center mt-10">
                {/* <a href="/how-it-works" className="text-primary hover:underline mx-2">How It Works</a> */}
                {/* <a href="/pricing" className="text-primary hover:underline mx-2">Pricing</a> */}
            </div>
        </div>
    </div>
  );
}

export default FeaturesSection;