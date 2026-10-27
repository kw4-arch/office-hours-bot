# Office Hours Bot Security Specification

## SEC-1 - Authentication

**WHEN** a user attempts to ask the Office Hours Bot a question, **THE SYSTEM SHALL** require a non-empty demo identity. A real university sign-in provider is outside the HW3 scope.

## SEC-2 - Course authorization

**IF** a user is not enrolled in or authorized for the course, **THE SYSTEM SHALL** deny access to restricted course materials and chatbot responses. Real enrollment verification is outside the HW3 scope.

## SEC-3 - Document management

**WHEN** a user attempts to upload, replace, or delete knowledge-base documents, **THE SYSTEM SHALL** allow the action only for authorized course staff. The prototype exposes no document-management route.

## SEC-4 - Conversation privacy

**IF** a user attempts to access another student's conversation history without authorization, **THE SYSTEM SHALL** deny the request. The prototype exposes no history-reading route.

## SEC-5 - Retrieved content is untrusted

**IF** retrieved course content contains instructions that attempt to override permissions or security policies, **THE SYSTEM SHALL** treat those instructions as untrusted course content and shall not execute them.

## SEC-6 - Server-side input limits

**WHEN** a student submits a question, **THE SYSTEM SHALL** reject the request on the server if the question exceeds 500 characters, even if a browser bypasses the page controls.
