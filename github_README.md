# 📄 AI Resume Builder Kit

**Build a professional resume for anyone — using AI — with no coding or technical skills required.**

Created by [STEMageddon Labs](https://stemaggedonlabs.com) · Built with Google Forms + Google Sheets + Claude AI

---

## What This Is

This is a complete, free toolkit that lets you build a polished, professional resume for yourself or someone else using AI — even if you have never written a line of code in your life.

It works entirely in your web browser. No software to install. No subscriptions required.

**It handles every resume type automatically:**

| Resume Type | Format | Tone |
|---|---|---|
| Part-Time / Hourly | 1 page | Plain, direct |
| Entry-Level / First Job | 1 page | Warm, encouraging |
| Professional / Mid-Career | 1–2 pages | Standard professional |
| Senior / Management | 2 pages | Leadership-focused |
| Executive / C-Suite | 2–3 pages | Strategic, board-ready |
| Creative / Portfolio | 1–2 pages | Personality + polish |
| Technical / IT / Engineering | 1–2 pages | Skills-forward |
| Federal / Government | 3+ pages | USA Jobs format |

---

## How It Works (The Big Picture)

```
Person fills out         Answers save to        You paste into
a Google Form     →      Google Sheets    →      Claude.ai + get
(15–20 min)              automatically           a complete resume
```

That's it. The AI reads the form answers and writes the full resume — summary, bullet points, skills section, and all — tailored to the type of job the person is targeting.

---

## What's In This Repo

| File | What It Does |
|---|---|
| `README.md` | You are reading it |
| `README.txt` | Plain-text instructions for non-technical users |
| `ResumeBuilder_CreateForm.gs` | Google Apps Script — run once to build the form + sheet |
| `ResumeBuilder_ClaudePrompt.txt` | Paste into Claude.ai to generate the resume |

---

## Quick Start (No Coding Required)

### Step 1 — Create the Form (one time only)

1. Go to **[script.google.com](https://script.google.com)** and sign in with a Google/Gmail account
2. Click **New Project**
3. Delete all the default code
4. Open `ResumeBuilder_CreateForm.gs` — copy all the text — paste it in
5. Select `createResumeForm` from the function dropdown at the top
6. Click the **▶ Run** button
7. Approve permissions when asked (one-time)
8. Click **View → Logs** — copy the **Form Link** and **Sheet URL**

> ⚠️ If you see a security warning, click **Advanced → Go to project (unsafe)**. This is normal for scripts you create yourself. The script only creates a form and spreadsheet in your own Google Drive.

### Step 2 — Share the Form

Send the **Form Link** to whoever needs a resume. They fill it out on their phone, tablet, or computer — no account needed. Takes about 15–20 minutes.

### Step 3 — Get Their Answers

After they submit:
1. Open the **Sheet URL** from Step 1
2. Click **File → Download → Comma Separated Values (.csv)**

### Step 4 — Build the Resume with Claude.ai

1. Go to **[claude.ai](https://claude.ai)** (free account — no credit card needed)
2. Start a **New Conversation**
3. Click the **📎 paperclip icon** and upload the CSV file
4. Open `ResumeBuilder_ClaudePrompt.txt` — copy all the text — paste it into Claude
5. Add: *"Please use the uploaded CSV file for the person's data."*
6. Hit **Send**

Claude will write the complete resume in about 30–60 seconds.

### Step 5 — Save the Resume

1. Copy the resume text from Claude's response
2. Paste into **[Google Docs](https://docs.google.com)** (free)
3. Download as Word (.docx) or PDF — done!

---

## What the Resume Includes

The AI automatically writes and formats:

- **Contact information** — name, phone, email, location, LinkedIn
- **Professional summary** — 2–4 sentences tailored to the job target
- **Work experience** — reverse chronological, bullet points with action verbs
- **Education** — degrees, trade school, certifications, online courses
- **Skills** — grouped by category, including languages and tech skills
- **Certifications & licenses** — CDL, OSHA, CompTIA, PMP, etc.
- **Military service** — if applicable
- **Volunteer work** — if relevant
- **References** — listed or "Available upon request"

At the end, Claude also writes a **Resume Notes** section with:
- Which resume type was used and why
- 2–3 specific strengths from the person's background
- 1–2 suggestions for improvement

---

## Tips for Best Results

- **The more detail in the form, the better the resume.** Encourage the person filling it out to write full sentences in the open-ended questions.
- **You can ask Claude to make changes** in the same conversation: *"Make it one page," "Adjust the tone to be less formal," "Add more detail about the warehouse job."*
- **The form works for multiple people.** Each submission appears as a new row in the same spreadsheet. Download each row separately.
- **If someone makes a mistake on the form,** you can edit the Google Sheet directly before downloading.

---

## Requirements

| Tool | Cost | Account Needed? |
|---|---|---|
| Google Forms | Free | Yes (Google/Gmail) — for setup only |
| Google Sheets | Free | Yes (same account) |
| Google Docs | Free | Yes (same account) |
| Claude.ai | Free (limited) | Yes — sign up at claude.ai |

> The person **filling out the form** does not need any account. Just a web browser.

---

## Works With Other AI Tools Too

The `ResumeBuilder_ClaudePrompt.txt` works with any AI assistant that accepts text input:

- **Claude.ai** ✅ (recommended — best at following detailed instructions)
- **ChatGPT** ✅ (paste the prompt + data)
- **Microsoft Copilot** ✅
- **Google Gemini** ✅
- **Any other chatbot** that accepts long text input

---

## About

Built by **David Berry** — Engineering Teacher, NASA HUNCH Program Lead, and founder of [STEMageddon Labs](https://stemaggedonlabs.com).

This toolkit was created to help anyone get a professional resume — especially people who haven't needed one in years and don't know where to start.

**STEMageddon Labs** builds practical AI tools and educational content at the intersection of real-world engineering and the classroom.

---

## License

MIT License — free to use, share, and modify. Credit appreciated but not required.

---

## Contributing

Found a bug? Have an idea for a new resume type or question? Open an issue or submit a pull request. All skill levels welcome.

---

*If this helped you or someone you know — give it a ⭐ star. It helps others find it.*
