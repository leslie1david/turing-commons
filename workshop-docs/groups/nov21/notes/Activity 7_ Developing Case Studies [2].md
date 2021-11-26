# Activity 7: Developing Case Studies [2]
###### tags: `RRI Course (Nov 2021)`

:::warning
This is the collaborative document for 'Group 2'. 

The following documents are for the other groups:

- [Group 1](https://hackmd.io/@cburr/B1EYmvpLF)
- [Group 3](https://hackmd.io/@cburr/B1v1Vw6Lt)
:::

## Recommending Courses

You work for an EdTech company and need to develop a recommender system that will be sold to schools to augment careers advice for students considering university courses. The system will ask each student to answer a series of questions, and will then provide an ordered list of recommended courses (linked to the respective university) that it "believes" are good options for the student. The system will also use satisfaction survey results and obtained degree results from those students who used the system previously as a way of calibrating and adjusting its recommendations (i.e., learning).


| Category | Details |
| --- | --- |
|*Type of technology:*| Recommendation System|
|*Context of Use:*| Secondary Schools or Colleges|
|*Outcome:*| A ranking of possible degrees and career paths |
|*Project Team:*| Private EdTech Organisation|
|*Data Types:*| `Courses currently being studied at school`, `Current grades`, `Gender`, `Age`, `Postcode`, `Extracurricular activities`, `Interests/Hobbies` (from list of pre-selected options), `Satisfaction survey results from previous users of system`, `University grades of previous users of system`|
|*Data Source(s):*| Input by Student, Gathered from Partner Universities |

## Developments

Opening Discussions:

- Privacy and consent - do these data points put individual students at risk of identification? I.e. postcode - could we use city or country level? Does the school consent on behalf of the individual? - minimal data collection. - who has access to this data? Does everyone inside the project has access to everything? Is it necessary? Need to know principle.
- Can we use the data points and design the algorithm in such a way that we can achieve benefits rather than risk? Some students may prefer to give more information to assess their options if they have special requirements.
- How is "good option" defined? Success metrics are relative.
- Fairness - there is a comparison to the A Level results prediction algorithm - a "good" option for a student from a school in a poorer area may reflect the historical data of the school and therefore limit the presented options.
- Context is critical - Italy vs US vs Brazil vs India. Relevance of postcode in conjuction with other data points can lead to different degrees of discriminatory bias. 
- Even assuming post-code is a relevant piece of data in deciding future university, this assumes every student prefers a closer uni over another one which may be slightly better but farther from home. This is not an assumption every student would agree on.
- India - caste system - location is likely to limit your opportunities. More than 90% of people in an area from a particular caste. Historical baggage.

## Personas Activity
- Auste: *Parent* - G. is married and have a child with disability (5 year old daughter). G. immigrated from Eastern Europe (Lithuania) 7 years ago. G. has no higher education and struggle communicating in English. They live in an area with high percentage of Lithuanian-born residents. 
- Mayara: *Teacher/Staff* - Transgender F, brazilian who lives in the UK (language barrier), poor neighborhood, first person in the family who has a college education.
- Andrea: *Student* - C. is an Italian-born male high school student living in south-east London. He moved to London with his mother ten years ago after she lost her job in southern Italy. He partly had difficulties in feeling part of the school community in SE London and, as first-gen uni student, he is looking forward to receiving an expert advice on which university path to take.    
- Olu: Regulator/Policy, represented by Mr Luke who himself is a black british immigrant with children of his own who are seeking admission into Universities. He is an average earner who relies on public tuition for his children
- Ayerakwa: A Ghanaian from a less endowed background background who moved to the UK on a scholarship and managed to obtain employment as a School Headteacher in the UK after his masters degree in a privilege UK school. He has a task to make the school one of the best digital friendly school and needs to understand what the ethical implications he has to consider
- Tessa: *Peer /Friend* - Male student from a white middle class background. Both parents went to university and have reasonable incomes. Doesn't qualify for free school meals and has access to extracurricular activities. 
- Anand: *Parent* Mr / Mrs XYZ and their daughter (then aged 2 years) migrated to UK before 15 years from Sri Lanka when the ethnic-conflict in the country was reaching its peak. They got a refugee visa in 2011. They sort of started from scratch and are currently running a successful restaurant in the outskirts of London. English is not their first language (they are proficient in Tamil and Sinhalese). Thier family income falls below the 50%ile median income of the locality.

Key Summary of Personas
- Ability to communicate needs is critical
- Where developer identities don't map to the stakeholder identities, particurly in high stakes applications, greater degrees of stakeholder involvement are encouraged. 

Data Lifecycle Discussion

We would like to create a tool which supports students in deciding which career path to follow. 

Our core questions are:

What gap does this technology fill?

UI needs to make the limitations very clear.

Who benefits?

How does the collected data correlate with a "good" decision? 

Explainability - why is the information important? 

Digital literacy - who is going to audit the system and where is the accountability - the users are unlikely to be able to challenge.

Are the model recommendations going to be taken at face value? Or is there a human element to customize the results before sharing with the student.

Need a risk or impact assessment and to return to that over time to test and develop the project.

Important to know how to frame risk: exonomic / quality of education - multiple varaibles to be taken inro consideration.

- Project Planning
    - Is the technology or model you are considering the right one for the problem that has been identified?
    - Have you discussed the project with an ethics committee or internal review board to help evaluate the project’s objectives and processes?
    - Have you anticipated possible challenges that could arise in the future stages of the project lifecycle (e.g. sufficient funding or resources to ensure adequate user training)?
    - Have you conducted a risk or impact assessment that provides a comprehensive overview of the target domain and a contextual evaluation of possible harms such as discrimination or privacy violations?

- Problem Formulation
    - Have you engaged affected stakeholders or users to ensure that their needs and challenges are well reflected in the problem formulation?
    - Does the manner in which you have formulated the problem statement reflect certain biases inherent to your teams specific standpoint?
    - Do any of the input or output variables pose unacceptable risk of representational harm to marginalised or vulnerable groups?

- Data Extraction or Procurement
    - Where has your data been obtained from?
    - If it has been procured, do you have sufficient transparency and information about its provenance to ensure you are able to carry out the necessary forms of due diligence and responsibility?
    - Have the data subjects been engaged and participated in the data collection, including being presented with an adequate explanation of the purpose for its collection and processes by which the data will be stored and processed (e.g. kept secure)?

## Goals: Explainability

- Interpretability:  the model suggested career X because the individual provided the folowing information: previous courses, extracurricular activities, interests/hobbies, user feedback 
- Responsible Model Selection: 
Selecting a black box model with high accuracy and a post hoc XAI technique such as SHAP, LIME or Counterfactuals. 
- Accessible Rationale Explanation: counterfactual explanations. Local post hoc explanations might be more usable and understandable to the end users (eg. students, parents, teachers). 
    - Transfer the output of model to a language the end-user can understand in their native language
    - Use contrastive explanations - explain why event P happened instead of some event Q.
    - The system answer the following questions: (Doshi-Velez; Kortz; 2017)
        - What are the main factors of this decision? 
        - If I change a certain factor would it change the decision?
        - Why two similar cases had the same outcome? Why two different cases had the same outcome?
- Implementation and User Training: Educating the user on the model recommendation system. Ensure that the recommendations are only directional. The recommendations are only means to take an informed decision.
    - Allowing user to feedback to the system and personalise it could aid understanding. 
    - What is ML? What does it do? What it can't do? What are the potential harms/biases involved? 
    - AI biased output risks
    
## Questions

- Write here
