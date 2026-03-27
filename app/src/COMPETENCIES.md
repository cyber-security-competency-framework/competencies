# Cyber Resilience
**Detect, respond to, and learn from issues and incidents and anticipate attacks.** Patrol the tech stack, sniff out anomalies, manage incident response and continuously improve through learning from issues, incidents and external threat intelligence. When attackers try to infiltrate, resilience means detecting, investigating, containing and recovering from their attacks. These competencies include building and operating automated detection systems and automated and semi-automated response playbooks to make sure that, day in and day out, systems remain secure.

## Security Monitoring <!-- tooltip: Monitoring networks, systems and applications for anomalous behaviour and policy violations to detect and provide context to enrich alerting on potential information security issues and incidents -->

### Novice
- Describes the operational practices, log types and technologies used to collect, process and retain telemetry for security event detection and investigation.
- Reviews logs and identifies obvious anomalies, escalating findings to the relevant team member.
- Explains the purpose of SIEM platforms and describes how alerts, dashboards and data source integrations support security operations.

### Advanced Beginner
- Operates SIEM tools to view alerts, investigate dashboards and query log data for security events.
- Identifies suspicious software artefacts and potential malware indicators, escalating findings with supporting evidence.
- Contributes findings to the continuous improvement of detection rules and monitoring processes.

### Practitioner
- Configures and validates detection rules for attacks and threshold violations, documenting logic and expected outcomes.
- Configures data sources and monitoring tools (SIEM, EDR, NDR), deploying detections mapped to attacker TTPs and indicators of compromise.
- Tunes detection pipelines to reduce false positive rates, tracking changes against alert fidelity metrics.

### Proficient
- Designs detection logic and data models within the SIEM platform, establishing detection standards for the security operations function.
- Embeds monitoring requirements into system design by specifying observability standards and detection-as-code for engineering teams.
- Operationalises advanced detection techniques including anomaly analytics, automated alert correlation, and triage prioritisation.

### Expert
- Leads enterprise cyber attack detection strategy, connecting security operations with fraud and physical security disciplines.
- Pioneers novel detection engineering practices including graph-based architectures, agentic security operations, and automated triage at scale.
- Directs proactive threat hunt operations at a frequency matched to the current threat intelligence picture, publishing findings to inform detection rule development.

## Incident & Issue Response <!-- tooltip: Prepare, practice and execute quick, effective, consistent and orderly response to information security issues (vulnerabilities, misconfigurations and other weaknesses) and incidents (attacks and urgent policy violations), including communication on security events. -->

### Novice
- Describes the basic principles of issue discovery, incident management, and incident investigation and response.
- Follows a templated incident response plan when an incident is detected.
- Describes the differences between issue management, incident response and forensic evidential requirements.

### Advanced Beginner
- Determines incident severity, engages the relevant teams and provides situational updates as new information emerges.
- Analyses digital evidence to identify security incidents, policy breaches or regulatory violations, recording findings in a structured format.
- Contributes to post-incident reviews, documenting lessons learned and proposed improvements to response procedures.

### Practitioner
- Adapts standardised incident response plans to the specific incident, coordinating communications and remediations across relevant teams.
- Analyses technically complex digital evidence from cloud, distributed and agentic AI environments to resolve incidents and identify breaches of policy or law.
- Modifies tools and creates scripts to address non-standard investigation and remediation scenarios.

### Proficient
- Leads the formation and operation of a Security Incident Response Team (SIRT), defining policy and delivering stakeholder communications on business impact and remediation commitments.
- Directs forensic and containment activities across the organisation, defining standards for evidence collection and chain of custody.
- Delivers a written post-incident report to senior stakeholders quantifying business impact and defining three or more preventative measures.

### Expert
- Prepares the organisation for incident response through regular simulations and tabletop exercises, measuring and publishing team readiness scores.
- Leads deep root cause analysis programmes that identify, radiate and eliminate repeat causes of security incidents across the organisation.
- Investigates novel and technically complex incidents requiring original forensic and analytical techniques, producing findings that advance the organisation's detection and response capabilities.

