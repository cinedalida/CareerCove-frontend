import Navbar from "../components/PageLayout/Navbar";
import Footer from "../components/PageLayout/Footer";
import { useState } from "react";
import ProfileHeader from "../components/MyProfile/Profile-Header";
import ProfileNavigation from "../components/MyProfile/Profile-Navigation";
import ProfileAboutMe from "../components/MyProfile/Profile-AboutMe";
import ProfileDocuments from "../components/MyProfile/Profile-Documents";
import ProfileRecentActivity from "../components/MyProfile/Profile-RecentAct";
import ProfileJobsTracker from "../components/MyProfile/Profile-JobsTracker";
import "../styles/MyProfile/MyProfile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <Navbar variant="UserNav" />
      <section className="myProfile-section">
        <div>
          <div>
            {/* Main Content */}
            <main className="space-y-6">
              <ProfileHeader />
              <ProfileNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              <div className="bg-white rounded-lg p-6 md:p-8">
                {activeTab === "about" && <ProfileAboutMe />}
                {activeTab === "documents" && <ProfileDocuments />}
                {activeTab === "activity" && <ProfileRecentActivity />}
                {activeTab === "tracker" && <ProfileJobsTracker />}
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
