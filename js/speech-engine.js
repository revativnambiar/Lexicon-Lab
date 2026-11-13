/**
 * LEXICON LAB - Speech Synthesis Engine
 * Aligned with Course Outcome CO5: Speech delivery
 * 
 * Works for ANY topic entered by students.
 * Combines semantic topic analysis, rhetorical framing, stylistic adaptation,
 * and delivery cues (pauses, vocal stress, audience engagement).
 */

class LexiconSpeechEngine {
  constructor() {
    this.rhetoricalHooks = {
      informative: {
        beginner: [
          (t) => `Have you ever wondered why ${t} plays such an important role in our daily lives?`,
          (t) => `Good day everyone. Today, I want to share some vital insights about ${t}.`,
          (t) => `When we look closely at ${t}, we discover something that affects each one of us.`
        ],
        intermediate: [
          (t) => `In an era characterized by rapid transformation, few topics demand our thoughtful attention more than ${t}.`,
          (t) => `Consider this: how often do we pause to analyze the underlying mechanisms that shape ${t}?`,
          (t) => `Respected mentors and peers, today we gather to explore a subject of profound contemporary relevance: ${t}.`
        ],
        advanced: [
          (t) => `If we interrogate the intellectual landscape of our times, ${t} emerges not merely as a subject of discourse, but as a defining crucible of modern thought.`,
          (t) => `To comprehend the trajectory of human progress is to examine the subtle paradigms that govern ${t}.`,
          (t) => `Distinguished audience, I invite you to join me in scrutinizing the complex dynamics, systemic imperatives, and broader implications of ${t}.`
        ]
      },
      persuasive: {
        beginner: [
          (t) => `The time has come for us to take a clear stand on ${t}. We cannot afford to stay silent.`,
          (t) => `Imagine a world where we actively address ${t}. That world is possible, but only if we act today.`,
          (t) => `I stand before you today because I believe deeply that ${t} will shape our future.`
        ],
        intermediate: [
          (t) => `History teaches us that societies are judged not by how they acknowledge challenges, but by how courageously they confront them—and today, that challenge is ${t}.`,
          (t) => `We stand at a critical crossroads where complacency regarding ${t} is no longer a viable option.`,
          (t) => `Ask yourselves this fundamental question: if we do not champion reform in ${t}, then who will, and if not now, then when?`
        ],
        advanced: [
          (t) => `Behind the facade of conventional consensus lies an undeniable imperative: we must radically reassess our collective relationship with ${t}.`,
          (t) => `The gravity of our present moment requires neither rhetorical evasion nor cosmetic compromise; it demands an uncompromising confrontation with ${t}.`,
          (t) => `Every pivotal advancement in human civilization began when principled individuals challenged the orthodoxy surrounding ${t}.`
        ]
      },
      motivational: {
        beginner: [
          (t) => `Every single one of us has the power inside to make a difference when it comes to ${t}.`,
          (t) => `Believe in your potential. Today, we are talking about something that can transform our lives: ${t}.`,
          (t) => `Look around this room. Each of us represents a spark of change, especially when we talk about ${t}.`
        ],
        intermediate: [
          (t) => `Greatness is never accidental; it is forged when ordinary people rise with unwavering resolve to master ${t}.`,
          (t) => `Within every obstacle lies the seed of an extraordinary opportunity, and nowhere is that truer than in the realm of ${t}.`,
          (t) => `When you believe in your purpose, challenges like ${t} become the very stepping stones that elevate you to new heights.`
        ],
        advanced: [
          (t) => `The human spirit is endowed with an astonishing resilience—an inexhaustible capacity to transcend limits and redefine what is possible through ${t}.`,
          (t) => `Do not wait for favorable conditions to pursue excellence; let your dedication to ${t} become the catalyst that creates those conditions.`,
          (t) => `In the symphony of human striving, those who leave an indelible legacy are the ones who passionately embrace the transformative power of ${t}.`
        ]
      }
    };
  }

  /**
   * Capitalizes and cleans the user's topic
   */
  formatTopic(topic) {
    if (!topic || !topic.trim()) return "The Power of Lifelong Learning";
    let cleaned = topic.trim().replace(/[.?!]+$/, "");
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }

