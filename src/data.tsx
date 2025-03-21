export interface Character {
    id: number;
    name: string;
    role: string;
    bio: string;
    powers: string[];
    weaknesses: string[];
    allies: string[];
    enemies: string[];
    firstAppearance: string;
    quote: string;
    backstory: string;
    recentEvents: string;
    image: string;
    gallery: string[];
  }
  
  export const characters: Character[] = [
    {
      id: 1,
      name: "Superman",
      role: "Hero",
      bio: "Superman is the last son of Krypton and Earth's strongest protector.",
      powers: [
        "Super strength",
        "Flight",
        "Heat vision",
        "Super speed",
        "X-ray vision",
        "Freeze breath",
        "Invulnerability",
        "Enhanced hearing"
      ],
      weaknesses: [
        "Kryptonite",
        "Magic",
        "Red sun radiation",
        "Psychological vulnerability"
      ],
      allies: ["Lois Lane", "Jimmy Olsen", "Justice League", "Supergirl"],
      enemies: ["Lex Luthor", "Darkseid", "Brainiac", "Doomsday", "Zod"],
      firstAppearance: "Action Comics #1 (1938)",
      quote: "Truth, Justice, and a Better Tomorrow.",
      backstory: "Kal-El was born on the planet Krypton to scientists Jor-El and Lara Lor-Van. When Jor-El discovered that Krypton was doomed to explode, he placed his infant son in a spacecraft and launched him toward Earth. The ship landed in Smallville, Kansas, where the baby was found and adopted by Jonathan and Martha Kent, who named him Clark Kent.\n\nGrowing up in Smallville, Clark discovered that he possessed extraordinary abilities unlike anyone else. His adoptive parents taught him to use these powers responsibly and to keep his abilities secret. After graduating from high school, Clark moved to Metropolis to pursue a career in journalism at the Daily Planet newspaper, where he met Lois Lane and Jimmy Olsen.\n\nClark created the Superman persona as a way to use his abilities openly to help people without revealing his true identity. He wears a blue costume with a red cape and a stylized 'S' shield on his chest, which represents his Kryptonian family crest. As Superman, he has saved the world countless times from various threats, both terrestrial and extraterrestrial.\n\nSuperman's moral code prohibits him from killing, and he always prioritizes saving lives above all else. Despite his near-invulnerability, he remains humble and connected to humanity through his life as Clark Kent. He represents the ideal of selfless heroism, using his immense powers not for personal gain but for the greater good of all people.",
      recentEvents: "Recently, Superman has been dealing with a series of global crises. After defeating a coalition of his greatest enemies led by Lex Luthor, he discovered evidence of a mysterious force manipulating events from the shadows. Working alongside the Justice League, Superman has been investigating strange energy signatures appearing worldwide.\n\nHis relationship with Lois Lane has evolved significantly, with their partnership growing stronger both personally and professionally. They've collaborated on a series of exposés uncovering corruption at the highest levels of government.\n\nSuperman has also been mentoring young heroes, particularly Jon Kent and Kara Zor-El, helping them harness their powers and understand their responsibilities. This mentorship has forced him to reflect on his own legacy and what it means to be a symbol of hope in an increasingly complex world.\n\nA recent encounter with a being claiming to be from Krypton's distant past has left Superman questioning aspects of his heritage and the true history of his home planet. This journey of self-discovery has led him to explore ancient Kryptonian artifacts and texts, searching for answers about his origins and destiny.",
      image: "/superman.jpeg",
      gallery: [
        "/supermanaction.jpeg",
        "/supermanmetropolis.jpeg",
        "/clarkkent.jpeg"
      ]
    },
    {
      id: 2,
      name: "Iron Man",
      role: "Hero",
      bio: "A billionaire genius who built a high-tech suit of armor.",
      powers: [
        "Genius-level intellect",
        "Advanced powered armor",
        "Flight",
        "Repulsor technology",
        "Superhuman strength (in suit)",
        "Weapons systems",
        "Advanced AI integration"
      ],
      weaknesses: [
        "Human vulnerability outside armor",
        "Power limitations",
        "PTSD",
        "Alcoholism (historically)",
        "Arrogance"
      ],
      allies: ["Avengers", "War Machine", "Pepper Potts", "Spider-Man", "FRIDAY (AI)"],
      enemies: ["Mandarin", "Whiplash", "Obadiah Stane", "Justin Hammer", "AIM"],
      firstAppearance: "Tales of Suspense #39 (1963)",
      quote: "Sometimes you gotta run before you can walk.",
      backstory: "Anthony Edward 'Tony' Stark was born to Howard and Maria Stark, inheriting not only immense wealth but also extraordinary intelligence. From a young age, Tony showed remarkable engineering aptitude, building his first circuit board at age four and his first engine at six. He graduated summa cum laude from MIT at age 17, already a technological prodigy.\n\nAfter his parents died in a car accident, Tony took control of Stark Industries, transforming it into the world's leading weapons manufacturer. Arrogant and cavalier, he enjoyed the playboy lifestyle while revolutionizing military technology, believing he was keeping America safe.\n\nEverything changed when Tony was demonstrating weapons in Afghanistan and was attacked by terrorists using his own company's weapons. Shrapnel from the attack lodged near his heart, and he was captured by a terrorist group called the Ten Rings. Imprisoned in a cave with fellow captive Dr. Ho Yinsen, Tony was ordered to build weapons for the terrorists.\n\nInstead, Tony and Yinsen secretly built a crude but powerful suit of armor powered by a miniature arc reactor that also kept the shrapnel from reaching Tony's heart. Though Yinsen sacrificed himself during their escape, Tony managed to flee using the armor and was rescued in the desert.\n\nThe experience profoundly changed Tony. He announced that Stark Industries would no longer manufacture weapons and secretly began building a more sophisticated version of his armor. He emerged as Iron Man, using his technology to fight terrorism and protect innocents. Over time, he refined the armor through numerous iterations, each more advanced than the last.",
      recentEvents: "Tony Stark has recently been focused on revolutionizing sustainable energy technology, expanding the arc reactor technology to power entire cities with clean energy. This initiative, dubbed the 'Stark Energy Renaissance,' has put him at odds with fossil fuel conglomerates who have allegedly funded corporate espionage against Stark Industries.\n\nOn the superhero front, Iron Man has integrated next-generation nanotechnology into his suits, allowing for unprecedented versatility and instantaneous deployment. This technology was crucial in defeating the techno-terrorist collective known as the Intelligencia, who had hijacked military drones worldwide.\n\nPersonally, Tony has been working through trust issues stemming from the discovery that an AI he created had been subtly manipulated by unknown entities. This security breach led to a complete overhaul of his technical infrastructure and a period of isolation as he questioned which of his technological creations might be compromised.\n\nStark has also established the September Foundation, providing cutting-edge research grants to promising young scientists and engineers. This philanthropic endeavor reflects his evolving perspective on legacy and responsibility, as he seeks to empower the next generation of innovators rather than simply creating solutions himself.",
      image: "/ironman.jpeg",
      gallery: [
        "/ironmansuit.jpeg",
        "/tonystarklab.jpeg",
        "/ironmanflight.jpeg"
      ]
    },
    {
      id: 3,
      name: "Tommy Shelby",
      role: "Anti-Hero",
      bio: "Cunning leader of the Peaky Blinders gang in post-WWI Birmingham.",
      powers: [
        "Strategic brilliance",
        "Political manipulation",
        "Psychological insight",
        "Fearlessness",
        "Combat experience",
        "Adaptability"
      ],
      weaknesses: [
        "PTSD from WWI",
        "Family vulnerability",
        "Substance abuse",
        "Self-destructive tendencies",
        "Pride"
      ],
      allies: ["Peaky Blinders family", "Arthur Shelby", "Polly Gray", "Ada Shelby", "Johnny Dogs"],
      enemies: ["Inspector Campbell", "Alfie Solomons (sometimes ally)", "Luca Changretta", "Oswald Mosley"],
      firstAppearance: "Peaky Blinders Season 1, Episode 1 (2013)",
      quote: "Everyone's a whore, Grace. We just sell different parts of ourselves.",
      backstory: "Thomas Michael Shelby was born into poverty in Small Heath, Birmingham, to a Romani-Gypsy family with a history of bookmaking and petty crime. From an early age, Tommy demonstrated exceptional intelligence and a natural talent for strategy, distinguishing himself from his more impulsive older brother Arthur and becoming the de facto leader of the local youth despite his age.\n\nWhen World War I broke out, Tommy and his brothers enlisted in the British Army. He served as a tunneler, digging tunnels under enemy lines to plant explosives—a perilous job with high mortality rates. During the Battle of the Somme, Tommy and his unit were trapped underground for days after a tunnel collapse, an experience that profoundly traumatized him.\n\nReturning to Birmingham after the war, Tommy was fundamentally changed. The once idealistic young man had become calculating, distant, and haunted by nightmares. He seized control of the family's small-time criminal organization, the Peaky Blinders (named for the razor blades sewn into the peaks of their caps), and began methodically expanding their operations from illegal betting to more lucrative and dangerous enterprises.\n\nUnder Tommy's leadership, the Peaky Blinders evolved from a neighborhood street gang into a sophisticated criminal empire. Tommy leveraged his war experiences, tactical thinking, and understanding of human psychology to outmaneuver rivals and authorities alike. His ultimate ambition was always legitimacy—using crime as a ladder to climb into the world of legal business and politics, determined to transcend his humble origins and secure his family's future.",
      recentEvents: "Tommy Shelby's recent trajectory has been marked by increasingly bold political ambitions alongside his business ventures. After successfully establishing legitimate business fronts including shipping, property development, and gin distillation, Tommy has secured a position as a Member of Parliament, using his political influence to protect and expand his various enterprises.\n\nHis battle with fascist politician Oswald Mosley has drawn Tommy into dangerous political waters, forcing him to maintain a precarious double life. While publicly aligning himself with Mosley's movement to gather intelligence, he secretly works with elements of the British government to undermine fascism's rise in Britain.\n\nOn the personal front, Tommy continues to struggle with psychological demons. His periods of sobriety are increasingly interrupted by relapses into drinking and opium use, particularly after the tragic loss of family members. These personal struggles have strained his marriage and relationships with his children, creating vulnerability in his otherwise formidable facade.\n\nMost recently, Tommy has been expanding the Shelby Company Limited internationally, establishing connections in America, Canada, and across Europe. This global expansion has brought new enemies and allies alike, including powerful American gangsters and corrupt officials across multiple countries. As his empire grows, Tommy finds himself increasingly isolated at the top, trusting fewer people with each passing year.",
      image: "/Peaky Blinders.jpeg",
      gallery: [
        "/tommyoffice.jpeg",
        "/tommyparliament.jpeg",
        "/peakyblindersgang.jpeg"
      ]
    }
  ];