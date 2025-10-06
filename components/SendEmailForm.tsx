"use client";

import { useState } from "react";

interface SendEmailFormProps {
  templateSlug: string;
}

export default function SendEmailForm({ templateSlug }: SendEmailFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    toEmail: "",
    fromEmail: "",
    fromPassword: "",
    smtpHost: "smtp.gmail.com",
    smtpPort: "587",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          templateSlug,
          ...formData,
          smtpPort: parseInt(formData.smtpPort),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ Email sent successfully!");
        setFormData({ ...formData, toEmail: "", fromPassword: "" }); // Clear sensitive data
      } else {
        setMessage(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      setMessage("❌ Failed to send email. Please check your settings.");
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
        📧 Send Test Email
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
                  To Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.toEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, toEmail: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  From Email (Your Gmail) *
                </label>
                <input
                  type="email"
                  required
                  value={formData.fromEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, fromEmail: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="yourname@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  App Password *
                </label>
                <input
                  type="password"
                  required
                  value={formData.fromPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, fromPassword: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Gmail App Password"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Use Gmail App Password, not your regular password
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SMTP Host
                  </label>
                  <input
                    type="text"
                    value={formData.smtpHost}
                    onChange={(e) =>
                      setFormData({ ...formData, smtpHost: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Port
                  </label>
                  <input
                    type="number"
                    value={formData.smtpPort}
                    onChange={(e) =>
                      setFormData({ ...formData, smtpPort: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
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
              <strong>Gmail Setup:</strong>
              <br />
              1. Enable 2-factor authentication
              <br />
              2. Generate App Password: Google Account → Security → App
              passwords
              <br />
              3. Use the 16-character app password (not your regular password)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
