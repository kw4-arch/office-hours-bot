# Office Hours Bot - One-Page Product Spec

## Product Description

The Office Hours Bot is a RAG-based chatbot for students in one university course. It uses the course syllabus and lecture slides as its approved knowledge base. Students can ask questions about course concepts, policies, deadlines, and other information contained in those materials. The bot should provide answers grounded in the course documents and indicate when the available materials do not support an answer.

## 1. User Stories + EARS Acceptance Criteria

### User Story 1

As an enrolled student, I want to ask questions about course materials so that I can quickly understand course concepts and information.

**WHEN** an authenticated student submits a course-related question, **THE SYSTEM SHALL** retrieve relevant information from the approved course materials and generate an answer grounded in those materials.

### User Story 2

As a student, I want to know where an answer came from so that I can verify the information myself.

**WHEN** the system provides an answer using course materials, **THE SYSTEM SHALL** identify the relevant source document and page or section when available.

### User Story 3

As a student, I want the bot to tell me when it cannot find enough information so that I am not given a fabricated answer.

**IF** the retrieved course materials do not contain sufficient information to support an answer, **THE SYSTEM SHALL** state that the answer cannot be determined from the available course materials.

## 2. Data and Access

The system stores the course syllabus, lecture slides, student questions, and generated responses; course materials are accessible only to authenticated course participants, while individual conversation histories are accessible only to the student and authorized course staff when necessary.

## 3. Security Requirements - EARS

1. **WHEN** a user attempts to access the Office Hours Bot, **THE SYSTEM SHALL** require authentication through an approved university account.
2. **IF** an authenticated user is not enrolled in or authorized for the course, **THE SYSTEM SHALL** deny access to the course's restricted materials and chatbot.
3. **WHEN** a user attempts to upload, replace, or delete documents in the knowledge base, **THE SYSTEM SHALL** allow the action only if the user has authorized course-staff permissions.
4. **IF** a user attempts to access another student's private conversation history without authorization, **THE SYSTEM SHALL** deny the request and prevent disclosure of that student's data.

## 4. Tests

- `test_authenticated_student_can_receive_answer_from_course_materials`
- `test_answer_includes_relevant_course_source`
- `test_bot_does_not_invent_answer_when_course_source_is_missing`
- `test_unauthorized_user_cannot_access_course_materials_or_student_conversations`

## 5. Non-Goals

- Replace the instructor or teaching assistants.
- Answer questions using unrestricted internet sources.
- Allow students to modify the official course knowledge base.
- Complete graded assignments or exams when doing so violates the course's academic-integrity or AI-use policy.

## Scope for HW3

- Build story 2: Show the source for each course-grounded answer.
- No real payments. Where the spec says to charge a card, use a "Simulated payment" button and list real payments as a non-goal in the README.
- No sign-in provider. Where the spec needs a signed-in user, use a name typed into a text box and list real authentication as a non-goal.
- No database. Keep data in memory on the server and say in the README that it resets on every deploy.
