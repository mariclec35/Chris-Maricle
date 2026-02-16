
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h1>
        <p className="text-lg text-slate-600">
          I'm always open to discussing new opportunities, security research, or technical collaborations.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        {/* Contact Info */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center border-b border-slate-100 pb-4">Connect With Me</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Email</p>
                <a 
                  href="mailto:mariclec35@gmail.com" 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                >
                  mariclec35@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/chrismaricle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                >
                  linkedin.com/in/chrismaricle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