## Threat and Internal Context <!-- tooltip: Learn from incidents, articulate the stages and components of attacks and map to the business and technology context of the organisation to inform decision-making and prioritise defensive measures for attacker tactics and techniques. -->

### Novice
- Describes how organisations can be attacked using frameworks such as the cyber kill chain and MITRE ATT&CK.
- Identifies basic attack techniques including SQL Injection, Cross-Site Scripting and common social engineering methods.
- Describes asset inventory requirements, including what constitutes an asset, why lifecycle tracking matters and the tools used to maintain an inventory.

### Advanced Beginner
- Explains the intelligence cycle and describes threat assessment and threat modelling principles and concepts.
- Uses prescribed tools to acquire, validate and analyse threat, asset and business service information from multiple sources.
- Enriches threat intelligence findings with business and asset context under direction, producing summaries of threat actor behaviour and likely implications for the organisation.

### Practitioner
- Diagnoses attack paths through misconfigurations and vulnerabilities in systems, processes and code, documenting findings with exploitation impact and recommended mitigations.
- Identifies and validates threat, asset and business context from multiple sources without supervision, synthesising findings into intelligence products that inform security team decision-making.
- Develops processes to enrich threat intelligence with organisational context and prioritise remediation of identified weaknesses.

### Proficient
- Reverse engineers malware samples and enumerates attack paths, producing intelligence reports that scope detection rule updates and hardening priorities.
- Synthesises complex intelligence within the organisational architecture and strategy context, leading the threat intelligence function and its outputs for the organisation.
- Designs and delivers threat intelligence products (e.g. threat assessments, attack path reports) to scope security testing, hardening and detection engineering, and participates in sector-level intelligence sharing.

### Expert
- Pioneers innovative defence techniques against emerging threats, publishing findings to advance sector-level understanding.
- Leads sector or national-level intelligence sharing initiatives, shaping collective defensive posture.
- Commissions and delivers threat intelligence-based red team exercises for external stakeholders, redefining industry standards for threat-informed testing.

# System Hardening
**System level building and testing to prevent, find, and fix exploitable weaknesses and to make attacks less likely, less impactful and more recoverable.** System hardening architecture and engineering, ensuring that access, data, code, infrastructure are designed to resist attacks. This is about building and testing data, software and the infrastructure hosting and accessing the data and software so they are verifiably secure. It is the essential task of developing and verifying secure-by-default and secure-by-design infrastructure and code (and infrastructure as code). Competencies include securing cloud, CI/CD and the code, seamlessly weaving security into the fabric of the software development lifecycle across buildtime and runtime.

## System & Application Security <!-- tooltip: The secure design, testing and protection of software, systems and infrastructure across the full lifecycle — from code and build pipelines through to deployed runtime environments — including vulnerability management, penetration testing, and supply chain security. -->

### Novice
- Describes common application security vulnerabilities (OWASP Top 10) and common infrastructure weaknesses, and explains the business impact of failing to address them.
- Describes the difference between static and dynamic testing, passive and active scanning, and penetration testing, and explains the purpose of each.
- Describes Infrastructure as Code (IaC) and secure-by-default principles, and follows basic instructions to deploy a template under supervision.

### Advanced Beginner
- Executes application and infrastructure security tests using prescribed tooling, identifies findings and proposes fixes with supporting evidence.
- Configures basic security test automation for code and CI/CD pipelines, and uses cloud security tools to discover misconfigurations and vulnerabilities with guidance.
- Describes vulnerability classification systems (CVE, CWE, CVSS, EPSS, OWASP Top 10) and communicates the relative risk of findings to product owners and engineers.

### Practitioner
- Implements continuous security testing across build and runtime environments (SAST, DAST, SCA, IaC scanning, CSPM), integrating results into CI/CD pipelines to prevent misconfiguration reaching production.
- Secures the software supply chain by auditing third-party libraries and components, deploying pre-assured dependencies, and implementing signed SBOMs and OIDC-based pipeline credentials.
- Diagnoses and replicates vulnerabilities found by automated and manual testing, contextualising findings by business value and configuring pipelines to suppress false positives.

