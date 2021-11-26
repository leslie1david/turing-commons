# Activity 7: Developing Case Studies [1]
###### tags: `RRI Course (Nov 2021)`

:::warning
This is the collaborative document for 'Group 1'. 

The following documents are for the other groups:

- [Group 2](https://hackmd.io/@cburr/B1Qx4v68Y)
- [Group 3](https://hackmd.io/@cburr/B1v1Vw6Lt)
:::

## Predicting Risk of Reoffending

You are a project team responsible for developing a predictive risk assessment tool that can support sentencing decisions by judges in criminal courts. The tool will take data about a defendant and feed this into an algorithm that predicts a *risk score*, between 1 and 5 that is presented to the judge alongside additional case evidence (e.g., witness testimony). This score will represent the likelihood of reoffending, and, therefore, inform the sentencing decision made by the judge. For those that are discharged, the system will also receive feedback about whether the defendant goes on to reoffend. 

| Category | Details |
| --- | --- |
|*Type of technology:*| Decision Support Tool|
|*Context of Use:*| Sentencing Decisions in Criminal Courts|
|*Outcome:*| A Risk Score |
|*Project Team:*| Data scientists working for the courts|
|*Data Types:*| `Age`, `Gender`, `Crime Committed`, `Postcode`, `Housing Status`, `Level of education`, `Occupation`, `Past offences`, `Feedback from police and parole officers` (i.e., whether the defendant goes on to reoffend)|
|*Data Source(s):*| Criminal Court Data |

## Developments

- Many rooms for bias in this system 
- Correlation btw housing and education but not in the ML pipeline 
- Feedback from parole officers - qualitative or quant?
- Integration of feedback from psychologists

## Questions

- Decision to decide - ethical question
- Can we gamify this?
- The ML generalises people, but whereas the challenge here is to predict who is likely to change more positively. We don't have the variables for this kind of prediction. 
- Who is more biased - the judge or the ML system? ( Real judges have passed biased decisions directly correlared by the time of the day)
- Used for all types of crimes? (yes)

## Stakeholders
1. Judge 
2. Jury
3. Customer Support for the tool / Quality Assurance
4. Data Scientist / Ml engineer / Data Engineer 
5. Lawyer representing the person 
6. ex-criminal 
7. Police officers
8. family and friends of the victim: Giacomo is 70 year old british/italian man. He is in a wheelchair due to a boat accident. He has been married to Marjorie for 15 years.
9. Jury: Lily Chen is a 35-year old high school teacher. She has a degree-level education in Geography. She immigrated to the UK from China with her parents as a child. She reads the news regularly. Her father has Alzehimer's and requires her care. 
10. Victim: Marjorie is a 67 year old white woman. Marjorie has just retired from her job as a doctor. She lives in a big house in West Hampstead and goes swimming in the ponds. One day coming back from the ponds, she notices that someone has broken into her house. As she enters the house, a young man runs past her and she falls over and breaks her wrist. 
11. Psychologist: X who provides feedback on the criminal’s behaviour for risk prediction of re-offending. X has a PhD in criminological psychology, and has been supporting the law enforcement system and police officers for the past 10 years in profiling criminals, comprehending their motivations and has provided multiple testimonies in the UK courtrooms. X has been attacked in public and online forums but has also been highly supported by the friends and families of those criminals who served their time and were offered a second chance because of her.X would have the access necessary to be able to communicate their needs regarding this project with the senior decision-makers or developers. It is highly unlikely that developers would be able to integrate the expertise of X into the decision support tool, but X has served as a human in the loop in many automated legal decision making systems. Though X's identity would not be unfairly treated, it is hard to quantify if X's opinions will be considered fairly or not by either the system or the judge. 

## Problem Forumlation

* Identifying individuals likely to reoffend to offer interventions (rather than punitive decision-making) - flagging system for support packages
* Anti-bias decision helper (uncovers likely human/systemic biases so judges can factor these in to their decisions)
* Mitigating circumstances: part of defendant's case
- The rate of reoffence is too high and judges will sometimes misjudge the risk of reoffending
- The algorithm would predict the risk of reoffending and compare it to actual reoffending rates. It would then calculate false negatives for different groups and use this to encourage judges to be aware of the bias in the system. 
- The algorithm would compare data about rulings of risk of reoffence rates to actual reoffence rates and would use these to predict for each defendent if they were likely to be have a biased ruling. This would then be flagged to the judge to encourage them to be careful with their sentencing/compensate for he systemic bias. 

## Missing Data 

#### Question: Think about possible stakeholder groups that are not currently included or well-represented in your project? Perhaps there is a persona that you did not use in activity 6 that you could reuse. Could this group or persona be a source of missing data for your project? If so, what issues could arise as a result of the absence of this data?

-  Answer: Missing Data: Limited to a nation (highly biased towards one nationality). It is a vicious Cycle if crime rates are high in one area and those areas are then used as a feature to predict the risk of re-offending, resulting in a location bias. Not missing data, but feedback from police officers in natural language can be hard to integrate into the ML pipeline - words frequency or sentiment can be extracted from the feedback but the technology is yet to reach expert-human level natural language understanding.

-  Is the data added up to date? Is it dynamic? If the criminal seeks education - is it added on their report?

#### Question: At which stage of ‘exploratory data analysis’ would you be able to identify this absence (if at all)? Could something have been done earlier in the project lifecycle to prevent this from occuring?

-  Answer: Selection bias can be spotted during data design and collection phase. Plotting the frequency distributions of each variable and looking at the anomlaies can give us insight into each feature set. We can look for furthing missing values in the dataset features and remove them altogether if they are not sufficient. During model training, and prediction, we can use a subset of dataset variables and see the change in prediction. Later on, using explainable AI methods and algorithms, we can identify which features were used to making a prediction - for example, if education level comes up as the most important feature, then it is for the ethics specialist to decide if this is fair(not really many people start working at 18 due to financial constraints). If housing status is the most imp feature then it creates a cycle for poor and homeless who become targets of the algorithm due to lack of equitable treatment. 

#### Question: Are there identifiable reasons for why the data is missing? If so, is it right to gather the data? Is it possible that doing so would violate a stakeholders right to privacy?

- Under-reporting of certain crimes: some crimes, for instance rape and domestic violence, are much less likely to be reported, and also to be judged as guilty, so reoffence rates are unlikely to be captured. 
- Different rates of reporting different levels of policing in different areas, and leads to inequities in the liklihood of being found guilty of a crime
- Some groups are more likely to commit crimes but tracking their data online could be a violation of their privacy.
- Data missing about what happens after release/offence

#### If you cannot gather the data, are there any imputation methods that you could use to mitigate the impact of the missing data bias?

- Answer: 
- Individual Factors: Homelessness, Lack of work, poor relationships, poverty levels, Drug and alcohol misuse,
- Environmental Factors: Lack of policies for a certain group of peole pushing them to do illegal things to continue a living, a natural or an industrial disaster causing people to lose all their financial savings 



[*Risk, Need, Responsivity Model*](https://www.justiceinspectorates.gov.uk/hmiprobation/research/the-evidence-base-probation/models-and-principles/the-rnr-model/) 

- drug misuse
- alcohol misuse
- social network
- attitudes towards crime
- lack of work
- homelessness

![](https://i.imgur.com/mFcXLJt.png)


## Model Reporting 

#### Are there limits on transparency or disclosure of information? If so, is there another form of assurance that can be provided?

- Answer: There is highly sensitive information about individuals' personal details and criminal records which cannot be made public, but the defendant would be able to see their own attributes and how they woud be used; (the use of the algorithm would be optional and consent would be sought?)
- The purpose, design team of the model could be made public 
- Some elements can be made public, including: data about how often the algorithm flags bias in the system compared to actual reoffence rates and judicial risk assessments; categories of data which are collected and used by the algorithm. 

#### If your model has been trained on sensitive information, does your model report risk violation of data privacy or protection principles?

- Answer: Depends on the type of sensitive information used, was the data scraped from their online profiles or was the private data used was collected after consent. 
- 

#### Should your model report be published publicly, or does this increase the risk of security breaches (e.g. model inversion attacks)?

- Answer: If it is published publicly and people are able to test the limits of the algorithm on innocent citizens, then we can caclulate the robustness of the model. It does increase the risk of inversion attacks.

#### If your model is presented in a research context, do other research teams have sufficient information to reproduce or replicate your model?

- Answer: They don't have sufficient information if sensitive data has been used in the database and if they are integrated into the ML pipeline separately.
- We could potentially have the code for the algorithm openly available, and use synthetic data which others could apply - but we would be concerned about misuse? ( Open source code is usually good but the downside is that criminals can misuse them to get a low risk prediction score - by either cyber attacks, pretending to be doing good to get good feedback from the officer. It is more risky if we don't open source it because if it is only tested on a small pool of candidates, it might overfit. )
- Possibly having panel access to a data haven and restricted access to code but allow researchers to apply for access? ( The model can be exported and can be used to make predictions without sharing the details of the implementation and how data was processed, however this assumes the dataset size, features and type are similar for both the applied and research context. ) 
- Possiby having federated learning? [ where the training takes place across multiple decentralized edge devices (clients) or servers on their personal data, without sharing the data with other clients, thus keeping the data private.] A good solution in case data cannot be directly accessed. 

#### Who is the primary audience of your model? What information are they likely to benefit from having access to?

- Answer: 
- Audience: Judge
- Information Useful: Insteasd of Risk Prediction, an overview data visualisation or dashboard of the profile would allow a judge to make an informed decision.
- Another way to develop something like this is to ask and interview 1000+ judges and what features convinced a criminal was at the risk of re-offending and then integrate them in the pipeline. 
- Another question is how is the physical presence and emotions of the criminal affect the judgement by a judge versus only the descriptors of the criminal on a digital document?  
  
## Goals, Properties, and Evidence

Goals : Our algorithm helps judges make more informed decisions
- identify existing bias
- Acts as decision support tool for the judge
- Profiles each criminal (A risk categorisation of criminal - with x percent of confidence)
- In the case of supervised ML, since labels are already available, and the model learns based on the labels, there is a clear labelling bias. The model not only incorporates the dataset bias, but the existing bias of the previous judges. 

The decision support tool supports the judge in making less biased decisions in an accountable way

## Accountability

### Traceability

"Traceability refers to the process by which all stages of the data lifecycle from collection to deployment to system updating or deprovisioning are documented in a way that is accessible and easily understood. This may include not only the parties within the organisation involved but also the actions taken at each stage that may impact the individuals who use the system."

- Keep records of where the data comes from eg from defendant, police reports etc. Clear who has accessed the data. 
- Tracing the explainations of predictions from outcome back to input data 
- A flowchart of each decision taken in the ML pipeline and why. And if there were alternatives, why were they not considered or followed(money,time, difficulty in implementation, or no research in that specific direction is yet practical?) 
- An onboard  ethics specialist on the data engineering and the model dev team to signal if any of the implementation strategies is against the principles of rri to reduce any delays caused by the ongoing dialogue between the dev and the ethics team.

### Answerability

"Answerability depends upon a human chain of responsibility. Answerability responds to the question of who is accountable for an automation supported outcome."

- The judge has the final say on the sentencing.
- (Is there a way of calculating the influence of the algorithm on the judge's decision? Maybe if a judge makes a decision independent of the tool and then a valid comparison can be made? If the tool is being developed to completely replace the human judge- is that even ethical?? (The truth is law enforcement is going to be automated for most generic small scale cases (ex: parking lot ticket fines) and the ones who suffer would be the anomalies, the expats, the refugees, and the minorities.))


## Auditability

"Whereas the property of answerability responds to the question of who is accountable for an automation supported outcome, the notion of auditability answers the question of how the designers and implementers of AI systems are to be held accountable. This aspect of accountability has to do with demonstrating and evidencing both the responsibility of design and use practices and the justifiability of outcomes."

- Versioning of the datasets
- Versioning of the models 
- Quantifying and Identifying bias in the model (Is it against human rights that a software tool decides the future of a person? Kind of yes, but we are moving into that era anyway: resume screens, health, entertainment content recommendation are indirectly influencing us. But this is the right to a second chance at life (check ECJ))
- Datasheets: describing each dataset in detail and it's properties
- Modelsheets: describing the model implementation and why it was chosen
- Confidence and Risk Scores of each prediction


# Steps for Building an Assurance Case
<!-- To build an assurance case for your project, you will need to complete the following steps:
 -->
##  Decide on one goal that is important to your project. 
<!-- In reality, several goals may be important, but we’ll just focus on one. -->
- Goal: A Risk Score for judges to help them with the evaluating the risk of reoffending

## Consider the attributes of this goal for which you will need to develop corresponding system or project property claims.
- Attributes: Traceability, Accountability, Sustainability

## Use the project lifecycle as a reflective guide to help you identify the relevant claims.
<!-- Do X using Z for stakeholder S during phase P of lifecyle  -->

<!-- ### Claims for Traceability 

A) Data Extraction
1. Decide which data to collect, using qualitative methods for all stakeholders:judges, lawyers, criminals, officers during data extraction of lifecyle 
2. Design the timeline of the data collected
3. Decide which datasets are to be included and excluded: are there any judgements we know were biased in the past?
4. Decide where to to host the data- Data storage
5. Decide who has access to the data - Data access
6. Legal use of the dataset - consent 
7. Ethical monitoring and evaluation of dataset to trace FAIR attributes
8. Data Processing/Feature Engineering is documented and communicated to ensure FAIR

B) Model  -->

### Claims for Traceability 
- The decisions in the data and model design pipeline can be effectively traced. 
### Claims for Accountability 
- All the decisions by the model- risk scores can be explained.
### Claims for Sustainability 
- The code and data is sustainable over time in both technical and society.


## Identify the type of evidential artefact that would need to be documented to support the set of claims.

### Evidence for Traceability:
1. What will be the type of evidence? Event, Data and Model Logs
2. How to collect evidence? Logs embedded in the code, Documentation of dataset
3. How to verify it? Reliability on a third party libaray for logging capabilities 
4. How to share it? as text files or as aggregated dashboards with specific Key performance indicators
### Evidence for Accountability 
1. What will be the type of evidence? Explainations of predictions [depends on type of data used and type of method implemented]
2. How to collect evidence? Collect explainations of each prediction during model training, validation and testing
3. How to verify it? If explanations are relying on a particular text,image or characteristic, removing that feature from the dataset and comparing the resultant explanations? We can also identify the most important feature used to predict the risk score. 
4. How to share it? To the user- via detailed text/image
### Evidence for Sustainability 
1. What will be the type of evidence? Monitoring functional and non-functional metrics for technical sustainability and reaction from public/society for societal sustainability
2. How to collect evidence? DevOps, employing continuous integration, continuous delivery (CI/CD) practices, Measuring resource availability, cycle time, documenting and upgrading hardware architectures to meet the needs of software over time. For societal sustainability, surveying people, questionnaires.
3. How to verify it? Establishing thresholds for code metrics and making sure the data/code meets it. 
4. How to share it? Dashboards within internal teams? Public reports based on qualitative analysis

## Determine if your evidence base is completed and sufficient.

## Evaluate the overall strength and justifiability of your argument.



