import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  CheckCircle, 
  Users, 
  Shield, 
  Clock, 
  Star,
  ArrowRight,
  Calendar,
  Heart,
  AlertTriangle,
  DollarSign,
  MessageCircle,
  Award,
  Scale,
  FileText
} from 'lucide-react';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

// Animation component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    accidentDate: '',
    injuries: '',
    atFault: ''
  });

  const [showChat, setShowChat] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 24 hours to discuss your case.');
  };

  const states = [
    'California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 'Illinois',
    'Ohio', 'Georgia', 'North Carolina', 'Michigan', 'New Jersey', 'Virginia',
    'Washington', 'Arizona', 'Massachusetts', 'Tennessee', 'Indiana', 'Missouri',
    'Maryland', 'Wisconsin', 'Colorado', 'Minnesota', 'South Carolina', 'Alabama'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Accident.Ink</h1>
                <p className="text-xs text-gray-600">Your Injury. Your Case. Your Justice.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:1-800-ACCIDENT" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">1-800-LAW-AFFF</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Car accident scene with emergency response"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-red-900/85 to-orange-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10 max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="text-white">Injured in a Car Accident?</span>{' '}
                <span className="text-amber-400 block mt-2">You May Be Eligible for Compensation.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
                Get connected with top personal injury attorneys in minutes. No upfront costs, no obligation.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
                <button 
                  onClick={() => document.getElementById('eligibility-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-5 rounded-lg font-bold text-xl hover:from-amber-400 hover:to-orange-400 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl"
                >
                  <span>Check My Eligibility</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                <a 
                  href="tel:1-800-LAW-AFFF"
                  className="border-2 border-white text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Phone className="w-6 h-6" />
                  Call Now: 1-800-LAW-AFFF
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-lg font-semibold">100% Free Evaluation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="text-lg font-semibold">No Win, No Fee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg font-semibold">24/7 Support</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Recovery Statistics */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Millions Recovered for Our Clients</h2>
              <p className="text-xl text-emerald-100">Real results from real cases across the United States</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">$500M+</div>
                <div className="text-emerald-100 font-semibold">Total Recovered</div>
                <div className="text-sm text-emerald-200 mt-2">Since 2010</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">$2.3M</div>
                <div className="text-emerald-100 font-semibold">Largest Settlement</div>
                <div className="text-sm text-emerald-200 mt-2">Truck Accident Case</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">15,000+</div>
                <div className="text-emerald-100 font-semibold">Cases Won</div>
                <div className="text-sm text-emerald-200 mt-2">98% Success Rate</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">$125K</div>
                <div className="text-emerald-100 font-semibold">Average Settlement</div>
                <div className="text-sm text-emerald-200 mt-2">Car Accident Cases</div>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={500}>
            <div className="text-center mt-12">
              <p className="text-emerald-100 text-lg mb-6">
                Every case is unique. Past results do not guarantee future outcomes.
              </p>
              <button 
                onClick={() => document.getElementById('eligibility-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                See What Your Case Is Worth
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Get connected with the right attorney in three simple steps</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-700 group-hover:to-indigo-800 transition-all duration-300 shadow-lg">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Fill Out Form</h3>
                <p className="text-gray-600">Complete our 2-minute eligibility form with basic details about your accident and injuries.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-700 group-hover:to-teal-800 transition-all duration-300 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Get Matched</h3>
                <p className="text-gray-600">We connect you with a trusted local attorney who specializes in your type of case.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-violet-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-purple-700 group-hover:to-violet-800 transition-all duration-300 shadow-lg">
                  <Scale className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Free Consultation</h3>
                <p className="text-gray-600">Schedule a free consultation to discuss your case and potential compensation.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Eligibility Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Am I Eligible?</h2>
              <p className="text-xl text-gray-600">Check if you qualify for compensation</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl hover:from-blue-100 hover:to-indigo-200 transition-all duration-300 hover:scale-105 transform shadow-md">
                <Calendar className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Accident</h3>
                <p className="text-gray-600">Was the accident within the last 12 months?</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-100 rounded-xl hover:from-red-100 hover:to-pink-200 transition-all duration-300 hover:scale-105 transform shadow-md">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Injuries Sustained</h3>
                <p className="text-gray-600">Were you injured or experienced trauma?</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl hover:from-amber-100 hover:to-orange-200 transition-all duration-300 hover:scale-105 transform shadow-md">
                <AlertTriangle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Not At Fault</h3>
                <p className="text-gray-600">Not at fault or partially at fault?</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl hover:from-emerald-100 hover:to-green-200 transition-all duration-300 hover:scale-105 transform shadow-md">
                <DollarSign className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Impact</h3>
                <p className="text-gray-600">Missed work or had financial losses?</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Real stories from real people we've helped</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform border border-blue-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"I didn't know I could claim until I found Accident.Ink. The process was so easy and I got $42,000 in damages. Forever grateful!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center">
                    <span className="text-indigo-700 font-semibold">AR</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Amanda R.</h4>
                    <p className="text-sm text-gray-600">Car Accident Victim</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform border border-emerald-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"The attorney they connected me with was amazing. He fought for me and got me the compensation I deserved. No upfront costs!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full flex items-center justify-center">
                    <span className="text-teal-700 font-semibold">MJ</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Michael J.</h4>
                    <p className="text-sm text-gray-600">Truck Accident Survivor</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform border border-purple-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"Fast, professional, and caring. They made a difficult time much easier. I received excellent legal representation."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-200 rounded-full flex items-center justify-center">
                    <span className="text-violet-700 font-semibold">SL</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Sarah L.</h4>
                    <p className="text-sm text-gray-600">Motorcycle Accident</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Attorney Network Trust */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted Attorney Network</h2>
              <p className="text-xl text-gray-600">Our network includes board-certified attorneys with 10+ years of experience in personal injury law</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection delay={100}>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <Award className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Board Certified</h3>
                <p className="text-gray-600">All attorneys are board-certified in personal injury law</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <Users className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10+ Years Experience</h3>
                <p className="text-gray-600">Average of 15+ years specializing in accident cases</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <Shield className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-600">$500M+ recovered for clients nationwide</p>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={400}>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-100 px-4 py-2 rounded-full hover:from-green-100 hover:to-emerald-200 transition-all duration-300 shadow-md">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">No Win, No Fee</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-100 px-4 py-2 rounded-full hover:from-blue-100 hover:to-indigo-200 transition-all duration-300 shadow-md">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Confidential</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-violet-100 px-4 py-2 rounded-full hover:from-purple-100 hover:to-violet-200 transition-all duration-300 shadow-md">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-800">24/7 Support</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Get answers to common questions about personal injury claims</p>
            </div>
          </AnimatedSection>
          <div className="space-y-6">
            <AnimatedSection delay={100}>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does it cost to hire a personal injury attorney?</h3>
                <p className="text-gray-600">Nothing upfront! Our attorneys work on a contingency fee basis, meaning you only pay if we win your case. There are no hidden fees or surprise costs.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long do I have to file a personal injury claim?</h3>
                <p className="text-gray-600">The statute of limitations varies by state, typically ranging from 1-3 years. It's crucial to act quickly to preserve evidence and protect your rights. Contact us today for a free consultation.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What if I was partially at fault for the accident?</h3>
                <p className="text-gray-600">You may still be entitled to compensation even if you were partially at fault. Many states follow comparative negligence laws, allowing you to recover damages reduced by your percentage of fault.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What types of damages can I recover?</h3>
                <p className="text-gray-600">You may be entitled to medical expenses, lost wages, pain and suffering, property damage, and future medical costs. Our attorneys will fight to maximize your compensation.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={500}>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does a personal injury case take?</h3>
                <p className="text-gray-600">Case duration varies depending on complexity, severity of injuries, and willingness to settle. Simple cases may resolve in months, while complex cases can take 1-2 years. We'll keep you informed throughout the process.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA Form */}
      <section id="eligibility-form" className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Don't Wait - Act Now</h2>
              <p className="text-xl text-blue-100">Time limits may apply to your case. Get your free consultation today.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Eligibility Check</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select State</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <input
                type="date"
                name="accidentDate"
                placeholder="Accident Date"
                value={formData.accidentDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-amber-400 hover:to-orange-500 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get My Free Case Evaluation
              </button>
            </form>
            <p className="text-center text-gray-600 mt-6">
              <strong>Takes 60 seconds • No obligation</strong><br />
              We respect your privacy and will never share your information.
            </p>
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Accident.Ink</h3>
                  <p className="text-sm text-gray-400">Your Injury. Your Case. Your Justice.</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting accident victims with experienced personal injury attorneys across the United States.
              </p>
              <div className="flex space-x-4">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>1-800-LAW-AFFF</span>
              </div>
              </div>
              <div>
              <h4 className="text-lg font-semibold mb-4">Legal Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Legal Disclaimer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Free Case Review</a></li>
              </ul>
              </div>
              <div>
              <h4 className="text-lg font-semibold mb-4">Get Help Today</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">1-800-LAW-AFFF</span>
                  </div>
                  <p className="text-gray-400 text-sm">Free Consultation Available</p>
                </div>
                <button 
                  onClick={() => document.getElementById('eligibility-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 w-full"
                >
                  Start My Case Now
                </button>
                <p className="text-gray-400 text-xs">Takes 60 seconds • No obligation</p>
              </div>
              </div>
            </div>
          </AnimatedSection>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <AnimatedSection delay={200}>
              <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Accident.Ink. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Attorney Advertising. Prior results do not guarantee a similar outcome.
              </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </footer>

      {/* Live Chat Widget */}
      {showChat && (
        <div className="fixed bottom-24 right-4 w-80 bg-white rounded-lg shadow-xl border animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h4 className="font-semibold">Live Chat Support</h4>
            <button onClick={() => setShowChat(false)} className="text-white hover:text-gray-200">
              ×
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm">Hi! I'm here to help you with your personal injury case. How can I assist you today?</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 hover:scale-110 transition-all duration-300 animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;