  /**
   * Generates a complete speech object with Introduction, Main Body, and Conclusion
   */
  generateSpeech({ topic, duration = "2", level = "intermediate", style = "informative" }) {
    const formattedTopic = this.formatTopic(topic);
    const durationNum = parseInt(duration, 10) || 2;
    const lowerTopic = formattedTopic.toLowerCase();

    // Word count target based on speech pacing (~130 words per minute)
    const targetWords = durationNum === 1 ? 130 : durationNum === 2 ? 260 : durationNum === 3 ? 400 : 650;

    // Pick rhetorical hook
    const hooks = this.rhetoricalHooks[style][level] || this.rhetoricalHooks.informative.intermediate;
    const hook = hooks[Math.floor(Math.random() * hooks.length)](formattedTopic);

    // Build Introduction
    const intro = this.buildIntroduction(formattedTopic, lowerTopic, level, style, hook);

    // Build Body Paragraphs (2 to 4 paragraphs depending on duration)
    const bodyParagraphs = this.buildBody(formattedTopic, lowerTopic, level, style, durationNum);

    // Build Conclusion
    const conclusion = this.buildConclusion(formattedTopic, lowerTopic, level, style);

    // Combine full speech
    const fullText = `${intro}\n\n${bodyParagraphs.join("\n\n")}\n\n${conclusion}`;
    const wordCount = fullText.split(/\s+/).filter(Boolean).length;
    const estimatedMinutes = (wordCount / 130).toFixed(1);

    return {
      topic: formattedTopic,
      durationMinutes: durationNum,
      level,
      style,
      wordCount,
      estimatedDeliveryTime: `${estimatedMinutes} mins`,
      sections: {
        introduction: intro,
        body: bodyParagraphs,
        bodyText: bodyParagraphs.join("\n\n"),
        conclusion: conclusion
      },
      fullSpeech: fullText,
      timestamp: new Date().toISOString()
    };
  }

  buildIntroduction(topic, lowerTopic, level, style, hook) {
    if (level === "beginner") {
      return `${hook} [Pause for eye contact]\n\n` +
        `When we talk about ${topic}, we are not just discussing ideas in a book; we are talking about real actions that affect how we live, study, and grow together. Today, I want to share three simple points: first, what ${lowerTopic} truly means; second, why it matters to us right now; and third, how we can take small, positive steps forward.`;
    } else if (level === "intermediate") {
      return `${hook} [Pause for emphasis]\n\n` +
        `To understand the true significance of ${topic}, we must look beyond surface-level assumptions and examine how it directly influences our decisions, our communities, and our shared future. Today, I propose that engaging thoughtfully with ${lowerTopic} is not merely optional—it is an intellectual and practical necessity. In the next few minutes, we will unpack its core dimensions, evaluate the challenges it presents, and identify tangible avenues for meaningful impact.`;
    } else {
      return `${hook} [Strategic pause — scan the room with quiet confidence]\n\n` +
        `At the intersection of technological advancement and human aspiration, few phenomena encapsulate the complexities of our age as vividly as ${topic}. To treat this subject superficially is to misunderstand the systemic forces shaping our cultural and institutional landscape. My objective today is clear: to dissect the fundamental tenets of ${lowerTopic}, illuminate its ethical and practical ramifications, and propose a principled framework for constructive engagement.`;
    }
  }

