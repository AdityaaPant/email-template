"use client";

import { useState } from "react";

interface SimpleEmailFormProps {
  templateSlug: string;
}

export default function SimpleEmailForm({
  templateSlug,
}: SimpleEmailFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [toEmail, setToEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          templateSlug,
          toEmail,
          method: "resend",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.html) {
          // If no email service configured, show HTML preview option
          setMessage(`📧 ${result.message}`);
          // Create download link for HTML
          const blob = new Blob([result.html], { type: "text/html" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `${templateSlug}-email-template.html`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } else {
          setMessage("✅ Email sent successfully!");
          setToEmail(""); // Clear email field
        }
      } else {
        setMessage(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      setMessage("❌ Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
      >
        📧 Send to Email
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Send Test Email</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  value={toEmail}
                  onChange={(e) => setToEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="your@email.com"
                />
              </div>

              {message && (
                <div className="p-3 rounded-md text-sm bg-gray-50 border">
                  {message}
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Email"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>

            <div className="mt-4 p-3 bg-blue-50 rounded-md text-xs text-blue-700">
              <strong>Quick Setup:</strong>
              <br />• Get free API key from{" "}
              <a
                href="https://resend.com"
                target="_blank"
                className="underline"
              >
                resend.com
              </a>
              <br />• Add <code>RESEND_API_KEY=your_key</code> to{" "}
              <code>.env.local</code>
              <br />• Or just preview the HTML output!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
