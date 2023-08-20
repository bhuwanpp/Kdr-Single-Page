import TeamMember1 from "../teamMembers/TeamMember1";
import TeamMember2 from "../teamMembers/TeamMember2";

const OurTeam = () => {
    return (
        <div className="ourTeams">
            <div className="team text-center">
                <h2 className="font-semibold text-xl -ml-5">Our Team</h2>
                <p className="text-lg">We introduce our Expert Team</p>
            </div>
            <div className="team-members flex ml-10 mr-12">
               <TeamMember1/>
               <TeamMember2/>
               <TeamMember2/>
            </div>
        </div>
    );
}

export default OurTeam;
