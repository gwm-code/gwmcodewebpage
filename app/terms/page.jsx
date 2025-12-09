'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
  const lastUpdated = new Date().toLocaleDateString('en-IE', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      {/* Header / Nav Area */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">G</span>
            </div>
            <span className="font-semibold text-slate-900">GWM-Code</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Title Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Scale size={16} />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-gray-500">Last Updated: {lastUpdated}</p>
        </div>

        {/* Terms Content */}
        <div className="space-y-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
          
          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service govern the relationship between you ("The Client") and <strong>GWM-Code</strong> (Trading name of Tapio Ala, registered in Wexford, Ireland). By engaging our services to build software, websites, or digital tools, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Intellectual Property (IP)
            </h2>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-700">
                  <strong>You Own What You Pay For:</strong> Unlike subscription software, once you have paid your final invoice, 100% of the Intellectual Property rights, source code, and assets for your custom project are transferred to you.
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              GWM-Code retains the right to reuse generic code libraries (e.g., standard login forms) in other projects, but your specific business logic, design, and data remain exclusively yours.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              Payment Terms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unless otherwise agreed in a specific proposal:
            </p>
            <ul className="space-y-2 text-gray-600 ml-11 list-disc">
              <li><strong>50% Deposit:</strong> Required to schedule and begin development.</li>
              <li><strong>50% Completion:</strong> Due upon final delivery and sign-off of the software.</li>
              <li>Software transfer/installation occurs only after the final payment is received.</li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
              Limitation of Liability
            </h2>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mb-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-700">
                  <strong>Important:</strong> While we test thoroughly, software can have bugs. GWM-Code is not liable for indirect damages, lost profits, or data loss resulting from the use of our software.
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our total liability for any claim arising out of our services is limited to the amount you actually paid for the project. We do not provide "mission-critical" software for life-support or high-risk financial trading systems.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
              Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of <strong>Ireland</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ireland.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} GWM-Code. Trading name of Tapio Ala.</p>
        </div>
      </main>
    </div>
  );
}