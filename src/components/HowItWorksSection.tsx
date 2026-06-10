// components/HowItWorksSection.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { MapPin, Calendar, Bus, CheckCircle } from "lucide-react";
import { howItWorks as hiw } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Calendar,
  Bus,
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const steps = hiw.steps.map((s) => ({
    ...s,
    Icon: iconMap[s.iconName] || Bus,
  }));

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll to step function for mobile dots
  // const scrollToStep = (index: number) => {
  //   if (stepRefs[index]?.current) {
  //     stepRefs[index].current?.scrollIntoView({ 
  //       behavior: 'smooth', 
  //       block: 'center' 
  //     });
  //   }
  // };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.findIndex(ref => ref.current === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        threshold: isMobile ? 0.2 : 0.6,
        rootMargin: isMobile ? "-5% 0px -5% 0px" : "-10% 0px -10% 0px"
      }
    );

    stepRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [isMobile]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <span className="inline-flex items-center bg-blue-100 text-blue-600 px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold mb-3 lg:mb-4">
            <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
            {hiw.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">
            {hiw.heading}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            {hiw.description}
          </p>
        </div>

        {/* Mobile Timeline Indicator */}
        {/* {isMobile && (
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToStep(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )} */}

        {/* Vertical Timeline Steps */}
        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-48">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={stepRefs[index]}
                className={`relative transition-all duration-1000 ${
                  index <= activeStep ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Content Side - Full width on mobile */}
                  <div className="w-full lg:w-1/2">
                    <div className={`bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl border border-gray-100 lg:border-2 p-6 lg:p-8 transition-all duration-700 transform ${
                      index === activeStep
                        ? 'lg:scale-105 border-blue-500 shadow-xl lg:shadow-2xl'
                        : 'scale-100 border-gray-100'
                    }`}>
                      {/* Step Indicator */}
                      <div className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
                        <div className={`w-12 h-12 lg:w-16 lg:h-16 ${step.bgColor} rounded-xl lg:rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          index === activeStep ? 'lg:scale-110' : ''
                        }`}>
                          <step.Icon className={`h-6 w-6 lg:h-8 lg:w-8 ${step.color}`} />
                        </div>
                        <div>
                          <div className="text-xs lg:text-sm text-gray-500 font-medium">Step {index + 1}</div>
                          <h3 className="text-xl lg:text-3xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm lg:text-lg leading-relaxed mb-4 lg:mb-6">{step.desc}</p>

                      {/* Animated Details */}
                      <div className="space-y-2 lg:space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className={`flex items-center space-x-2 lg:space-x-3 text-sm lg:text-base text-gray-700 transition-all duration-500 ${
                              index === activeStep
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-70'
                            }`}
                            style={{ transitionDelay: `${detailIndex * 100}ms` }}
                          >
                            <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-colors duration-300 ${
                              index === activeStep ? 'bg-blue-500' : 'bg-gray-400'
                            }`}></div>
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual Side - Hidden on mobile, shown on desktop */}
                  <div className="hidden lg:block lg:w-1/2">
                    <div className={`relative h-80 rounded-2xl overflow-hidden transition-all duration-1000 ${
                      index === activeStep
                        ? 'scale-100 opacity-100'
                        : 'scale-95 opacity-70'
                    }`}>
                      {/* Animated Background */}
                      <div className={`absolute inset-0 transition-all duration-1000 ${
                        index === 0 ? 'bg-blue-50' :
                        index === 1 ? 'bg-green-50' :
                        'bg-purple-50'
                      }`}></div>
                      
                      {/* Animated Elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {index === 0 && (
                          <div className="relative w-48 h-48">
                            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                              index === activeStep ? 'scale-100 opacity-100' : 'scale-90 opacity-70'
                            }`}>
                              <MapPin className="h-20 w-20 text-blue-600" />
                            </div>
                          </div>
                        )}
                        
                        {index === 1 && (
                          <div className="relative w-48 h-48">
                            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                              index === activeStep ? 'scale-100 opacity-100' : 'scale-90 opacity-70'
                            }`}>
                              <Calendar className="h-20 w-20 text-green-600" />
                            </div>
                          </div>
                        )}
                        
                        {index === 2 && (
                          <div className="relative w-48 h-48">
                            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                              index === activeStep ? 'scale-100 opacity-100' : 'scale-90 opacity-70'
                            }`}>
                              <Bus className="h-20 w-20 text-purple-600" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number on Timeline - Hidden on mobile */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-14 h-14 bg-white border-4 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ${
                    index === activeStep
                      ? 'border-blue-500 scale-110'
                      : index < activeStep
                      ? 'border-green-500'
                      : 'border-gray-300'
                  }`}>
                    <span className={`text-lg font-bold transition-colors duration-500 ${
                      index === activeStep
                        ? 'text-blue-600'
                        : index < activeStep
                        ? 'text-green-600'
                        : 'text-gray-400'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12 lg:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl p-6 lg:p-8 text-white w-full max-w-2xl">
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg lg:rounded-xl flex items-center justify-center">
                <Bus className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-base lg:text-lg">Ready to book your journey?</p>
                <p className="text-blue-100 text-xs lg:text-sm">Get your custom quote in minutes!</p>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-6 py-2 lg:px-8 lg:py-3 rounded-lg lg:rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base w-full sm:w-auto">
              Get Started Now
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}