"use client";

import React, { useState } from "react";
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  MessageCircle, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  Sparkles,
  PhoneCall
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/business";

const SERVICES_OPTIONS = [
  { id: "accident-repair", label: "Accident Repair", desc: "Collision damage, chassis & panel repair" },
  { id: "dent-scratch", label: "Dent or Scratch", desc: "Door dings, key scratches & paint chips" },
  { id: "bumper", label: "Bumper Repair", desc: "Cracked plastic, scrapes & re-clipping" },
  { id: "respray", label: "Full / Partial Re-Spray", desc: "Color-matched panel or full respray" },
  { id: "alloys", label: "Alloy Wheel Refurb", desc: "Kerb scuffs, corrosion & wheel repaints" },
  { id: "polishing-wax", label: "Polishing & Ceramic Wax", desc: "Paint correction & deep gloss protection" },
  { id: "servicing", label: "Maintenance & Diagnostics", desc: "Oil changes, warning lights & mechanical repairs" },
  { id: "brakes-suspension", label: "Brakes & Suspension", desc: "Pads, discs, shock absorbers & springs" },
  { id: "other", label: "Other / Multiple Repairs", desc: "Describe your requirement in Step 3" }
];

export function QuoteWizard() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
    photoName: "",
    regNumber: "",
    makeModel: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Step 1 Validation
  const handleSelectService = (serviceId: string) => {
    setFormData((prev) => ({ ...prev, service: serviceId }));
    setErrors((prev) => ({ ...prev, service: "" }));
  };

  const validateStep1 = () => {
    if (!formData.service) {
      setErrors((prev) => ({ ...prev, service: "Please select a service category to continue." }));
      return false;
    }
    setErrors({});
    return true;
  };

  // Step 2 Validation (Only Name and Phone are required)
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }
    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Please enter your mobile or phone number.";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid UK phone number (at least 10 digits).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (step === 2 && validateStep2()) {
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    if (step === 3) setStep(2);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, photoName: e.target.files![0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock demonstration submission (Feature flag: disabled by default in prototype)
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 600);
  };

  const selectedServiceLabel = SERVICES_OPTIONS.find(s => s.id === formData.service)?.label || "Selected Service";

  return (
    <div className="w-full max-w-2xl mx-auto bg-surface border border-surface-border rounded-3xl p-6 sm:p-10 shadow-2xl">
      
      {/* Progress Header (Only on steps 1, 2, 3) */}
      {step < 4 && (
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            <span>Step {step} of 3</span>
            <span className="text-brand-blue-glow">
              {step === 1 && "Select Service"}
              {step === 2 && "Your Contact"}
              {step === 3 && "Vehicle Details (Optional)"}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-surface-raised rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-blue to-brand-amber transition-all duration-300 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* STEP 1: Select Service */}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">What do you need repaired?</h2>
            <p className="text-slate-400 text-sm mt-1">
              Select the option that best describes your vehicle requirement.
            </p>
          </div>

          {errors.service && (
            <div className="flex items-center gap-2 p-3 bg-red-950/50 border border-red-500/40 text-red-200 rounded-xl text-xs">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errors.service}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Service type">
            {SERVICES_OPTIONS.map((opt) => {
              const isSelected = formData.service === opt.id;
              return (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => handleSelectService(opt.id)}
                  role="radio"
                  aria-checked={isSelected}
                  className={`flex flex-col text-left p-4 rounded-2xl border transition-all text-sm min-h-[58px] ${
                    isSelected
                      ? "bg-brand-blue/20 border-brand-blue-glow text-white shadow-md shadow-brand-blue/20 ring-1 ring-brand-blue-glow"
                      : "bg-surface-raised hover:bg-surface-elevated border-surface-border text-slate-200"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold text-base">{opt.label}</span>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white text-xs">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 mt-1">{opt.desc}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-brand-blue/25 transition-all min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow"
            >
              <span>Continue to Contact Info</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Name & Phone Number */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Your contact details</h2>
              <p className="text-slate-400 text-sm mt-1">
                Selected: <strong className="text-white">{selectedServiceLabel}</strong>
              </p>
            </div>
            <button
              type="button"
              onClick={handleBack}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 p-2 rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Change</span>
            </button>
          </div>

          <div className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label htmlFor="quote-name" className="block text-sm font-semibold text-slate-200 mb-1.5">
                Full Name <span className="text-brand-amber">*</span>
              </label>
              <input
                id="quote-name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                placeholder="e.g. David Miller"
                className={`w-full bg-surface-raised border rounded-xl px-4 py-3.5 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-500 focus:ring-red-500" : "border-surface-border focus:ring-brand-blue-glow"
                }`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="quote-phone" className="block text-sm font-semibold text-slate-200 mb-1.5">
                Mobile Number <span className="text-brand-amber">*</span>
              </label>
              <input
                id="quote-phone"
                name="tel"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                placeholder="e.g. 07412 895092"
                className={`w-full bg-surface-raised border rounded-xl px-4 py-3.5 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 ${
                  errors.phone ? "border-red-500 focus:ring-red-500" : "border-surface-border focus:ring-brand-blue-glow"
                }`}
              />
              {errors.phone ? (
                <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
              ) : (
                <p className="text-slate-400 text-xs mt-1">We will text or call you back with your repair estimate.</p>
              )}
            </div>

            {/* Photo / Video Upload with WhatsApp option */}
            <div className="pt-2">
              <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                Damage Photo or Video <span className="text-slate-400 text-xs font-normal">(Optional)</span>
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Local file attach */}
                <label className="flex flex-col items-center justify-center p-4 border border-dashed border-surface-border hover:border-brand-blue rounded-2xl bg-surface-raised/60 hover:bg-surface-raised cursor-pointer transition-colors text-center">
                  <Upload className="w-5 h-5 text-brand-blue-light mb-1" />
                  <span className="text-xs font-medium text-slate-200">
                    {formData.photoName ? formData.photoName : "Attach Photo / Video"}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5">JPG, PNG, WEBP or MP4</span>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>

                {/* WhatsApp Alternative */}
                <a
                  href={`${BUSINESS_CONFIG.whatsappLink}?text=${encodeURIComponent(
                    `Hello Shine Auto Centre, my name is ${formData.name || "[Name]"}. I would like to send photos for a ${selectedServiceLabel} quote.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/40 rounded-2xl text-emerald-300 transition-colors text-center"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400 mb-1" />
                  <span className="text-xs font-semibold">Send via WhatsApp</span>
                  <span className="text-[11px] text-emerald-400/80 mt-0.5">Open chat & attach photos</span>
                </a>
              </div>
            </div>

          </div>

          <div className="pt-4 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="px-5 py-3.5 rounded-xl border border-surface-border text-slate-300 hover:text-white font-semibold text-sm transition-colors min-h-[48px]"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-lg shadow-brand-blue/25 transition-all min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow"
            >
              <span>Vehicle Details (Optional)</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Optional Vehicle Details & Message */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-200">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Vehicle Details</h2>
            <p className="text-slate-400 text-sm mt-1">
              Optional details that help our technicians quote faster and look up exact factory paint codes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Registration */}
            <div>
              <label htmlFor="quote-reg" className="block text-sm font-semibold text-slate-200 mb-1.5">
                Vehicle Registration <span className="text-slate-400 text-xs font-normal">(Optional)</span>
              </label>
              <input
                id="quote-reg"
                name="registration"
                type="text"
                autoCapitalize="characters"
                value={formData.regNumber}
                onChange={(e) => setFormData((p) => ({ ...p, regNumber: e.target.value.toUpperCase() }))}
                placeholder="e.g. AB12 CDE"
                className="w-full uppercase font-mono font-bold bg-surface-raised border border-surface-border rounded-xl px-4 py-3.5 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue-glow"
              />
            </div>

            {/* Make & Model */}
            <div>
              <label htmlFor="quote-makemodel" className="block text-sm font-semibold text-slate-200 mb-1.5">
                Make & Model <span className="text-slate-400 text-xs font-normal">(Optional)</span>
              </label>
              <input
                id="quote-makemodel"
                name="makeModel"
                type="text"
                value={formData.makeModel}
                onChange={(e) => setFormData((p) => ({ ...p, makeModel: e.target.value }))}
                placeholder="e.g. Ford Fiesta 2019"
                className="w-full bg-surface-raised border border-surface-border rounded-xl px-4 py-3.5 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue-glow"
              />
            </div>

          </div>

          {/* Optional Email */}
          <div>
            <label htmlFor="quote-email" className="block text-sm font-semibold text-slate-200 mb-1.5">
              Email Address <span className="text-slate-400 text-xs font-normal">(Optional)</span>
            </label>
            <input
              id="quote-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              placeholder="e.g. name@domain.co.uk"
              className="w-full bg-surface-raised border border-surface-border rounded-xl px-4 py-3.5 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue-glow"
            />
          </div>

          {/* Message / Description */}
          <div>
            <label htmlFor="quote-message" className="block text-sm font-semibold text-slate-200 mb-1.5">
              Describe the issue or repair required <span className="text-slate-400 text-xs font-normal">(Optional)</span>
            </label>
            <textarea
              id="quote-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
              placeholder="Tell us what happened (e.g. scraped the rear bumper while reversing, dent on driver side door)..."
              className="w-full bg-surface-raised border border-surface-border rounded-xl px-4 py-3 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue-glow"
            />
          </div>

          {/* Response guarantee notice */}
          <div className="flex items-center gap-2 p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-xl text-xs text-slate-300">
            <Clock className="w-4 h-4 text-brand-blue-light shrink-0" />
            <span>{BUSINESS_CONFIG.responseClaim}</span>
          </div>

          <div className="pt-4 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="px-5 py-3.5 rounded-xl border border-surface-border text-slate-300 hover:text-white font-semibold text-sm transition-colors min-h-[48px]"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-brand-amber/20 hover:brightness-110 active:scale-98 transition-all min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
            >
              {isSubmitting ? (
                <span>Preparing quote...</span>
              ) : (
                <>
                  <span>Get my quote</span>
                  <Sparkles className="w-5 h-5 text-slate-950" />
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* CONFIRMATION STATE */}
      {step === 4 && (
        <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
          
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 inline-block mb-2">
              Quote Request Prepared
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Thank you, {formData.name || "Customer"}!
            </h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto mt-2 leading-relaxed">
              {BUSINESS_CONFIG.responseClaimFull}
            </p>
          </div>

          {/* Prototype Mode Alert */}
          <div className="p-3.5 bg-amber-950/40 border border-amber-500/30 rounded-2xl text-xs text-amber-200 flex items-center justify-center gap-2 max-w-md mx-auto">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Prototype Mode:</strong> Nothing was sent. In production, this instantly notifies the garage via email & WhatsApp.
            </span>
          </div>

          {/* What Happens Next 3-Step Timeline */}
          <div className="bg-surface-raised p-5 rounded-2xl border border-surface-border text-left max-w-md mx-auto space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">What Happens Next</h3>
            
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <p className="text-xs font-semibold text-white">Technician Reviews Details</p>
                <p className="text-[11px] text-slate-400">We inspect your service details and formulate an accurate parts and labor estimate.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <p className="text-xs font-semibold text-white">We Contact You Directly</p>
                <p className="text-[11px] text-slate-400">We will call or text your number ({formData.phone || "provided number"}) with exact pricing and turnaround options.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <p className="text-xs font-semibold text-white">Drop-Off & Repair</p>
                <p className="text-[11px] text-slate-400">Bring your car to our Stanwell workshop at 540-542 London Rd to complete the repair.</p>
              </div>
            </div>
          </div>

          {/* Need Immediate Assistance WhatsApp CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BUSINESS_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md shadow-emerald-600/20 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp Now</span>
            </a>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-raised border border-surface-border text-slate-200 hover:text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all min-h-[48px]"
            >
              <PhoneCall className="w-4 h-4 text-brand-blue-light" />
              <span>Call Workshop</span>
            </a>
          </div>

        </div>
      )}

    </div>
  );
}
