# 🎉 Event Management Platform  

📌 *Tagline:* **“One Platform. Multiple Roles. Zero Chaos.”**  

A **role-based event management system** designed for **hackathons, conferences, and virtual events**.  

Built with **MongoDB Atlas**, **secure access control**, and **role-specific dashboards**, it ensures smooth collaboration between **Organizers, Vendors, Sponsors, and Attendees**.  

---

## **✨ Core Features**  

- Role-Based Dashboards → Personalized experience for each role  
- Event Creation & Management → Organizers have full control  
- Vendor Task Tracking → Streamlined task updates and progress  
- Sponsor Visibility → Track sponsorship engagements  
- Attendee-Friendly UI → Easy event registration, joining sessions, and feedback  
- Meetings & Communication → Centralized announcements, Q&A, and pre-event meetings  

📸 *(Insert **System Architecture Diagram** here)*  

---

## **👥 Roles & Permissions**  

### **🛠 Organizer (Full Access)**  
- Create, manage, and delete events  
- Add sessions, speakers, and resources  
- Assign vendor tasks  
- Send announcements & schedule meetings  
- Respond to attendee questions  
- Manage sponsors & review feedback  

📸 *(Insert **Organizer Dashboard Screenshot** here)*  
📊 *(Insert **Organizer Flowchart** here)*  

---

### **📦 Vendor (Update & Complete Tasks)**  
- View assigned tasks  
- Update task status *(Pending → Completed)*  
- Access session links for resources  
- Join pre-event planning meetings  
- Optional: Leave notes for organizers  

📸 *(Insert **Vendor Task List Screenshot** here)*  
📊 *(Insert **Vendor Flowchart** here)*  

---

### **💼 Sponsor (View Only)**  
- View event details & schedules  
- Track sponsored sessions  
- Access announcements & meetings (optional)  
- No editing permissions  

📸 *(Insert **Sponsor Dashboard Screenshot** here)*  
📊 *(Insert **Sponsor Flowchart** here)*  

---

### **🎟 Attendee (View Only)**  
- Register for events *(Name, Email, Event)*  
- View schedules & speakers  
- Join sessions *(Zoom/YouTube/iFrame)*  
- Submit questions during sessions  
- Receive announcements  
- Give feedback & ratings  

📸 *(Insert **Attendee Schedule Screenshot** here)*  
📊 *(Insert **Attendee Flowchart** here)*  

---

## **🗂 Backend & System Design**  

- **Database:** MongoDB Atlas  
- **CRUD:** Controlled via role-based access middleware  
- **Access Control:**  
  - Organizer → Full CRUD  
  - Vendor → Update-only  
  - Sponsor & Attendee → Read-only  
- **Shared Data:** Unified view per role (no silos)  
- **Demo Data:** Pre-filled for hackathon/demo  

📸 *(Insert **Database ER Diagram** here)*  

---

## **🔑 Hackathon Priority Features**  

✅ **Core MVP**  
- Event creation (Organizer)  
- Vendor task updates  
- Read-only dashboards (Attendee/Sponsor)  

✅ **Communication**  
- Announcements  
- Q&A  
- Meeting scheduling  

✅ **Optional Add-ons**  
- Feedback dashboards  
- Analytics & engagement metrics  
- In-app chat & meeting simulation  

---

## **📡 Meetings & Communication**  

- **Organizer** → Full CRUD on meetings/messages  
- **Vendors** → Update task progress, view meetings  
- **Sponsors/Attendees** → Read-only meeting info  

Statuses → *Scheduled | Attended | Canceled*  

📸 *(Insert **Meetings Dashboard Screenshot** here)*  

---

## **🚀 Tech Stack**  

- **Frontend:** *(React / Angular / Vue – specify your stack)*  
- **Backend:** Node.js + Express  
- **Database:** MongoDB Atlas  
- **Auth & Access:** Role-based middleware  
- **Deployment:** *(Heroku / Vercel / Render, etc.)*  

📸 *(Insert **Tech Stack Graphic with Logos** here)*  

---

## **🏆 Why This Project?**  

This platform eliminates the **chaos of managing multi-role events**.  
With **real-time updates, role-specific dashboards, and smooth communication**, it’s built for **scalability, hackathons, and professional conferences**.  

---

## **📸 Where to Add Images**  

1. **System Architecture Diagram** → under *Core Features*  
2. **Role Flowcharts (Icons + Workflow)** → under each Role section  
3. **Dashboard Screenshots (per role)** → under each Role section  
4. **Database ER Diagram** → under *Backend & System Design*  
5. **Meetings Screenshot** → under *Meetings & Communication*  
6. **Tech Stack Graphic (with logos)** → under *Tech Stack*  

---
