/**
 * LEXICON LAB - Grammar Studio Data
 * Aligned with Course Outcome CO1: English grammar and sentence formation
 */

const GRAMMAR_DATA = {
  topics: [
    {
      id: "tenses",
      title: "Tenses & Aspect",
      category: "Grammar Core",
      icon: "clock",
      summary: "Master past, present, and future timeframes with simple, continuous, perfect, and perfect continuous aspects.",
      difficulty: "All Levels",
      estimatedTime: "15 mins",
      content: {
        introduction: "Tenses situate actions in time. In English, there are three primary times (Past, Present, Future) combined with four aspects (Simple, Continuous, Perfect, Perfect Continuous), forming twelve fundamental tense structures.",
        sections: [
          {
            title: "1. Present Tense Family",
            description: "Used for habitual actions, general truths, ongoing actions, and events connected to the present.",
            rules: [
              {
                name: "Simple Present",
                formula: "Subject + Base Verb (+ s/es for third-person singular)",
                usage: "Habits, general truths, schedules, unchanging states.",
                example: "She analyzes scientific research every morning.",
                tip: "Remember the 3rd person singular -s: 'He writes', NOT 'He write'."
              },
              {
                name: "Present Continuous",
                formula: "Subject + is/am/are + Verb-ing",
                usage: "Actions happening right now or temporary situations.",
                example: "The research team is conducting a climate survey.",
                tip: "Stative verbs (like 'know', 'believe', 'understand') are rarely used in continuous form."
              },
              {
                name: "Present Perfect",
                formula: "Subject + has/have + Past Participle (V3)",
                usage: "Actions completed at an unspecified past time that have relevance to the present.",
                example: "The university has introduced three new scholarship programs.",
                tip: "Never pair Present Perfect with specific past time markers (NOT 'I have seen him yesterday')."
              },
              {
                name: "Present Perfect Continuous",
                formula: "Subject + has/have + been + Verb-ing",
                usage: "Actions that began in the past and continue into the present.",
                example: "They have been studying English for four months.",
                tip: "Use 'since' for a starting point (since 2021) and 'for' for duration (for three years)."
              }
            ]
          },
          {
            title: "2. Past Tense Family",
            description: "Used to describe completed events, past routines, and historical facts.",
            rules: [
              {
                name: "Simple Past",
                formula: "Subject + Past Form of Verb (V2)",
                usage: "Actions completed at a definite point in the past.",
                example: "The committee approved the new language curriculum yesterday.",
                tip: "Use 'did not + base verb' for negatives: 'She did not go', NOT 'She did not went'."
              },
              {
                name: "Past Continuous",
                formula: "Subject + was/were + Verb-ing",
                usage: "An ongoing background action interrupted by another past event.",
                example: "While the students were preparing their speeches, the bell rang.",
                tip: "Often joined with 'while' or 'when'."
              },
              {
                name: "Past Perfect",
                formula: "Subject + had + Past Participle (V3)",
                usage: "The 'past of the past' - an action completed before another past event.",
                example: "The train had already departed when Marcus arrived at the platform.",
                tip: "Establishes clear chronological sequence between two past events."
              },
              {
                name: "Past Perfect Continuous",
                formula: "Subject + had + been + Verb-ing",
                usage: "An ongoing action that was in progress up until another past moment.",
                example: "She had been rehearsing for three weeks before the national debate.",
                tip: "Emphasizes the duration before the past interruption."
              }
            ]
          },
          {
            title: "3. Future Tense Family",
            description: "Used for projections, promises, plans, and conditional outcomes.",
            rules: [
              {
                name: "Simple Future",
                formula: "Subject + will + Base Verb (or be going to + Base Verb)",
                usage: "Spontaneous decisions, predictions, and future commitments.",
                example: "Technology will reshape classroom learning in the next decade.",
                tip: "'Will' is preferred for spontaneous decisions; 'going to' for prior plans."
              },
              {
                name: "Future Continuous",
                formula: "Subject + will be + Verb-ing",
                usage: "Actions that will be actively in progress at a specific future moment.",
                example: "At 10 AM tomorrow, our team will be presenting the final proposal.",
                tip: "Conveys scheduled continuity in the future."
              },
              {
                name: "Future Perfect",
                formula: "Subject + will have + Past Participle (V3)",
                usage: "Actions that will be finished before a specific deadline in the future.",
                example: "By December, she will have completed her master's thesis.",
                tip: "Look for the time marker 'By + [future time point]'."
              }
            ]
          }
        ]
      },
      quiz: [
        {
          question: "Identify the sentence that correctly uses the Present Perfect tense:",
          options: [
            "I have graduated from college in 2022.",
            "She has published three peer-reviewed articles this year.",
            "They has completed their laboratory assignment.",
            "He have worked at the design firm since five years."
          ],
          correct: 1,
          explanation: "'She has published three peer-reviewed articles this year' correctly uses 'has' with the past participle 'published' for an unfinished timeframe (this year). Option A incorrectly uses present perfect with a specific past year (2022)."
        },
        {
          question: "Which tense correctly fills the blank: 'By the time the professor arrived, the students ________ their discussion.'",
          options: [
            "already finished",
            "have already finished",
            "had already finished",
            "will already finish"
          ],
          correct: 2,
          explanation: "When one past action happened before another past action ('arrived'), we use the Past Perfect tense ('had already finished')."
        },
        {
          question: "Choose the correct sentence regarding duration:",
          options: [
            "We have been waiting since two hours.",
            "We have been waiting for two hours.",
            "We are waiting since two hours.",
            "We waited for two hours since yesterday."
          ],
          correct: 1,
          explanation: "Duration of time requires the preposition 'for' ('for two hours'). 'Since' is used only with a specific starting timestamp (e.g., 'since 2:00 PM')."
        },
        {
          question: "Fill in the blank: 'Look! The laboratory team ________ a fascinating experiment right now.'",
          options: [
            "conducts",
            "is conducting",
            "has conducted",
            "was conducting"
          ],
          correct: 1,
          explanation: "'Right now' and 'Look!' signify an action in progress at the present moment, requiring the Present Continuous tense ('is conducting')."
        }
      ]
    },
    {
      id: "parts-of-speech",
      title: "Parts of Speech",
      category: "Grammar Core",
      icon: "layers",
      summary: "Understand the eight building blocks of the English language and how words function dynamically in context.",
      difficulty: "Foundational",
      estimatedTime: "12 mins",
      content: {
        introduction: "Every word in an English sentence belongs to one of eight classic parts of speech based on its syntactic function. A single word can function as different parts of speech depending on its context.",
        sections: [
          {
            title: "The Eight Fundamental Classes",
            description: "Understanding word roles is essential for constructing nuanced sentences.",
            rules: [
              {
                name: "1. Nouns",
                formula: "Names a person, place, thing, or abstract idea.",
                usage: "Functions as subjects, direct objects, indirect objects, and objects of prepositions.",
                example: "Curiosity (abstract noun) fuels scientific breakthrough.",
                tip: "Collective nouns (team, committee, audience) take singular verbs in formal academic English."
              },
              {
                name: "2. Pronouns",
                formula: "Replaces nouns to avoid cumbersome repetition.",
                usage: "Personal (he/she/they), Relative (who/which/that), Demonstrative (this/these).",
                example: "When Elena reviewed her draft, she noticed several stylistic errors.",
                tip: "Ensure pronouns agree with their antecedents in number and gender."
              },
              {
                name: "3. Verbs",
                formula: "Expresses physical action, mental state, or condition.",
                usage: "Action verbs (sprint, formulate) and Linking verbs (be, seem, appear).",
                example: "The committee deliberated for hours before announcing the winner.",
                tip: "Every complete English sentence must contain at least one finite verb."
              },
              {
                name: "4. Adjectives",
                formula: "Modifies, qualifies, or describes nouns or pronouns.",
                usage: "Answers: Which one? What kind? How many?",
                example: "Her articulate response impressed the interview panel.",
                tip: "Coordinate adjectives separated by commas: 'a sharp, insightful analysis'."
              },
              {
                name: "5. Adverbs",
                formula: "Modifies verbs, adjectives, or other adverbs.",
                usage: "Answers: How? When? Where? To what extent?",
                example: "The speaker articulated each point extraordinarily well.",
                tip: "Not all adverbs end in -ly (e.g., 'fast', 'well', 'hard')."
              },
              {
                name: "6. Prepositions",
                formula: "Shows spatial, temporal, or logical relationships between words.",
                usage: "Precedes a noun phrase to form a prepositional phrase.",
                example: "She succeeded through perseverance and unwavering focus.",
                tip: "Avoid ending formal academic questions with trailing prepositions when possible."
              },
              {
                name: "7. Conjunctions",
                formula: "Connects words, phrases, or clauses.",
                usage: "Coordinating (FANBOYS), Subordinating (although, because), Correlative (either/or).",
                example: "Although the concept was intricate, the diagram clarified it.",
                tip: "Use 'although' without 'but' to avoid redundant conjunction traps."
              },
              {
                name: "8. Interjections",
                formula: "Expresses spontaneous emotion or exclamation.",
                usage: "Often set apart with an exclamation point or comma.",
                example: "Incredible! Your presentation exceeded all expectations.",
                tip: "Rarely used in formal academic or business writing."
              }
            ]
          }
        ]
      },
      quiz: [
        {
          question: "In the sentence 'The fast runner ran fast around the track', what are the parts of speech of the two instances of 'fast'?",
          options: [
            "Both are adjectives",
            "First is an adjective, second is an adverb",
            "First is an adverb, second is an adjective",
            "Both are adverbs"
          ],
          correct: 1,
          explanation: "The first 'fast' describes the noun 'runner' (adjective), while the second 'fast' describes the verb 'ran' (adverb of manner)."
        },
        {
          question: "Identify the conjunction in this sentence: 'Neither the manager nor the supervisor recognized the discrepancy.'",
          options: [
            "Neither...nor (Correlative conjunction)",
            "discrepancy (Noun)",
            "recognized (Verb)",
            "the (Definite article)"
          ],
          correct: 0,
          explanation: "'Neither...nor' operates as a paired correlative conjunction linking two compound subjects."
        },
        {
          question: "What part of speech is the word 'resilient' in: 'The startup proved to be exceptionally resilient during the economic downturn.'?",
          options: [
            "Adverb",
            "Noun",
            "Adjective",
            "Verb"
          ],
          correct: 2,
          explanation: "'Resilient' is a predicate adjective modifying the noun 'startup', following the linking verb 'proved to be'."
        }
      ]
    },
    {
      id: "articles",
      title: "Articles & Determiners",
      category: "Grammar Core",
      icon: "file-text",
      summary: "Master the precise usage of 'A', 'An', 'The', and the Zero Article rule.",
      difficulty: "Foundational",
      estimatedTime: "10 mins",
      content: {
        introduction: "Articles are determiners that signal whether a noun is specific or general. Master the distinction between vowel sounds versus vowel letters, unique referents, and non-count nouns.",
        sections: [
          {
            title: "Core Article Rules",
            description: "How to choose between indefinite, definite, and zero articles.",
            rules: [
              {
                name: "Indefinite Article: A vs. An",
                formula: "'A' before consonant SOUNDS; 'An' before vowel SOUNDS.",
                usage: "Singular, countable nouns mentioned for the first time.",
                example: "A university graduate (starts with consonant sound /j/), An honest evaluation (starts with vowel sound /ɒ/).",
                tip: "It is sound that matters, not spelling! 'A European country', 'An hour'."
              },
              {
                name: "Definite Article: The",
                formula: "'The' refers to specific, identifiable, or unique items.",
                usage: "Items already known to the listener, superlatives, and unique entities.",
                example: "The sun is the largest body in our solar system.",
                tip: "Use 'The' with oceans (the Atlantic), rivers (the Nile), and mountain ranges (the Alps), but NOT individual mountains (Mount Everest)."
              },
              {
                name: "Zero Article (No Article)",
                formula: "Omit articles for general plural or uncountable nouns.",
                usage: "Abstract concepts, languages, meals, sports, academic subjects.",
                example: "Knowledge is power. / She studies physics. / They play tennis.",
                tip: "Do NOT say 'The life is beautiful'; say 'Life is beautiful' when referring to life in general."
              }
            ]
          }
        ]
      },
      quiz: [
        {
          question: "Select the sentence with the correct article usage:",
          options: [
            "It is a honorable distinction to receive this fellowship.",
            "It is an honorable distinction to receive this fellowship.",
            "It is the honorable distinction to receive a fellowship.",
            "It is an university distinction to receive this fellowship."
          ],
          correct: 1,
          explanation: "'Honorable' begins with a silent 'h', producing the vowel sound /ɒ/, which strictly demands 'an'. Conversely, 'university' starts with the /j/ consonant sound and takes 'a'."
        },
        {
          question: "Which sentence correctly demonstrates the Zero Article rule?",
          options: [
            "The honesty is the best policy.",
            "An honesty is the best policy.",
            "Honesty is the best policy.",
            "A honesty is the best policy."
          ],
          correct: 2,
          explanation: "Abstract uncountable nouns used in a general sense ('honesty') take no article (Zero Article)."
        },
        {
          question: "Choose the correct article for the blank: 'Mount Everest is ______ highest mountain in the world.'",
          options: [
            "a",
            "an",
            "the",
            "no article needed"
          ],
          correct: 2,
          explanation: "Superlative adjectives ('highest', 'most effective', 'first') always require the definite article 'the'."
        }
      ]
    },
    {
      id: "prepositions",
      title: "Prepositions in Context",
      category: "Sentence Mechanics",
      icon: "compass",
      summary: "Understand spatial, temporal, and dependent prepositions to eliminate common prepositional errors.",
      difficulty: "Intermediate",
      estimatedTime: "14 mins",
      content: {
        introduction: "Prepositions establish spatial, temporal, or conceptual links between nouns and other sentence elements. Many prepositions are fixed or dependent on specific verbs and adjectives.",
        sections: [
          {
            title: "Time & Space Prepositions",
            description: "The pyramid rule: At (specific) -> On (medium) -> In (broad).",
            rules: [
              {
                name: "Time: At, On, In",
                formula: "At for clock times; On for days/dates; In for months/years/centuries.",
                usage: "At 7:30 PM, On Monday, In July 2024, In the 21st century.",
                example: "The symposium begins at 9:00 AM on Thursday in November.",
                tip: "Say 'at night', but 'in the morning', 'in the afternoon'."
              },
              {
                name: "Place: At, On, In",
                formula: "At for exact address/point; On for surfaces/streets; In for enclosed spaces/cities/countries.",
                usage: "At the desk, On Oxford Street, In Tokyo, In the lecture hall.",
                example: "The delegates met at the auditorium on 5th Avenue in Chicago.",
                tip: "'Between' is used for two items; 'Among' is used for three or more distinct items."
              },
              {
                name: "Dependent Prepositions",
                formula: "Specific adjectives and verbs demand fixed prepositions.",
                usage: "Interested IN, Capable OF, Responsible FOR, Married TO, Differ FROM.",
                example: "She is capable of resolving high-pressure organizational conflicts.",
                tip: "Never say 'married with' someone; say 'married to'."
              }
            ]
          }
        ]
      },
      quiz: [
        {
          question: "Fill in the blanks: 'The keynote address is scheduled ______ 10:00 AM ______ Wednesday ______ July.'",
          options: [
            "in, on, at",
            "at, on, in",
            "on, at, in",
            "at, in, on"
          ],
          correct: 1,
          explanation: "We use 'at' for specific times (at 10:00 AM), 'on' for specific days (on Wednesday), and 'in' for months (in July)."
        },
        {
          question: "Select the grammatically correct sentence with dependent prepositions:",
          options: [
            "He was accused for theft and imprisoned.",
            "He was accused of theft and imprisoned.",
            "He was accused with theft and imprisoned.",
            "He was accused by theft and imprisoned."
          ],
          correct: 1,
          explanation: "The verb 'accused' is paired with the preposition 'of' ('accused of a crime')."
        },
        {
          question: "Choose the correct preposition: 'The prize money was distributed evenly ________ the three winning finalists.'",
          options: [
            "between",
            "among",
            "within",
            "into"
          ],
          correct: 1,
          explanation: "Use 'among' when dividing or distributing something among three or more entities. Use 'between' primarily for two."
        }
      ]
    },
    {
      id: "subject-verb-agreement",
      title: "Subject-Verb Agreement",
      category: "Sentence Mechanics",
      icon: "check-circle",
      summary: "Ensure harmony between singular/plural subjects and verbs, resolving tricky intervening clauses and indefinite pronouns.",
      difficulty: "Intermediate",
      estimatedTime: "15 mins",
      content: {
        introduction: "A singular subject takes a singular verb, and a plural subject takes a plural verb. While simple on the surface, intervening prepositional phrases and compound constructions frequently trip students up.",
        sections: [
          {
            title: "Crucial Agreement Rules",
            description: "Master the 5 agreement rules that cover 95% of grammatical errors.",
            rules: [
              {
                name: "1. Intervening Prepositional Phrases",
                formula: "Ignore phrases between the subject and the verb.",
                usage: "The subject remains the head noun, not words in 'of...', 'with...', 'as well as...'.",
                example: "The bouquet of fresh yellow roses SMELLS divine (bouquet is singular).",
                tip: "Cross out 'of [plural noun]' in your mind to reveal the true singular subject."
              },
              {
                name: "2. Indefinite Pronouns are Singular",
                formula: "Each, Everyone, Somebody, Nobody, Neither, Either take SINGULAR verbs.",
                usage: "Despite implying multiple people, they treat the subject individually.",
                example: "Each of the participants HAS received a certificate.",
                tip: "Never say 'Each of the boys are'; always say 'Each of the boys is'."
              },
              {
                name: "3. Correlative Conjunctions: Proximity Rule",
                formula: "With 'Either...or' and 'Neither...nor', the verb agrees with the CLOSER subject.",
                usage: "Neither the teacher nor the students WERE ready. / Neither the students nor the teacher WAS ready.",
                example: "Either the director or his assistants are presenting today.",
                tip: "Look at the noun closest to the verb position."
              },
              {
                name: "4. Collective Nouns",
                formula: "Act as a singular unit when acting together.",
                usage: "The jury, the committee, the committee, the crowd.",
                example: "The committee HAS reached a unanimous decision.",
                tip: "If members act individually (e.g., arguing among themselves), plural verbs may apply, but formal English favors singular."
              }
            ]
          }
        ]
      },
      quiz: [
        {
          question: "Choose the sentence with correct subject-verb agreement:",
          options: [
            "Neither the conductor nor the violinists was prepared for the encore.",
            "Neither the conductor nor the violinists were prepared for the encore.",
            "Neither the violinists nor the conductor were prepared for the encore.",
            "Neither of the musicians are able to perform."
          ],
          correct: 1,
          explanation: "In 'Neither...nor' constructions, the verb agrees with the closer subject. 'Violinists' is plural and adjacent to the verb, so 'were prepared' is correct."
        },
        {
          question: "Fill in the blank: 'The quality of the audio recordings ________ exceptional.'",
          options: [
            "are",
            "is",
            "were",
            "have been"
          ],
          correct: 1,
          explanation: "The true subject is the singular noun 'quality'. 'Of the audio recordings' is an intervening prepositional phrase that does not alter the verb."
        },
        {
          question: "Which of the following sentences is grammatically sound?",
          options: [
            "Everyone in the lecture halls have taken notes.",
            "Everyone in the lecture halls has taken notes.",
            "Everyone in the lecture halls are taking notes.",
            "Everyone in the lecture halls were taking notes."
          ],
          correct: 1,
          explanation: "'Everyone' is an indefinite pronoun that strictly requires a singular verb ('has taken')."
        }
      ]
    },
    {
      id: "sentence-formation",
      title: "Sentence Formation & Structure",
      category: "Style & Composition",
      icon: "edit-3",
      summary: "Construct simple, compound, complex, and compound-complex sentences while avoiding comma splices and run-on sentences.",
      difficulty: "Advanced",
      estimatedTime: "16 mins",
      content: {
        introduction: "Varying sentence architecture creates rhythm, clarity, and authority in writing. Learn how clauses interact and how to eliminate awkward fragments and run-on sentences.",
        sections: [
          {
            title: "Four Sentence Architectures",
            description: "How independent and dependent clauses combine.",
            rules: [
              {
                name: "Simple Sentence",
                formula: "One Independent Clause (Subject + Predicate).",
                usage: "Delivers a direct, punchy point with absolute clarity.",
                example: "Clear communication builds enduring trust.",
                tip: "A simple sentence can have compound subjects ('Jack and Jill') or compound verbs ('walked and talked')."
              },
              {
                name: "Compound Sentence",
                formula: "Independent Clause + FANBOYS Conjunction + Independent Clause.",
                usage: "Joins two equal, related complete thoughts.",
                example: "The software encountered an error, yet the automated backup preserved all data.",
                tip: "FANBOYS = For, And, Nor, But, Or, Yet, So. Always precede them with a comma when joining two full clauses."
              },
              {
                name: "Complex Sentence",
                formula: "Independent Clause + Dependent Clause (with Subordinating Conjunction).",
                usage: "Shows cause, contrast, condition, or timing.",
                example: "Although the climate model predicted heavy rainfall, the weekend remained clear.",
                tip: "If the dependent clause starts the sentence, put a comma after it. If it follows, usually no comma is needed."
              },
              {
                name: "Compound-Complex Sentence",
                formula: "At least two Independent Clauses + at least one Dependent Clause.",
                usage: "Sophisticated synthesis of multiple multifaceted ideas.",
                example: "Because energy demands surged, the regional grid relied on solar reserves, and emissions dropped significantly.",
                tip: "Break up overly dense sentences if readability drops below your target."
              }
            ]
          },
          {
            title: "Common Sentence Traps",
            description: "Avoid comma splices and sentence fragments.",
            rules: [
              {
                name: "Comma Splice",
                formula: "Joining two complete thoughts with ONLY a comma.",
                usage: "INCORRECT: 'The experiment failed, we started over.'",
                example: "CORRECT: 'The experiment failed; we started over.' OR 'The experiment failed, so we started over.'",
                tip: "Fix with a period, semicolon, or coordinating conjunction."
              },
              {
                name: "Sentence Fragment",
                formula: "A dependent clause left hanging without an independent clause.",
                usage: "INCORRECT: 'Because she was exceptionally talented.'",
                example: "CORRECT: 'Because she was exceptionally talented, she earned the scholarship.'",
                tip: "Check that every sentence contains a complete thought."
              }
            ]
          }
        ]
      },
      quiz: [
        {
          question: "Identify the sentence that contains a comma splice error:",
          options: [
            "The library closed early, so we went to the coffee shop.",
            "The library closed early; we went to the coffee shop.",
            "The library closed early, we went to the coffee shop.",
            "Because the library closed early, we went to the coffee shop."
          ],
          correct: 2,
          explanation: "Option C joins two independent clauses with only a comma, which is a classic comma splice. It must be joined by a semicolon or a coordinating conjunction like 'so'."
        },
        {
          question: "What type of sentence is: 'Whenever the temperature drops below freezing, the automated heaters activate, and the greenhouse remains warm.'?",
          options: [
            "Simple Sentence",
            "Compound Sentence",
            "Complex Sentence",
            "Compound-Complex Sentence"
          ],
          correct: 3,
          explanation: "It contains one dependent clause ('Whenever the temperature drops...') and two independent clauses ('the automated heaters activate' and 'the greenhouse remains warm'), making it Compound-Complex."
        },
        {
          question: "Which revision best fixes this fragment: 'Although the team spent six months researching the phenomenon.'?",
          options: [
            "Although the team spent six months researching the phenomenon, but they found no conclusive evidence.",
            "Although the team spent six months researching the phenomenon, they found no conclusive evidence.",
            "The team spent six months researching the phenomenon although.",
            "Although the team spent six months researching the phenomenon; no conclusive evidence was found."
          ],
          correct: 1,
          explanation: "Connecting the dependent clause to an independent clause with a comma produces a clean, grammatically sound complex sentence. Option A incorrectly introduces redundant 'but'."
        }
      ]
    },
    {
      id: "active-passive-voice",
      title: "Active and Passive Voice",
      category: "Style & Composition",
      icon: "shuffle",
      summary: "Understand when to use dynamic active voice for vigor and strategic passive voice for objective academic framing.",
      difficulty: "Advanced",
      estimatedTime: "15 mins",
      content: {
        introduction: "In active voice, the subject performs the action. In passive voice, the subject receives the action. Active voice is generally direct, vigorous, and engaging, whereas passive voice is valuable in scientific and formal reporting when the actor is unknown or irrelevant.",
        sections: [
          {
            title: "Voice Transformation Matrix",
            description: "How verb tenses convert to passive voice using forms of 'be' + Past Participle.",
            rules: [
              {
                name: "Simple Present",
                formula: "Active: Subject + Verb + Object -> Passive: Object + is/am/are + V3 (+ by Agent)",
                usage: "Active: 'Scientists analyze the data.' -> Passive: 'The data is analyzed by scientists.'",
                example: "Active: 'The company manufactures semiconductors.' -> Passive: 'Semiconductors are manufactured by the company.'",
                tip: "Make sure the 'be' verb agrees with the NEW subject (plural 'semiconductors' takes 'are')."
              },
              {
                name: "Simple Past",
                formula: "Active: Subject + V2 + Object -> Passive: Object + was/were + V3",
                usage: "Active: 'Dr. Watson discovered the pattern.' -> Passive: 'The pattern was discovered by Dr. Watson.'",
                example: "Active: 'They published the findings.' -> Passive: 'The findings were published.'",
                tip: "In scientific writing, the agent 'by them' is often omitted to maintain objectivity."
              },
              {
                name: "Present Perfect",
                formula: "Active: Subject + has/have + V3 -> Passive: Object + has/have + been + V3",
                usage: "Active: 'Researchers have validated the theory.' -> Passive: 'The theory has been validated.'",
                example: "Active: 'The committee has approved the grant.' -> Passive: 'The grant has been approved.'",
                tip: "Insert 'been' between has/have and the past participle."
              },
              {
                name: "When to Favor Passive Voice",
                formula: "Strategic applications in professional communication.",
                usage: "1. When the actor is unknown or unimportant. 2. When emphasizing the result rather than the doer. 3. Tactful delivery of negative news ('The invoice was not paid' vs 'You didn't pay').",
                example: "Penicillin was discovered in 1928. (Focus is on the discovery, not the assistant).",
                tip: "Avoid excessive passive voice in essays, as it can sound bureaucratic and weak."
              }
            ]
          }
        ]
      },
      quiz: [
        {
          question: "Convert this sentence to passive voice: 'The software engineers will test the new update tomorrow.'",
          options: [
            "The new update will be tested by the software engineers tomorrow.",
            "The new update will tested by the software engineers tomorrow.",
            "The new update is tested by the software engineers tomorrow.",
            "The software engineers will be tested by the update tomorrow."
          ],
          correct: 0,
          explanation: "Future simple passive takes 'will be + past participle (tested)', followed by the agent 'by the software engineers'."
        },
        {
          question: "Identify the sentence that is written in the ACTIVE voice:",
          options: [
            "The environmental report was finalized by the committee yesterday.",
            "The committee finalized the environmental report yesterday.",
            "The environmental report had been finalized before the meeting.",
            "Several recommendations were proposed during the symposium."
          ],
          correct: 1,
          explanation: "In 'The committee finalized the environmental report yesterday', the subject 'committee' directly performs the action 'finalized'."
        },
        {
          question: "Which of the following passive constructions is appropriate for objective scientific reporting?",
          options: [
            "We boiled the solution at 100 degrees Celsius.",
            "The solution was boiled at 100 degrees Celsius.",
            "They had boiled the solution at 100 degrees Celsius.",
            "Someone boiled the solution at 100 degrees Celsius."
          ],
          correct: 1,
          explanation: "In scientific methods, passive voice ('The solution was boiled at 100°C') keeps focus strictly on the physical procedure rather than the experimenters."
        }
      ]
    }
  ],

  // Interactive Sentence Correction Activity (15 real student sentences with errors)
  sentenceCorrections: [
    {
      id: "sc-1",
      incorrect: "She go to college every morning.",
      acceptedAnswers: [
        "She goes to college every morning.",
        "She goes to college every morning"
      ],
      correctSentence: "She goes to college every morning.",
      category: "Subject-Verb Agreement",
      errorType: "Third-Person Singular Verb Form",
      explanation: "In the simple present tense, third-person singular subjects (he, she, it, or singular nouns) require verbs ending in -s or -es. 'She go' violates subject-verb agreement; the correct form is 'She goes'."
    },
    {
      id: "sc-2",
      incorrect: "Each of the students have submitted their project.",
      acceptedAnswers: [
        "Each of the students has submitted their project.",
        "Each of the students has submitted their project",
        "Each of the students has submitted his or her project.",
        "Each student has submitted their project."
      ],
      correctSentence: "Each of the students has submitted their project.",
      category: "Subject-Verb Agreement",
      errorType: "Indefinite Pronoun Agreement",
      explanation: "The pronoun 'Each' is grammatically singular and requires the singular auxiliary verb 'has', not 'have'. The phrase 'of the students' is an intervening prepositional modifier."
    },
    {
      id: "sc-3",
      incorrect: "He is married with a doctor.",
      acceptedAnswers: [
        "He is married to a doctor.",
        "He is married to a doctor"
      ],
      correctSentence: "He is married to a doctor.",
      category: "Prepositions",
      errorType: "Dependent Preposition Error",
      explanation: "In English, the adjective 'married' takes the dependent preposition 'to', never 'with'. For example: 'She is married to Marcus'."
    },
    {
      id: "sc-4",
      incorrect: "I look forward to meet you next week.",
      acceptedAnswers: [
        "I look forward to meeting you next week.",
        "I look forward to meeting you next week",
        "I am looking forward to meeting you next week.",
        "I'm looking forward to meeting you next week."
      ],
      correctSentence: "I look forward to meeting you next week.",
      category: "Verbs & Gerunds",
      errorType: "Preposition + Gerund Trap",
      explanation: "In the idiom 'look forward to', the word 'to' functions as a preposition, not an infinitive marker. Prepositions must be followed by a noun or gerund (-ing form), so 'meeting' is required."
    },
    {
      id: "sc-5",
      incorrect: "The informations provided by the agency were incorrect.",
      acceptedAnswers: [
        "The information provided by the agency was incorrect.",
        "The information provided by the agency was incorrect",
        "The pieces of information provided by the agency were incorrect."
      ],
      correctSentence: "The information provided by the agency was incorrect.",
      category: "Nouns & Quantifiers",
      errorType: "Uncountable Noun Error",
      explanation: "'Information' is an uncountable (non-count) noun and does not have a plural form ('informations'). It takes the singular verb 'was'."
    },
    {
      id: "sc-6",
      incorrect: "Neither the teacher nor the students was present in the auditorium.",
      acceptedAnswers: [
        "Neither the teacher nor the students were present in the auditorium.",
        "Neither the teacher nor the students were present in the auditorium"
      ],
      correctSentence: "Neither the teacher nor the students were present in the auditorium.",
      category: "Subject-Verb Agreement",
      errorType: "Proximity Rule in Correlative Conjunctions",
      explanation: "When subjects are joined by 'Neither...nor', the verb agrees with the nearer subject. 'Students' is plural and adjacent to the verb, so the plural verb 'were' is required."
    },
    {
      id: "sc-7",
      incorrect: "She is senior than me in the department.",
      acceptedAnswers: [
        "She is senior to me in the department.",
        "She is senior to me in the department"
      ],
      correctSentence: "She is senior to me in the department.",
      category: "Adjectives & Comparisons",
      errorType: "Latin Comparative Preposition",
      explanation: "Comparative adjectives of Latin origin ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition 'to', not 'than'."
    },
    {
      id: "sc-8",
      incorrect: "I have bought a new furniture yesterday.",
      acceptedAnswers: [
        "I bought new furniture yesterday.",
        "I bought new furniture yesterday",
        "I bought a piece of new furniture yesterday.",
        "I bought a new piece of furniture yesterday."
      ],
      correctSentence: "I bought new furniture yesterday.",
      category: "Tenses & Articles",
      errorType: "Specific Past Marker + Uncountable Noun",
      explanation: "Two errors occurred: 1) 'Yesterday' demands the Simple Past tense ('bought', not 'have bought'). 2) 'Furniture' is an uncountable noun that cannot take the indefinite article 'a' directly; use 'new furniture' or 'a piece of furniture'."
    },
    {
      id: "sc-9",
      incorrect: "Although he worked hard, but he failed the examination.",
      acceptedAnswers: [
        "Although he worked hard, he failed the examination.",
        "Although he worked hard, he failed the examination",
        "He worked hard, but he failed the examination.",
        "Though he worked hard, he failed the examination."
      ],
      correctSentence: "Although he worked hard, he failed the examination.",
      category: "Conjunctions",
      errorType: "Redundant Conjunction",
      explanation: "'Although' is a subordinating conjunction that already establishes contrast. Using both 'although' and the coordinating conjunction 'but' in the same clause is redundant."
    },
    {
      id: "sc-10",
      incorrect: "One of my friend is visiting London.",
      acceptedAnswers: [
        "One of my friends is visiting London.",
        "One of my friends is visiting London"
      ],
      correctSentence: "One of my friends is visiting London.",
      category: "Nouns & Number",
      errorType: "Partitive Plural Noun",
      explanation: "The construction 'one of' designates one individual selected from a plural group, requiring a plural noun: 'One of my friends'."
    },
    {
      id: "sc-11",
      incorrect: "He told to me that the meeting was postponed.",
      acceptedAnswers: [
        "He told me that the meeting was postponed.",
        "He told me that the meeting was postponed",
        "He said to me that the meeting was postponed."
      ],
      correctSentence: "He told me that the meeting was postponed.",
      category: "Verbs & Reporting",
      errorType: "Transitive Verb Preposition Trap",
      explanation: "The verb 'tell' is a transitive verb that takes a direct personal object without 'to' ('told me'). If you wish to use 'to', use 'said to me'."
    },
    {
      id: "sc-12",
      incorrect: "She has been living here since five years.",
      acceptedAnswers: [
        "She has been living here for five years.",
        "She has been living here for five years"
      ],
      correctSentence: "She has been living here for five years.",
      category: "Prepositions & Tense",
      errorType: "Duration vs. Timestamp",
      explanation: "Use 'for' to describe a period of duration (e.g., 'for five years'). 'Since' is reserved exclusively for a specific point in time (e.g., 'since 2019')."
    },
    {
      id: "sc-13",
      incorrect: "The cake was ate by the children.",
      acceptedAnswers: [
        "The cake was eaten by the children.",
        "The cake was eaten by the children"
      ],
      correctSentence: "The cake was eaten by the children.",
      category: "Active and Passive Voice",
      errorType: "Irregular Past Participle",
      explanation: "Passive voice constructions require a form of 'be' combined with the past participle (V3). The past participle of 'eat' is 'eaten' (not the simple past 'ate')."
    },
    {
      id: "sc-14",
      incorrect: "Can you able to solve this problem?",
      acceptedAnswers: [
        "Can you solve this problem?",
        "Can you solve this problem",
        "Are you able to solve this problem?",
        "Are you able to solve this problem"
      ],
      correctSentence: "Can you solve this problem?",
      category: "Modal Auxiliaries",
      errorType: "Double Modal Redundancy",
      explanation: "'Can' and 'able to' express the same modal concept of capability. Use either 'Can you solve...?' or 'Are you able to solve...?'; never combine them."
    },
    {
      id: "sc-15",
      incorrect: "Hardly had I entered the room than the lights went out.",
      acceptedAnswers: [
        "Hardly had I entered the room when the lights went out.",
        "Hardly had I entered the room when the lights went out",
        "No sooner had I entered the room than the lights went out."
      ],
      correctSentence: "Hardly had I entered the room when the lights went out.",
      category: "Correlative Conjunctions",
      errorType: "Correlative Pair Mismatch",
      explanation: "'Hardly...when' and 'Scarcely...when' are fixed correlative pairs. 'Than' is used only with 'No sooner' ('No sooner had I entered than...')."
    }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.GRAMMAR_DATA = GRAMMAR_DATA;
}

