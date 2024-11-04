# TVO
TVOsampleCypress

open terminal in 'testing' folder

run npx cypress open (required node.js)

select E2E testing, select one browser to start

(Chrome for example here)
![image](https://github.com/user-attachments/assets/8a12cc35-ac34-4ebb-addb-40a3fdb984de)

There are three different Cypress test files:

TVOsampleNav: This file tests navigation to each grade and different subject pages. I only set grades 1-2 and courses Math and Language as a sample. This example is for testing the same operations with different parameters, such as grade and courses.

TVOsampleOnThisPage: This file tests the anchor function, which locates a specific section. In this example, I added a common method in commands.js called isWithinViewport() for Cypress to check if an element is in the viewport.

TVOfeedback: This file tests the feedback part. There are two cases: one for required fields and the other for submission. This example demonstrates creating common operations, such as filling out the feedback form. I created the class Operation.fillFeedBack() to handle form filling. It can also include other common operations, like Register, Sign-in, or filling forms.

P.S. There would be an error when I submit the form because it is considered spam feedback, so I used cy.on() to handle the error and skip it for now.
   ![image](https://github.com/user-attachments/assets/b4b933c7-ceed-41ca-af64-ca584c90f221)
