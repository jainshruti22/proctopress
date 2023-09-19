---
sidebar_position: 1
---

# ProctoPress

### Overview:

ProctoPress is a completely customizable WordPress plugin that can be used by educational institutions as well as corporations for monitoring candidates during online examinations. The plugin provides various features such as browsing limitation, real-time candidate monitoring, candidate verification, integration with various popular LMS plugins such MasterStudy, LearnPress, LearnDash, Tutor LMS.

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Configuration of ProctoPress

Steps to configure ProctoPress

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```
* Once you login into your WordPress site, you need to install and activate the required LMS. LMS plugins allow you to create and run various online courses, run and grade quizzes, accept payments and many more. Various top-notch LMS plugins for WordPress are LearnDash, Tutor LMS, MasterStudy LMS, LearnPress etc. As an example, we will install and activate the MasterStudy LMS Plugin.

** Steps to setup MasterStudy LMS : **

1. Go to the plugins section, and click on add new.

![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/01/online-proctoring-1.webp)

2. Search for MasterStudy in the search bar. Install and activate the MasterStudy LMS plugin.

![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/01/master-study-lms.webp)

** Steps to setup your quiz : **

1. Click on the quizzes option, to create quiz

![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/01/master-study-quiz-create.webp)

2. Now install and activate ProctoPress

![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/proctopress-install.webp)

3. Once the plugin is activated, select MasterStudy as your LMS, and cclick the same button as shown in the figure.

![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/proctopress.webp)

4. After all the settings are done, before starting the quiz, the students will see the following pop-up on their screen.

![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/quiz-popup.webp)

## Functionality Of ProctoPress:

1. ** Section Restriction: **

      ProctoPress provides the admin with the option to limit the number of simultaneous logins for all candidates. Suppose the admin sets 2 as the maximum number of simultaneous sessions allowed, the users can login from a maximum of 2 devices or browsers. After crossing the limit there are two options available:
      1. Allow access - The user will be logged in to the current device / browser but will be logged out from all other sessions.

      2. Disable access - The user will get a warning that the maximum session limit has been reached.

      ![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/session-restriction.webp)

2. ** Restrict Tab Switching: **
      
      During the exam if any candidate switches tabs, a warning message is displayed and after a pre-defined number of warnings the candidate will be logged out. If the admin has set the limit for tab switching to 0 and any student tries to switch the tabs he/she gets the following warning and is logged out from the test.

      ![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/restrict-tab.webp)

      ![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/warning.webp)

3. ** Disable Right Click/Inspect the browser: **

      During the examination, ProctoPress restricts the candidates from performing right click and inspect functionality, where the candidates cannot view the questions in the inspect section so as to prevent the candidates from cheating.

      ![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/disable-right-click.webp)

4. ** Live monitoring feature: **

      ProctoPress provides real-time monitoring features, which monitors the test-takers during the assestment. The working of this feature is as follows:

      Under the live monitoring tab, select the quiz on which you want to enable the live monitoring feature.

      ![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/live-proctoring.webp)

      ![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/proctors.webp)

      After that permission for camera and microphone will be asked. You need to click on the allow button.

      ![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/proctors.webp)

      Once the required permissions are provided, the following tab will show the live video of students taking the online assestement.

      ![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/monitoring.webp)

      In the similar manner, students will also be asked for camera and microphone permissions.

      ![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/student-monitoring.webp)

      ![ProctoPress](https://plugins.miniorange.com/wp-content/uploads/2023/06/student-monitoring.webp)






      








