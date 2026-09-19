import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  Phone, 
  Mail, 
  FileText 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export default function ProjectInquiryModal({ isOpen, onClose, initialSubject }: ProjectInquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Industrial Infrastructure',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({
        ...prev,
        message: `Inquiry regarding: ${initialSubject}\n\nProject Scope & Requirements:`
      }));
    }
  }, [initialSubject, isOpen]);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    return [
      `*TATVA STRUCTURA — PROJECT CONSULTATION INQUIRY*`,
      ``,
      `*Client Name:* ${formData.name.trim() || 'N/A'}`,
      `*Phone Number:* ${formData.phone.trim() || 'N/A'}`,
      `*Email Address:* ${formData.email.trim() || 'N/A'}`,
      `*Company / Organization:* ${formData.company.trim() ? formData.company.trim() : 'N/A'}`,
      `*Project Category:* ${formData.projectType || 'Industrial Infrastructure'}`,
      ``,
      `*Scope & Requirements:*`,
      `${formData.message.trim() || 'General structural engineering consultation inquiry'}`,
      ``,
      `----------------------------------------`,
      `_Sent via Tatva Structura Consultation Portal_`
    ].join('\n');
  };

  const openWhatsAppChat = () => {
    const text = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Forward all details directly through WhatsApp
    openWhatsAppChat();

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  const handleWhatsApp = () => {
    openWhatsAppChat();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#0B1526] border border-slate-700 rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 bg-slate-900/90 border-b border-slate-800 flex items-start gap-4">
          <div className="w-13 h-13 rounded-sm bg-white p-1 border border-white/20 shadow-md shrink-0 hidden sm:flex items-center justify-center">
            <img 
              src="/images/logo.jpeg" 
              alt="Tatva Structura" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-xs font-mono-tech text-[#F27D26] uppercase tracking-wider mb-1">
              TATVA STRUCTURA &bull; PROJECT CONSULTATION
            </div>
            <h3 className="text-xl font-bold text-white font-heading">
              Discuss Your Structural Project
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Connect directly with Director of Business Development ({COMPANY_INFO.contactPerson}) & our technical directorship.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-700/60 text-center space-y-4 animate-fadeIn">
              <div className="w-12 h-12 bg-emerald-900/60 border border-emerald-500/80 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-white font-heading uppercase tracking-wide">
                Inquiry Received
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We have received your structural engineering inquiry and formatted all project details directly for Director of Business Development ({COMPANY_INFO.contactPerson}, {COMPANY_INFO.phone}) on WhatsApp.
              </p>

              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3 text-left text-xs space-y-1 font-mono-tech text-slate-300">
                <div className="text-[11px] text-[#F27D26] uppercase font-bold mb-1">Details Forwarded:</div>
                <div><span className="text-slate-400">Client:</span> {formData.name} ({formData.phone})</div>
                <div><span className="text-slate-400">Email:</span> {formData.email}</div>
                <div><span className="text-slate-400">Category:</span> {formData.projectType}</div>
                {formData.company && <div><span className="text-slate-400">Company:</span> {formData.company}</div>}
              </div>

              <p className="text-xs text-slate-300">
                We will contact you promptly at <span className="text-emerald-400 font-semibold">{formData.phone || formData.email || 'your contact'}</span>.
              </p>
              
              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 transition-colors"
                >
                  Close Window
                </button>
                <button
                  type="button"
                  onClick={openWhatsAppChat}
                  className="px-4 py-2 text-xs rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold flex items-center space-x-1.5 transition-colors shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                  <span>WhatsApp Directly</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono-tech text-slate-300 uppercase mb-1">Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#E06D14]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono-tech text-slate-300 uppercase mb-1">Phone Number *</label>
                  <input 
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#E06D14]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono-tech text-slate-300 uppercase mb-1">Email *</label>
                  <input 
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#E06D14]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono-tech text-slate-300 uppercase mb-1">Company / Organization</label>
                  <input 
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#E06D14]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono-tech text-slate-300 uppercase mb-1">Project Category</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#E06D14] font-mono-tech"
                >
                  <option value="Industrial Infrastructure & Sheds">Industrial Infrastructure & Sheds</option>
                  <option value="Power & Substation Facilities">Power & Substation Facilities</option>
                  <option value="Water / Sewage Treatment Plants (STP)">Water / Sewage Treatment Plants (STP)</option>
                  <option value="Metro & Transportation Systems">Metro & Transportation Systems</option>
                  <option value="Bridges & Flyovers">Bridges & Flyovers</option>
                  <option value="Commercial & Hospitality Buildings">Commercial & Hospitality Buildings</option>
                  <option value="Special Structures & Blast Resistance">Special Structures & Blast Resistance</option>
                  <option value="Structural Proof Checking & Review">Structural Proof Checking & Review</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono-tech text-slate-300 uppercase mb-1">Scope & Requirements *</label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Outline project size, location, and structural consulting deliverables needed..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#E06D14]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-slate-950 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#25D366]/20 cursor-pointer disabled:opacity-50"
                  id="submit-inquiry-whatsapp-btn"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>{loading ? 'Submitting through WhatsApp...' : 'Submit Through WhatsApp'}</span>
                  <Send className="w-3.5 h-3.5 ml-1 text-slate-950" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer quick info */}
        <div className="p-4 bg-slate-900/60 border-t border-slate-800 text-[11px] font-mono-tech text-slate-400 flex items-center justify-between">
          <span>CALL: {COMPANY_INFO.phone}</span>
          <span>EMAIL: {COMPANY_INFO.email}</span>
        </div>
      </div>
    </div>
  );
}
