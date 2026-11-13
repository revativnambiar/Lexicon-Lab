/**
 * LEXICON LAB - Word Explorer Data
 * Aligned with Course Outcome CO1: English grammar and sentence formation
 */

const VOCABULARY_DATA = {
  words: [
    {
      id: "eloquent",
      word: "Eloquent",
      phonetic: "/ˈel.ə.kwənt/",
      pos: "adjective",
      level: "Intermediate",
      category: "Communication",
      definition: "Fluent, forceful, and persuasive in speaking or writing; vividly expressive.",
      synonyms: ["Articulate", "Persuasive", "Fluent", "Expressive", "Silver-tongued"],
      antonyms: ["Inarticulate", "Hesitant", "Halting", "Unclear", "Dull"],
      examples: [
        "She delivered an eloquent speech that moved the entire audience to tears.",
        "His defense was an eloquent appeal to reason and compassion."
      ],
      idiomRelated: "Gift of the gab (The ability to speak with eloquence and fluency)",
      etymology: "From Latin 'eloqui' meaning 'to speak out' (e- 'out' + loqui 'to speak').",
      tip: "Use 'eloquent' not just for people, but also for gestures, glances, or written arguments."
    },
    {
      id: "resilient",
      word: "Resilient",
      phonetic: "/rɪˈzɪl.jənt/",
      pos: "adjective",
      level: "Intermediate",
      category: "Personal Growth",
      definition: "Able to withstand or recover quickly from difficult conditions, adversity, or shocks.",
      synonyms: ["Adaptable", "Tough", "Tenacious", "Buoyant", "Enduring"],
      antonyms: ["Fragile", "Vulnerable", "Brittle", "Weak"],
      examples: [
        "The coastal ecosystem proved remarkably resilient in the aftermath of the cyclone.",
        "Resilient leaders view setbacks as stepping stones toward mastery."
      ],
      idiomRelated: "Bounce back (To recover quickly from a setback or disappointment)",
      etymology: "From Latin 'resilire' meaning 'to leap back' or 'rebound'.",
      tip: "Pair with nouns like 'mindset', 'economy', 'infrastructure', or 'community'."
    },
    {
      id: "pragmatic",
      word: "Pragmatic",
      phonetic: "/præɡˈmæt.ɪk/",
      pos: "adjective",
      level: "Intermediate",
      category: "Academic & Professional",
      definition: "Dealing with things sensibly and realistically based on practical rather than theoretical considerations.",
      synonyms: ["Practical", "Sensible", "Down-to-earth", "Utilitarian", "Realistic"],
      antonyms: ["Idealistic", "Impractical", "Dogmatic", "Visionary"],
      examples: [
        "Rather than debating abstract theories, the engineer proposed a pragmatic solution.",
        "She took a pragmatic approach to time management during the exam period."
      ],
      idiomRelated: "Down to earth (Practical, realistic, and unpretentious)",
      etymology: "From Greek 'pragmatikos' relating to fact, deed, or practical business.",
      tip: "Contrast with 'dogmatic' or 'ideological' when analyzing decision-making styles."
    },
    {
      id: "lucid",
      word: "Lucid",
      phonetic: "/ˈluː.sɪd/",
      pos: "adjective",
      level: "Intermediate",
      category: "Communication",
      definition: "Expressed clearly; easy to understand; showing an ability to think clearly.",
      synonyms: ["Clear", "Coherent", "Intelligible", "Transparent", "Luminous"],
      antonyms: ["Confusing", "Ambiguous", "Muddled", "Obscure"],
      examples: [
        "The professor gave a lucid explanation of quantum entanglement that even novices appreciated.",
        "Despite his advanced age, he remained remarkably lucid and sharp."
      ],
      idiomRelated: "Crystal clear (Completely transparent and easy to understand)",
      etymology: "From Latin 'lucidus' meaning 'light, bright, or shining'.",
      tip: "Often used to describe explanations, prose style, arguments, and states of consciousness."
    },
    {
      id: "meticulous",
      word: "Meticulous",
      phonetic: "/məˈtɪk.jə.ləs/",
      pos: "adjective",
      level: "Intermediate",
      category: "Academic & Professional",
      definition: "Showing great attention to detail; very careful and precise.",
      synonyms: ["Conscientious", "Scrupulous", "Painstaking", "Thorough", "Exact"],
      antonyms: ["Careless", "Slapdash", "Negligent", "Sloppy"],
      examples: [
        "Her meticulous laboratory notes enabled other researchers to replicate the breakthrough.",
        "The manuscript was edited with meticulous precision."
      ],
      idiomRelated: "Dot your i's and cross your t's (Pay meticulous attention to every small detail)",
      etymology: "From Latin 'meticulosus' (originally 'fearful', evolving to 'painstakingly scrupulous').",
      tip: "Meticulous carries a positive connotation of excellence and rigorous care."
    },
    {
      id: "ubiquitous",
      word: "Ubiquitous",
      phonetic: "/juːˈbɪk.wɪ.təs/",
      pos: "adjective",
      level: "Advanced",
      category: "Academic & Professional",
      definition: "Present, appearing, or found everywhere at the same time.",
      synonyms: ["Omnipresent", "Pervasive", "Everywhere", "Universal", "Prevalent"],
      antonyms: ["Rare", "Scarce", "Infrequent", "Isolated"],
      examples: [
        "Smartphones have become ubiquitous across virtually every segment of modern society.",
        "Plastic containers are a ubiquitous presence in modern consumer culture."
      ],
      idiomRelated: "All over the map (Found everywhere or widely dispersed)",
      etymology: "From Latin 'ubique' meaning 'everywhere'.",
      tip: "Ideal for essays discussing modern technology, social habits, or media presence."
    },
    {
      id: "ephemeral",
      word: "Ephemeral",
      phonetic: "/ɪˈfem.ər.əl/",
      pos: "adjective",
      level: "Advanced",
      category: "Descriptive",
      definition: "Lasting for a very short time; transitory; fleeting.",
      synonyms: ["Transient", "Fleeting", "Short-lived", "Evaneacent", "Momentary"],
      antonyms: ["Permanent", "Eternal", "Enduring", "Perpetual"],
      examples: [
        "Fame on social media is often ephemeral, vanishing as quickly as the next viral trend.",
        "The ephemeral beauty of cherry blossoms draws millions of spectators each spring."
      ],
      idiomRelated: "Flash in the pan (A fleeting success that will not be repeated)",
      etymology: "From Greek 'ephemeros' (epi 'upon' + hemera 'day' - lasting only a single day).",
      tip: "Pair with concepts like 'trends', 'fame', 'seasons', or 'pleasures'."
    },
    {
      id: "cogent",
      word: "Cogent",
      phonetic: "/ˈkəʊ.dʒənt/",
      pos: "adjective",
      level: "Advanced",
      category: "Communication",
      definition: "(Of an argument or case) clear, logical, and convincing.",
      synonyms: ["Compelling", "Persuasive", "Convincing", "Sound", "Well-reasoned"],
      antonyms: ["Unconvincing", "Weak", "Ineffective", "Flawed"],
      examples: [
        "She presented a cogent argument for reforming university admission standards.",
        "The report lacked cogent evidence to substantiate its dramatic conclusions."
      ],
      idiomRelated: "Hold water (To remain sound, logical, and convincing under scrutiny)",
      etymology: "From Latin 'cogere' meaning 'to compel or drive together'.",
      tip: "Use 'cogent' specifically when evaluating academic arguments, legal briefs, and debate points."
    },
    {
      id: "profound",
      word: "Profound",
      phonetic: "/prəˈfaʊnd/",
      pos: "adjective",
      level: "Intermediate",
      category: "Personal Growth",
      definition: "Having deep insight, understanding, or intensity; extending far beneath the surface.",
      synonyms: ["Deep", "Insightful", "Intense", "Far-reaching", "Penetrating"],
      antonyms: ["Superficial", "Shallow", "Trivial", "Mild"],
      examples: [
        "The discovery of penicillin had a profound impact on global medicine.",
        "His philosophical lectures sparked profound introspection among his students."
      ],
      idiomRelated: "Food for thought (Something that warrants deep and profound reflection)",
      etymology: "From Latin 'profundus' (pro 'forward' + fundus 'bottom' - deep).",
      tip: "Apply to 'impact', 'insights', 'implications', 'silence', or 'wisdom'."
    },
    {
      id: "candid",
      word: "Candid",
      phonetic: "/ˈkæn.dɪd/",
      pos: "adjective",
      level: "Intermediate",
      category: "Communication",
      definition: "Truthful and straightforward; frank; outspoken without reservation.",
      synonyms: ["Frank", "Direct", "Blunt", "Honest", "Straightforward"],
      antonyms: ["Guarded", "Secretive", "Disingenuous", "Deceptive"],
      examples: [
        "In a candid interview, the CEO admitted the company had expanded too aggressively.",
        "We appreciated her candid feedback regarding our initial presentation."
      ],
      idiomRelated: "Call a spade a spade (Speak frankly and directly without euphemism)",
      etymology: "From Latin 'candidus' meaning 'pure white, radiant, unstained'.",
      tip: "A 'candid discussion' implies openness and absence of diplomatic hesitation."
    },
    {
      id: "catalyst",
      word: "Catalyst",
      phonetic: "/ˈkæt.əl.ɪst/",
      pos: "noun",
      level: "Intermediate",
      category: "Academic & Professional",
      definition: "A person or thing that precipitates an event or accelerates change without being consumed by it.",
      synonyms: ["Impetus", "Stimulus", "Trigger", "Spark", "Agent of change"],
      antonyms: ["Deterrent", "Inhibitor", "Obstacle", "Barrier"],
      examples: [
        "The community clean-up drive served as a catalyst for broader environmental awareness.",
        "Technological disruption was the primary catalyst behind the industry's overhaul."
      ],
      idiomRelated: "Spark the flame (Initiate or ignite significant action or change)",
      etymology: "From chemistry, borrowed from Greek 'katalusis' meaning 'dissolution'.",
      tip: "Metaphorically describes social reformers, visionary speeches, or watershed historical events."
    },
    {
      id: "tenacious",
      word: "Tenacious",
      phonetic: "/təˈneɪ.ʃəs/",
      pos: "adjective",
      level: "Intermediate",
      category: "Personal Growth",
      definition: "Tending to keep a firm hold of something; clinging or adhering closely; persistent.",
      synonyms: ["Persistent", "Determined", "Dogged", "Resolute", "Persevering"],
      antonyms: ["Surrendering", "Weak-willed", "Wavering", "Yielding"],
      examples: [
        "Through tenacious dedication, the young athlete overcame three career-threatening injuries.",
        "Her tenacious pursuit of the truth uncovered widespread financial malfeasance."
      ],
      idiomRelated: "Stick to your guns (Hold resolutely to your principles or commitments)",
      etymology: "From Latin 'tenax' (from tenere 'to hold').",
      tip: "Conveys gritty resolve in the face of continuous obstacles."
    },
    {
      id: "empathy",
      word: "Empathy",
      phonetic: "/ˈem.pə.θi/",
      pos: "noun",
      level: "Foundational",
      category: "Personal Growth",
      definition: "The ability to understand and share the feelings, perspectives, and experiences of another.",
      synonyms: ["Compassion", "Sensitivity", "Understanding", "Insight", "Fellow feeling"],
      antonyms: ["Apathy", "Indifference", "Callousness", "Aloofness"],
      examples: [
        "Great orators demonstrate deep empathy with the concerns of their audience.",
        "Empathy bridges cultural divides and fosters constructive dialogue."
      ],
      idiomRelated: "Walk a mile in someone's shoes (Experience someone else's circumstances before judging them)",
      etymology: "From Greek 'empatheia' (em 'in' + pathos 'feeling').",
      tip: "Distinguish from 'sympathy': sympathy is feeling pity for someone; empathy is experiencing their emotion with them."
    },
    {
      id: "paradigm",
      word: "Paradigm",
      phonetic: "/ˈpær.ə.daɪm/",
      pos: "noun",
      level: "Advanced",
      category: "Academic & Professional",
      definition: "A typical example or pattern of something; a distinct set of concepts, theories, or thought patterns.",
      synonyms: ["Model", "Archetype", "Pattern", "Standard", "Framework"],
      antonyms: ["Anomaly", "Aberration", "Irregularity"],
      examples: [
        "The shift to renewable energy represents a fundamental paradigm change in modern economics.",
        "Quantum physics ushered in a new paradigm for how we conceptualize reality."
      ],
      idiomRelated: "Shift the needle (Make a noticeable, meaningful change in direction or standard)",
      etymology: "From Greek 'paradeigma' meaning 'pattern, model, or example'.",
      tip: "Commonly used in the collocation 'paradigm shift'."
    },
    {
      id: "scrutinize",
      word: "Scrutinize",
      phonetic: "/ˈskruː.tɪ.naɪz/",
      pos: "verb",
      level: "Intermediate",
      category: "Academic & Professional",
      definition: "To examine or inspect closely and thoroughly.",
      synonyms: ["Examine", "Inspect", "Analyze", "Investigate", "Probe"],
      antonyms: ["Glance at", "Overlook", "Ignore", "Skim"],
      examples: [
        "Auditors meticulously scrutinized every line item in the financial ledger.",
        "The peer review committee scrutinized the methodology before certifying the experiment."
      ],
      idiomRelated: "Go over with a fine-tooth comb (Examine with extraordinary, meticulous attention)",
      etymology: "From Latin 'scrutinium' meaning 'search, inquiry' (from scrutari 'to examine').",
      tip: "Use when describing rigorous academic review, legal inspection, or investigative work."
    },
    {
      id: "innovative",
      word: "Innovative",
      phonetic: "/ˈɪn.ə.veɪ.tɪv/",
      pos: "adjective",
      level: "Foundational",
      category: "Academic & Professional",
      definition: "Featuring new methods; advanced and original.",
      synonyms: ["Inventive", "Original", "Pioneering", "Novel", "Cutting-edge"],
      antonyms: ["Conventional", "Traditional", "Derivative", "Outdated"],
      examples: [
        "The startup developed an innovative solar desalinator for arid rural communities.",
        "Innovative teaching methodologies stimulate students' critical problem-solving skills."
      ],
      idiomRelated: "Think outside the box (Think creatively and unconventionally)",
      etymology: "From Latin 'innovare' meaning 'to renew, alter, or make new'.",
      tip: "Use to characterize breakthrough technology, fresh writing, or creative solutions."
    },
    {
      id: "superfluous",
      word: "Superfluous",
      phonetic: "/suːˈpɜː.flu.əs/",
      pos: "adjective",
      level: "Advanced",
      category: "Communication",
      definition: "Exceeding what is sufficient or necessary; extra; unnecessary.",
      synonyms: ["Redundant", "Excessive", "Surplus", "Unneeded", "Expendable"],
      antonyms: ["Essential", "Vital", "Necessary", "Indispensable"],
      examples: [
        "The editor pruned superfluous adverbs to make the author's prose tight and punchy.",
        "He avoided adding superfluous slides that would dilute his core speech message."
      ],
      idiomRelated: "Gild the lily (Add unnecessary ornament to something already sufficient)",
      etymology: "From Latin 'superfluus' (super 'over' + fluere 'to flow' - overflowing).",
      tip: "A critical word for editing essays and refining speech delivery."
    },
    {
      id: "articulate",
      word: "Articulate",
      phonetic: "/ɑːˈtɪk.jə.lət/",
      pos: "adjective / verb",
      level: "Intermediate",
      category: "Communication",
      definition: "Having or showing the ability to speak fluently and coherently; to express an idea clearly.",
      synonyms: ["Clear-spoken", "Expressive", "Lucid", "Enunciate", "Vocalize"],
      antonyms: ["Tongue-tied", "Muffled", "Incoherent", "Unclear"],
      examples: [
        "As an articulate debater, she dismantled the opponent's premise in under three minutes.",
        "It is crucial to articulate your main thesis statement in the introductory paragraph."
      ],
      idiomRelated: "Speak your mind (State your opinions clearly, openly, and directly)",
      etymology: "From Latin 'articulatus' (divided into joints, distinct).",
      tip: "Pronounced /ˈtɪk.jə.lət/ as an adjective; /ˈtɪk.jə.leɪt/ as a verb."
    },
    {
      id: "pristine",
      word: "Pristine",
      phonetic: "/ˈprɪs.tiːn/",
      pos: "adjective",
      level: "Intermediate",
      category: "Descriptive",
      definition: "In its original condition; unspoiled; clean and fresh as if new.",
      synonyms: ["Immaculate", "Flawless", "Untouched", "Pure", "Spotless"],
      antonyms: ["Spoiled", "Tarnished", "Polluted", "Defiled"],
      examples: [
        "The national reserve preserves acres of pristine alpine wilderness.",
        "The rare 19th-century manuscript arrived in pristine condition."
      ],
      idiomRelated: "Spick and span (Neat, clean, and in spotless order)",
      etymology: "From Latin 'pristinus' meaning 'former, early, original'.",
      tip: "Commonly paired with environment, condition, waters, or heritage."
    },
    {
      id: "nuance",
      word: "Nuance",
      phonetic: "/ˈnjuː.ɑːns/",
      pos: "noun",
      level: "Intermediate",
      category: "Communication",
      definition: "A subtle difference in or shade of meaning, expression, tone, or sound.",
      synonyms: ["Subtlety", "Fine distinction", "Shade", "Gradation", "Subtleness"],
      antonyms: ["Directness", "Crude distinction", "Bluntness"],
      examples: [
        "A seasoned translator captures every emotional nuance of the original dialogue.",
        "Political speeches often lack nuance when reduced to ten-second soundbites."
      ],
      idiomRelated: "Read between the lines (Discern hidden or subtle meaning not openly expressed)",
      etymology: "From French 'nuance' (shading), from 'nue' (cloud).",
      tip: "Use when evaluating literary tone, diplomatic negotiations, and oratorical subtlety."
    }
  ],

  // Curated Idioms & Phrases Collection
  idioms: [
    {
      id: "id-1",
      phrase: "Bite the bullet",
      meaning: "Face a grim, inevitable situation with fortitude and courage rather than delaying.",
      origin: "Derived from the military practice of giving wounded soldiers a lead bullet to bite on during emergency surgery without anesthesia.",
      example: "After weeks of procrastinating, he decided to bite the bullet and begin writing his graduation dissertation.",
      category: "Perseverance"
    },
    {
      id: "id-2",
      phrase: "Break the ice",
      meaning: "Initiate conversation or interaction in an awkward, unfamiliar, or formal social setting.",
      origin: "Originated from specialized icebreaker ships carving paths through frozen waterways to facilitate trade.",
      example: "The speaker shared a witty personal anecdote to break the ice before addressing the contentious topic.",
      category: "Communication"
    },
    {
      id: "id-3",
      phrase: "Burn the midnight oil",
      meaning: "Work, study, or labor late into the night.",
      origin: "Refers to the historic era before electric lighting when individuals relied on oil lamps to read and write after sunset.",
      example: "The debating team burned the midnight oil perfecting their rebuttals before the state tournament.",
      category: "Dedication"
    },
    {
      id: "id-4",
      phrase: "A blessing in disguise",
      meaning: "A misfortune that unexpectedly results in something good or advantageous later on.",
      origin: "Found in 18th-century English literature, emphasizing unforeseen silver linings.",
      example: "Missing that flight proved to be a blessing in disguise, as he met his future business co-founder in the transit lounge.",
      category: "Perspective"
    },
    {
      id: "id-5",
      phrase: "Beat around the bush",
      meaning: "Discuss a topic in an evasive, roundabout manner without getting directly to the essential point.",
      origin: "Comes from medieval bird hunting, where beaters struck bushes to flush out game without approaching them directly.",
      example: "Stop beating around the bush and tell the committee why the project deadline was missed.",
      category: "Communication"
    },
    {
      id: "id-6",
      phrase: "Hit the nail on the head",
      meaning: "Describe the exact essence of a situation or problem with absolute precision.",
      origin: "Carpentry metaphor for striking a nail cleanly on its center.",
      example: "Her insightful summary of the reading passage hit the nail on the head.",
      category: "Precision"
    },
    {
      id: "id-7",
      phrase: "Call it a day",
      meaning: "Decide to cease working on an activity for the remainder of the day.",
      origin: "Evolved from the late 19th-century phrase 'call it half a day', used by workers packing up their tools.",
      example: "We have finalized three speech outlines; let us call it a day and resume tomorrow.",
      category: "Productivity"
    },
    {
      id: "id-8",
      phrase: "Play devil's advocate",
      meaning: "Argue against an idea or propose contrary arguments purely to test the strength of a hypothesis.",
      origin: "From the Roman Catholic Church's official 'Advocatus Diaboli', appointed to rigorously challenge arguments for canonization.",
      example: "Allow me to play devil's advocate: what if user adoption drops once the trial period expires?",
      category: "Critical Thinking"
    },
    {
      id: "id-9",
      phrase: "Through the grapevine",
      meaning: "Learn or hear information through informal gossip, rumor, or word of mouth.",
      origin: "Referenced the early telegraph network during the American Civil War, whose tangled wires resembled wild grapevines.",
      example: "I heard through the grapevine that the university is launching an advanced public speaking laboratory.",
      category: "Communication"
    },
    {
      id: "id-10",
      phrase: "Take with a grain of salt",
      meaning: "View or accept an assertion with skepticism or sensible reservation.",
      origin: "From Pliny the Elder's natural history account of an antidote to poison taken with a grain of salt to aid ingestion.",
      example: "Take early social media rumors with a grain of salt until verified by authoritative sources.",
      category: "Critical Thinking"
    }
  ],

  // Interactive Vocabulary Quizzes
  quizzes: [
    {
      id: "vq-1",
      type: "synonym",
      question: "Which of the following words is the closest synonym for 'ELOQUENT'?",
      options: ["Articulate", "Hesitant", "Ambiguous", "Verbose"],
      correct: 0,
      explanation: "'Articulate' means expressing oneself fluently and coherently, making it the premier synonym for 'eloquent'."
    },
    {
      id: "vq-2",
      type: "antonym",
      question: "What is the direct antonym of the word 'RESILIENT'?",
      options: ["Fragile", "Tenacious", "Dynamic", "Unyielding"],
      correct: 0,
      explanation: "'Resilient' signifies the ability to withstand shock and bounce back, whereas 'fragile' denotes vulnerability to breakage."
    },
    {
      id: "vq-3",
      type: "context",
      question: "Choose the word that best completes the sentence: 'The startup adopted a ________ mindset, choosing realistic solutions over grandiose but unfeasible theories.'",
      options: ["Superfluous", "Pragmatic", "Ephemeral", "Muddled"],
      correct: 1,
      explanation: "'Pragmatic' means practical, sensible, and focused on realistic execution rather than abstract speculation."
    },
    {
      id: "vq-4",
      type: "definition",
      question: "What does the word 'UBIQUITOUS' mean?",
      options: [
        "Extremely ancient or traditional",
        "Existing or found everywhere simultaneously",
        "Short-lived and momentary",
        "Highly controversial and debatable"
      ],
      correct: 1,
      explanation: "'Ubiquitous' comes from Latin 'ubique' meaning everywhere, such as smartphones in contemporary society."
    },
    {
      id: "vq-5",
      type: "idiom",
      question: "If someone tells you to 'bite the bullet', they mean you should:",
      options: [
        "Postpone your duties until tomorrow",
        "Confront a difficult ordeal with brave resolve",
        "Speak loudly and forcefully to a group",
        "Search meticulously for minute mistakes"
      ],
      correct: 1,
      explanation: "'Bite the bullet' means to summon courage and endure an inevitable difficulty without shrinking back."
    },
    {
      id: "vq-6",
      type: "synonym",
      question: "Which word is the closest synonym for 'METICULOUS'?",
      options: ["Painstaking", "Hasty", "Careless", "Vague"],
      correct: 0,
      explanation: "'Painstaking' means thorough and paying close attention to every detail, identical in spirit to 'meticulous'."
    }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.VOCABULARY_DATA = VOCABULARY_DATA;
}

