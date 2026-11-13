/**
 * LEXICON LAB - Writing Studio Data
 * Aligned with Course Outcome CO1: English grammar and sentence formation
 */

const WRITING_DATA = {
  categories: [
    {
      id: "essay",
      name: "Essay Writing",
      icon: "book-open",
      description: "Structured academic argumentation with introduction, supporting body paragraphs, and synthesizing conclusion.",
      prompts: [
        {
          id: "ep-1",
          title: "The Ethics of Artificial Intelligence in Higher Education",
          prompt: "Analyze the ethical, cognitive, and academic implications of AI writing assistants in universities. Should educational institutions embrace, regulate, or restrict automated tools?",
          suggestedWords: "300 - 450 words"
        },
        {
          id: "ep-2",
          title: "The Impact of Social Media on Civil Discourse",
          prompt: "Does the architecture of modern social platforms foster democratic participation or amplify ideological polarization? Support your stance with reasoned arguments.",
          suggestedWords: "300 - 450 words"
        },
        {
          id: "ep-3",
          title: "Climate Change and Intergenerational Responsibility",
          prompt: "To what extent do current generations hold a moral and economic responsibility toward preserving ecological stability for future generations?",
          suggestedWords: "300 - 450 words"
        },
        {
          id: "ep-4",
          title: "The Significance of Multilingualism in the Global Economy",
          prompt: "How does learning more than one language reshape cognitive versatility, cross-cultural empathy, and professional opportunity in our interconnected world?",
          suggestedWords: "250 - 400 words"
        }
      ],
      tips: [
        "Hook the reader in the opening sentence with a startling fact, question, or quote.",
        "Include a clear, unambiguous Thesis Statement at the end of the introductory paragraph.",
        "Begin every body paragraph with a distinct Topic Sentence.",
        "Use transition words (Furthermore, Consequently, In contrast, Conversely) to bridge arguments.",
        "Avoid introducing completely new evidence in the concluding paragraph; synthesize your thesis instead."
      ],
      template: `Title: [Enter Your Essay Title Here]

I. INTRODUCTION
- Hook: [Engaging opening thought or surprising observation]
- Context: [Brief background explaining why this topic matters today]
- Thesis Statement: [One clear sentence presenting your central argument and the main points supporting it]

II. BODY PARAGRAPH 1 (Primary Argument)
- Topic Sentence: [First main reason supporting your thesis]
- Evidence & Explanation: [Data, examples, or logical elaboration]
- Concluding Connection: [Tie back to central thesis]

III. BODY PARAGRAPH 2 (Counterargument & Rebuttal)
- Counter-perspective: [What might a skeptic or opposing viewpoint argue?]
- Rebuttal: [Why your stance remains persuasive despite this counterargument]

IV. CONCLUSION
- Restated Thesis: [Paraphrase your thesis with renewed authority]
- Broader Synthesis: [Final lasting thought or call for future action]`
    },
    {
      id: "paragraph",
      name: "Paragraph Writing",
      icon: "align-left",
      description: "Focused single-topic compositions that develop one central idea with unity, coherence, and precision.",
      prompts: [
        {
          id: "pp-1",
          title: "The Quiet Power of Morning Habits",
          prompt: "Explain how structured early-morning habits set the psychological tone for productivity, mental calm, and physical vitality throughout the day.",
          suggestedWords: "120 - 180 words"
        },
        {
          id: "pp-2",
          title: "Why Failure is the Foundation of Innovation",
          prompt: "Describe how setbacks and experiments provide invaluable feedback loops that drive true scientific and personal breakthrough.",
          suggestedWords: "120 - 180 words"
        },
        {
          id: "pp-3",
          title: "The Sensory Experience of a Rainstorm in the City",
          prompt: "Craft a vivid descriptive paragraph capturing the sights, scents, sounds, and atmosphere of a sudden downpour on busy urban streets.",
          suggestedWords: "100 - 160 words"
        }
      ],
      tips: [
        "Maintain strict Unity: every single sentence must relate directly to the central topic sentence.",
        "Ensure Coherence: arrange details chronologically, spatially, or by order of importance.",
        "Use sensory details and active verbs rather than vague adjectives.",
        "Keep the ideal paragraph length between 100 and 180 words for optimal readability."
      ],
      template: `[Topic Sentence: State your single main idea with clarity and punch]

[Supporting Sentence 1: Elaborate on the core idea with specific detail or context]
[Supporting Sentence 2: Provide concrete evidence, sensory description, or an example]
[Supporting Sentence 3: Explain the significance or deeper implication of this evidence]

[Concluding Sentence: Synthesize the paragraph with a memorable, final insight]`
    },
    {
      id: "letter",
      name: "Letter Writing",
      icon: "mail",
      description: "Master formal business correspondence and thoughtful informal letters with correct structural etiquette.",
      prompts: [
        {
          id: "lp-1",
          title: "Formal Application for an Internship / Fellowship",
          prompt: "Write a formal cover letter applying for a competitive summer research fellowship or corporate internship at an organization of your choice.",
          suggestedWords: "200 - 300 words"
        },
        {
          id: "lp-2",
          title: "Formal Complaint Regarding Municipal Facilities",
          prompt: "Address a formal letter to the municipal commissioner highlighting deteriorating public library facilities and urging immediate administrative action.",
          suggestedWords: "180 - 260 words"
        },
        {
          id: "lp-3",
          title: "Informal Letter: Reconnecting with a Mentor",
          prompt: "Write a warm, thoughtful letter to a former teacher or mentor expressing sincere gratitude for their guidance and sharing your recent milestones.",
          suggestedWords: "150 - 220 words"
        }
      ],
      tips: [
        "Formal letters require sender address, date, recipient designation, clean subject line, and formal salutation (Dear Mr./Ms./Dr. [Name]).",
        "Maintain a respectful, courteous, and objective tone in formal correspondence.",
        "Sign off formally with 'Yours sincerely' (when recipient is named) or 'Yours faithfully' (when starting with 'Dear Sir/Madam').",
        "In informal letters, personal warmth and conversational tone are encouraged, but clarity remains paramount."
      ],
      template: `[Your Address / Institution]
[City, Postal Code]
[Date: 12 November 2026]

To,
The Admissions / Program Director,
[Organization / University Name],
[City]

Subject: Application for [Position / Fellowship Title] - [Your Full Name]

Dear [Director Name / Sir or Madam],

I am writing to formally submit my application for the [Position Name] position at [Organization Name]. Having followed your institution's pioneering initiatives in [Field/Sector], I am eager to contribute my skills in [Key Skill 1] and [Key Skill 2] to your esteemed team.

Currently, I am pursuing my studies in [Your Subject/Major]. Over the past [Duration], I have spearheaded projects focused on [Brief Achievement/Project], which reinforced my capacity for rigorous analysis and effective teamwork.

I welcome the opportunity to discuss how my qualifications align with your objectives in an interview. Thank you for your time and consideration.

Yours sincerely,
[Your Full Name]
[Contact Information]`
    },
    {
      id: "report",
      name: "Report Writing",
      icon: "file-check",
      description: "Factual, structured professional reporting with clear headings, observations, findings, and actionable recommendations.",
      prompts: [
        {
          id: "rp-1",
          title: "Campus Language & Communication Audit Report",
          prompt: "Draft an analytical report evaluating student participation in English communication labs, identifying key bottlenecks, and recommending structural improvements.",
          suggestedWords: "250 - 380 words"
        },
        {
          id: "rp-2",
          title: "Evaluation of the Annual Tech & Innovation Symposium",
          prompt: "Prepare a post-event report summarizing keynote attendance, workshop effectiveness, attendee feedback, and key areas for logistical enhancement next year.",
          suggestedWords: "250 - 350 words"
        },
        {
          id: "rp-3",
          title: "Investigation Report: Workplace Hybrid Productivity",
          prompt: "Document the findings of an internal survey assessing the productivity, morale, and technological readiness of a distributed team.",
          suggestedWords: "250 - 380 words"
        }
      ],
      tips: [
        "Reports must be objective, factual, and written predominantly in the third person or passive voice.",
        "Use distinct headings and numbered or bulleted lists for findings to maximize skimmability.",
        "Always separate 'Findings / Observations' from 'Recommendations / Next Steps'.",
        "Avoid emotional, vague, or exaggerated language; focus on concrete metrics and timelines."
      ],
      template: `REPORT ON: [Title of the Investigation / Event]
PREPARED BY: [Your Name / Committee Designation]
DATE OF SUBMISSION: [12 November 2026]
TARGET AUDIENCE: [Academic Council / Executive Board]

1. EXECUTIVE SUMMARY
A concise 2-sentence synopsis summarizing the purpose of the report, primary findings, and key recommendations.

2. BACKGROUND & OBJECTIVES
Explain why this assessment was commissioned and what specific parameters were evaluated.

3. METHODOLOGY
Describe how information was gathered (e.g., student surveys, laboratory observations, performance analytics).

4. KEY FINDINGS
- Finding 1: [Specific observed data point or pattern]
- Finding 2: [Identified challenge or positive metric]
- Finding 3: [Secondary observation]

5. RECOMMENDATIONS
1. [Actionable recommendation with proposed timeline]
2. [Resource or policy adjustment]
3. [Monitoring mechanism for progress review]`
    },
    {
      id: "creative",
      name: "Creative Writing",
      icon: "feather",
      description: "Imaginative storytelling, personal narrative, evocative descriptions, and dialogue development.",
      prompts: [
        {
          id: "cp-1",
          title: "The Clockmaker of Whispering Street",
          prompt: "Write a short speculative story about an elderly artisan whose handcrafted mechanical clocks do not measure seconds, but rather moments of profound human connection.",
          suggestedWords: "250 - 400 words"
        },
        {
          id: "cp-2",
          title: "The Last Train from Platform 7",
          prompt: "Narrate an unexpected encounter between two strangers stranded on an empty railway platform at midnight, revealing a surprising mutual connection.",
          suggestedWords: "250 - 400 words"
        },
        {
          id: "cp-3",
          title: "The First Human to Step on Europa's Ice",
          prompt: "Craft a vivid, tension-filled monologue or scene describing an astronaut taking the first historic footsteps upon the frozen crust of Jupiter's moon.",
          suggestedWords: "250 - 400 words"
        }
      ],
      tips: [
        "'Show, Don't Tell': Instead of saying 'He was nervous', describe his trembling fingers and shallow breath.",
        "Vary sentence rhythm: use short, punchy sentences during action or suspense, and longer lyrical sentences for contemplation.",
        "Ensure dialogue sounds natural and reveals character traits or advances the central conflict.",
        "Ground scenes with specific sensory details (sound, smell, temperature, texture)."
      ],
      template: `Title: [Enter Your Creative Title]

The air smelled of [sensory detail: ozone, damp parchment, cold steel]. 

[Opening Scene: Establish an intriguing visual or character action immediately]

[Development: Introduce tension, an obstacle, or a moment of choice]

"[Insert dialogue line that reveals character emotion or conflict]," she murmured, stepping closer.

[Climax / Epiphany: The decisive realization or shift in emotional energy]

[Resolution / Lingering Image: A closing sentence that echoes in the reader's imagination]`
    }
  ],

  // Comprehensive rule-based dictionaries for the Writing Feedback Engine
  spellingDictionary: {
    "definately": "definitely",
    "definitly": "definitely",
    "seperate": "separate",
    "seperated": "separated",
    "recieve": "receive",
    "recieved": "received",
    "recieving": "receiving",
    "untill": "until",
    "occured": "occurred",
    "occuring": "occurring",
    "accomodate": "accommodate",
    "accomodation": "accommodation",
    "arguement": "argument",
    "acheive": "achieve",
    "acheived": "achieved",
    "beleive": "believe",
    "beleived": "believed",
    "collaegue": "colleague",
    "collegue": "colleague",
    "commited": "committed",
    "concious": "conscious",
    "embarass": "embarrass",
    "embarassed": "embarrassed",
    "enviroment": "environment",
    "existance": "existence",
    "forein": "foreign",
    "fourty": "forty",
    "guarentee": "guarantee",
    "goverment": "government",
    "grammer": "grammar",
    "harrass": "harass",
    "hieght": "height",
    "independant": "independent",
    "inteligence": "intelligence",
    "knowlege": "knowledge",
    "liesure": "leisure",
    "maintainance": "maintenance",
    "neccessary": "necessary",
    "necesary": "necessary",
    "noticable": "noticeable",
    "ocassion": "occasion",
    "occassion": "occasion",
    "occurance": "occurrence",
    "persue": "pursue",
    "posession": "possession",
    "preceed": "precede",
    "prefered": "preferred",
    "priviledge": "privilege",
    "privlege": "privilege",
    "procede": "proceed",
    "pronounciation": "pronunciation",
    "reccomend": "recommend",
    "recomend": "recommend",
    "relevent": "relevant",
    "relavant": "relevant",
    "resistence": "resistance",
    "rythm": "rhythm",
    "suprise": "surprise",
    "tommorow": "tomorrow",
    "tommorrow": "tomorrow",
    "truely": "truly",
    "twelth": "twelfth",
    "unfortunatly": "unfortunately",
    "wierd": "weird",
    "writting": "writing",
    "writtin": "written"
  },

  // Grammar & style pattern rules
  grammarRules: [
    {
      id: "gr-sv-1",
      pattern: /\b(they|we|you)\s+was\b/i,
      message: "Subject-Verb disagreement: 'was' is singular. Use 'were' with plural pronouns (they, we, you).",
      replacement: "$1 were"
    },
    {
      id: "gr-sv-2",
      pattern: /\b(he|she|it)\s+have\b/i,
      message: "Subject-Verb disagreement: Third-person singular subjects (he, she, it) take 'has', not 'have'.",
      replacement: "$1 has"
    },
    {
      id: "gr-sv-3",
      pattern: /\b(he|she|it)\s+don'?t\b/i,
      message: "Subject-Verb disagreement: Third-person singular subjects take 'doesn't', not 'don't'.",
      replacement: "$1 doesn't"
    },
    {
      id: "gr-double-modal",
      pattern: /\b(can|could|will|would|should|must)\s+able\s+to\b/i,
      message: "Double modal redundancy: Avoid combining modal auxiliaries with 'able to'. Use either 'can/could' or 'be able to'.",
      replacement: "can"
    },
    {
      id: "gr-redundant-return",
      pattern: /\b(return|revert|repeat)\s+back\b/i,
      message: "Redundant phrasing: 'Back' is already implied in 'return', 'revert', or 'repeat'. Omit 'back'.",
      replacement: "$1"
    },
    {
      id: "gr-article-apple",
      pattern: /\ba\s+([aeiou][a-z]+)\b/i,
      filter: (match, word) => {
        const exceptions = ["university", "unit", "unique", "union", "european", "one", "uniform"];
        return !exceptions.includes(word.toLowerCase());
      },
      message: "Article error: Use 'an' before words beginning with a vowel sound.",
      replacement: "an $1"
    },
    {
      id: "gr-article-hour",
      pattern: /\ba\s+(hour|honest|honor|heir)\b/i,
      message: "Article error: The 'h' is silent, so use 'an' before vowel sounds ('an $1').",
      replacement: "an $1"
    },
    {
      id: "gr-repeated-words",
      pattern: /\b(the|and|is|it|that|in|to|of)\s+\1\b/i,
      message: "Duplicate word detected: You have repeated '$1'.",
      replacement: "$1"
    },
    {
      id: "gr-their-there",
      pattern: /\btheir\s+(is|are|was|were)\b/i,
      message: "Confused homophone: Did you mean 'there' (indicating existence/location) instead of 'their' (possessive)?",
      replacement: "there $1"
    },
    {
      id: "gr-your-youre",
      pattern: /\byour\s+(welcome|right|wrong|going|doing)\b/i,
      message: "Confused homophone: Did you mean 'you're' (contraction of 'you are') instead of 'your' (possessive)?",
      replacement: "you're $1"
    },
    {
      id: "gr-could-of",
      pattern: /\b(could|should|would|must)\s+of\b/i,
      message: "Grammar mistake: Did you mean '$1 have' instead of '$1 of'?",
      replacement: "$1 have"
    }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.WRITING_DATA = WRITING_DATA;
}

