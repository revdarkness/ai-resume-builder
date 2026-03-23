════════════════════════════════════════════════════════════════
  RESUME BUILDER KIT — README
  No coding, no software installation required.
  Everything runs in your web browser.
════════════════════════════════════════════════════════════════

WHAT IS IN THIS PACKAGE?
─────────────────────────────────────────────────────────────
  ResumeBuilder_CreateForm.gs   ← runs one time to build your form
  ResumeBuilder_ClaudePrompt.txt ← you paste this into Claude.ai
  README.txt                    ← you are reading this right now


════════════════════════════════════════════════════════════════
  OVERVIEW — HOW THIS WORKS (THE BIG PICTURE)
════════════════════════════════════════════════════════════════

  Step 1 → You run a script ONCE that creates a Google Form
            and links it to a Google Spreadsheet automatically.

  Step 2 → You share the form link with whoever needs a resume.
            They fill it out on their phone, tablet, or computer.
            No account needed. Takes about 15-20 minutes.

  Step 3 → Their answers appear automatically in a Google Sheet.
            You download that sheet as a simple file.

  Step 4 → You open Claude.ai (a free AI website), paste a
            prompt, and attach the file. Claude reads it and
            writes a complete, professional resume.

  Step 5 → You copy the resume, paste it into Google Docs or
            Word, and it is ready to use.

That is it. No coding. No software to install. No special skills.


════════════════════════════════════════════════════════════════
  STEP 1 — CREATE YOUR FORM (do this ONE TIME only)
════════════════════════════════════════════════════════════════

  What you need: A free Google account (Gmail)

  1. Open your web browser (Chrome, Edge, Firefox, Safari)

  2. Go to:  https://script.google.com
     (You may need to sign in with your Google/Gmail account)

  3. Click the button that says "New Project"
     It will open a page that looks like a code editor.

  4. You will see some text already there that starts with
     "function myFunction()". Select ALL of it and DELETE it.

  5. Open the file called "ResumeBuilder_CreateForm.gs"
     from this package using Notepad (Windows) or TextEdit (Mac).

  6. Select all the text in that file (Ctrl+A or Cmd+A),
     copy it (Ctrl+C or Cmd+C).

  7. Click inside the empty code editor on the Google page
     and paste (Ctrl+V or Cmd+V).

  8. At the top of the page, find the dropdown that says
     "myFunction" or "Select function". Click it and choose
     "createResumeForm" from the list.

  9. Click the ▶ Play/Run button (it looks like a triangle).

  10. A pop-up will appear asking for permission.
      Click "Review permissions."
      Choose your Google account.
      You may see a warning — click "Advanced" then
      "Go to [project name] (unsafe)" — this is normal for
      scripts you wrote yourself.
      Click "Allow."

  11. Wait about 30-60 seconds. Then click:
      View → Logs  (or press Ctrl+Enter)

  12. You will see two web addresses (URLs) in the log:
      ✅ FORM LINK  → Share this with the person who needs a resume
      📊 SHEET LINK → This is where their answers will appear

  ⭐ TIP: Copy both links and save them somewhere (Notes app,
         email to yourself, etc.) You will need them later.

  ⭐ TIP: You only need to do Step 1 ONCE. After that, you can
         use the same form link for any person who needs a resume.
         Each submission shows up as a new row in the same sheet.


════════════════════════════════════════════════════════════════
  STEP 2 — SHARE THE FORM WITH THE PERSON
════════════════════════════════════════════════════════════════

  1. Copy the FORM LINK from Step 1 (the one labeled
     "FORM LINK" in the logs).

  2. Send it to the person however is easiest:
     - Text message (just paste the link)
     - Email it to them
     - Tell them to open it on their phone

  3. They click the link and fill out the form.
     No account or login needed on their end.
     They can do it on any phone, tablet, or computer.

  4. The form will take them 15-20 minutes to complete.
     They can stop and come back if needed — but note that
     Google Forms does not save partial answers automatically,
     so it is best to complete it in one sitting.

  ⭐ TIP: Tell them to be as detailed as possible in the
         "What did you do at this job?" questions. The more
         they write, the better the resume will be.


════════════════════════════════════════════════════════════════
  STEP 3 — GET THEIR ANSWERS FROM THE SHEET
════════════════════════════════════════════════════════════════

  After they submit the form, their answers appear in the
  Google Sheet automatically.

  METHOD A — Download as a CSV file (recommended):
  ──────────────────────────────────────────────────
  1. Open the Google Sheet link from Step 1.
  2. Click File → Download → Comma Separated Values (.csv)
  3. A file called something like "Resume Builder.csv" will
     download to your Downloads folder.
  4. You will attach this file to Claude.ai in Step 4.

  METHOD B — Copy and paste the text (if downloading is tricky):
  ──────────────────────────────────────────────────────────────
  1. Open the Google Sheet link.
  2. Click the row with the person's answers.
  3. Select all the text across all the cells.
  4. Copy it (Ctrl+C or Cmd+C).
  5. You will paste this into the Claude.ai prompt in Step 4.


