# Privacy Policy for Slide Buddy

**Last Updated:** October 2, 2025

## Overview

Slide Buddy ("we," "our," or "the add-on") is a free Google Slides add-on that provides AI-powered translation and text management features. This Privacy Policy explains how we handle your data.

## Data Collection and Storage

### What We Collect
- **Session Data Only:** Conversation history and cost tracking data stored temporarily in Google's CacheService
- **No Permanent Storage:** We do not store any user data in permanent databases
- **No Personal Information:** We do not collect, store, or transmit personally identifiable information beyond what's required for Google OAuth

### Session Data Details
- **Conversation History:** Last 10 messages stored in cache for context-aware responses
- **Cost Tracking:** Token usage and API costs tracked per session
- **Automatic Deletion:** All session data expires after 1 hour
- **User Isolation:** Each user's session data is completely isolated using Google's session keys

### What We Do NOT Collect
- ❌ Presentation content (not stored permanently)
- ❌ Personal information
- ❌ Email addresses (only used for session isolation, not stored)
- ❌ Payment information
- ❌ Usage analytics or tracking data

## How We Use Your Data

### API Key Usage
- **User-Provided:** You provide your own Google Gemini API key
- **Direct Communication:** API calls go directly from your browser to Google's Gemini API
- **No Intermediary Storage:** We do not intercept, store, or log your API requests
- **Your Responsibility:** You manage your own API key and associated costs

### Slide Access
- **Read Access:** We access your presentation content only to perform translations and find/replace operations
- **Write Access:** We modify slides only when you explicitly request translation or text replacement
- **No Cloud Storage:** Slide content is not uploaded to our servers (we don't have servers)
- **Direct Modification:** All changes happen directly in your Google Slides document

### Google OAuth Scopes
We request the following permissions:
- `presentations`: To read and modify slides for translation/replacement
- `drive.readonly`: To access presentation metadata
- `script.external_request`: To make API calls to Google Gemini
- `script.container.ui`: To display the sidebar interface
- `userinfo.email`: To isolate session data between users (email not stored)

## Data Sharing

### Third Parties
- **Google Gemini API:** Your prompts are sent to Google's Gemini API for natural language processing
- **Google Translate API:** Text is sent to Google Translate API for translation
- **No Other Third Parties:** We do not share data with any other third parties

### Google's Privacy Policies
Your data processed by Google services is subject to:
- [Google Gemini API Terms](https://ai.google.dev/terms)
- [Google Cloud Privacy Policy](https://cloud.google.com/terms/cloud-privacy-notice)

## Data Security

### Security Measures
- **Encrypted Storage:** Session cache is encrypted by Google's infrastructure
- **Secure API Keys:** API keys stored in Google Apps Script Script Properties (encrypted)
- **No Server Infrastructure:** We don't operate servers that could be compromised
- **Google's Security:** All data handling relies on Google's enterprise-grade security

### User Responsibilities
- **API Key Security:** Keep your Gemini API key confidential
- **Access Control:** Only install add-on from trusted sources
- **Review Permissions:** Review OAuth consent screen before granting access

## User Rights

### Your Control
- **Data Access:** All session data auto-deletes after 1 hour
- **Data Deletion:** Simply stop using the add-on; all data expires automatically
- **Revoke Access:** Uninstall the add-on to revoke all permissions
- **API Key Control:** You can change or revoke your API key at any time

### European Users (GDPR)
- **Legal Basis:** Legitimate interest (providing translation services you requested)
- **Data Minimization:** We only process data necessary for functionality
- **Right to Erasure:** Data automatically deleted after 1 hour
- **No Profiling:** We do not use data for profiling or automated decision-making

## Children's Privacy

Slide Buddy is not directed at children under 13. We do not knowingly collect data from children. If you believe a child has used our service, please contact us.

## Changes to This Policy

We may update this Privacy Policy periodically. Changes will be posted with a new "Last Updated" date. Continued use after changes constitutes acceptance.

## Third-Party Services

### Google Gemini API
- [Privacy Policy](https://policies.google.com/privacy)
- [Terms of Service](https://ai.google.dev/terms)

### Google Translate API
- [Privacy Policy](https://policies.google.com/privacy)
- [Terms of Service](https://cloud.google.com/terms)

## Contact Information

If you have questions about this Privacy Policy or data handling:

- **Email:** [Your Support Email]
- **Support:** [Your Support URL]
- **GitHub:** [Your GitHub Repository URL]

## Compliance

This add-on complies with:
- Google Workspace Marketplace Developer Agreement
- Google API Services User Data Policy
- GDPR (General Data Protection Regulation)
- CCPA (California Consumer Privacy Act)

## Data Processing Summary

| Data Type | Purpose | Storage Duration | Third Party |
|-----------|---------|------------------|-------------|
| Conversation History | Context-aware responses | 1 hour (cache) | None |
| Cost Tracking | Show API usage costs | 1 hour (cache) | None |
| Presentation Content | Translation/replacement | Not stored | Google Gemini/Translate |
| API Prompts | Natural language processing | Not stored by us | Google Gemini |
| Session Identifier | User isolation | 1 hour (cache) | None |

## Your Consent

By using Slide Buddy, you consent to this Privacy Policy and our data handling practices as described above.

---

**Slide Buddy is 100% FREE** - We do not monetize user data. You only pay Google directly for API usage (typically $0.01-$0.03 per presentation).
