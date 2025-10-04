🎉 Event Management Platform

📌 Tagline: “One Platform. Multiple Roles. Zero Chaos.”
A role-based event management system designed for hackathons, conferences, and virtual events.

Built with MongoDB Atlas, secure access control, and role-specific dashboards, it ensures smooth collaboration between Organizers, Vendors, Sponsors, and Attendees.

✨ Core Features

Role-Based Dashboards → Personalized experience for each role

Event Creation & Management → Organizers have full control

Vendor Task Tracking → Streamlined task updates and progress

Sponsor Visibility → Track sponsorship engagements

Attendee-Friendly UI → Easy event registration, joining sessions, and feedback

Meetings & Communication → Centralized announcements, Q&A, and pre-event meetings

📸 (Insert System Architecture Diagram here: Roles → Backend → Database)

👥 Roles & Permissions
🛠 Organizer (Full Access)

Create / Manage / Delete events

Add sessions, speakers, resources

Assign vendor tasks

Send announcements & schedule meetings

Respond to attendee questions

Manage sponsors & review feedback

📸 (Insert Organizer Dashboard Screenshot here)
📊 (Insert Organizer Workflow Flowchart here: Organizer → Create Event → Assign Vendors → Meetings → Feedback)

📦 Vendor (Update & Complete Tasks)

View assigned tasks

Update task status (Pending → Completed)

Access session links for resources

Join pre-event planning meetings

Optional: Leave notes for organizers

📸 (Insert Vendor Task List Screenshot here)
📊 (Insert Vendor Flowchart here: Organizer → Assign Task → Vendor → Update Task → Completed)

💼 Sponsor (View Only)

View event details & schedules

Track sponsored sessions

Access announcements & meeting info (optional)

No editing permissions

📸 (Insert Sponsor Dashboard Screenshot here)
📊 (Insert Sponsor Flowchart here: Sponsor → View Events → Track Engagement)

🎟 Attendee (View Only)

Register for events (Name, Email, Event)

View schedules & speakers

Join sessions (Zoom/YouTube/iFrame)

Submit questions during sessions

Receive announcements

Give feedback & ratings

📸 (Insert Attendee Schedule Screenshot here)
📊 (Insert Attendee Flowchart here: Attendee → Register → Join Session → Q&A → Feedback)

🗂 Backend & System Design

Database: MongoDB Atlas

CRUD: Controlled by role-based access middleware

Access Control:

Organizer → Full CRUD

Vendor → Update-only

Sponsor & Attendee → Read-only

Shared Data: Unified view per role (no silos)

Demo Data: Pre-filled for hackathon/demo

📸 (Insert Database ER Diagram here showing Events, Sessions, Vendors, Sponsors, Attendees, Questions, Meetings)
📡 Meetings & Communication

Organizer: Full CRUD on meetings/messages

Vendors: Update task progress, view meetings

Sponsors/Attendees: Read-only meeting info

Statuses → Scheduled | Attended | Canceled

📸 (Insert Meetings Dashboard Screenshot here)

🚀 Tech Stack

Frontend: (React / Angular / Vue – specify your stack)

Backend: Node.js + Express

Database: MongoDB Atlas

Auth & Access: Role-based middleware

Deployment: (Heroku / Vercel / Render, etc.)

📸 (Insert Tech Stack Graphic with Logos here: React, Node.js, MongoDB, Express, etc.)

🏆 Why This Project?

This platform eliminates the chaos of managing multi-role events.
With real-time updates, role-specific dashboards, and smooth communication, it’s built for scalability, hackathons, and professional conferences.