════════════════════════════════════════════════════════════════
  STEP 4 — BUILD THE RESUME WITH CLAUDE.AI
════════════════════════════════════════════════════════════════

  What you need: A free account at claude.ai
  (Sign up at claude.ai — it is free, no credit card needed)

  OPTION A — Upload the file (easiest):
  ──────────────────────────────────────
  1. Go to claude.ai and start a New Conversation.

  2. Click the paperclip icon 📎 at the bottom of the chat box.
     Select the CSV file you downloaded in Step 3.

  3. Open "ResumeBuilder_ClaudePrompt.txt" from this package
     in Notepad or TextEdit.

  4. Select ALL the text (Ctrl+A or Cmd+A), copy it (Ctrl+C).

  5. Click inside the Claude.ai chat box and paste (Ctrl+V).

  6. At the end of the pasted text, add:
     "Please use the uploaded CSV file for the person's data."

  7. Press Enter or click the Send button.

  8. Claude will read the file and write the complete resume.
     This usually takes 30-60 seconds.

  OPTION B — Paste the data directly:
  ──────────────────────────────────────
  1. Go to claude.ai and start a New Conversation.

  2. Open "ResumeBuilder_ClaudePrompt.txt" in Notepad or TextEdit.

  3. Select ALL the text, copy it, paste it into Claude.ai.

  4. Find the part that says [PASTE YOUR DATA HERE].
     Replace those words with the copied text from the Google Sheet
     (from Method B in Step 3).

  5. Press Enter or click Send.

  ⭐ TIP: Claude will write the resume AND include notes at the
         end explaining what type of resume it created and
         suggestions for improvement. Read those notes!


════════════════════════════════════════════════════════════════
  STEP 5 — SAVE AND SHARE THE RESUME
════════════════════════════════════════════════════════════════

  Once Claude shows you the finished resume:

  1. Select all the resume text (not the notes at the bottom).

  2. Copy it (Ctrl+C or Cmd+C).

  3. Open Google Docs (docs.google.com) — it is free.
     Click the + New button to create a blank document.

  4. Paste the resume (Ctrl+V or Cmd+V).

  5. Fix the formatting if needed:
     - Make the person's name bigger and bold
     - Make sure section headings are bold
     - Set the font to something clean like Arial or Calibri size 11

  6. Click File → Download → Microsoft Word (.docx)
     OR
     Click File → Download → PDF Document

  7. The resume is ready! Email it to the person or print it.

  ⭐ TIP: You can ask Claude to make changes!
         Just type follow-up requests like:
         "Make it shorter — just one page"
         "Add more details about the warehouse job"
         "Change the tone to sound more professional"
         "Can you rewrite the summary section?"


════════════════════════════════════════════════════════════════
  COMMON QUESTIONS
════════════════════════════════════════════════════════════════

  Q: Is this free?
  A: Yes. Google Forms, Google Sheets, and Google Docs are all
     free. Claude.ai has a free plan that allows several
     conversations per day — more than enough for this.

  Q: Do I need to run the script every time?
  A: No! Run it once. The same form works for any person.
     Each person's answers show up as a new row in the sheet.

  Q: What if the person makes a mistake on the form?
  A: You can manually edit the Google Sheet. Just click the
     cell with the wrong answer and type the correct one.
     Or you can ask Claude to make corrections in the chat.

  Q: Can I use this for multiple people?
  A: Yes. Every time someone submits the form, a new row appears
     in the Google Sheet. Download the row for each person and
     run the Claude prompt separately for each one.

  Q: What if Claude's resume is not quite right?
  A: Just keep talking to Claude! Type your feedback in the
     same chat window and Claude will revise it. For example:
     "This is good but can you make it sound less formal?"
     "Add more detail about the forklift certification."
     "She wants to apply to nursing homes specifically — can
      you adjust the summary?"

  Q: Can the person fill out the form on a phone?
  A: Yes. Google Forms works on any phone, tablet, or computer.
     No app needed — just a web browser.

  Q: What if Google shows a scary warning when I run the script?
  A: This is normal for any script you create yourself.
     Click "Advanced" then "Go to [project name] (unsafe)."
     The script only creates a form and a spreadsheet in YOUR
     own Google Drive — it cannot access anything else.

  Q: I do not have a Google account. Can I still use this?
  A: You will need a free Google account to create the form
     (Step 1). Sign up at accounts.google.com — it is free.
     The person filling out the form does NOT need an account.


════════════════════════════════════════════════════════════════
  NEED HELP?
════════════════════════════════════════════════════════════════

  If you get stuck, you can describe your problem directly to
  Claude.ai! Just start a new chat and say something like:

  "I am trying to use a Google Apps Script to create a form
   and I am stuck on [describe the step]. Can you help me?"

  Claude will walk you through it step by step.

  ── Package created by STEMageddon Labs ──────────────────────
  ── For questions and more tools: stemaggedonlabs.com ────────
════════════════════════════════════════════════════════════════