### Proficient
- Designs and deploys enterprise vulnerability and posture management programmes across application and infrastructure stacks, defining secure library patterns, IaC standards and automated policy enforcement.
- Leads continuous testing strategies aligned with organisational modernisation and compliance requirements (e.g. attestation, cryptographically signed SBOMs), publishing metrics on security coverage and remediation velocity.
- Champions secure coding practices — including guardrails for both experienced developers and AI-assisted coding — and scales secure-by-default patterns across cross-functional engineering teams.

### Expert
- Shapes enterprise-wide secure delivery lifecycle standards, embedding security testing and control loops into every stage of development and driving cultural adoption across engineering.
- Leads vulnerability and misconfiguration posture management services across application and cloud workloads, delivering prioritised findings and investment recommendations to senior business and risk stakeholders.
- Assures the security of high-sensitivity systems and certifies secure supply chain integrity end-to-end, influencing regulatory and industry standards for application and pipeline security.

## Security Architecture <!-- tooltip: The secure design of computer systems. It combines technical architecture and risk management, along with knowledge of how systems can be compromised to help design systems that are sufficiently hard to compromise or disrupt while being sufficiently easy to use, monitor and maintain. -->

### Novice
- Describes the core ideas and structure of major security frameworks including NIST RMF & CSF, ISO 27001/2, NCSC CAF and CIS Controls and Benchmarks.
- Identifies basic security services used to protect on-premises and cloud-native systems, including network segmentation, encryption and access controls.
- Follows and interprets an existing threat model, identifying the system components, trust boundaries and mitigations it describes.

### Advanced Beginner
- Specifies basic security services for common threats with minimal assistance, referencing published guidance on secure design principles and patterns.
- Demonstrates technical knowledge of system architectures including server roles, cryptography, key management, identity controls, VPNs, load balancers and cloud service models (IaaS, PaaS, SaaS).
- Reviews a security architecture for a simple system, identifies gaps before internet exposure and escalates findings to a senior architect.

### Practitioner
- Architects and specifies security services for a system, documenting the key tradeoffs against cybersecurity risks articulated by the customer or product team.
- Navigates tradeoffs between security and other architectural concerns (accessibility, decentralisation, performance), producing a written design rationale that stakeholders can review.
- Creates threat models for moderately complex systems, applying threat intelligence to prioritise mitigations and feeding outputs back to engineering teams as design requirements.

### Proficient
- Architects enterprise-level systems with integrated protect, detect, respond and recover capabilities, producing reference architectures for engineering teams.
- Engages enterprise risk and compliance teams to identify a system's risk profile and regulatory requirements, incorporating findings into the architecture before build.
- Leads cross-functional threat modelling workshops, identifying subtle multi-stage threat vectors and defining layered mitigations as prioritised engineering backlog items.

### Expert
- Advises senior stakeholders on architectural tradeoffs for enterprise-level security systems, securing documented decisions on risk acceptance and investment priorities.
- Defines the organisation's threat modelling framework, trains teams in advanced threat modelling practices and connects threat model outputs to organisational risk registers and strategy.
- Pioneers new architectural approaches to protection, detection, response and recovery, publishing patterns adopted by engineering teams across the enterprise.

## Identity and Access <!-- tooltip: The policies, engineering and operational practices and methodologies that seek to mitigate the risk of unauthorised access and exploiting legitimate access to the organisation's assets. -->

### Novice
- Describes the basic principles of Identity & Access Management (IAM), Identity Governance (IGA) and Privileged Access Management (PAM) as defined in frameworks such as ISO 27002, NIST CSF, CIS and NCSC CAF.
- Describes core IAM principles including Least Privilege, authentication, authorisation, audit and observability, and gives an example of each.
- Identifies the difference between human and non-human identities (e.g. service accounts, agentic AI), and describes the security implications of each.

### Advanced Beginner
- Explains how IAM principles apply within the organisation, referencing the relevant frameworks and security controls.
- Identifies common IAM misconfigurations including toxic privilege combinations, secrets exposure and access governance failures, and describes the remediation for each.
- Produces a documented access review for a system or service, identifying accounts with excessive permissions and recommending remediation steps.

