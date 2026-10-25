"use client";

import React, { useState, useEffect } from "react";
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Camera, 
  Car,
  AlertCircle,
  X
} from "lucide-react";
import { BUSINESS_CONFIG, lookupUkVehicle } from "@/lib/business";

const ESTIMATOR_SERVICES = [
  { id: "bumper-scuff", label: "Bumper Scuff / Scratch Repair", tag: "SMART Repair", price: "from £145", time: "Same Day" },
  { id: "dent-pdr", label: "Dent Pulling / PDR", tag: "Paintless", price: "from £95", time: "2–4 Hours" },
  { id: "full-respray", label: "Full Panel Respray / Booth Work", tag: "PPG Factory Match", price: "from £220", time: "24–48 Hours" },
  { id: "alloy-refurb", label: "Alloy Wheel Refurbishment", tag: "Diamond Cut / Powder", price: "from £65/wheel", time: "Same Day" },
  { id: "accident-collision", label: "Accident Collision Repair", tag: "Insurance Approved", price: "Free Estimate", time: "Priority" },
  { id: "servicing", label: "Interim or Full Car Servicing", tag: "Warranty Preserved", price: "from £119", time: "Same Day" },
  { id: "brakes-diagnostics", label: "Brake Pads & Mechanical Diagnostics", tag: "OEM Quality", price: "Free Check", time: "Same Day" },
];

