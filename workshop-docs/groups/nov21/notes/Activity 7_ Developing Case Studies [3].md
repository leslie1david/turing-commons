# Activity 7: Developing Case Studies [3]
###### tags: `RRI Course (Nov 2021)`

:::warning
This is the collaborative document for 'Group 3'. 

The following documents are for the other groups:

- [Group 1](https://hackmd.io/@cburr/B1EYmvpLF)
- [Group 2](https://hackmd.io/@cburr/B1Qx4v68Y)
:::

## Classifying Hate Speech

You are a team of social data scientists employed as consultants for a social media company. You have been tasked with reducing the levels of hate speech on the company's platform by developing a classifier that can flag potential instances of hate speech for review by human moderators. The tool will automatically review every post submitted to the platform, but will only flag those that are likely to represent an instance of hate speech, based on whether they exceed some likelihood threshold. In addition to the textual content contained within the post, your tool can also use a variety of other input sources to improve its decision-making, including feedback from the human moderators that help improve the accuracy of the model over time. 

| Category | Details |
| --- | --- |
|*Type of technology:*| Hate Speech Classifier|
|*Context of Use:*| Social Media Platform|
|*Outcome:*| Binary variable ('hate speech' or 'not hate speech') with confidence rating |
|*Project Team:*| Social Media Consultants and Platform|
|*Data Types:*| `Text content of post`, `Links or URLs`, `Network or connections of user`, `Tags`, `Images`, `Use of emojis`, `Liked communities`, `Stored cookies`, `Moderator feedback`|
|*Data Source(s):*| Social Media Company Data |

## Developments

**Stakeholder Groups:**
- Social Media Users
    - Individual who posts hate speech
    - Individual, group, or similarly situated users who are targeted by hate speech
    - Other social media users whos posts may be reviewed
- Content Moderators
- Social Media Researchers
- Social Media Platform Staff

https://app.mural.co/t/responsibleresearchandinnova4822/m/responsibleresearchandinnova4822/1636535196478/ed4c4319fc09da009a9569674b43b090b8343974?sender=daef1775-14eb-4528-9fd1-33e176230877
- Personas used for the Activity walk and the rest of the activities associated with the case studies:
    - Kim is an elderly mother of someone often flagged for hate speech who does not speak the main languages used by the staff/researchers of the platform (other social media users)
    - Meena is a young person of Asian origin who is often the target of hate speech, particularly based on colour of skin ; this is really obvious when she participatees in conversations / debates online specific to politics and conversations usually devolve into barbs along the lines of 'go back to where you came from' even though she was born in the country that she is using the platform in(individual targeted by hate speech)
    - Angel is young, white, female, graduate who has an anxiety disorder. She works as a content moderator for the social media platform. Her content moderator role is freelance and she works on a zero-hours contract. She is also a keen user of social media platforms, and is part of many communities related to mental health. She uses these communities to help manage her anxiety disorder.  
    - Margaret is a social media researcher based in the UK who is studying the global platform for her PhD study at an elite higher education institution. She is interested in understanding the impact of recent changes in the UK's immigration policies on the way people talk about issues related to race.  She is a lawyer by training and is grounding the research in principles enshrined in the law. She was not a user of the platform prior to her study.
    - Steve is a 40 year old, male who is an avid and passionate sports fan of their local team, and has great pesronal attachment to them. Their team are playing the rivals and a  player's actions resulted in their beloved team losing, resulting in a range of angered emotions, with the incination to vent this on social media at the opposing ream + the player invovled.      
    - Mirriam is a middle-eastern young woman. She is well-educated and pretty mush aware of what might be considered hate-speech. She herself is a constant target of oppression and hate-speech in real life so by default, she self-censors not cause hersel any extra social trouble. To compensate for that, her expectations of being protetcted online, are much higher than what can actually be met. Turns out to her surprise, that more often than not, she is stigmatised because of her network.
    - Leo, social media staff member, male, 35 years, single, homosexual, white, has went to elites schools and renamed university. He has investements in cryptocurrency. 

Questions on the case studies as they relate to the project lifecycles
* Project planning:
    - Is the technology or model you are considering the right one for the problem that has been identified?
    
    *In the project planning stage it would be useful to consider the pros and cons of ways in which the problem could be addressed and then conduct a risk assessment of one approach over the other.*
    
    - Important features:
        - Model should be explainable to end users
        - Diversity of moderators
        - Ability for definition of (and training data for) "hate speech" to evolve and adapt to different circumstances

    - Alternatives include: 
        - Completely manual - psychologically traumatic
        - Employing "social media librarians" - issues with scalability.
        - End users flag hate speech - overburdens users
    - Have you discussed the project with an ethics committee or internal review board to help evaluate the project’s objectives and processes?

    - Have you anticipated possible challenges that could arise in the future stages of the project lifecycle (e.g. sufficient funding or resources to ensure adequate user training)?

    - Have you conducted a risk or impact assessment that provides a comprehensive overview of the target domain and a contextual evaluation of possible harms such as discrimination or privacy violations?
* Problem formulation:
Definition of hate -      'tagging bias', evolution of time
Gaining context from words - e.g. consideration of emojis

* Data Extraction and Procurement:

## Activity 8
- Missing data:
    - Non-english language + emojis/symbols that have different cultural meaning + colloquialisms
    - Lack of contextual understanding from a lack of diverse content moderators.
    - Only labeling "hate speech" or "not hate speech"; may be beneficial to have other tags/labels like "not sure" or "not enough information"
    - External stakeholders to social media platforms/non-users of social media (may need to train with data 'outside' of platform/synthetic data). How to capture their impact?
    - Need samples of non-hate speech so there aren't too many False Positivies
    - Training data is always "behind" the current state of hate speech, so data & model must react/adapt to catch up
        - Combination or proactive (baseline) and reactive (forward looking)
    - Privacy considerations of historical data and re-identifying accounts; maybe synthetic data can help anonymize
    - Platform design choices to protect users from hate speech
    - Moderator feedback is important for user + model learning
    - Intended and unintended uses
    - How does top-down action by a platform (censoring/flagging) impact the person disseminating the hate speech; maybe they'll double down and become more extreme
    - Will social media companies be able to operationalize this level of oversight to keep up with upcoming legislation?
    - User vs. bot vs. platform moderation

## Activity 10

What is an important SAFE-D goal we can claim for our system?
- Our two most impacted personas: Kim + Miriam (targets of hate speech)
- Fairness
    - Diversity + inclusion
- Sustainability
    - Up to Date
    - Reliability
- Robustness
- Explainability of hate speech when it's flagged
    - If we have a good explanation, maybe better to have higher False Positives for content moderator review
- Traceability
    - why a decision has been made
- Accesibility
    - Clear, understandable explanation of why hate speech was flagged
- User Privacy + Purpose Limitations

**Goal Definition: Fairness (Diversity and Inclusiveness) & Accuracy and Reliability**
- Ensure Fairness through Diversity/Inclusivness, Accuracy, and Reliability
    - Data considerations as project property

 

## Questions

- Write here