  buildBody(topic, lowerTopic, level, style, duration) {
    const paragraphs = [];

    // Body Paragraph 1: Foundational Reality / Context
    if (level === "beginner") {
      paragraphs.push(
        `First, let us look at the basics. [Speak clearly and at a measured pace] At its heart, ${lowerTopic} is about creating real value and understanding our responsibilities. Too often, people think that big changes require massive efforts, but in reality, real progress in ${lowerTopic} begins with simple daily habits. When we commit to learning more, asking questions, and listening to others, we build a solid foundation that anyone can follow.`
      );
    } else if (level === "intermediate") {
      paragraphs.push(
        `To begin with, we must recognize that ${topic} does not exist in an academic vacuum. [Pace your voice deliberately] It directly influences our daily routines, professional standards, and communal wellbeing. When we examine historical patterns, we observe that every breakthrough in ${lowerTopic} began when individuals challenged passive consensus and demanded clarity. By fostering disciplined curiosity and grounded analysis, we transform abstract theories into actionable, pragmatic solutions.`
      );
    } else {
      paragraphs.push(
        `First and foremost, a rigorous examination of ${topic} reveals a dynamic interplay between tradition and disruptive innovation. [Articulate with resonant authority] Far from being an isolated phenomenon, ${lowerTopic} operates as a systemic barometer of our collective priorities. When institutions and individuals cultivate structural awareness, they cease to be passive spectators of change; instead, they emerge as conscious architects who steer outcomes toward ethical integrity and intellectual rigor.`
      );
    }

    // Body Paragraph 2: The Core Challenge or Opportunity
    if (level === "beginner") {
      paragraphs.push(
        `Second, we must remember that challenges are a natural part of growth. [Use an open hand gesture] When working on ${lowerTopic}, we may face doubts, misunderstandings, or even mistakes along the way. But mistakes are not the end of the road; they are proof that we are trying. If we support each other and keep an open mind, every obstacle related to ${lowerTopic} becomes an opportunity to learn and improve.`
      );
    } else if (level === "intermediate") {
      paragraphs.push(
        `Secondly, we must candidly confront the obstacles that impede genuine progress. [Modulate pitch to convey urgency] In our pursuit of excellence regarding ${lowerTopic}, we frequently encounter cognitive friction—whether in the form of complacency, misinformation, or resistance to change. Overcoming these barriers requires what psychologists term 'resilient adaptability.' We must be willing to scrutinize our assumptions, accept constructive feedback, and iterate our strategies with unyielding perseverance.`
      );
    } else {
      paragraphs.push(
        `Furthermore, we cannot disregard the dialectical tensions inherent in this domain. [Pause for contemplation] The pursuit of excellence within ${lowerTopic} is perpetually contested by inertia, institutional complacency, and superficial quick-fixes. Navigating this terrain demands intellectual fortitude: the discernment to separate ephemeral noise from enduring signal, and the moral courage to advocate for systemic reform even when prevailing currents urge passive acquiescence.`
      );
    }

    // Body Paragraph 3 (for duration >= 3 minutes)
    if (duration >= 3) {
      if (level === "beginner") {
        paragraphs.push(
          `Third, teamwork and empathy make all the difference. [Smile and connect with the audience] When we share our knowledge about ${lowerTopic} with our friends, classmates, and family, we inspire them to join us. Positive change never happens in isolation; it happens when people come together with a common goal and help one another succeed.`
        );
      } else if (level === "intermediate") {
        paragraphs.push(
          `Beyond individual effort, the true catalyst for transformation lies in collaborative synergy. [Direct eye contact with left and right sections] When diverse perspectives converge around ${lowerTopic}, innovation flourishes. Empirical evidence consistently demonstrates that teams with high communicative empathy and cross-disciplinary collaboration resolve complex dilemmas far more effectively than isolated experts. Our collective responsibility is to cultivate an environment where constructive discourse around ${lowerTopic} is both encouraged and celebrated.`
        );
      } else {
        paragraphs.push(
          `Moreover, the imperative of cross-disciplinary synthesis cannot be overstated. [Elevate vocal projection] The multifaceted dilemmas posed by ${lowerTopic} cannot be resolved through monolithic lenses. They require the fusion of rigorous empirical inquiry, philosophical nuance, and empathetic humanism. By dismantling academic silos and forging collaborative coalitions, we empower a new generation of thinkers capable of harmonizing technological potency with humanistic values.`
        );
      }
    }

    // Body Paragraph 4 (for duration == 5 minutes)
    if (duration >= 5) {
      if (level === "beginner") {
        paragraphs.push(
          `Another vital lesson is patience and steady practice. [Lower tone slightly to show sincerity] Big accomplishments do not appear overnight. If you practice your communication and stay dedicated to ${lowerTopic} every single day, you will look back in six months and be amazed at how far you have traveled.`
        );
      } else if (level === "intermediate") {
        paragraphs.push(
          `Additionally, we must cultivate long-term strategic patience. [Slow down delivery for weight] In our hyper-accelerated modern culture, we are often seduced by the illusion of instantaneous mastery. Yet enduring mastery over ${lowerTopic} is built upon cumulative, unglamorous dedication. It is the steady accumulation of small, disciplined actions—day after day—that ultimately yields profound, lasting transformation.`
        );
      } else {
        paragraphs.push(
          `Finally, we must contextualize our endeavors within an intergenerational framework. [Solemn, deliberate tone with sustained eye contact] The choices we make today regarding ${lowerTopic} will reverberate across decades, establishing precedents for communities and scholars yet unborn. This realization demands a profound sense of stewardship—a commitment to leaving behind a conceptual, ethical, and practical legacy that enriches the human experience.`
        );
      }
    }

    return paragraphs;
  }