### Practitioner
- Implements IAM and PAM controls across identity platforms, including SaaS and agentic AI identities, in line with organisational policy and process.
- Identifies and remediates IAM misconfigurations and non-compliance findings, documents root cause and implements controls to prevent recurrence.
- Provisions security services including secrets management, authentication, authorisation, audit and privilege segmentation for systems and services.

### Proficient
- Leads the development, revision and implementation of internal IAM policies and processes, reporting compliance metrics to relevant stakeholders.
- Manages IAM and PAM systems end-to-end, including routine access reviews, privilege attestations and policy enforcement.
- Implements access control models (RBAC, ABAC) and access policy-as-code, enabling teams to provision access consistently and at scale.

### Expert
- Defines enterprise identity and access management and governance strategy, leading the development and implementation of IAM policies, processes and tooling across internal and customer-facing systems.
- Implements and configures complex IAM and PAM systems, advising on technical decisions that shape the organisation's identity security posture.
- Acts as designated identity security SME to senior leadership, influencing major technology decisions and ensuring identity security is embedded in enterprise architecture.

## Data Security <!-- tooltip: Multi-disciplinary structures, policies, procedures, processes and technical controls to manage the protection of important data, including supporting immediate and future regulatory, legal, risk, and operational requirements. -->

### Novice
- Describes the purpose of data classification and explains why different data types require different protection levels.
- Describes foundational principles of secure information handling including need-to-know, data minimisation and purpose limitation.
- Identifies common data security risks including data leakage, unauthorised access and insecure data disposal, and describes the controls used to address each.

### Advanced Beginner
- Classifies and handles information in line with organisational policy.
- Applies common data protection controls including encryption at rest and in transit, access controls and data masking.
- Identifies data usage scenarios that raise privacy or compliance concerns and escalates findings with a documented rationale.

### Practitioner
- Implements data security controls including DLP tooling, encryption, data masking and secure data lifecycle management.
- Conducts data discovery and classification exercises, producing an inventory of sensitive data assets with recommended protection measures.
- Advises engineering and product teams on secure data handling practices and privacy-by-design principles, documenting guidance as reusable standards.

### Proficient
- Designs and implements enterprise data security architectures including classification schemes, DLP programmes and data lifecycle controls, establishing standards for data handling across the organisation.
- Implements anonymisation, pseudonymisation and redaction techniques at scale, and defines frameworks for continuous data security testing and compliance monitoring.
- Leads data breach response activities including regulatory notification, stakeholder communications and post-incident remediation planning.

### Expert
- Defines and continuously improves the enterprise data security strategy and management system, setting direction for classification, protection, governance and metrics programmes.
- Evaluates complex data security risks including cross-border flows and third-party sharing, translating findings into prioritised investment and risk tolerance decisions for senior stakeholders.
- Leads regulatory engagement on data protection, acts as the organisation's authority on evolving privacy law, and influences executives and legal teams on compliance strategy.

# Secure the Organisation
####Security at scale, implementing control loops, process improvements and amplifying individual contribution with workflows and automation, ensuring that the organisation is not only secure but also adaptable, efficient and resilient.#### Scales security practices, success measures and compliance assessment to enterprise level through policies, process, playbooks, automation and controls adherence monitoring. Ensures that each team is playing fairly, within the bounds of the organisation's security policies and standards, adjusting those policies and standards to fit the business and threat context. Operational focus on automating security playbooks, protocols and procedures to accelerate time to fix and keep systems up to date.

## Governance, Risk and Compliance <!-- tooltip: Monitors and evaluates security control coverage, risks to information, systems, and processes owned by the organisation, proactively refines policies and standards and ensures continuous improvement of the information security management system. -->

### Novice
- Describes core cybersecurity risk concepts including confidentiality, integrity, availability, authenticity and non-repudiation, and explains why evaluating security requirements matters.
- Follows a documented risk assessment process under supervision, completing a structured risk register entry for an assigned system.
- Identifies the legal and regulatory requirements (e.g. GDPR, NIS, NCSC CAF) applicable to the organisation and describes the consequences of non-compliance.

