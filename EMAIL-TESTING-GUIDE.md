# 📧 Email Testing Setup Guide

## 🚀 Quick Setup (Recommended - Resend)

1. **Get a free Resend account:**
   - Visit [resend.com](https://resend.com)
   - Sign up with your email
   - Verify your email address

2. **Get your API key:**
   - Go to API Keys section
   - Click "Create API Key"
   - Copy the key (starts with `re_`)

3. **Add to your project:**
   - Create `.env.local` file in your project root
   - Add: `RESEND_API_KEY=re_your_api_key_here`
   - Optionally add: `FROM_EMAIL=your-verified-email@domain.com`

4. **Test it:**
   - Visit http://localhost:3001
   - Click any email template
   - Click "📧 Send to Email" button
   - Enter your email and send!

## 🛠 Alternative Setup (Gmail SMTP)

If you prefer using Gmail:

1. **Enable 2-factor authentication** on your Gmail account

2. **Generate App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification
   - App passwords → Generate new password
   - Copy the 16-character password

3. **Use the complex form** (available in SendEmailForm.tsx)
   - From Email: your-gmail@gmail.com
   - App Password: the 16-character password
   - SMTP Host: smtp.gmail.com
   - Port: 587

## 🎯 What You Can Test

✅ **All 12 email templates with real email delivery**
✅ **Preview in browser first**
✅ **Download HTML files**
✅ **Send to any email address**
✅ **See how emails look in different email clients**

## 🔧 Current Features

- **Server-side rendering** - no client-side JavaScript for email generation
- **Multiple providers** - Resend (easy) or SMTP (advanced)
- **Template preview** - see before you send
- **Download option** - get HTML files for manual testing
- **Shared components** - all templates use your Header/Footer components

## 🎨 Testing Different Email Clients

Send test emails to:

- Gmail (web/mobile)
- Outlook (web/desktop)
- Apple Mail
- Yahoo Mail
- Your phone's email app

This helps ensure your templates look good everywhere!

## 🔗 Quick Links

- **Homepage:** http://localhost:3001
- **Example Template:** http://localhost:3001/email/early-access
- **Resend Dashboard:** https://resend.com/dashboard
- **Email Testing Tools:** https://www.emailonacid.com (advanced testing)
