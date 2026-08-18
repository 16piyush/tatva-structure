import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Building2, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  initialSubject?: string;
}

export default function ContactSection({ initialSubject }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Industrial Infrastructure',
    message: initialSubject ? `Inquiry regarding: ${initialSubject}\n\nProject details:` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const projectTypes = [
    'Industrial Infrastructure & Sheds',
    'Power & Substation Facilities',
    'Water / Sewage Treatment Plants (STP)',
    'Metro & Transportation Systems',
    'Bridges & Flyovers',
    'Commercial & Hospitality Buildings',
    'Residential Multi-Storey Towers',
    'Special Structures & Blast Resistance',
    'Structural Proof Checking & Review',
    'Retrofitting & GFRP Restrengthening',
    'Other Engineering Consultation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Tatva Structura, my name is ${formData.name || 'Client'}. I am inquiring about ${formData.projectType}. ${formData.company ? `Company: ${formData.company}.` : ''} Message: ${formData.message}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B1320] relative border-t border-slate-800/80">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-[#E06D14]/40 text-[#E06D14] text-xs font-mono-tech uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#E06D14]" />
            <span>START COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            CONTACT TATVA STRUCTURA
          </h2>
          <p className="text-base text-slate-400">
            Reach out to our structural engineering directorship for project scoping, structural review, feasibility studies, and turnkey design proposals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Contact Details & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-[#0D1829] border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[10px] font-mono-tech text-[#E06D14] uppercase tracking-wider block">
                  CONTACT PERSON & BUSINESS DEVELOPMENT
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-1">
                  {COMPANY_INFO.contactPerson}
                </h3>
                <p className="text-xs text-slate-400 font-mono-tech">
                  Director — Business Development
                </p>
              </div>

              {/* Phone Link */}
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#E06D14] transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-slate-800 text-[#E06D14] group-hover:bg-[#E06D14] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech text-slate-500 uppercase">DIRECT PHONE</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#E06D14] transition-colors">
                    {COMPANY_INFO.phone}
                  </div>
                  <div className="text-[11px] text-slate-400">Call for immediate project discussions</div>
                </div>
              </a>

              {/* Email Link */}
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#E06D14] transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-slate-800 text-[#E06D14] group-hover:bg-[#E06D14] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech text-slate-500 uppercase">OFFICIAL INQUIRY EMAIL</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#E06D14] transition-colors break-all">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-[11px] text-slate-400">Send drawings & RFP documents</div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="p-2.5 rounded-lg bg-slate-800 text-[#E06D14]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech text-slate-500 uppercase">HEAD OFFICE LOCATION</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed mt-0.5">
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>

              {/* WhatsApp Instant Chat Button */}
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
                id="whatsapp-contact-button"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat Instantly on WhatsApp</span>
              </button>
            </div>

            {/* Quick Operational Info */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-3 text-xs text-slate-400 font-mono-tech">
              <Clock className="w-4 h-4 text-[#E06D14] shrink-0" />
              <span>{COMPANY_INFO.workingHours}</span>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0D1829] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white font-heading">
                  Submit a Project Inquiry
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below to receive a formal structural consultation response from our technical team.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-700/60 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-emerald-900/60 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading">
                    Inquiry Submitted Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Tatva Structura. Our Director of Business Development ({COMPANY_INFO.contactPerson}) will contact you within 24 hours.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800"
                    >
                      Send Another Message
                    </button>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-4 py-2 text-xs rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center space-x-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Continue on WhatsApp</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech text-slate-300 uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E06D14]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech text-slate-300 uppercase mb-1.5">
                        Phone Number *
                      </label>
                      <input 
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E06D14]"
                      />
                    </div>
                  </div>

                  {/* Email & Company Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech text-slate-300 uppercase mb-1.5">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        required
                        placeholder="client@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E06D14]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech text-slate-300 uppercase mb-1.5">
                        Company / Organization
                      </label>
                      <input 
                        type="text"
                        placeholder="e.g. Infrastructure Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E06D14]"
                      />
                    </div>
                  </div>

                  {/* Project Type Select */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 uppercase mb-1.5">
                      Project Type / Scope *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#E06D14] font-mono-tech text-xs"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt} className="bg-slate-900 text-white">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 uppercase mb-1.5">
                      Project Details / Message *
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Please describe project scope, approximate built-up area/scale, location, and timeline requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E06D14]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#E06D14] to-[#C25E00] hover:from-[#EA7A24] hover:to-[#D46706] text-white shadow-lg shadow-[#E06D14]/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                      id="submit-inquiry-button"
                    >
                      {loading ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
