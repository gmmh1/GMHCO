import { ArrowRight, FileSearch, LockKeyhole, ShieldCheck } from "lucide-react";

const PRINCIPLES = [
  {
    icon: LockKeyhole,
    title: "Local-first direction",
    description: "The proposed workflow is designed to keep source code on the customer's systems.",
  },
  {
    icon: FileSearch,
    title: "Evidence before conclusions",
    description: "Planned findings should show the observed evidence, uncertainty, and scan limitations.",
  },
  {
    icon: ShieldCheck,
    title: "Human-reviewed planning",
    description: "Migration decisions require authorised scope and qualified human review.",
  },
];

export default function PqcReadiness() {
  return (
    <section id="pqc-readiness" className="section-py relative overflow-hidden bg-navy-deep">
      <div className="page-wrap relative">
        <div
          className="mx-auto max-w-3xl rounded-3xl p-8 sm:p-12"
          style={{
            background: "linear-gradient(135deg,rgba(30,41,59,0.95),rgba(15,23,42,0.98))",
            border: "1px solid rgba(0,229,255,0.2)",
          }}
        >
          <div className="flex flex-col items-center text-center">
            <span className="section-tag">Cybersecurity product · In development</span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold font-orbitron text-slate-100 leading-tight">
              Post-quantum cryptography
              <span className="block mt-2 text-gradient-lime">discovery &amp; migration readiness</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base text-slate-300 leading-relaxed">
              GMHCO is exploring a local-first approach to help teams understand where cryptographic
              signals appear in an authorised software scope and plan expert-reviewed migration work.
              This is a product concept in development—not a generally available scanner, assessment,
              or cybersecurity assurance service.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PRINCIPLES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.06]">
                <Icon size={20} className="text-cyan mb-4" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              This website does not scan or accept source code. Please do not send source code,
              secrets, private keys, or customer data through the contact form.
            </p>
            <a href="#contact" className="btn-outline mt-6 inline-flex">
              Join a discovery conversation <ArrowRight size={16} />
            </a>
            <p className="mt-3 text-xs text-slate-500">
              A conversation is for research only and does not provide product access or a security assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
