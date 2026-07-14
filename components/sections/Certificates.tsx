"use client";

import Image from "next/image";
import { ExternalLink, Download } from "lucide-react";
import { useState } from "react";
import { certificates } from "@/lib/data";

export default function Certificates() {
  const [downloadingId, setDownloadingId] = useState<number | null>(null);

  const handleDownload = async (
    id: number,
    downloadUrl: string,
    downloadFilename: string
  ) => {
    try {
      setDownloadingId(id);
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = downloadFilename;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Certificates
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {certificates.map((certificate) => {
            const isDownloading = downloadingId === certificate.id;

            return (
              <div
                key={certificate.id}
                className="bg-slate-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                    <Image
                      src={certificate.logo}
                      alt={`${certificate.title} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">
                      {certificate.title}
                    </h3>
                    {"period" in certificate && certificate.period && (
                      <p className="text-slate-600 text-sm">
                        {certificate.period}
                      </p>
                    )}

                    <div className="mt-4 flex gap-3">
                      <a
                        href={certificate.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-700 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </a>

                      <button
                        onClick={() =>
                          handleDownload(
                            certificate.id,
                            certificate.downloadUrl,
                            certificate.downloadFilename
                          )
                        }
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg disabled:opacity-70 cursor-pointer"
                        disabled={isDownloading}
                      >
                        <Download
                          className="w-4 h-4 animate-spin"
                          style={{ display: isDownloading ? "inline" : "none" }}
                        />
                        <Download
                          className="w-4 h-4"
                          style={{ display: isDownloading ? "none" : "inline" }}
                        />
                        {isDownloading ? "Downloading..." : "Download"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
