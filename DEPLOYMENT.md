# Ornitech Website — Deployment Guide

This guide explains how to deploy the Ornitech website to **www.ornitech.in** on Vercel.

---

## Prerequisites

Before deploying, make sure you have:

1. **A Vercel account** — Sign up at https://vercel.com (the domain is already linked to your Vercel project).
2. **Gmail credentials** — A Gmail account with an App Password for sending contact form emails.
3. **MongoDB connection string** — A MongoDB Atlas cluster for storing form submissions.

---

## Step 1: Set Up Environment Variables

The website requires these environment variables to function correctly:

| Variable | Description | Where to get it |
|----------|-------------|-----------------|
| `GMAIL_USER` | Gmail address used to send emails | Your Gmail account |
| `GMAIL_PASS` | Gmail App Password (16-character) | https://myaccount.google.com/apppasswords |
| `MONGODB_URI` | MongoDB Atlas connection string | https://www.mongodb.com/cloud/atlas |

### How to Create a Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification**
3. Go to https://myaccount.google.com/apppasswords
4. Create a new app password (name it "Ornitech Website")
5. Copy the 16-character app password

### How to Create a MongoDB Atlas Cluster

1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create a **free M0 cluster**
3. Create a database user with a password
4. Add your IP to the network access allowlist (or allow all `0.0.0.0/0` for simplicity)
5. Click **Connect** → **Drivers** → copy the connection string
6. Replace `<password>` with your database user's password

---

## Step 2: Add Environment Variables to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables **for all environments** (Production, Preview, Development):
   - `GMAIL_USER`
   - `GMAIL_PASS`
   - `MONGODB_URI`
4. Click **Save**

### Option B: Vercel CLI

```
bash
vercel env add GMAIL_USER production
vercel env add GMAIL_PASS production
vercel env add MONGODB_URI production
```

---

## Step 3: Deploy to Production

### Option A: Git Integration (Recommended)

1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Set the **Root Directory** to the repo root
4. Vercel will auto-deploy on every push to `main`

### Option B: Vercel CLI

```
bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy to production
vercel --prod
```

---

## Step 4: Verify the Domain

The domain **www.ornitech.in** should already be configured in your Vercel project. To verify:

1. Go to **Project Settings** → **Domains**
2. Confirm `www.ornitech.in` is listed as **Active**
3. Check that the DNS records in your domain registrar point to Vercel:
   - `www` → `cname.vercel-dns.com` (CNAME record)
   - `ornitech.in` → A record pointing to `76.76.21.21`

---

## Step 5: Post-Deployment Verification

After deployment, verify the following:

- [ ] **Website loads** — Visit https://www.ornitech.in and confirm it renders correctly
- [ ] **Contact form works** — Submit a test message and confirm:
  - You receive the admin notification email
  - The visitor receives the thank-you email
  - The submission is saved in MongoDB
- [ ] **Collaborate form works** — Test the collaborate form similarly
- [ ] **Analytics works** — Check Vercel Analytics and Speed Insights in the dashboard

---

## Troubleshooting

### Contact form fails with "Something went wrong"

This usually means an environment variable is missing or incorrect:

1. Verify `GMAIL_USER`, `GMAIL_PASS`, and `MONGODB_URI` are set in Vercel
2. Check the Vercel function logs for the specific error
3. Confirm the Gmail App Password is correct (re-generate if needed)
4. Confirm the MongoDB connection string is valid and the IP is allowlisted

### Domain not resolving

1. Check DNS records at your domain registrar
2. Ensure the CNAME record for `www` points to `cname.vercel-dns.com`
3. Wait up to 24 hours for DNS propagation

---

## Updating the Website

### Via Git (Recommended)

```
bash
git add .
git commit -m "Update website"
git push origin main
```

Vercel will automatically build and deploy the changes.

### Via Vercel CLI

```
bash
vercel --prod
```

---

## Environment Variables Reference

| Variable | Required | Used In |
|----------|----------|---------|
| `GMAIL_USER` | ✅ Yes | `lib/email.ts` (sends emails via SMTP) |
| `GMAIL_PASS` | ✅ Yes | `lib/email.ts` (SMTP authentication) |
| `MONGODB_URI` | ✅ Yes | `lib/storage.ts` (stores form submissions) |
