'use client';

import Image from 'next/image';
import { ExternalLink, Download } from 'lucide-react';
import { useState } from 'react';

export default function Certificates() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const response = await fetch('/EVA_Pharma_Certificate.pdf'); // make sure your PDF is in /public
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'EVA_Pharma_Certificate.pdf';
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Certificates
        </h2>

        <div className="max-w-3xl mx-auto bg-slate-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            {/* ✅ Updated image instead of PDF placeholder */}
            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/EvaPharma.jpeg"
                alt="EVA Pharma Logo"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900">
                EVA Pharma Internship Certificate
              </h3>
              <p className="text-slate-600 text-sm">July 2025 – August 2025</p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://drive.google.com/file/d/18NHz2otldthzdLZeBOxhnQZSyNni6cTY/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>

                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg disabled:opacity-70"
                  disabled={downloading}
                >
                  <Download
                    className="w-4 h-4 animate-spin"
                    style={{ display: downloading ? 'inline' : 'none' }}
                  />
                  <Download
                    className="w-4 h-4"
                    style={{ display: downloading ? 'none' : 'inline' }}
                  />
                  {downloading ? 'Downloading...' : 'Download PDF'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
