/**
 * LEXICON LAB - Reading Hub Data
 * Aligned with Course Outcome CO4: Summarizing information
 */

const READING_DATA = {
  categories: ["All", "Technology", "Science", "Environment", "Society", "Personal Development"],
  
  passages: [
    {
      id: "tech-ai-frontier",
      category: "Technology",
      title: "The AI Frontier: Balancing Algorithmic Power and Human Agency",
      author: "Lexicon Lab Academic Press",
      readTime: "3 mins",
      wordCount: 382,
      difficulty: "Intermediate",
      summaryPromptRange: { min: 45, max: 90 },
      excerpt: "As artificial intelligence permeates education, commerce, and creative pursuits, the central dilemma shifts from technical feasibility to ethical stewardship and cognitive independence.",
      content: [
        "In the opening decades of the twenty-first century, artificial intelligence ceased to be an esoteric laboratory curiosity and emerged as the primary infrastructure of modern intellectual life. Generative models synthesize prose, automated algorithms diagnose radiological scans, and machine-learning recommendation engines curate the informational diet of billions. Yet as algorithmic precision advances, society confronts a poignant philosophical question: how do we preserve autonomous human judgment in an era governed by probabilistic calculations?",
        "Proponents of widespread automation argue that delegating repetitive cognitive tasks liberates human talent for higher-order creativity and empathetic problem-solving. A doctor relieved of mundane administrative charting can devote undivided attention to patient care; an engineer supported by predictive code-completion can focus on macro-architectural design. In this optimistic paradigm, artificial intelligence acts not as a replacement for human intellect, but as an amplifier that elevates human potential.",
        "However, cognitive scientists warn against the perils of 'cognitive offloading'—the tendency to delegate critical thinking, memorization, and reasoning entirely to external digital tools. When students rely exclusively on automated generators to draft essays, their foundational capacities for synthesizing complex arguments and wrestling with grammatical nuances atrophy. Language is not merely a tool for output; it is the cognitive scaffold through which human beings formulate, test, and refine original thoughts.",
        "Consequently, the educational frontier demands a balanced approach known as 'collaborative stewardship.' Rather than outlawing intelligent tools or surrendering unconditionally to them, learners must cultivate meta-cognitive vigilance. We must learn to interrogate machine outputs, detect subtle algorithmic hallucinations, and preserve our distinctive capacity for moral reflection. The future belongs not to machines that mimic human speech, but to humans who wield technology with clarity, ethical discernment, and intellectual agency."
      ],
      comprehensionQuestions: [
        {
          id: "cq-1",
          question: "According to the passage, what is the primary benefit advocated by proponents of cognitive automation?",
          options: [
            "It permanently eliminates the necessity for human doctors and engineers.",
            "It frees professionals from routine tasks to focus on higher-order empathy and macro-level design.",
            "It ensures that students no longer need to write or read essays.",
            "It guarantees that algorithms will possess genuine moral conscience."
          ],
          correct: 1,
          explanation: "Paragraph 2 explicitly states that delegating routine tasks liberates humans for higher-order creativity, macro-architectural design, and empathetic problem-solving."
        },
        {
          id: "cq-2",
          question: "What specific risk is associated with 'cognitive offloading' in paragraph 3?",
          options: [
            "Computers will suffer from hardware overheating.",
            "Human skills in analytical thinking, language formulation, and reasoning may atrophy.",
            "Medical charts will become completely illegible.",
            "Digital devices will become unaffordable for developing nations."
          ],
          correct: 1,
          explanation: "Paragraph 3 cautions that over-relying on automated tools causes core cognitive faculties—such as synthesizing arguments and internalizing language mechanics—to atrophy."
        },
        {
          id: "cq-3",
          question: "What does the phrase 'collaborative stewardship' encapsulate in the conclusion?",
          options: [
            "A total ban on artificial intelligence across secondary schools.",
            "Complete reliance on algorithms for administrative governance.",
            "Balancing technological usage with meta-cognitive vigilance and ethical discernment.",
            "Creating machines that operate without any human intervention."
          ],
          correct: 2,
          explanation: "The conclusion defines 'collaborative stewardship' as interrogating algorithmic outputs with meta-cognitive vigilance, ethical discernment, and intellectual agency."
        }
      ],
      summaryData: {
        targetLength: "50 to 80 words",
        keyThemes: [
          "Rise of artificial intelligence as everyday infrastructure",
          "Potential benefits of freeing humans from repetitive cognitive tasks",
          "Risk of cognitive offloading and atrophy of critical reasoning",
          "Need for collaborative stewardship and ethical human discernment"
        ],
        keywords: ["artificial intelligence", "cognitive offloading", "creativity", "ethical", "stewardship", "judgment", "thinking"],
        modelSummary: "Artificial intelligence has transformed modern society by automating complex tasks and potentially liberating humans for creative pursuits. However, excessive cognitive offloading threatens our critical reasoning and independent language formulation. Rather than rejecting or blindly accepting automated tools, society must practice collaborative stewardship—maintaining ethical vigilance, interrogating machine outputs, and utilizing technology to augment human intellectual agency.",
        keyTakeaways: [
          "AI amplifies efficiency but carries risks when fundamental thinking is outsourced.",
          "Language and writing serve as cognitive scaffolds for original human contemplation.",
          "Collaborative stewardship balances algorithmic capability with human ethical vigilance."
        ]
      }
    },
    {
      id: "sci-neuroplasticity",
      category: "Science",
      title: "Neuroplasticity: Rewiring the Adult Brain for Lifelong Learning",
      author: "Cognitive Science Journal",
      readTime: "3 mins",
      wordCount: 412,
      difficulty: "Intermediate",
      summaryPromptRange: { min: 45, max: 90 },
      excerpt: "For centuries, medical doctrine insisted that the adult brain was a static, unchangeable machine. Modern neuroscience has shattered this dogma through the discovery of neuroplasticity.",
      content: [
        "Throughout much of the twentieth century, conventional medical wisdom held that the architecture of the adult human brain was essentially immutable. Anatomists believed that once neural circuits stabilized following childhood development, brain cells gradually died without replacement, locking individuals into fixed cognitive capacities. Today, revolutionary neuroimaging techniques have demolished this fatalistic assumption, replacing it with the dynamic concept of neuroplasticity.",
        "Neuroplasticity refers to the central nervous system's remarkable ability to modify its structural organization and functional connections in response to experiential demands. When an individual acquires a new language, practices a musical instrument, or adopts novel problem-solving habits, neurons fire in novel configurations. Over time, recurring electrical signals stimulate the growth of dendritic spines, thicken myelin sheaths around axons, and establish durable synaptic pathways—a process famously summarized as 'neurons that fire together, wire together.'",
        "Importantly, this neurological malleability persists across the entire human lifespan. In landmark studies of London taxi drivers, researchers discovered that navigating the city's labyrinthine streets caused significant structural enlargement in the posterior hippocampus, the brain region dedicated to spatial memory. Furthermore, when individuals suffer traumatic brain injuries or strokes, targeted physical therapy can prompt adjacent, undamaged cortical regions to assume the functions previously executed by the injured tissue.",
        "Nevertheless, neuroplasticity is a double-edged sword. Just as intentional practice reinforces desirable intellectual habits, repetitive negative self-talk, chronic anxiety, and passive screen-scrolling physically carve unproductive pathways into neural tissue. Lifelong intellectual vitality therefore depends on deliberate cognitive exercise: reading challenging literature, debating nuanced viewpoints, learning new tongues, and embracing mental effort as the physical signature of neurological growth."
      ],
      comprehensionQuestions: [
        {
          id: "cq-4",
          question: "What historic assumption about the human brain was disproven by the discovery of neuroplasticity?",
          options: [
            "That the brain consumes twenty percent of human metabolic energy.",
            "That adult brain architecture is completely fixed and unalterable after childhood.",
            "That neurons communicate through electrical and chemical impulses.",
            "That the hippocampus is involved in memory processing."
          ],
          correct: 1,
          explanation: "Paragraph 1 highlights that conventional wisdom previously maintained the adult brain was static and incapable of structural alteration."
        },
        {
          id: "cq-5",
          question: "What physiological change occurs when neurons repeatedly fire together during deliberate learning?",
          options: [
            "Brain cells undergo permanent degeneration.",
            "Dendritic spines grow, myelin sheaths thicken, and synapses strengthen.",
            "Oxygen delivery to the skull is completely halted.",
            "The brain ceases electrical communication."
          ],
          correct: 1,
          explanation: "Paragraph 2 explains that sustained firing strengthens synaptic connections, stimulates dendritic spine formation, and thickens myelin sheaths."
        },
        {
          id: "cq-6",
          question: "Why does the author characterize neuroplasticity as a 'double-edged sword'?",
          options: [
            "It requires expensive surgical instruments to activate.",
            "It can strengthen destructive habits and chronic anxiety just as readily as positive skills.",
            "It only functions in childhood and vanishes by adulthood.",
            "It causes headaches when reading complex literature."
          ],
          correct: 1,
          explanation: "Paragraph 4 explains that negative behaviors like passive scrolling and chronic anxiety also physically carve unwanted pathways into neural tissue."
        }
      ],
      summaryData: {
        targetLength: "50 to 80 words",
        keyThemes: [
          "Demolition of the myth that the adult brain is immutable",
          "Definition of neuroplasticity as structural and functional rewiring",
          "Evidence of lifelong adaptability (e.g., London taxi drivers, stroke rehabilitation)",
          "The double-edged nature of neuroplasticity requiring deliberate mental exercise"
        ],
        keywords: ["neuroplasticity", "brain", "neurons", "synaptic", "adaptability", "deliberate", "habits"],
        modelSummary: "Modern neuroscience has overturned the belief that the adult brain is unchangeable through the discovery of neuroplasticity—the brain's capacity to remodel its neural circuitry in response to experience and practice. Studies confirm that learning stimulates new synaptic connections throughout adulthood. However, because harmful habits wire into the brain just as readily as beneficial skills, maintaining lifelong cognitive health requires deliberate intellectual challenge and active mental exercise.",
        keyTakeaways: [
          "The human brain retains the physical capacity to restructure itself throughout life.",
          "Neural pathways strengthen through repeated firing ('fire together, wire together').",
          "Deliberate cognitive effort is required to direct neuroplasticity toward constructive growth."
        ]
      }
    },
    {
      id: "env-circular-economy",
      category: "Environment",
      title: "The Circular Economy: Reimagining Resource Stewardship",
      author: "Sustainable Ecology Review",
      readTime: "3 mins",
      wordCount: 395,
      difficulty: "Intermediate",
      summaryPromptRange: { min: 45, max: 90 },
      excerpt: "The Industrial Revolution cemented a linear economic model of 'take, make, and dispose.' Confronting ecological boundaries requires transitioning to a closed-loop circular system.",
      content: [
        "Since the dawn of the Industrial Age, the global economy has functioned predominantly upon an extractive linear model commonly encapsulated as 'take, make, and dispose.' Raw materials are extracted from the earth, transformed into consumer commodities, and discarded into landfills or oceans once their immediate utility expires. While this linear throughput fueled unprecedented material prosperity, it has inflicted staggering ecological degradation, depleting non-renewable reserves and suffocating natural biospheres in synthetic waste.",
        "In response to this crisis, visionary economists and environmental scientists have championed the 'Circular Economy.' Inspired by biological ecosystems—where the waste of one organism forms the vital sustenance of another—a circular framework designs out waste from the initial blueprint. Rather than treating goods as disposable artifacts, manufacturing embraces restorative cycles: designing modular equipment that can be disassembled, repaired, refurbished, and recycled indefinitely without degrading material purity.",
        "This structural transition requires rethinking ownership paradigms. Under the emerging 'Product-as-a-Service' model, consumers do not buy lightbulbs or washing machines; instead, they purchase illumination hours or laundering cycles. Manufacturers retain ownership of the physical hardware, which creates a powerful economic incentive to engineer durable, long-lasting products that are effortlessly upgradeable rather than prematurely obsolete.",
        "Achieving a genuine circular economy is not merely a technical recycling challenge; it demands systemic cross-sector collaboration. Governments must incentivize regenerative manufacturing through smart tax policies, corporations must re-engineer supply chains, and consumers must discard disposable mindsets. By harmonizing industrial design with planetary boundaries, humanity can create durable prosperity without compromising the ecological health of future generations."
      ],
      comprehensionQuestions: [
        {
          id: "cq-7",
          question: "What is the primary flaw of the traditional 'linear economic model' described in the passage?",
          options: [
            "It relies entirely on solar and wind power.",
            "It extracts resources, manufactures goods, and creates massive ecological waste by disposing of them.",
            "It prohibits citizens from purchasing commercial electronics.",
            "It forces corporations to maintain indefinite ownership of products."
          ],
          correct: 1,
          explanation: "Paragraph 1 outlines the linear 'take, make, and dispose' model which depletes virgin reserves and generates unsustainable synthetic waste."
        },
        {
          id: "cq-8",
          question: "How does nature inspire the architectural design of a circular economy?",
          options: [
            "By encouraging species to consume all available resources rapidly.",
            "By operating in closed loops where the waste of one process becomes input for another.",
            "By ensuring all industrial machinery is crafted from wood and soil.",
            "By eliminating the need for any governmental legislation."
          ],
          correct: 1,
          explanation: "Paragraph 2 notes that circular design mimics natural ecosystems where nothing is wasted and outputs perpetually cycle into new inputs."
        },
        {
          id: "cq-9",
          question: "How does the 'Product-as-a-Service' model incentivize companies to produce durable goods?",
          options: [
            "Companies are penalized whenever customers use their services.",
            "Because manufacturers retain ownership, longer-lasting products minimize their maintenance and replacement costs.",
            "It bans all forms of recycling and refurbishment.",
            "Customers are legally required to repair broken machines themselves."
          ],
          correct: 1,
          explanation: "Paragraph 3 explains that when manufacturers retain ownership of the hardware, designing durable, repairable goods directly maximizes their profits."
        }
      ],
      summaryData: {
        targetLength: "50 to 80 words",
        keyThemes: [
          "Failure of the traditional linear 'take, make, dispose' paradigm",
          "Principles of the circular economy inspired by biological closed loops",
          "Product-as-a-Service model aligning corporate profits with durability",
          "Need for policy incentives and consumer cultural transformation"
        ],
        keywords: ["circular economy", "waste", "linear", "recycling", "sustainability", "manufacturing", "stewardship"],
        modelSummary: "The traditional linear model of 'take, make, dispose' has generated catastrophic ecological waste and resource exhaustion. In contrast, the circular economy mimics natural ecosystems by designing products for indefinite repair, modular reuse, and zero waste. By adopting 'Product-as-a-Service' models and aligning corporate incentives with hardware durability, societies can decouple industrial prosperity from environmental destruction through cross-sector collaboration.",
        keyTakeaways: [
          "Linear manufacturing models are fundamentally incompatible with finite planetary resources.",
          "Circular economics eliminates waste by design through repairability and material loops.",
          "Shifting from product ownership to service subscriptions encourages long-lasting design."
        ]
      }
    },
    {
      id: "soc-digital-communication",
      category: "Society",
      title: "The Evolving Nature of Human Communication in a Hyper-Connected World",
      author: "Sociological Perspectives",
      readTime: "3 mins",
      wordCount: 420,
      difficulty: "Intermediate",
      summaryPromptRange: { min: 45, max: 90 },
      excerpt: "Digital networks connect billions instantaneously, yet sociologists identify a growing paradox: we are more connected than ever, yet increasingly prone to loneliness and conversational superficiality.",
      content: [
        "In the span of a single generation, communication technology has fundamentally collapsed geographical distance. A university student in Mumbai can collaborate in real time with researchers in Toronto, while families separated across continents exchange video greetings with zero friction. Digital messaging, social feeds, and micro-blogging platforms have democratized information dissemination, giving voice to marginalized communities and fostering unprecedented global awareness.",
        "However, this unprecedented connectivity conceals a subtle psychological dilemma that sociologist Sherry Turkle characterizes as being 'alone together.' When human conversation is mediated exclusively through screens, communication is filtered through asynchronous text, curated photographs, and ephemeral reactions. We gain the illusion of friendship without the vulnerability of authentic human relationship. In prioritizing the velocity and volume of connections, we often sacrifice conversational depth.",
        "Furthermore, face-to-face dialogue provides rich non-verbal signals—subtle vocal inflections, fleeting micro-expressions, eye contact, and empathetic pauses—that text-based feeds cannot replicate. When these analog subtleties are stripped away, misunderstandings multiply. Digital exchanges frequently polarize into hostile tribal debates, as anonymity and algorithmic amplification reward outrage over nuanced contemplation.",
        "Reclaiming meaningful connection does not necessitate abandoning digital devices; rather, it requires intentional communication hygiene. We must intentionally carve out spaces for deep, unhurried, face-to-face dialogue. We must learn to listen with genuine empathy rather than merely composing rebuttals on our keyboards. As our world accelerates toward automated convenience, articulate, compassionate, and present communication remains the bedrock of a cohesive and civilized society."
      ],
      comprehensionQuestions: [
        {
          id: "cq-10",
          question: "What paradox does the passage explore regarding modern digital communication?",
          options: [
            "Internet access has become too expensive for young professionals.",
            "Despite instantaneous global connectivity, people experience conversational shallowness and emotional isolation.",
            "Computers consume less electricity than older landline phones.",
            "Video calls are completely prohibited in higher education."
          ],
          correct: 1,
          explanation: "Paragraph 2 explains the paradox of being 'alone together': possessing unprecedented connection velocity while suffering from conversational superficiality and emotional isolation."
        },
        {
          id: "cq-11",
          question: "What essential elements of face-to-face interaction are absent from text-based messaging?",
          options: [
            "Vocal inflection, micro-expressions, empathetic pauses, and eye contact.",
            "Keyboard shortcuts and automated autocorrect suggestions.",
            "Social media hashtags and follower metrics.",
            "Written transcripts and digital backup files."
          ],
          correct: 0,
          explanation: "Paragraph 3 notes that text exchanges lack non-verbal subtleties such as vocal inflections, fleeting micro-expressions, and eye contact, which fosters misunderstandings."
        },
        {
          id: "cq-12",
          question: "According to the author, what constitutes 'intentional communication hygiene'?",
          options: [
            "Permanently deleting all digital accounts and living off-grid.",
            "Preserving dedicated spaces for unhurried face-to-face conversation and empathetic listening.",
            "Using automated bots to answer incoming text messages.",
            "Responding immediately to every email notification."
          ],
          correct: 1,
          explanation: "Paragraph 4 explains that healthy communication hygiene involves cultivating spaces for unhurried, present, face-to-face dialogue and practicing deep empathetic listening."
        }
      ],
      summaryData: {
        targetLength: "50 to 80 words",
        keyThemes: [
          "Unprecedented speed and reach of global digital communication",
          "The 'alone together' paradox of superficial connection versus authentic intimacy",
          "Loss of non-verbal cues (vocal tone, eye contact) leading to polarization",
          "The call for intentional communication hygiene and present dialogue"
        ],
        keywords: ["communication", "digital", "connected", "conversation", "empathy", "non-verbal", "authentic"],
        modelSummary: "Digital technology has bridged global distances and democratized information, yet it has created a paradox of superficial hyper-connectivity. By substituting asynchronous screen interactions for rich, face-to-face dialogue, society risks losing non-verbal nuances, fostering polarization, and deepening emotional isolation. Cultivating meaningful relationships requires intentional communication hygiene—prioritizing empathetic listening, vulnerability, and unhurried human presence.",
        keyTakeaways: [
          "Connection volume does not equate to conversational intimacy or psychological depth.",
          "Non-verbal signals are vital for mutual understanding and resolving conflicts.",
          "True conversational competence balances digital efficiency with present, active listening."
        ]
      }
    },
    {
      id: "pd-deep-focus",
      category: "Personal Development",
      title: "The Architecture of Deep Focus: Reclaiming Attention in a Distracted Age",
      author: "Behavioral Productivity Quarterly",
      readTime: "3 mins",
      wordCount: 405,
      difficulty: "Intermediate",
      summaryPromptRange: { min: 45, max: 90 },
      excerpt: "Attention is our most precious cognitive asset, yet modern digital ecosystems are engineered to fracture it. Cultivating deep focus is the superpower of the knowledge economy.",
      content: [
        "In the modern knowledge economy, the capacity to concentrate without distraction on cognitively demanding tasks has become both extraordinarily rare and immensely valuable. Author and computer scientist Cal Newport terms this state 'Deep Work.' It represents the psychological condition wherein human cognition operates at peak capacity, unraveling intricate intellectual problems, mastering complicated skills, and generating high-impact creative output.",
        "Conversely, the modern knowledge worker spends their workday immersed in 'Shallow Work'—logistical, non-cognitively demanding duties like answering reactive emails, scrolling notification feeds, and attending perfunctory meetings. Psychological research demonstrates that the human brain does not truly multitask; rather, it rapidly switches attentional spotlights between tasks. Each switch leaves behind 'attention residue,' a cognitive lag that drains mental energy, impairs working memory, and elevates chronic stress.",
        "Furthermore, contemporary digital platforms are engineered specifically to exploit the brain's dopamine reward circuitry. Intermittent notifications create unpredictable rewards similar to slot machines, conditioning individuals to reach instinctively for their smartphones whenever confronted with minor intellectual boredom. Over time, this fracturing of attention erodes our capacity for sustained contemplation and makes complex synthesis feel exhausting.",
        "Rebuilding deep attentional stamina requires deliberate architectural design rather than relying on fickle willpower. Successful thinkers establish structured rituals: scheduling non-negotiable blocks of distraction-free focus, embracing boredom instead of seeking reflexive digital stimulation, and ruthlessly setting boundaries on notification access. By treating attention as a sacred, finite resource, individuals unlock intellectual depth, creative breakthrough, and enduring professional satisfaction."
      ],
      comprehensionQuestions: [
        {
          id: "cq-13",
          question: "How does the passage define 'Deep Work'?",
          options: [
            "Working overtime in physical industrial manufacturing plants.",
            "Concentrating without distraction on cognitively demanding tasks at peak capacity.",
            "Answering all incoming emails within five minutes of receipt.",
            "Attending multiple corporate committee meetings simultaneously."
          ],
          correct: 1,
          explanation: "Paragraph 1 defines Deep Work as the psychological state of concentrating without distraction on cognitively demanding tasks to generate high-value intellectual breakthroughs."
        },
        {
          id: "cq-14",
          question: "What is 'attention residue' according to psychological research cited in paragraph 2?",
          options: [
            "Dust that accumulates on computer monitors and mobile phone screens.",
            "A cognitive lag left behind when the brain rapidly switches focus between different tasks.",
            "The feeling of physical exhaustion after rigorous exercise.",
            "A software bug that slows down email servers."
          ],
          correct: 1,
          explanation: "Paragraph 2 explains attention residue as the cognitive hangover or mental friction that lingers when our attention is repeatedly shuttled between tasks."
        },
        {
          id: "cq-15",
          question: "Which strategy does the author recommend for restoring deep focus stamina?",
          options: [
            "Keeping smartphone notifications permanently activated at maximum volume.",
            "Establishing structured rituals, scheduling distraction-free time blocks, and embracing boredom.",
            "Multitasking on at least four digital devices simultaneously.",
            "Avoiding all forms of reading or challenging mental effort."
          ],
          correct: 1,
          explanation: "Paragraph 4 advises structuring daily rituals, scheduling dedicated blocks of undisturbed time, embracing brief periods of boredom, and minimizing digital interruptions."
        }
      ],
      summaryData: {
        targetLength: "50 to 80 words",
        keyThemes: [
          "Value of 'Deep Work' in an economy characterized by cognitive distraction",
          "The myth of multitasking and the mental toll of attention residue",
          "Digital notifications hijacking dopamine reward mechanisms",
          "Designing rituals and boundaries to cultivate sustained attentional stamina"
        ],
        keywords: ["focus", "attention", "deep work", "distraction", "multitasking", "dopamine", "stamina"],
        modelSummary: "In an era of relentless digital distraction, the ability to engage in sustained, deep focus has become an indispensable intellectual superpower. Multitasking produces debilitating attention residue, while algorithmic notifications exploit dopamine loops to erode our cognitive stamina. To achieve high-value breakthroughs, individuals must design intentional environments—scheduling uninterrupted focus blocks, managing notification boundaries, and treating attention as a precious, finite resource.",
        keyTakeaways: [
          "Deep work is the cornerstone of creative breakthrough and cognitive mastery.",
          "Multitasking is an illusion; task-switching leaves mental residue that drains clarity.",
          "Attentional stamina is cultivated through deliberate routines and environmental design."
        ]
      }
    }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.READING_DATA = READING_DATA;
}

