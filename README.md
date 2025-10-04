# 🎉 GatherX 

📌 *Tagline:* **“Gather, Connect & Elevate.”**  

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

**Event Dashboard Preview:**  
![WhatsApp Image 2025-10-04 at 15 13 04_d638c895](https://github.com/user-attachments/assets/5949c3e2-a26e-47f0-8e00-eefc03d40b0)  

**Another Dashboard Screenshot:**  
<img width="1872" height="784" alt="image" src="https://github.com/user-attachments/assets/badd519d-954e-4c20-b751-a2fd2703613e" />

---

## **👥 Roles & Permissions**  

### **🛠 Organizer (Full Access)**  

**Capabilities:**  
- Create, manage, and delete events  
- Add sessions, speakers, and resources  
- Assign vendor tasks  
- Schedule meetings  
- Respond to attendee questions  
- Manage sponsors & review feedback  

**Screenshots:**  

- Event Creation & Management  
<img width="1538" height="991" alt="image" src="https://github.com/user-attachments/assets/1e26a0e6-f755-4bcc-b232-0c7d5fa76a62" />  

- Assign Vendor Tasks  
<img width="1502" height="415" alt="image" src="https://github.com/user-attachments/assets/5fde95c6-8b29-4394-a02d-b28f4fea3275" />  

- Schedule Meetings  
<img width="1498" height="914" alt="image" src="https://github.com/user-attachments/assets/36a78458-f269-4178-aa0c-5ec6e44e386c" />  

**Dashboard Overview:**  
<img width="1901" height="992" alt="image" src="https://github.com/user-attachments/assets/42f1d2d0-6543-4130-a086-879f5ee33dd5" />

---

### **📦 Vendor (Update & Complete Tasks)**  

**Capabilities:**  
- View assigned tasks  
- Update task status *(Pending → Completed)*  
- Access session links for resources  
- Join pre-event planning meetings  
- Optional: Leave notes for organizers  

**Screenshots:**  

- Vendor Tasks  
<img width="1506" height="762" alt="image" src="https://github.com/user-attachments/assets/8752afae-e689-47e8-9609-82134171d14b" />  

- Access Session Links  
<img width="1525" height="681" alt="image" src="https://github.com/user-attachments/assets/3aeaad4b-a500-409e-a23d-1064b2c87d6a" />  

**Dashboard Overview:**  
<img width="1897" height="769" alt="image" src="https://github.com/user-attachments/assets/7d03f4c8-02d8-4985-b454-daf62365a1f2" />

---

### **💼 Sponsor (View Only)**  

**Capabilities:**  
- View event details & schedules  
- Track sponsored sessions  
- Access meetings  
- No editing permissions  

**Screenshots:**  
<img width="1559" height="531" alt="image" src="https://github.com/user-attachments/assets/a9c6f138-548e-47a0-b32b-c53d3b45306f" />  
<img width="1909" height="884" alt="image" src="https://github.com/user-attachments/assets/7a3e2059-a0b8-4e12-9243-5ce172bdf896" />

---

### **🎟 Attendee (View Only)**  

**Capabilities:**  
- Register for events *(Name, Email, Event)*  
- View schedules & speakers  
- Join sessions *(Zoom/YouTube/iFrame)*  
- Submit questions during sessions  
- Receive announcements  
- Give feedback & ratings  

**Screenshots:**  
<img width="1514" height="550" alt="image" src="https://github.com/user-attachments/assets/42ae484b-778c-42dd-a927-d582e348bdc7" />  

**Dashboard Overview:**  
<img width="1884" height="754" alt="image" src="https://github.com/user-attachments/assets/41744e03-d8f8-4ca4-8747-5a75ea631241" />

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

---

## **🔑 Hackathon Priority Features**  

✅ **Core MVP**  
- Event creation (Organizer)  
- Vendor task updates  
- Read-only dashboards (Attendee/Sponsor)  

✅ **Communication**    
- Q&A  
- Meeting scheduling  

✅ **Optional Add-ons**  
- Feedback dashboards  
- Analytics & engagement metrics  

---

## **📡 Meetings & Communication**  

- **Organizer** → Full CRUD on meetings/messages  
- **Vendors** → Update task progress, view meetings  
- **Sponsors/Attendees** → Read-only meeting info  

**Statuses:** *Scheduled | Attended | Canceled*  

---

## **🚀 Tech Stack**  

- **Frontend:** *(html/css/javascript)*  
- **Backend:** Node.js + Express  
- **Database:** MongoDB Atlas  
- **Auth & Access:** Role-based middleware  
- **Deployment:** *(Render)*  

---

## **🏆 Why This Project?**  

This platform eliminates the **chaos of managing multi-role events**.  
With **real-time updates, role-specific dashboards, and smooth communication**, it’s built for **scalability, hackathons, and professional conferences**.