### Advanced Beginner
- Describes typical cybersecurity risks relevant to a system and the standard controls and practices used to mitigate them.
- Follows compliance processes and communicates to colleagues why specific security controls are mandatory, referencing the relevant policy or standard.
- Describes the concept of Policy as Code and provides examples of how security policies can be expressed and enforced programmatically.

### Practitioner
- Presents cybersecurity risk to product and engineering stakeholders in financial and operational terms, securing documented acceptance or remediation commitments.
- Leads risk modelling sessions that produce a documented risk profile, including financial impact estimates, threat scenarios and prioritised treatment options.
- Verifies systems and processes against compliance standards, producing evidence packages for audits and maintaining documentation of control coverage.

### Proficient
- Engages data, system and service owners, enterprise risk teams and senior stakeholders to build a cross-organisational view of cybersecurity risk, escalating findings that require action beyond the security team.
- Coordinates security as a continuous risk management process, establishing control monitoring rhythms and reporting mechanisms for stakeholders.
- Designs security programmes with compliance mapped to multiple regulatory frameworks (e.g. ISO 27001, SOC2, PCI-DSS, NCSC CAF).

### Expert
- Transforms organisational security posture by connecting risk register findings to funded remediation programmes with measurable risk reduction outcomes.
- Defines compliance strategies for complex regulatory environments, advising executives and legal teams and leading delivery of enterprise compliance initiatives (ISO 27001, SOC2, PCI-DSS, NCSC CAF).
- Acts as the organisation's senior voice on cybersecurity risk, shaping board-level understanding and influencing security investment decisions.

## Security in Contracts <!-- tooltip: The activities, processes and contractual mechanisms used to manage security risk across the supplier and partner ecosystem, including requirements definition, assurance, and ongoing oversight of third-party access to systems and data. -->

### Novice
- Describes the basic principles of security in the context of supplier risk management, including why third-party access creates organisational risk.
- Follows documented principles and guidelines for secure supply chain management activities under supervision.
- Describes the shared responsibility model and identifies which security obligations remain with the organisation when using third-party services.

### Advanced Beginner
- Elicits security requirements from procurement and business stakeholders, implementing secure supply chain processes and procedures in workflow tooling.
- Applies policies, procedures and guidelines within their business and regulatory context, adapting standard processes to suit specific supplier or contract scenarios.
- Contributes to supplier security assessments, reviewing outputs against organisational security standards.

### Practitioner
- Identifies and addresses gaps and friction in supplier security policies and procedures, implementing continuous improvements and new controls in response to changes in threat level, legislation or business objectives.
- Evaluates supplier security posture through structured assessments, producing findings and recommendations for contract owners.
- Specifies software supply chain security requirements in supplier contracts including SBOM provision, vulnerability disclosure obligations, and OIDC or ephemeral credential standards for AI and SaaS suppliers.

### Proficient
- Shapes organisational supplier security policies, procedures and guidelines using enterprise-level risk intelligence, articulating the business case for supply chain security investment.
- Develops standard contract security terms and negotiates their adoption with suppliers, implementing business change where standard terms cannot be agreed.
- Leads the supplier security assurance programme, defining assessment criteria, managing the third-party risk register and reporting status to senior stakeholders.

### Expert
- Shapes supplier security policy at sector level, participating in industry bodies and working groups that define standards for third-party security assurance.
- Instigates sector-level information sharing and collective action that raises the security baseline demanded of and supplied to the sector.
- Defines the organisation's strategic approach to supply chain risk, influencing procurement and vendor management practices and ensuring security requirements are embedded in enterprise sourcing decisions.

## Security Process Engineering <!-- tooltip: Incorporate human factors, automation and AI into the design of security controls, control loops and workflows. Improve the quality and efficiency of controls and control loops by creating security products and experiences that overcome common judgement errors and support clear thinking. -->

