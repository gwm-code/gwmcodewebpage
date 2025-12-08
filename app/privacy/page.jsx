'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Mail, Lock, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <Shield size={16} />
            <span>GDPR Compliant</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last Updated: {lastUpdated}</p>
        </div>

        {/* Policy Content */}
        <div className="space-y-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
          
          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>GWM-Code</strong> is a trading name of <strong>Tapio Ala</strong>. We are a software development agency based in Wexford, Ireland. We respect your privacy and are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              What Data We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              When you use the contact form on our website, we collect the following personal information:
            </p>
            <ul className="space-y-2 text-gray-600 ml-11 list-disc">
              <li>Your Name</li>
              <li>Email Address</li>
              <li>Business Name (if provided)</li>
              <li>Project details and requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              Why We Collect It
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We collect this data solely for the purpose of communicating with you regarding your software project enquiry. 
              <br /><br />
              We do <strong>not</strong> sell, rent, or trade your personal information to third parties. We do not use your email for marketing newsletters unless you explicitly ask us to.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
              How We Store & Process Data
            </h2>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-4">
              <div className="flex items-start gap-3">
                <Lock className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-600">
                  <strong>Security:</strong> Your data is processed securely using <strong>Resend</strong> (our transactional email provider) and is stored in our secure business email accounts.
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information only for as long as is necessary to provide you with our services or as required by law (e.g., for tax records if you become a client).
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
              Your Rights (GDPR)
            </h2>
            <p className="text-gray-600 mb-4">
              Under the GDPR, you have the right to:
            </p>
            <ul className="space-y-2 text-gray-600 ml-11 list-disc">
              <li>Request a copy of the data we hold about you.</li>
              <li>Request that we correct any incorrect data.</li>
              <li>Request that we delete your data ("Right to be Erasure").</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600">
                To exercise any of these rights, please contact us at:<br />
                <a href="mailto:gwmcode@gmail.com" className="text-blue-600 font-medium hover:underline flex items-center gap-2 mt-2">
                  <Mail size={16} />
                  gwmcode@gmail.com
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Simple Cookie Notice */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>This site uses essential cookies necessary for the operation of the contact form.</p>
          <p className="mt-2">© {new Date().getFullYear()} GWM-Code. Trading name of Tapio Ala.</p>
        </div>
      </main>
    </div>
  );
}