  buildConclusion(topic, lowerTopic, level, style) {
    if (level === "beginner") {
      return `In conclusion, ${topic} is not just an idea to listen to; it is a call to take action. [Pause and deliver with warmth]\n\n` +
        `Let us remember that every great journey begins with one decisive step. Starting today, let us embrace ${lowerTopic} with curiosity, speak up with confidence, and support one another every step of the way. Thank you very much for your kind attention! [Smile, bow or nod head politely]`;
    } else if (level === "intermediate") {
      return `In closing, let us synthesize what we have explored today. [Pause for final emphasis]\n\n` +
        `We have seen that ${topic} is a vital catalyst for personal growth, intellectual clarity, and social progress. The challenges are undeniable, yet our capacity to overcome them through collaborative stewardship and disciplined purpose is greater still. As you step out of this room today, do not leave these insights behind. Carry them into your conversations, your studies, and your leadership. Let us be the generation that transforms the promise of ${lowerTopic} into an enduring reality. Thank you! [Warm, authoritative closing gesture]`;
    } else {
      return `To conclude, distinguished audience, we arrive at the ultimate synthesis of our discourse. [Sustained pause — hold the room's gaze with stillness]\n\n` +
        `${topic} stands as both a mirror reflecting our present capabilities and a window into our collective potential. We are not merely passive recipients of this evolving reality; we are its decisive authors. Let our engagement with ${lowerTopic} be marked not by timid hesitation, but by intellectual vigor, empathetic wisdom, and resolute commitment to excellence. The future is waiting to be shaped—let us shape it together with vision and conviction. Thank you! [Resolute nod of respect]`;
    }
  }

  /**
   * Returns expert speech delivery tips
   */
  getDeliveryTips() {
    return [
      {
        title: "The 3-Second Eye Contact Rule",
        icon: "eye",
        description: "Do not glance erratically across the ceiling. Pick an individual in the left, center, or right quadrant of the room, hold natural eye contact for 3 full seconds while completing a thought, then transition to someone else."
      },
      {
        title: "The Strategic Pause (Silence as Power)",
        icon: "volume-x",
        description: "Amateur speakers rush to fill silence with filler sounds like 'um', 'ah', or 'like'. Master speakers use a 2-second pause after a key sentence to let the gravity of the point sink deeply into the audience's mind."
      },
      {
        title: "Voice Modulation & Pacing",
        icon: "activity",
        description: "Maintain an average pace of 120-140 words per minute. Slow down during profound conclusions, elevate your vocal energy during hooks and calls to action, and lower your volume slightly to draw listeners closer during personal insights."
      },
      {
        title: "Physical Stance & Open Gestures",
        icon: "user-check",
        description: "Stand balanced with feet shoulder-width apart. Keep your hands above the waist and use open-palm gestures. Avoid crossing your arms, pacing nervously, or gripping the podium tightly."
      },
      {
        title: "Mastering Stage Fright & Adrenaline",
        icon: "shield",
        description: "Adrenaline is simply energy waiting to be channeled. Reframe nervous butterflies as enthusiasm: your body is energizing you to perform. Take three slow belly breaths before taking the stage."
      }
    ];
  }

  /**
   * Guide on how to begin, organize, and conclude a speech confidently
   */
  getSpeechGuide() {
    return {
      title: "How to Begin, Organize, and Conclude a Speech Confidently",
      sections: [
        {
          heading: "1. How to Begin: The First 30 Seconds",
          points: [
            "Never start with a dull 'Good morning, today my topic is...'. Instead, captivate attention with an intriguing question, a dramatic statistic, or a vivid metaphor.",
            "Establish the 'What's In It For Them' (WIIFT): explicitly tell the audience why listening to this speech benefits their lives.",
            "State your Thesis Roadmap clearly: briefly preview the 2-3 core pillars you will explore."
          ]
        },
        {
          heading: "2. How to Organize: The Power of Three",
          points: [
            "Limit your main body to three well-structured points. The human working memory naturally remembers ideas in triads.",
            "Use clear verbal signposts: 'First, let us examine...', 'Secondly, we must confront...', 'Finally, the practical solution lies in...'.",
            "Pair every abstract argument with a concrete real-world example or human story."
          ]
        },
        {
          heading: "3. How to Conclude: The Lasting Impression",
          points: [
            "Signal the landing with clarity: 'In conclusion...' or 'To synthesize what we have shared...'.",
            "Never introduce brand-new data in the conclusion; instead, elevate your previous points to a higher philosophical plane.",
            "Deliver a definitive Call to Action (CTA): tell the audience exactly what mindset, habit, or action they should adopt starting today.",
            "Finish with a memorable punchline and hold the room's gaze for two seconds before thanking them."
          ]
        }
      ]
    };
  }
}

// Instantiate and expose globally
if (typeof window !== 'undefined') {
  window.LexiconSpeechEngine = LexiconSpeechEngine;
  window.speechEngine = new LexiconSpeechEngine();
}