### Novice
- Explains how data presentation affects interpretation, including the difference between correlation and causation, and why dashboard simplicity reduces misinterpretation.
- Identifies opportunities for automating repetitive security tasks and describes the tradeoffs between manual, scripted and low-code approaches.
- Writes simple scripts or modifies existing code (e.g. Python, Bash) to automate basic tasks, deploying the result in a controlled environment under supervision.

### Advanced Beginner
- Applies data visualisation and communication best practices to contribute to security dashboards, reports and training materials, identifying and resolving sources of user confusion.
- Applies nudge techniques in security communications and tooling (e.g. defaults, colour coding, framing) to direct attention to key findings.
- Writes policy as code and scripts to automate basic security tasks, and automates processes with multiple decision criteria using low-code tooling.

### Practitioner
- Designs decision-support tools, dashboards and security communications that account for human factors, reframing data in gain/loss terms to reduce cognitive bias.
- Defines the human-led, deterministic and agentic workflow split for security processes, applying criteria including task predictability, error tolerance and need for scale.
- Develops, publishes and maintains automation tooling and ETL/ELT pipelines for security tasks including triage, alert routing, compliance monitoring and evidence collection.

### Proficient
- Designs, tests and measures the impact of security decision-support experiences using statistical analysis and human-centred design methods (e.g. A/B testing dashboard designs against decision quality metrics).
- Leads human-led, deterministic and agentic workflow design across the security function, establishing a reusable framework for others to apply when classifying and automating security processes.
- Designs and implements automation and AI augmentation frameworks, automating security playbooks, policies and guardrails across workflows, CI/CD pipelines and endpoints.

### Expert
- Shapes the organisation's strategy for security decision intelligence, securing executive investment and embedding data-informed critical thinking into security culture and processes.
- Pioneers new methods for evaluating and improving security decision quality, establishing an enterprise framework for learning from both successes and failures.
- Develops complex agentic AI security workflows, defining enterprise governance standards for their safe and auditable deployment.

## Organisational Resilience <!-- tooltip: Building and sustaining the organisation's capacity to withstand, recover from and learn from security incidents through tested continuity plans, effective staff awareness programmes, and a security culture where concerns are reported without fear. -->

### Novice
- Describes the purpose of business continuity and disaster recovery planning, including the concepts of Recovery Time Objective (RTO), Recovery Point Objective (RPO) and continuity testing.
- Explains why security awareness and training programmes exist, and describes the difference between measuring training completion and measuring behavioural change.
- Describes common human risk factors in security (e.g. phishing susceptibility, password reuse, shadow IT) and identifies the organisational controls used to address them.

### Advanced Beginner
- Follows documented BC/DR plans during exercises and real incidents, recording observations and contributing to post-exercise improvement logs.
- Contributes to security awareness content and training delivery, applying basic behaviour-change principles under guidance.
- Identifies indicators of low security culture (e.g. incidents not reported, policy workarounds) and escalates findings with evidence.

### Practitioner
- Designs and runs BC/DR exercises including tabletop walkthroughs and partial fail-over tests, producing gap reports and updating recovery plans based on findings.
- Designs security awareness programmes using behaviour-change principles, measuring success through observable behaviour metrics rather than completion rates.
- Analyses security culture indicators across teams, identifies root causes of poor security behaviour and recommends targeted interventions.

### Proficient
- Leads the organisation's BC/DR programme, ensuring plans are integrated with wider business continuity, tested at appropriate frequency and updated in response to risk changes.
- Designs and governs the organisation's security awareness and culture programme, establishing metrics to track behavioural change and reporting outcomes to senior stakeholders.
- Addresses systemic human risk factors by engineering security into workflows and defaults, reducing reliance on individual decisions and measuring the reduction in human-error-related incidents.

### Expert
- Defines the organisation's resilience strategy, integrating cyber, physical and operational continuity plans and ensuring they are tested against realistic threat scenarios including red team exercises.
- Shapes the organisation's security culture at executive level, working with senior leadership and HR to embed security behaviours into performance frameworks, onboarding and organisational design.
- Pioneers new approaches to human risk management and security culture measurement, influencing industry practice and contributing to sector-level guidance on workforce resilience.
