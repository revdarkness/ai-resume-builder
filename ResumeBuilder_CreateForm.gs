/**
 * ═══════════════════════════════════════════════════════════════
 *  UNIVERSAL RESUME BUILDER — Google Apps Script
 *  Version 1.0 | Created by STEMageddon Labs
 * ═══════════════════════════════════════════════════════════════
 *
 *  INSTRUCTIONS (no coding required):
 *  1. Go to script.google.com
 *  2. Click "New Project"
 *  3. Delete the default code, paste this entire file
 *  4. Click the ▶ Run button at the top
 *  5. Choose "createResumeForm" from the dropdown
 *  6. Approve permissions when asked (one-time only)
 *  7. Check View → Logs for your Form link and Sheet URL
 *
 * ═══════════════════════════════════════════════════════════════
 */

function createResumeForm() {

  // ── Create the Form ─────────────────────────────────────────
  const form = FormApp.create('Resume Builder — Tell Us About You');

  form.setTitle('Resume Builder — Tell Us About You');
  form.setDescription(
    'Welcome! This form will collect everything needed to build your resume. ' +
    'Answer as completely as you can — approximate dates are fine, ' +
    'and you can skip any section that does not apply to you. ' +
    'There are no wrong answers. Just tell us your story!'
  );
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'Thank you! Your information has been saved. ' +
    'Someone will use this to build your resume shortly.'
  );

  // ══════════════════════════════════════════════════════════════
  //  SECTION 1 — Resume Type
  // ══════════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('Step 1 of 8 — What Kind of Resume Do You Need?')
    .setHelpText(
      'This helps us choose the right format, tone, and level of detail for your resume.'
    );

  const resumeTypeItem = form.addMultipleChoiceItem();
  resumeTypeItem
    .setTitle('Which best describes the type of resume you need?')
    .setChoices([
      resumeTypeItem.createChoice('Part-Time / Hourly Work  (retail, warehouse, delivery, food service, security, customer service)'),
      resumeTypeItem.createChoice('Entry-Level / First Job  (little or no work experience, recent graduate, or returning to work)'),
      resumeTypeItem.createChoice('Professional / Mid-Career  (office, technical, skilled trade, healthcare, education, etc.)'),
      resumeTypeItem.createChoice('Senior / Management  (team lead, supervisor, manager, director — 5+ years experience)'),
      resumeTypeItem.createChoice('Executive / C-Suite  (VP, Director, C-level, or senior leadership roles)'),
      resumeTypeItem.createChoice('Creative / Portfolio-Based  (design, marketing, media, writing, arts)'),
      resumeTypeItem.createChoice('Technical / IT / Engineering  (software, hardware, engineering, data, science)'),
      resumeTypeItem.createChoice('Federal / Government  (applying to government positions — requires specific format)'),
      resumeTypeItem.createChoice('I\'m not sure — please use my information to decide'),
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('What specific job title or type of job are you applying for?')
    .setRequired(false)
    .setHelpText(
      'Examples: Warehouse Associate, Registered Nurse, Software Engineer, ' +
      'Store Manager, Teacher, Delivery Driver, Administrative Assistant. ' +
      'Leave blank if you are not sure yet.'
    );

  form.addParagraphTextItem()
    .setTitle('Any other details about the job or company you are targeting?')
    .setRequired(false)
    .setHelpText(
      'Examples: "I want to apply at Amazon warehouses," ' +
      '"I am looking for remote accounting work," ' +
      '"I am changing careers from retail to healthcare." '
    );

  // ══════════════════════════════════════════════════════════════
  //  SECTION 2 — Personal Information
  // ══════════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('Step 2 of 8 — Your Contact Information')
    .setHelpText('This goes at the top of your resume so employers can reach you.');

  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Phone Number')
    .setRequired(true)
    .setHelpText('Example: (214) 555-1234');

  form.addTextItem()
    .setTitle('Email Address')
    .setRequired(true)
    .setHelpText('Use a professional-sounding email if possible. Example: john.smith@gmail.com');

  form.addTextItem()
    .setTitle('City and State (or City and Country)')
    .setRequired(true)
    .setHelpText('Example: Dallas, TX — no need to include your full street address');

  form.addTextItem()
    .setTitle('LinkedIn Profile URL (if you have one)')
    .setRequired(false)
    .setHelpText('Example: linkedin.com/in/johnsmith — leave blank if you do not have one');

  form.addTextItem()
    .setTitle('Personal Website or Portfolio URL (if you have one)')
    .setRequired(false)
    .setHelpText('Especially useful for creative, technical, or freelance roles');

  // ══════════════════════════════════════════════════════════════
  //  SECTION 3 — Professional Summary
  // ══════════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('Step 3 of 8 — About You (In Your Own Words)')
    .setHelpText(
      'This section helps us write a strong summary at the top of your resume. ' +
      'Do not worry about sounding "professional" — just talk naturally.'
    );

  form.addParagraphTextItem()
    .setTitle('How would you describe yourself as a worker?')
    .setRequired(false)
    .setHelpText(
      'Examples: "I am very reliable and never miss work," ' +
      '"I am good with people and customer service," ' +
      '"I am detail-oriented and organized," ' +
      '"I work well under pressure," ' +
      '"I am a fast learner." '
    );

  form.addTextItem()
    .setTitle('How many total years of work experience do you have?')
    .setRequired(false)
    .setHelpText('Approximate is fine. Example: 5 years, 20+ years, less than 1 year');

  form.addMultipleChoiceItem()
    .setTitle('Are you currently employed?')
    .setChoiceValues(['Yes, full-time', 'Yes, part-time', 'No, I am looking for work', 'No, I recently retired', 'No — other reason'])
    .setRequired(false);

  // ══════════════════════════════════════════════════════════════
  //  SECTION 4 — Work Experience
  // ══════════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('Step 4 of 8 — Work Experience')
    .setHelpText(
      'List your jobs, starting with the most recent. ' +
      'Include any type of work: full-time, part-time, self-employed, seasonal, military, or volunteer. ' +
      'You can list up to 4 jobs. Skip any you do not want to include.'
    );

  const jobLabels = [
    { label: 'Most Recent / Current Job', sub: 'Your current or most recent position.' },
    { label: 'Job #2', sub: 'The job before your most recent one.' },
    { label: 'Job #3', sub: '' },
    { label: 'Job #4', sub: '' },
  ];

  jobLabels.forEach(function(job, i) {
    form.addSectionHeaderItem()
      .setTitle(job.label)
      .setHelpText(job.sub);

    form.addTextItem()
      .setTitle('[' + job.label + '] Job Title')
      .setRequired(i === 0)
      .setHelpText('Examples: Cashier, Forklift Operator, Customer Service Rep, Team Lead, Nurse, Driver');

    form.addTextItem()
      .setTitle('[' + job.label + '] Company or Employer Name')
      .setRequired(i === 0);

    form.addTextItem()
      .setTitle('[' + job.label + '] City and State')
      .setRequired(false);

    form.addTextItem()
      .setTitle('[' + job.label + '] Start Date')
      .setRequired(false)
      .setHelpText('Month and year is fine. Example: March 2019 — or just 2019');

    form.addTextItem()
      .setTitle('[' + job.label + '] End Date (or write "Present" if this is your current job)')
      .setRequired(false);

    form.addParagraphTextItem()
      .setTitle('[' + job.label + '] What did you do at this job?')
      .setRequired(i === 0)
      .setHelpText(
        'Describe your main duties in plain language. ' +
        'Examples: "Stocked shelves and operated forklift," ' +
        '"Handled customer complaints and processed returns," ' +
        '"Supervised a team of 6 employees," ' +
        '"Drove delivery routes covering 150+ miles per day." '
      );

    form.addParagraphTextItem()
      .setTitle('[' + job.label + '] Accomplishments — anything you are proud of from this job?')
      .setRequired(false)
      .setHelpText(
        'Examples: "Never missed a shift in 3 years," ' +
        '"Trained 5 new employees," ' +
        '"Was promoted after 6 months," ' +
        '"Helped increase sales by 15%," ' +
        '"Employee of the Month award." ' +
        'Even small things count!'
      );
  });

  // ══════════════════════════════════════════════════════════════
  //  SECTION 5 — Education
  // ══════════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('Step 5 of 8 — Education')
    .setHelpText(
      'Include high school diploma, GED, trade/vocational training, college, online courses, ' +
      'military training, or any formal education. Skip anything that does not apply.'
    );

  form.addMultipleChoiceItem()
    .setTitle('What is the highest level of education you have completed?')
    .setChoiceValues([
      'High School Diploma',
      'GED (General Education Development)',
      'Some College (no degree)',
      'Associate\'s Degree (2-year)',
      'Bachelor\'s Degree (4-year)',
      'Master\'s Degree',
      'Doctoral Degree (PhD)',
      'Vocational / Trade School Certificate',
      'Military Training',
      'I prefer not to say',
    ])
    .setRequired(false);

  form.addTextItem()
    .setTitle('School or Institution Name (for your highest degree)')
    .setRequired(false)
    .setHelpText('Example: Dallas Community College, University of Texas, Lincoln Tech');

  form.addTextItem()
    .setTitle('Field of Study or Major (if applicable)')
    .setRequired(false)
    .setHelpText('Example: Business Administration, Electrical Engineering, Criminal Justice');

  form.addTextItem()
    .setTitle('Year you graduated or last attended')
    .setRequired(false)
    .setHelpText('Approximate is fine');

  form.addParagraphTextItem()
    .setTitle('Any other education, training, bootcamps, or online courses worth mentioning?')
    .setRequired(false)
    .setHelpText(
      'Examples: Google IT Support Certificate, Coursera Data Science course, ' +
      'Real estate licensing course, Community college courses. ' +
      'Anything counts — even if you did not finish.'
    );

  // ══════════════════════════════════════════════════════════════
  //  SECTION 6 — Certifications & Licenses
  // ══════════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('Step 6 of 8 — Certifications and Licenses')
    .setHelpText('These can make a big difference — especially for trade, healthcare, or driving jobs.');

  form.addParagraphTextItem()
    .setTitle('List any certifications, licenses, or credentials you currently hold')
    .setRequired(false)
    .setHelpText(
      'Examples: CDL (Commercial Driver\'s License), Forklift Certification, ' +
      'OSHA 10 or OSHA 30, CPR / First Aid Certified, Food Handler Certificate, ' +
      'Real Estate License, PMP, CompTIA A+, AWS Cloud Practitioner, ' +
      'CNA (Certified Nursing Assistant), Security Guard License. ' +
      'List anything — even if it is expired, include it and note the year.'
    );

  // ══════════════════════════════════════════════════════════════
  //  SECTION 7 — Skills
  // ══════════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('Step 7 of 8 — Skills')
    .setHelpText('Do not sell yourself short — anything you are good at counts here.');

  form.addParagraphTextItem()
    .setTitle('List your work-related skills')
    .setRequired(false)
    .setHelpText(
      'Examples: customer service, cash handling, inventory management, ' +
      'operating heavy machinery, Microsoft Word/Excel, QuickBooks, ' +
      'project management, scheduling, hiring/training staff, ' +
      'bilingual, social media marketing, graphic design, welding, plumbing. ' +
      'List as many as you can think of.'
    );

  form.addParagraphTextItem()
    .setTitle('List your personal or soft skills')
    .setRequired(false)
    .setHelpText(
      'Examples: punctual, reliable, team player, good communicator, ' +
      'works well under pressure, detail-oriented, self-motivated, ' +
      'good with people, problem solver, fast learner.'
    );

  form.addMultipleChoiceItem()
    .setTitle('Are you bilingual or multilingual?')
    .setChoiceValues([
      'No — English only',
      'Yes — English and Spanish',
      'Yes — English and another language',
      'Yes — languages other than English',
    ])
    .setRequired(false);

  form.addTextItem()
    .setTitle('If multilingual, which languages do you speak and at what level?')
    .setRequired(false)
    .setHelpText('Example: Spanish (fluent), Tagalog (conversational), French (basic)');

  form.addMultipleChoiceItem()
    .setTitle('How comfortable are you with computers?')
    .setChoiceValues([
      'Not comfortable — I rarely use computers',
      'Basic — email, internet, basic typing',
      'Intermediate — Microsoft Office, spreadsheets, common software',
      'Advanced — specialized software, databases, programming, IT',
    ])
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Any specific computer programs or software you know how to use?')
    .setRequired(false)
    .setHelpText(
      'Examples: Microsoft Word, Excel, PowerPoint, QuickBooks, Salesforce, ' +
      'SAP, AutoCAD, Adobe Photoshop, Slack, Zoom, Google Workspace.'
    );

  // ══════════════════════════════════════════════════════════════
  //  SECTION 8 — Extras & References
  // ══════════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('Step 8 of 8 — Extra Information & References')
    .setHelpText('Almost done! Just a few more optional details.');

  form.addParagraphTextItem()
    .setTitle('Military Service (if applicable)')
    .setRequired(false)
    .setHelpText(
      'Include branch, rank, years served, and any relevant training or roles. ' +
      'Example: U.S. Army, Specialist, 2004–2008, logistics and supply chain management.'
    );

  form.addParagraphTextItem()
    .setTitle('Volunteer Work or Community Involvement (if applicable)')
    .setRequired(false)
    .setHelpText(
      'Examples: church volunteer, food bank, coaching youth sports, ' +
      'neighborhood association, school PTA, nonprofit board.'
    );

  form.addParagraphTextItem()
    .setTitle('Awards, Honors, or Achievements (work or personal)')
    .setRequired(false)
    .setHelpText(
      'Examples: Employee of the Year, perfect attendance award, ' +
      'sales competition winner, community recognition. ' +
      'Anything you are proud of.'
    );

  form.addParagraphTextItem()
    .setTitle('Is there anything else you want included in your resume?')
    .setRequired(false)
    .setHelpText(
      'This is your chance to mention anything we have not asked about yet — ' +
      'a career change you are making, something you want emphasized, ' +
      'a gap in employment you want to address, or a personal statement.'
    );

  // ── References ────────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('References (Optional)')
    .setHelpText(
      'List 2 people who can speak to your work or character. ' +
      'Former supervisors, coworkers, teachers, coaches, or community contacts are all fine. ' +
      'Do NOT list family members.'
    );

  [1, 2].forEach(function(n) {
    form.addTextItem()
      .setTitle('Reference #' + n + ' — Full Name')
      .setRequired(false);

    form.addTextItem()
      .setTitle('Reference #' + n + ' — Their Job Title or Role')
      .setRequired(false)
      .setHelpText('Example: Former Supervisor, Coworker, Coach, Teacher, Pastor');

    form.addTextItem()
      .setTitle('Reference #' + n + ' — Company or Organization')
      .setRequired(false);

    form.addTextItem()
      .setTitle('Reference #' + n + ' — Phone Number or Email')
      .setRequired(false);
  });

  // ── Link to Google Sheets ──────────────────────────────────────
  const ss = SpreadsheetApp.create('Resume Builder — Responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // ── Log Results ────────────────────────────────────────────────
  Logger.log('');
  Logger.log('══════════════════════════════════════════════');
  Logger.log('  ✅  RESUME BUILDER FORM CREATED!');
  Logger.log('══════════════════════════════════════════════');
  Logger.log('');
  Logger.log('📋 FORM LINK (share this with the person):');
  Logger.log('   ' + form.getPublishedUrl());
  Logger.log('');
  Logger.log('📊 GOOGLE SHEET (responses appear here):');
  Logger.log('   ' + ss.getUrl());
  Logger.log('');
  Logger.log('✏️  EDIT THE FORM (to make changes):');
  Logger.log('   ' + form.getEditUrl());
  Logger.log('');
  Logger.log('══════════════════════════════════════════════');
  Logger.log('NEXT STEPS:');
  Logger.log('1. Share the FORM LINK with the person.');
  Logger.log('2. After they submit, open the GOOGLE SHEET.');
  Logger.log('3. Download as CSV (File > Download > CSV).');
  Logger.log('4. Follow the README instructions to build');
  Logger.log('   the resume using Claude.ai — no coding needed!');
  Logger.log('══════════════════════════════════════════════');
}