export function SmartDvlaEstimator() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [regInput, setRegInput] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState<ReturnType<typeof lookupUkVehicle> | null>(null);
  const [selectedService, setSelectedService] = useState<string>("");
  const [photos, setPhotos] = useState<{ name: string; preview: string }[]>([]);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Live reg lookup simulation on input change
  const handleRegChange = (val: string) => {
    const formatted = val.toUpperCase().replace(/[^A-Z0-9\s]/g, "");
    setRegInput(formatted);
    const clean = formatted.replace(/\s/g, "");
    if (clean.length >= 4) {
      const detected = lookupUkVehicle(clean);
      setVehicleInfo(detected);
      setErrorMessage("");
    } else {
      setVehicleInfo(null);
    }
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = regInput.replace(/\s/g, "");
    if (clean.length < 3) {
      setErrorMessage("Please enter a valid UK registration number.");
      return;
    }
    const detected = lookupUkVehicle(clean);
    setVehicleInfo(detected);
    setErrorMessage("");
    setStep(2);
  };

  const handleServiceSelect = (id: string) => {
    setSelectedService(id);
    setErrorMessage("");
    setStep(3);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 4);
      const newPhotos = filesArray.map((f) => ({
        name: f.name,
        preview: URL.createObjectURL(f),
      }));
      setPhotos((prev) => [...prev, ...newPhotos].slice(0, 4));
    }
  };

  const handleRemovePhoto = (idx: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    const cleanPhone = contactPhone.replace(/[\s-]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid UK mobile or phone number (at least 10 digits).");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");

    // Simulate fast intake processing
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
    }, 500);
  };

  const selectedServiceObj = ESTIMATOR_SERVICES.find((s) => s.id === selectedService);

  return (
    <section id="estimator" className="py-16 sm:py-24 border-b border-surface-border bg-gradient-to-b from-surface/80 via-background to-background relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-brand-amber/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-raised border border-surface-border text-xs text-brand-amber-light font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
            <span>Instant Reg Plate Lookup • Zero Intake Drop-Off</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            2-Step Smart Repair &amp; DVLA Estimator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Skip the 8-field forms. Enter your UK vehicle registration for instant verified spec matching and upfront pricing in minutes.
          </p>
        </div>

        {/* The Card Widget */}
        <div className="bg-surface border border-surface-border rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Progress Indicator */}
          {step < 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                <span>Step {step} of 3</span>
                <span className="text-brand-amber">
                  {step === 1 && "Vehicle Identification"}
                  {step === 2 && "Select Service"}
                  {step === 3 && "Photos & Fast Quote"}
                </span>
              </div>
              <div className="w-full h-2 bg-surface-raised rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-brand-amber to-brand-emerald-whatsapp transition-all duration-300 ease-out"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: UK REG PLATE LOOKUP */}
          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-6">
              <div className="text-center max-w-md mx-auto">
                <label htmlFor="reg-plate-input" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Enter Your Vehicle Registration Number
                </label>

                {/* UK Registration Plate Input Box */}
                <div className="relative inline-flex items-center justify-center bg-[#FACC15] text-slate-950 rounded-xl p-2 border-2 border-amber-400/80 shadow-2xl mx-auto w-full max-w-sm">
                  {/* UK / EU Flag Left Badge */}
                  <div className="h-12 sm:h-14 w-9 sm:w-11 bg-[#003399] rounded-lg flex flex-col items-center justify-center text-white shrink-0 mr-2 select-none">
                    <span className="text-xs">🇬🇧</span>
                    <span className="font-bold text-[9px] tracking-tight leading-none mt-0.5">UK</span>
                  </div>

                  {/* Input field */}
                  <input
                    id="reg-plate-input"
                    type="text"
                    value={regInput}
                    onChange={(e) => handleRegChange(e.target.value)}
                    placeholder="LL68 ABC"
                    autoCapitalize="characters"
                    autoComplete="off"
                    className="w-full bg-transparent text-slate-950 font-black text-2xl sm:text-3xl tracking-widest text-center uppercase focus:outline-none placeholder:text-slate-950/40 uk-plate-font"
                    maxLength={9}
                  />
                </div>

                {/* Example Helper Chips */}
                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-400">
                  <span>Try examples:</span>
                  {["LL68 ABC", "BD70 XYZ", "EA21 TYU"].map((ex) => (
                    <button
                      type="button"
                      key={ex}
                      onClick={() => handleRegChange(ex)}
                      className="px-2 py-0.5 bg-surface-raised hover:bg-surface-elevated rounded border border-surface-border text-slate-300 font-mono text-[11px] transition-colors"
                    >
                      {ex}
                    </button>
                  ))}
                </div>

                {/* Instant Verification Badge */}
                {vehicleInfo && (
                  <div className="mt-5 p-3.5 bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 rounded-xl text-xs flex items-center justify-center gap-2 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">
                      ✓ Verified: {vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model} ({vehicleInfo.color})
                    </span>
                  </div>
                )}

                {errorMessage && (
                  <div className="mt-4 p-3 bg-red-950/40 border border-red-500/40 text-red-300 rounded-xl text-xs flex items-center justify-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-black px-10 py-4 rounded-xl text-base shadow-xl shadow-brand-amber/20 hover:brightness-110 active:scale-98 transition-all min-h-[52px]"
                >
                  <span>Select Required Service</span>
                  <ChevronRight className="w-5 h-5 text-slate-950" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: SERVICE PILL SELECTOR */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Select Your Repair or Service</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Vehicle: <strong className="text-brand-amber">{vehicleInfo?.year} {vehicleInfo?.make} {vehicleInfo?.model}</strong> [{regInput.toUpperCase()}]
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 self-start sm:self-center p-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Change Reg</span>
                </button>
              </div>

              {/* Service Pills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup">
                {ESTIMATOR_SERVICES.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => handleServiceSelect(srv.id)}
                    className="p-4 rounded-2xl bg-surface-raised hover:bg-surface-elevated border border-surface-border hover:border-brand-amber/60 text-left transition-all flex flex-col justify-between group min-h-[72px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
                  >
                    <div className="flex items-start justify-between gap-2 w-full">
                      <span className="font-bold text-sm text-white group-hover:text-brand-amber transition-colors">
                        {srv.label}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 shrink-0">
                        {srv.tag}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs mt-3 pt-2 border-t border-surface-border/50 text-slate-400">
                      <span className="font-mono font-bold text-brand-amber">{srv.price}</span>
                      <span>{srv.time}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: DAMAGE PHOTOS & ROUTE SELECTION */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Upload Damage Photos &amp; Contact</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Repair: <strong className="text-white">{selectedServiceObj?.label}</strong> • Vehicle: <strong className="text-brand-amber">{vehicleInfo?.year} {vehicleInfo?.make} [{regInput.toUpperCase()}]</strong>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 self-start sm:self-center p-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              </div>

              {/* DUAL ROUTE: Option A (Direct WhatsApp) & Option B (Web Upload) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* OPTION B (HIGHLIGHTED): Instant 1-Click WhatsApp */}
                <div className="bg-emerald-950/20 border border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Fastest Option (15-Min Response)
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Send Photos via WhatsApp
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      Tap below to open WhatsApp with your vehicle spec already filled in. Snap photos directly in the chat for an immediate estimate from our workshop technician.
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/447412895092?text=${encodeURIComponent(
                      `Hi Shine Auto, I'd like a quote for my ${vehicleInfo?.year || ""} ${vehicleInfo?.make || ""} ${vehicleInfo?.model || ""} [Reg: ${regInput.toUpperCase()}]. Service: ${selectedServiceObj?.label}. Here are photos of the damage:`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-slate-950 font-black py-4 px-6 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20 min-h-[50px]"
                  >
                    <MessageCircle className="w-5 h-5 text-slate-950" />
                    <span>Send Photos on WhatsApp</span>
                  </a>
                </div>

                {/* OPTION A: Web Upload & Phone Estimate */}
                <form onSubmit={handleFinalSubmit} className="bg-surface-raised border border-surface-border rounded-2xl p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-amber block mb-1">
                      Web Upload
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">
                      Drag &amp; Drop or Select Photos
                    </h4>

                    {/* Drag and Drop Zone */}
                    <label className="border-2 border-dashed border-surface-borderHover hover:border-brand-amber rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer bg-surface/60 hover:bg-surface transition-colors mb-3">
                      <Camera className="w-6 h-6 text-brand-amber mb-1" />
                      <span className="text-xs font-semibold text-slate-200">Tap to upload photos from device</span>
                      <span className="text-[10px] text-slate-400">JPG, PNG, WEBP (Max 4 photos)</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>

                    {/* Photos Preview Thumbnails */}
                    {photos.length > 0 && (
                      <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
                        {photos.map((p, i) => (
                          <div key={i} className="relative w-14 h-14 rounded-lg overflow-hidden border border-surface-border shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={p.preview} alt="Damage preview" className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => handleRemovePhoto(i)}
                              className="absolute top-0.5 right-0.5 bg-black/80 rounded-full p-0.5 text-white"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Contact Details */}
                    <div className="space-y-3 pt-1">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. John Miller"
                          className="w-full bg-surface border border-surface-border rounded-xl px-3.5 py-2.5 text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-amber"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="e.g. 07412 895092"
                          className="w-full bg-surface border border-surface-border rounded-xl px-3.5 py-2.5 text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-amber"
                        />
                      </div>
                    </div>

                    {errorMessage && (
                      <p className="text-red-400 text-xs mt-2">{errorMessage}</p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-black py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg hover:brightness-110 min-h-[48px]"
                    >
                      {isSubmitting ? "Calculating estimate..." : "Send Estimate to My Phone"}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      🔒 We never spam. Transparent fixed price estimate sent directly to your phone.
                    </p>
                  </div>
                </form>

              </div>
            </div>
          )}

          {/* STEP 4: SUCCESS CONFIRMATION STATE */}
          {step === 4 && (
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 inline-block mb-2">
                  Estimate Request Received
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Thanks, {contactName || "Customer"}!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  We are calculating your fixed-price repair estimate for your <strong>{vehicleInfo?.year} {vehicleInfo?.make} [{regInput.toUpperCase()}]</strong>.
                </p>
              </div>

              {/* Prototype Alert */}
              <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded-xl text-xs text-amber-200 max-w-md mx-auto">
                <strong>Prototype Notice:</strong> Demo mode active. In production, this instantly alerts the Stanwell workshop manager.
              </div>

              {/* Timeline */}
              <div className="bg-surface-raised p-5 rounded-2xl border border-surface-border text-left max-w-md mx-auto text-xs space-y-2.5">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Clock className="w-4 h-4 text-brand-amber" />
                  <span>What happens next:</span>
                </div>
                <p className="text-slate-300">
                  1. Technician inspects damage photos and computes parts &amp; booth hours.
                </p>
                <p className="text-slate-300">
                  2. We text or call your mobile (<strong>{contactPhone}</strong>) with your fixed quotation in under 2 hours.
                </p>
                <p className="text-slate-300">
                  3. Drop your car off at 540-542 London Rd, Stanwell to begin your repair.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/447412895092?text=${encodeURIComponent(
                    `Hi Shine Auto, I just submitted an estimate for my ${vehicleInfo?.make || ""} [${regInput.toUpperCase()}]. My name is ${contactName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Technician on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setRegInput("");
                    setVehicleInfo(null);
                    setPhotos([]);
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-surface-border text-slate-300 hover:text-white text-sm font-semibold min-h-[48px]"
                >
                  Estimate Another Car
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
