# DigiSurf Australia — Social Media Automation Setup

Automate posting to Facebook, Instagram, and LinkedIn every time a new blog post goes live.
**Total setup time: ~30 minutes. Free on Make.com's free plan.**

---

## HOW IT WORKS

1. New blog post is published to the site (either manually or via the auto-blog GitHub Action)
2. Make.com detects the new post from the RSS feed: `https://www.digisurfaustralia.com.au/rss.xml`
3. Make.com auto-formats a caption + link
4. Posts go live on Facebook Page, Instagram Business, and LinkedIn Company Page within minutes

---

## STEP 1 — PREREQUISITES (do these first)

### Facebook Page
- Must have a Facebook **Page** (not personal profile) for digisurfaustralia
- Must be **Admin** of the page
- ✅ Already have: facebook.com/digisurfaustralia

### Instagram Business Account
- Must be an Instagram **Business** or **Creator** account
- Must be **connected to your Facebook Page** (Settings → Linked Accounts in Instagram)
- If not yet switched: Instagram → Profile → Edit Profile → Switch to Professional → Business

### LinkedIn Company Page
- Must exist and you must be **Page Admin**
- Create at: https://www.linkedin.com/company/setup/new/ (see DIRECTORY_SUBMISSIONS.md #11)

---

## STEP 2 — SET UP MAKE.COM

1. Go to https://make.com and create a free account
2. From the dashboard, click **Create a new scenario**

---

## STEP 3 — BUILD THE SCENARIO

### Module 1: RSS Feed Trigger

1. Click the **+** to add a module → search **RSS** → select **RSS Feed**
2. **URL:** `https://www.digisurfaustralia.com.au/rss.xml`
3. **Maximum number of returned items:** 1
4. Click **OK**
5. Set schedule: Click the clock icon → **Every 1 hour** (Make checks the RSS every hour)

---

### Module 2: Post to Facebook Page

1. Click **+** after RSS → search **Facebook Pages** → select **Create a Post**
2. Connect your Facebook account when prompted (must be Page Admin)
3. **Page:** Select "DigiSurf Australia"
4. **Message:** Click the field and use the dynamic variables:

```
🤖 New Article: {{title}}

{{description}}

Read the full guide: {{url}}

#AIAutomation #SmallBusinessAustralia #ArtificialIntelligence #DigiSurf
```

5. Click **OK**

---

### Module 3: Post to Instagram Business

1. Click **+** → search **Instagram for Business** → select **Create a Photo Post**
   - ⚠️ Instagram requires an image. We'll use the OG image.
2. **Account:** Connect via Facebook (uses the Instagram connected to your Facebook Page)
3. **Image URL:** `https://www.digisurfaustralia.com.au/og-image.png`
4. **Caption:** Click the field and use:

```
{{title}} 🤖

{{description}}

Link in bio → digisurfaustralia.com.au

#AIAutomation #AIReceptionist #SmallBusiness #Australia #BusinessAutomation #AIChatbot #DigiSurf
```

5. Click **OK**

---

### Module 4: Post to LinkedIn Company Page

1. Click **+** → search **LinkedIn** → select **Create a Share**
2. Connect your LinkedIn account when prompted
3. **Organization:** Select "DigiSurf Australia" (your company page)
4. **Commentary:** Click the field and use:

```
New post: {{title}}

{{description}}

{{url}}

#AIAutomation #SmallBusiness #Australia #ArtificialIntelligence
```

5. **Content → URL:** `{{url}}`
6. Click **OK**

---

## STEP 4 — TEST THE SCENARIO

1. Click **Run once** in Make
2. It will fetch the latest RSS item and attempt to post
3. Check each platform for the test post
4. If successful, click **Save** and enable the scenario (toggle ON)

---

## STEP 5 — SCHEDULE (optional upgrade)

The free plan checks every hour. To post **immediately** when a blog goes live:
- Upgrade to Make's **Core plan** ($9/mo) for webhook triggers
- Or: keep hourly — posts within 1 hour of going live is fine

---

## TIPS

### Caption Templates (copy-paste anytime you post manually)

**Facebook:**
```
[Blog title] 🤖

[1-2 sentence summary]

👉 Read the full article: [URL]

#AIAutomation #SmallBusinessAustralia #ArtificialIntelligence #AIReceptionist #DigiSurf
```

**Instagram:**
```
[Catchy opening line] 💡

[2-3 key points from article, each on its own line]

Want to know more? Link in bio 👆

.
.
.
#AIAutomation #AIChatbot #AIReceptionist #SmallBusiness #Australia #BusinessOwner #Tradie #Startup #DigitalMarketing #DigiSurf #SydneyBusiness #AussieBusinessOwner
```

**LinkedIn:**
```
[Blog title]

[2-3 paragraph summary written conversationally — first person plural "we"]

Full article: [URL]

#AIAutomation #SmallBusiness #Australia #ArtificialIntelligence
```

---

## ADDITIONAL AUTOMATION OPTIONS

### Option A: Buffer (simpler, fewer features)
- https://buffer.com — free for 3 channels
- Connect Facebook, Instagram, LinkedIn
- Add RSS feed under "Content" → "RSS Feeds"
- Buffer auto-drafts posts from new RSS items — you approve before they go out
- Good if you want to review posts before publishing

### Option B: Publer (AI content writing included)
- https://publer.io — $12/mo but includes AI caption rewriting
- Connects all channels including TikTok
- Has RSS auto-posting + AI will rewrite the post in a better tone for each platform
- Best option if you want posts to sound natural on each platform

### Option C: Metricool (analytics + scheduling)
- https://metricool.com — free plan available
- Best for tracking what posts perform best (clicks, reach, engagement)
- Use alongside Buffer/Make for full analytics visibility

---

## TROUBLESHOOTING

| Problem | Fix |
|---|---|
| Instagram says "Business account required" | Switch to Instagram Business in app settings |
| LinkedIn posts fail | Re-authenticate LinkedIn in Make — LinkedIn tokens expire every 60 days |
| RSS feed shows old posts | Make caches — clear scenario history or wait for next run |
| Facebook post rejected | Check caption length — Facebook cap is 63,206 chars (not the issue here) |
| No image on Instagram | Instagram requires an image — the og-image.png is set as the fallback |

---

## RSS FEED URL

```
https://www.digisurfaustralia.com.au/rss.xml
```

Use this URL in any scheduling tool (Buffer, Publer, Make, n8n, Zapier, etc.)

---

*DigiSurf Australia — March 2026*
