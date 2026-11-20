---
title: "Case Study: Google Ads for Psychologists with Offline Conversion Tracking and Natural-Language Campaign Management"
description: "How we tracked the Google click all the way to a paying patient, reached an average patient LTV of BRL 720 and BRL 30k in annual revenue, and why we are integrating the Google Ads API to manage campaigns in natural language."
image: "/images/blog-post/google-ads-api-psychologist-campaigns-case-study.jpg"
imageAlt: "Google Ads API case study for psychologist campaigns: BRL 720 average patient LTV and BRL 30k annual revenue tracked"
date: 2026-11-20
author: "Maurício Leite"
avatarUrl: "/images/perfil.jpg"
categories:
  - "Google Ads"
tags:
  - "Case Study"
  - "Google Ads API"
  - "Offline Conversions"
  - "Server-Side Tagging"
  - "n8n"
  - "Psychologists"
keywords:
  - "google ads api"
  - "offline conversion import"
  - "gclid server-side tracking"
  - "google ads for psychologists"
readTime: 7
draft: false
---

**Client:** Bruna Caleffi, clinical psychologist (CRP 11/17420), [psibrunacaleffi.com](https://psibrunacaleffi.com)  
**Campaign management & tracking:** Maurício Leite  
**Stack:** Google Ads, Google Tag Manager (web + server-side), Stape.io, n8n, Google Sheets  
**Compliance:** LGPD (Brazil's data protection law). No patient personal or health data is sent to Google.

---

## 1. Who we are

I'm Maurício Leite, a paid media manager in Brazil. I run Google Ads lead-generation campaigns for mental health professionals (psychologists and clinics), and the service covers:

* Planning and managing Google Ads search campaigns;
* Server-side tracking (GTM web + GTM server + Stape.io);
* Importing offline conversions (leads who actually became patients) back into Google Ads;
* Recurring performance reports for each client.

All client accounts are managed from a single **Google Ads Manager (MCC) account**. The Google Ads API integration described in this article is an **internal tool**. Only I use it, to operate the accounts of my own clients linked to that MCC. It is not sold or made available to third parties.

---

## 2. The case: patient acquisition for psychologist Bruna Caleffi

For a psychologist, the conversion that matters does not happen on the website. The lead clicks the ad, opens WhatsApp, talks, books a session and only then becomes a patient. If the campaign optimizes for "clicked the WhatsApp button", the bidding algorithm learns to bring people who click, not people who start therapy.

### The problem

Google Ads only saw the WhatsApp button click. There was no way to know which keywords, ads or time slots were bringing real patients and which were bringing only curious visitors.

### The solution: tracking the click all the way to the paying patient

We built a flow that stores Google's click identifier and sends it back to Google Ads once the lead becomes a patient:

<div class="not-prose my-8">
<div class="grid grid-cols-1 gap-4 md:grid-cols-4">
<div class="article-step-card flex flex-col justify-between rounded-2xl border border-white/10 bg-[#161616] p-5 transition-all hover:border-[#00A39E]/50">
<div>
<div class="mb-3 flex items-center justify-between">
<span class="rounded bg-[#00A39E]/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#00A39E]">Step 01</span>
<span class="step-card-meta text-[11px] text-[#888888]">Click</span>
</div>
<h4 class="step-card-title mb-1.5 font-heading text-base font-semibold text-white">Ad click</h4>
<p class="step-card-desc font-body text-xs leading-relaxed text-[#A0A0A0]">The visitor lands on the site with gclid, wbraid or gbraid in the URL. GTM Web captures the identifiers.</p>
</div>
<div class="step-card-footer mt-4 flex items-center gap-2 border-t border-white/5 pt-3 font-body text-xs font-medium text-white/80">
<span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
Google Ads • GTM Web
</div>
</div>
<div class="article-step-card flex flex-col justify-between rounded-2xl border border-white/10 bg-[#161616] p-5 transition-all hover:border-[#00A39E]/50">
<div>
<div class="mb-3 flex items-center justify-between">
<span class="rounded bg-[#00A39E]/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#00A39E]">Step 02</span>
<span class="step-card-meta text-[11px] text-[#888888]">Server</span>
</div>
<h4 class="step-card-title mb-1.5 font-heading text-base font-semibold text-white">Server-side forwarding</h4>
<p class="step-card-desc font-body text-xs leading-relaxed text-[#A0A0A0]">The event goes server to server, so ad blockers and cookie restrictions on the browser drop far less data.</p>
</div>
<div class="step-card-footer mt-4 flex items-center gap-2 border-t border-white/5 pt-3 font-body text-xs font-medium text-white/80">
<span class="h-2 w-2 rounded-full bg-[#00A39E]"></span>
GTM Server • Stape.io
</div>
</div>
<div class="article-step-card article-step-card-highlight flex flex-col justify-between rounded-2xl border border-[#00A39E]/50 bg-gradient-to-b from-[#132624] to-[#161616] p-5 shadow-[0_0_25px_rgba(0,163,158,0.12)]">
<div>
<div class="mb-3 flex items-center justify-between">
<span class="rounded bg-[#00A39E] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-black">Core</span>
<span class="step-card-meta-highlight text-[11px] font-semibold text-[#00A39E]">n8n</span>
</div>
<h4 class="step-card-title mb-1.5 font-heading text-base font-semibold text-white">Conversion log</h4>
<p class="step-card-desc font-body text-xs leading-relaxed text-[#C6C6C6]">An n8n workflow stores GCLID, WBRAID, GBRAID, the conversion timestamp and the conversion name.</p>
</div>
<div class="step-card-footer mt-4 flex items-center gap-1.5 border-t border-white/10 pt-3 font-body text-xs font-medium text-[#00A39E]">
<span class="h-2 w-2 rounded-full bg-[#00A39E]"></span>
n8n Webhook • Sheets
</div>
</div>
<div class="article-step-card flex flex-col justify-between rounded-2xl border border-white/10 bg-[#161616] p-5 transition-all hover:border-[#00A39E]/50">
<div>
<div class="mb-3 flex items-center justify-between">
<span class="rounded bg-[#00A39E]/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#00A39E]">Step 04</span>
<span class="step-card-meta text-[11px] text-[#888888]">Import</span>
</div>
<h4 class="step-card-title mb-1.5 font-heading text-base font-semibold text-white">Offline conversion</h4>
<p class="step-card-desc font-body text-xs leading-relaxed text-[#A0A0A0]">When the lead becomes a patient, the conversion and its value are imported back into Google Ads.</p>
</div>
<div class="step-card-footer mt-4 flex items-center gap-2 border-t border-white/5 pt-3 font-body text-xs font-medium text-white/80">
<span class="h-2 w-2 rounded-full bg-emerald-400"></span>
Google Ads • Offline import
</div>
</div>
</div>
</div>

* **Why server-side:** ad blockers, cookie restrictions and iOS cut part of the data when everything depends on the browser. With GTM Server hosted on Stape, the click ID leaves from the server and reaches n8n with much less loss.
* **Why WBRAID and GBRAID:** on clicks from iOS devices, Google does not always send a GCLID. Storing all three identifiers keeps those conversions from being lost.

### What the data showed

Once offline conversions were imported, Google Ads started receiving the real value of each patient:

| Metric | Result |
| :--- | :--- |
| **Average patient LTV** | BRL 720 |
| **Annual revenue attributed to the campaign** | BRL 30,000 |

With this data, the conversation with the client changes. It stops being "how many clicks did we get" and becomes "how much revenue did the campaign bring". The bidding algorithm also starts optimizing for real patients instead of button clicks.

---

## 3. The bottleneck: the Google Ads interface can't keep up with the operation

The tracking works. The bottleneck now is the time spent inside the Google Ads interface. Every account needs, every week:

* Search term review and negative keywords;
* Budget and bid adjustments based on patient volume;
* A check that offline conversions were imported correctly;
* A performance report for the client.

Multiplied across several psychologists, that adds up to hours of repetitive clicking in the interface. With AI, it makes little sense to keep doing by hand what can be asked in one sentence.

---

## 4. How we will use the Google Ads API

The goal is to operate the accounts in **natural language**. I write the request, an AI assistant translates it into Google Ads API calls, and **no change is applied without my explicit approval**.

### 4.1. Campaign reporting (read)

> *"Show me Bruna's cost per patient for the last 30 days, by keyword."*

* **API resources:** `GoogleAdsService.SearchStream` / `Search` with GAQL queries on `campaign`, `ad_group`, `keyword_view` and `search_term_view`, with metrics such as `cost_micros`, `clicks`, `conversions` and `conversions_value`.
* **Result:** a report ready in seconds instead of exporting CSVs and building spreadsheets. The same data feeds the monthly report sent to the client.

### 4.2. Offline conversion upload (write)

Today, conversions go through a spreadsheet. With the API, the n8n workflow will send each conversion directly to Google Ads as soon as the lead is marked as a patient.

* **API resources:** `ConversionUploadService.UploadClickConversions` with `gclid`, `wbraid` or `gbraid`, `conversion_action`, `conversion_date_time` and `conversion_value`.
* **Data sent:** only the click identifier, date and time, conversion action and value. **No personal or clinical patient data** (name, phone, email, diagnosis) is ever sent to Google.

### 4.3. Natural-language campaign management (write, with approval)

> *"Add 'free' and 'public health' as negative keywords in all of Bruna's campaigns."*  
> *"Increase the daily budget of the online therapy campaign by 20%."*  
> *"Pause ads with CTR below 2% in the last 14 days."*

* **API resources:** `CampaignService`, `CampaignBudgetService`, `AdGroupService`, `AdGroupAdService`, `AdGroupCriterionService` and `CampaignCriterionService`.
* **Safety rule:** the AI drafts the change and shows a summary of what will be modified. The write call is only sent after I approve it.

---

## 5. Interface mockups

The tool is in development. These mockups show how it will be used day to day.

<div class="not-prose my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
<div class="article-step-card flex flex-col rounded-2xl border border-white/10 bg-[#161616] p-5">
<div class="mb-3 flex items-center justify-between">
<span class="rounded bg-[#00A39E]/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#00A39E]">Screen 1</span>
<span class="step-card-meta text-[11px] text-[#888888]">Read</span>
</div>
<h4 class="step-card-title mb-3 font-heading text-base font-semibold text-white">Report request</h4>
<p class="step-card-desc mb-3 rounded-lg border border-white/10 p-3 font-mono text-xs leading-relaxed text-[#A0A0A0]">You: Bruna's report, last 30 days, by campaign</p>
<p class="step-card-desc mb-2 font-body text-xs leading-relaxed text-[#A0A0A0]"><strong class="text-white">Account:</strong> Bruna Caleffi · Oct 21 – Nov 19</p>
<p class="step-card-desc font-mono text-xs leading-relaxed text-[#A0A0A0]">Campaign · Cost · Leads · Patients · Value<br>Online Therapy · — · — · — · —<br>Anxiety · — · — · — · —</p>
<div class="step-card-footer mt-4 flex items-center gap-2 border-t border-white/5 pt-3 font-body text-xs font-medium text-white/80">
<span class="h-2 w-2 rounded-full bg-[#00A39E]"></span>
Export PDF for client
</div>
</div>
<div class="article-step-card article-step-card-highlight flex flex-col rounded-2xl border border-[#00A39E]/50 bg-gradient-to-b from-[#132624] to-[#161616] p-5 shadow-[0_0_25px_rgba(0,163,158,0.12)]">
<div class="mb-3 flex items-center justify-between">
<span class="rounded bg-[#00A39E] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-black">Screen 2</span>
<span class="step-card-meta-highlight text-[11px] font-semibold text-[#00A39E]">Write</span>
</div>
<h4 class="step-card-title mb-3 font-heading text-base font-semibold text-white">Change with approval</h4>
<p class="step-card-desc mb-3 rounded-lg border border-white/10 p-3 font-mono text-xs leading-relaxed text-[#C6C6C6]">You: Add "free" and "public health" as negatives in Bruna's campaigns</p>
<p class="step-card-desc font-mono text-xs leading-relaxed text-[#C6C6C6]">+ [free] → Online Therapy<br>+ [free] → Anxiety<br>+ [public health] → Online Therapy<br>+ [public health] → Anxiety</p>
<div class="step-card-footer mt-4 flex items-center gap-1.5 border-t border-white/10 pt-3 font-body text-xs font-medium text-[#00A39E]">
<span class="h-2 w-2 rounded-full bg-[#00A39E]"></span>
Approve · Cancel
</div>
</div>
<div class="article-step-card flex flex-col rounded-2xl border border-white/10 bg-[#161616] p-5">
<div class="mb-3 flex items-center justify-between">
<span class="rounded bg-[#00A39E]/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#00A39E]">Screen 3</span>
<span class="step-card-meta text-[11px] text-[#888888]">Monitor</span>
</div>
<h4 class="step-card-title mb-3 font-heading text-base font-semibold text-white">Offline conversions, last 24h</h4>
<p class="step-card-desc font-mono text-xs leading-relaxed text-[#A0A0A0]">14:02 · gclid …a91f · Patient · Sent<br>10:47 · wbraid …c3e · Patient · Sent<br>09:15 · gclid …77b0 · Patient · Error: click older than 90 days</p>
<div class="step-card-footer mt-4 flex items-center gap-2 border-t border-white/5 pt-3 font-body text-xs font-medium text-white/80">
<span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
UploadClickConversions status
</div>
</div>
</div>

---

## 6. Privacy and ethics

Working with psychology requires extra care:

* **No health data sent to Google:** the flow only sends click identifiers, timestamp, conversion name and value. Nothing about the patient or the treatment.
* **No patient lists:** we do not use Customer Match or remarketing built from patient data, in line with Google's policies for healthcare ads.
* **LGPD:** data stays in a controlled environment, and API access is restricted to my Manager account.
* **Professional ethics:** ads follow the Brazilian Federal Council of Psychology (CFP) code of ethics, with no promises of results and no sensationalism.

---

## 7. Summary

1. We track the Google click (GCLID, WBRAID, GBRAID) through server-side GTM on Stape into n8n.
2. We send each new patient back to Google Ads as an offline conversion.
3. This showed an **average patient LTV of BRL 720** and **BRL 30,000 per year** in revenue attributed to psychologist Bruna Caleffi's campaign.
4. The next step is the **Google Ads API**: reports in seconds, conversions sent straight from n8n and campaign management in natural language, always with human approval before any change.

---

Questions about this tool or about Google Ads for health professionals? Contact me at [suporte@mauricioleite.com.br](mailto:suporte@mauricioleite.com.br) or [book a call](/agenda).

---

> **Campaign management and tracking by Maurício Leite**  
> *Paid media, server-side tracking and AI automation.*
