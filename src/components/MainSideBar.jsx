import "./styles/sideBar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutUs,
  OurAim,
  OurVision,
} from "../components/SideBar/Pages/AboutUs.jsx";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./SideBar/Pages/Services.jsx";
import {
  Events,
  EventsOne,
  EventsTwo,
} from "../components/SideBar/Pages/Events.jsx";
import Contact from "../components/SideBar/Pages/ContactUs.jsx";
import { Support } from "../components/SideBar/Pages/Support.jsx";
import Sidebar from "./SideBar/Sidebar.jsx";

export default function MainSideBar() {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/aim" element={<OurAim />} />
        <Route path="/about-us/vision" element={<OurVision />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/services1" element={<ServicesOne />} />
        <Route path="/services/services2" element={<ServicesTwo />} />
        <Route path="/services/services3" element={<ServicesThree />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/events1" element={<EventsOne />} />
        <Route path="/events/events2" element={<EventsTwo />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}
